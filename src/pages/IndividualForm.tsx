import { supabase } from "../lib/supabaseClient";
import {
  uploadDocument,
  submitMembershipApplication
} from "../lib/individual";


import { useState } from "react";
import { Upload, Check, User, Building2, FileText, Target, Lock } from "lucide-react";

type DocumentsType = {
  cnic?: File;
  studentId?: File;
  degree?: File;
  registration?: File;
  authorization?: File;
};



export default function IndividualForm() {
  const [formData, setFormData] = useState({
    membershipType: "",
    // Individual fields
    fullName: "",
    email: "",
    phone: "",
    cnicPassport: "",
    city: "",
    province: "",
    country: "",
    profession: "",
    expertise: [],
    yearsExperience: "",
    currentAffiliation: "",
    // Institutional fields
    orgName: "",
    orgType: "",
    officialEmail: "",
    contactPhone: "",
    website: "",
    sector: "",
    primaryFocus: [],
    orgSize: "",
    // Documents
    documents: {} as DocumentsType,
    // Platform interests
    interests: [],
    // Account
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const membershipTypes = [
    "Individual",
    "Institutional",
    "Corporate",
    "Community / NGO",
    "Government Agency"
  ];

  const orgTypes = [
    "University",
    "Research Institute",
    "Private Company",
    "NGO",
    "Government Body",
    "Consulting Firm"
  ];

  const sectors = [
    "Academia",
    "Industry",
    "Government",
    "Research Institute",
    "NGO"
  ];

  const expertiseAreas = [
    "Ports & Shipping",
    "Fisheries & Aquaculture",
    "Ocean Science",
    "Climate & Environment",
    "Marine Technology",
    "Policy & Governance"
  ];

  const platformInterests = [
    "Networking & Collaboration",
    "Marketplace Access",
    "Jobs & Internships",
    "Research & Data Access",
    "Training & Certifications",
    "Startup & Funding Opportunities"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  // const handleFileUpload = (field: keyof DocumentsType, file?: File) => {
  //   if (!file) return;
  //   if (file) {
  //     setFormData(prev => ({
  //       ...prev,
  //       documents: { ...prev.documents, [field]: file.name }
  //     }));
  //   }
  // };


  const handleFileUpload = (field: keyof DocumentsType, file?: File) => {
  if (!file) return;
  setFormData(prev => ({
    ...prev,
    documents: { ...prev.documents, [field]: file } // store File object
  }));
};




//   const handleSubmit = async () => {
//   // 🔐 1. Check authenticated user
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // if (!user) {
//   //   alert("Please login first");
//   //   return;
//   // }

//   // 🧪 2. Client-side validations
//   if (!formData.membershipType) {
//     alert("Please select a membership type");
//     return;
//   }

//   if (!formData.agreeTerms) {
//     alert("Please agree to terms and conditions");
//     return;
//   }

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   // 📦 3. Insert into database
//   const { error } = await supabase
//     .from("membership_applications")
//     .insert({
//       user_id: user.id,   // 🔥 THIS LINKS auth.users → your table

//       membership_type: formData.membershipType,

//       full_name: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       cnic_passport: formData.cnicPassport,
//       city: formData.city,
//       province: formData.province,
//       country: formData.country,

//       profession: formData.profession,
//       expertise: formData.expertise,
//       years_experience: formData.yearsExperience,
//       current_affiliation: formData.currentAffiliation,

//       org_name: formData.orgName,
//       org_type: formData.orgType,
//       official_email: formData.officialEmail,
//       contact_phone: formData.contactPhone,
//       website: formData.website,
//       sector: formData.sector,
//       primary_focus: formData.primaryFocus,
//       org_size: formData.orgSize,

//       interests: formData.interests,
//       agreed_terms: formData.agreeTerms
//     });

//   if (error) {
//     console.error(error);
//     alert("Submission failed");
//     return;
//   }

//   alert("Membership request submitted successfully!");
// };




const handleSubmit = async () => {
  // --------------------
  // 1️⃣ Check authenticated user
  // --------------------
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert("Please login first");
    return;
  }

  // --------------------
  // 2️⃣ Client-side validations
  // --------------------
  if (!formData.membershipType) {
    alert("Please select a membership type");
    return;
  }
  if (!formData.agreeTerms) {
    alert("Please agree to terms and conditions");
    return;
  }
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // --------------------
  // 3️⃣ Upload documents to Supabase Storage
  // --------------------
  const uploadDocument = async (file: File, folder: string) => {
    const path = `${folder}/${user.id}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("membership-documents")
      .upload(path, file, { upsert: true });

    if (error) throw error;
    return data.path;
  };

  let cnicPath, studentIdPath, degreePath, registrationPath, authorizationPath;

  try {
    if (formData.documents.cnic) {
      cnicPath = await uploadDocument(formData.documents.cnic, "cnic");
    }
    if (formData.documents.studentId) {
      studentIdPath = await uploadDocument(formData.documents.studentId, "studentId");
    }
    if (formData.documents.degree) {
      degreePath = await uploadDocument(formData.documents.degree, "degree");
    }
    if (formData.documents.registration) {
      registrationPath = await uploadDocument(formData.documents.registration, "registration");
    }
    if (formData.documents.authorization) {
      authorizationPath = await uploadDocument(formData.documents.authorization, "authorization");
    }
  } catch (err: any) {
    console.error("File upload failed:", err.message);
    alert("Failed to upload documents: " + err.message);
    return;
  }

  // --------------------
  // 4️⃣ Insert all application data
  // --------------------
  const { error } = await supabase
    .from("membership_applications")
    .insert({
      user_id: user.id,
      membership_type: formData.membershipType,

      // Individual fields
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      cnic_passport: formData.cnicPassport,
      city: formData.city,
      province: formData.province,
      country: formData.country,
      profession: formData.profession,
      expertise: formData.expertise,
      years_experience: formData.yearsExperience,
      current_affiliation: formData.currentAffiliation,

      // Institutional fields
      org_name: formData.orgName,
      org_type: formData.orgType,
      official_email: formData.officialEmail,
      contact_phone: formData.contactPhone,
      website: formData.website,
      sector: formData.sector,
      primary_focus: formData.primaryFocus,
      org_size: formData.orgSize,

      // Documents paths
      cnic_document: cnicPath,
      student_id_document: studentIdPath,
      degree_document: degreePath,
      registration_document: registrationPath,
      authorization_document: authorizationPath,

      // Platform interests & agreement
      interests: formData.interests,
      agreed_terms: formData.agreeTerms,
    });

  if (error) {
    console.error("Insert failed:", error.message);
    alert("Submission failed: " + error.message);
    return;
  }

  alert("Membership request submitted successfully!");
};





  const isIndividual = formData.membershipType === "Individual";
  const isInstitutional = ["Institutional", "Corporate", "Community / NGO", "Government Agency"].includes(formData.membershipType);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Membership Application</h1>
            <p className="text-blue-100">Join Pakistan's Premier Blue Economy Network</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Step 1: Membership Type */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-foreground">Select Membership Type</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {membershipTypes.map(type => (
                  <label
                    key={type}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.membershipType === type
                        ? "border-cyan-500 bg-blue-50"
                        : "border-border hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="membershipType"
                      value={type}
                      checked={formData.membershipType === type}
                      onChange={(e) => handleInputChange("membershipType", e.target.value)}
                      className="w-5 h-5 accent-cyan-500"
                    />
                    <span className="font-medium text-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.membershipType && (
              <>
                {/* Step 2: Basic Identity */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Basic Information</h2>
                  </div>

                  {isIndividual ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="CNIC / Passport *"
                        value={formData.cnicPassport}
                        onChange={(e) => handleInputChange("cnicPassport", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="City *"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="Province *"
                        value={formData.province}
                        onChange={(e) => handleInputChange("province", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="Country *"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Organization Name *"
                        value={formData.orgName}
                        onChange={(e) => handleInputChange("orgName", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground md:col-span-2"
                      />
                      <select
                        value={formData.orgType}
                        onChange={(e) => handleInputChange("orgType", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      >
                        <option value="">Organization Type *</option>
                        {orgTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <input
                        type="email"
                        placeholder="Official Email *"
                        value={formData.officialEmail}
                        onChange={(e) => handleInputChange("officialEmail", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="tel"
                        placeholder="Contact Phone *"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="City *"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="Province *"
                        value={formData.province}
                        onChange={(e) => handleInputChange("province", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="text"
                        placeholder="Country *"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input
                        type="url"
                        placeholder="Website (Optional)"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground md:col-span-2"
                      />
                    </div>
                  )}
                </div>

                {/* Step 3: Professional Details */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Professional Details</h2>
                  </div>

                  {isIndividual ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Profession / Role (e.g., Engineer, Researcher) *"
                        value={formData.profession}
                        onChange={(e) => handleInputChange("profession", e.target.value)}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Area of Expertise (Select multiple) *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                          {expertiseAreas.map(area => (
                            <label key={area} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-blue-50 cursor-pointer transition-all">
                              <input
                                type="checkbox"
                                checked={formData.expertise.includes(area)}
                                onChange={() => toggleArrayField("expertise", area)}
                                className="w-4 h-4 accent-cyan-500"
                              />
                              <span className="text-sm text-foreground">{area}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <select
                          value={formData.yearsExperience}
                          onChange={(e) => handleInputChange("yearsExperience", e.target.value)}
                          className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                        >
                          <option value="">Years of Experience *</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="11-15">11-15 years</option>
                          <option value="16+">16+ years</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Current Affiliation (Optional)"
                          value={formData.currentAffiliation}
                          onChange={(e) => handleInputChange("currentAffiliation", e.target.value)}
                          className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <select
                        value={formData.sector}
                        onChange={(e) => handleInputChange("sector", e.target.value)}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      >
                        <option value="">Sector *</option>
                        {sectors.map(sector => (
                          <option key={sector} value={sector}>{sector}</option>
                        ))}
                      </select>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Primary Focus Area (Select multiple) *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                          {expertiseAreas.map(area => (
                            <label key={area} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-blue-50 cursor-pointer transition-all">
                              <input
                                type="checkbox"
                                checked={formData.primaryFocus.includes(area)}
                                onChange={() => toggleArrayField("primaryFocus", area)}
                                className="w-4 h-4 accent-cyan-500"
                              />
                              <span className="text-sm text-foreground">{area}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <select
                        value={formData.orgSize}
                        onChange={(e) => handleInputChange("orgSize", e.target.value)}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      >
                        <option value="">Organization Size (Optional)</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501+">501+ employees</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Step 4: Documents */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Document Verification</h2>
                  </div>

                  <div className="space-y-3">
                    {isIndividual ? (
                      <>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                          <label className="cursor-pointer">
                            <span className="text-cyan-500 font-medium">Upload CNIC / Passport *</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload("cnic", e.target.files[0])}
                              accept="image/*,.pdf"
                            />
                          </label>
                          {formData.documents.cnic && (
                            <p className="text-sm text-foreground mt-2">✓ {formData.documents.cnic.name }</p>
                          )}
                        </div>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                          <label className="cursor-pointer">
                            <span className="text-cyan-500 font-medium">Upload Student ID (if applicable)</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload("studentId", e.target.files[0])}
                              accept="image/*,.pdf"
                            />
                          </label>
                          {formData.documents.studentId && (
                            <p className="text-sm text-foreground mt-2">✓ {formData.documents.studentId.name}</p>
                          )}

                        </div>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                          <label className="cursor-pointer">
                            <span className="text-cyan-500 font-medium">Upload Degree / Certification (Optional)</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload("degree", e.target.files[0])}
                              accept="image/*,.pdf"
                            />
                          </label>
                          {formData.documents.degree && (
                            <p className="text-sm text-foreground mt-2">✓ {formData.documents.degree.name}</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                          <label className="cursor-pointer">
                            <span className="text-cyan-500 font-medium">Upload Registration Certificate *</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload("registration", e.target.files[0])}
                              accept="image/*,.pdf"
                            />
                          </label>
                          {formData.documents.registration && (
                            <p className="text-sm text-foreground mt-2">✓ {formData.documents.registration.name}</p>
                          )}
                        </div>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                          <label className="cursor-pointer">
                            <span className="text-cyan-500 font-medium">Upload Letter of Authorization (Optional)</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => handleFileUpload("authorization", e.target.files[0])}
                              accept="image/*,.pdf"
                            />
                          </label>
                          {formData.documents.authorization && (
                            <p className="text-sm text-foreground mt-2">✓ {formData.documents.authorization.name}</p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Step 5: Platform Interests */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Platform Interests</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {platformInterests.map(interest => (
                      <label key={interest} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-blue-50 cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => toggleArrayField("interests", interest)}
                          className="w-5 h-5 accent-cyan-500"
                        />
                        <span className="text-sm font-medium text-foreground">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 6: Account Setup */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Account Setup</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="password"
                      placeholder="Create Password *"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      minLength={8}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password *"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      minLength={8}
                    />
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-lg border border-border cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                      className="w-5 h-5 mt-1 accent-cyan-500"
                    />
                    <span className="text-sm text-foreground">
                      I agree to the <span className="text-cyan-500 hover:underline cursor-pointer">Terms & Conditions</span> and <span className="text-cyan-500 hover:underline cursor-pointer">Privacy Policy</span> *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-cyan-500 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submit & Request Verification
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}