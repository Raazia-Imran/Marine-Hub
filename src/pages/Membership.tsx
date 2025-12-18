import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Rocket, Building2, GraduationCap, Briefcase, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";


export default function MembershipSelection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const navigate = useNavigate(); // ✅ ADD THIS


  const handleCardClick = (path: string) => {
  navigate(path);
};

const toggleCard = (id: string) => {
  setFlippedCard((prev) => (prev === id ? null : id));
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Choose Your Path
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join Pakistan's Maritime Community
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're a professional, institution, or startup innovator, we have a path designed for your maritime journey.
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            { icon: Users, text: "Network & Collaborate" },
            { icon: Briefcase, text: "Access Marketplace" },
            { icon: GraduationCap, text: "Training & Certifications" },
            { icon: Rocket, text: "Funding Opportunities" }
          ].map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <benefit.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-800">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Membership Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Individual + Institutional */}
          <div 
            className="group perspective-1000"
            // onMouseEnter={() => setFlippedCard("professional")}
            // onMouseLeave={() => setFlippedCard(null)}
            onClick={() => toggleCard("professional")}

          >
            <div className={`relative w-full h-[550px] transition-transform duration-700 transform-style-3d ${flippedCard === "professional" ? "rotate-y-180" : ""}`}>
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <div className="h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl p-8 flex flex-col justify-between text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">
                      Maritime Professional & Institutional Membership
                    </h2>
                    <p className="text-blue-100 text-lg italic mb-6">
                      "Be Visible. Be Connected. Be Impactful."
                    </p>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        What You Get:
                      </h3>
                      <ul className="space-y-2 text-sm text-blue-50">
                        <li>• Digital Membership Profile</li>
                        <li>• Networking & Collaboration Tools</li>
                        <li>• Access to Jobs & Marketplace</li>
                        <li>• Research & Data Resources</li>
                      </ul>
                    </div>

                    <button
                      onClick={() => handleCardClick("/membership/individualform")}
                      className="w-full bg-white text-cyan-500 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-blue-100 text-center">
                      Click anywhere to see who can join →
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-2xl p-8 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Who Can Join?
                  </h3>
                  
                  <div className="flex-1 grid grid-cols-1 gap-3 mb-6">
                    {[
                      { icon: GraduationCap, title: "Students & Researchers" },
                      { icon: Briefcase, title: "Maritime Professionals" },
                      { icon: Building2, title: "Universities & Institutes" },
                      { icon: Users, title: "Companies & Businesses" },
                      { icon: Lightbulb, title: "NGOs & Government" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 hover:bg-white/25 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-base">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCardClick("/membership/individualform")}
                    className="w-full bg-white text-cyan-500 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Coral Community */}
          <div 
            className="group perspective-1000"
            // onMouseEnter={() => setFlippedCard("coral")}
            // onMouseLeave={() => setFlippedCard(null)}
            onClick={() => toggleCard("coral")}


          >
            <div className={`relative w-full h-[550px] transition-transform duration-700 transform-style-3d ${flippedCard === "coral" ? "rotate-y-180" : ""}`}>
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl p-8 flex flex-col justify-between text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">
                      Coral Community – Ocean Startup Incubation
                    </h2>
                    <p className="text-emerald-100 text-lg italic mb-6">
                      "Turn Ocean Ideas into Scalable Impact"
                    </p>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        What You Get:
                      </h3>
                      <ul className="space-y-2 text-sm text-emerald-50">
                        <li>• Mentorship & Technical Support</li>
                        <li>• Access to Labs & Field Resources</li>
                        <li>• Funding & Investment Opportunities</li>
                        <li>• IP & Patent Guidance</li>
                      </ul>
                    </div>

                    <button
                      onClick={() => handleCardClick("/membership/coralform")}
                      className="w-full bg-white text-emerald-600 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-emerald-100 text-center">
                      Click anywhere see who can apply →
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="h-full bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-2xl p-8 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Rocket className="w-6 h-6" />
                    Who Can Apply?
                  </h3>
                  
                  <div className="flex-1 space-y-3 mb-6">
                    {[
                      { icon: Rocket, title: "Ocean Tech Startups" },
                      { icon: Lightbulb, title: "Youth Innovators" },
                      { icon: Users, title: "Women-led Enterprises" },
                      { icon: Building2, title: "Community Entrepreneurs" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 hover:bg-white/25 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-base">{item.title}</h4>
                        </div>
                      </div>
                    ))}

                  </div>

                  <button
                    onClick={() => handleCardClick("/membership/coralform")}
                    className="w-full bg-white text-emerald-600 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Not Sure Which Path to Choose?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong className="text-cyan-500">Professional Membership</strong> is for individuals, companies, universities, and organizations looking to network, collaborate, and access maritime resources.
              <br />
              <strong className="text-emerald-600">Coral Community</strong> is specifically for startups and innovators who need incubation support, mentorship, and funding to scale their ocean-based ideas.
            </p>
            <p className="text-sm text-gray-500">
              Questions? Contact us at <a href="mailto:info@maritime-hub.pk" className="text-cyan-500 hover:underline">info@maritime-hub.pk</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}