import { useState } from "react";
import { Upload, Check, Lightbulb, Rocket, Users, Target } from "lucide-react";
type IncubatorDocuments = {
  pitchDeck?: string;
  conceptNote?: string;
  prototype?: string;
};


export default function IncubatorForm() {
  const [formData, setFormData] = useState({
    applicantType: "",
    founderName: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
    coastalArea: "",
    startupName: "",
    currentStage: "",
    problemSolving: "",
    solution: "",
    focusThemes: [],
    supportNeeded: [],
    documents: {} as IncubatorDocuments,
    expectedImpact: "",
    sustainabilityAlignment: ""
  });

  const applicantTypes = [
    "Startup",
    "Individual Innovator",
    "Women-led Enterprise",
    "Youth-led Team",
    "Coastal Community Business"
  ];

  const stages = [
    "Idea",
    "Prototype",
    "Pilot",
    "Early Revenue"
  ];

  const focusThemes = [
    "Smart Fisheries & Aquaculture",
    "Seaweed Value Chain",
    "Ocean Tech / AI / Sensors",
    "Marine Renewable Energy",
    "Coastal Eco-Tourism",
    "Blue Circular Economy",
    "Climate Resilience / Conservation"
  ];

  const supportOptions = [
    "Mentorship",
    "Technical Labs & Field Access",
    "Training & Certifications",
    "Funding / Investment",
    "Marketplace Access",
    "IP & Patent Support"
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

  const handleFileUpload = (field: keyof IncubatorDocuments, file?: File) => {
    if (!file) return;
    if (file) {
      setFormData(prev => ({
        ...prev,
        documents: { ...prev.documents, [field]: file.name }
      }));
    }
  };

  const handleSubmit = () => {
    if (!formData.applicantType) {
      alert("Please select an applicant type");
      return;
    }
    if (!formData.startupName || !formData.problemSolving || !formData.solution) {
      alert("Please fill in all required fields");
      return;
    }
    if (formData.focusThemes.length === 0) {
      alert("Please select at least one focus theme");
      return;
    }
    console.log("Application submitted:", formData);
    alert("Application submitted successfully! Our team will review it and get back to you.");
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Coral Community</h1>
            </div>
            <p className="text-cyan-50">Ocean Startup Incubation Application</p>
            <p className="text-cyan-100 text-sm mt-2">Accelerating blue innovation & turning ideas into scalable ventures</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Step 1: Applicant Type */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-foreground">Applicant Type</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {applicantTypes.map(type => (
                  <label
                    key={type}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.applicantType === type
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-border hover:border-cyan-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="applicantType"
                      value={type}
                      checked={formData.applicantType === type}
                      onChange={(e) => handleInputChange("applicantType", e.target.value)}
                      className="w-5 h-5 accent-cyan-500"
                    />
                    <span className="font-medium text-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.applicantType && (
              <>
                {/* Step 2: Founder/Team Information */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Founder / Team Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Founder / Team Lead Name *"
                      value={formData.founderName}
                      onChange={(e) => handleInputChange("founderName", e.target.value)}
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
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                    >
                      <option value="">Gender (Optional)</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <input
                      type="text"
                      placeholder="City *"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                    />
                    <input
                      type="text"
                      placeholder="Coastal Area (if applicable)"
                      value={formData.coastalArea}
                      onChange={(e) => handleInputChange("coastalArea", e.target.value)}
                      className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                    />
                  </div>
                </div>

                {/* Step 3: Startup/Idea Information */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Startup / Idea Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Startup / Project Name *"
                        value={formData.startupName}
                        onChange={(e) => handleInputChange("startupName", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <select
                        value={formData.currentStage}
                        onChange={(e) => handleInputChange("currentStage", e.target.value)}
                        className="p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground"
                      >
                        <option value="">Current Stage *</option>
                        {stages.map(stage => (
                          <option key={stage} value={stage}>{stage}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Problem You Are Solving *
                      </label>
                      <textarea
                        value={formData.problemSolving}
                        onChange={(e) => handleInputChange("problemSolving", e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground resize-none"
                        placeholder="Describe the problem in detail..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Your Solution *
                      </label>
                      <textarea
                        value={formData.solution}
                        onChange={(e) => handleInputChange("solution", e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground resize-none"
                        placeholder="How does your innovation solve this problem?"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4: Focus Theme */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Focus Theme</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      Select all themes that apply to your startup *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {focusThemes.map(theme => (
                        <label 
                          key={theme} 
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.focusThemes.includes(theme)
                              ? "border-cyan-500 bg-cyan-50"
                              : "border-border hover:border-cyan-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.focusThemes.includes(theme)}
                            onChange={() => toggleArrayField("focusThemes", theme)}
                            className="w-5 h-5 accent-cyan-500"
                          />
                          <span className="text-sm font-medium text-foreground">{theme}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 5: Support Needed */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Support Needed</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      What kind of support are you looking for?
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {supportOptions.map(option => (
                        <label 
                          key={option} 
                          className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-cyan-50 cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={formData.supportNeeded.includes(option)}
                            onChange={() => toggleArrayField("supportNeeded", option)}
                            className="w-5 h-5 accent-cyan-500"
                          />
                          <span className="text-sm font-medium text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 6: Documents */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Documents</h2>
                    <span className="text-sm text-muted-foreground">(Optional but Recommended)</span>
                  </div>

                  <div className="space-y-3">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                      <label className="cursor-pointer">
                        <span className="text-cyan-500 font-medium">Upload Pitch Deck (PDF)</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload("pitchDeck", e.target.files[0])}
                          accept=".pdf"
                        />
                      </label>
                      {formData.documents.pitchDeck && (
                        <p className="text-sm text-foreground mt-2">✓ {formData.documents.pitchDeck}</p>
                      )}
                    </div>

                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                      <label className="cursor-pointer">
                        <span className="text-cyan-500 font-medium">Upload Concept Note</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload("conceptNote", e.target.files[0])}
                          accept=".pdf,.doc,.docx"
                        />
                      </label>
                      {formData.documents.conceptNote && (
                        <p className="text-sm text-foreground mt-2">✓ {formData.documents.conceptNote}</p>
                      )}
                    </div>

                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-cyan-500 transition-all">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                      <label className="cursor-pointer">
                        <span className="text-cyan-500 font-medium">Upload Prototype Images / Links</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload("prototype", e.target.files[0])}
                          accept="image/*,.pdf"
                        />
                      </label>
                      {formData.documents.prototype && (
                        <p className="text-sm text-foreground mt-2">✓ {formData.documents.prototype}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 7: Impact Declaration */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                      7
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Impact Declaration</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Expected Impact (Jobs, Environment, Community) *
                      </label>
                      <textarea
                        value={formData.expectedImpact}
                        onChange={(e) => handleInputChange("expectedImpact", e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground resize-none"
                        placeholder="Describe the expected impact of your startup on jobs, environment, and local communities..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Alignment with Blue Economy / Sustainability *
                      </label>
                      <textarea
                        value={formData.sustainabilityAlignment}
                        onChange={(e) => handleInputChange("sustainabilityAlignment", e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-background text-foreground resize-none"
                        placeholder="Explain how your startup aligns with blue economy principles and sustainability goals..."
                      />
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-cyan-900 mb-1">What happens next?</h4>
                      <p className="text-sm text-cyan-800">
                        Our team will review your application within 7-10 business days. Selected applicants will be invited for a pitch session and interviewed by our panel of experts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-cyan-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submit Application for Review
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}