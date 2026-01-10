import { Users, Target, Globe, Award, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 bg-[#0a192f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004e92] to-[#0a192f] opacity-90" />
        <div className="container relative z-10 px-4 text-center">
          <Badge variant="outline" className="mb-6 border-teal-400 text-teal-300 px-4 py-1">
            Who We Are
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Connecting Pakistan’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Maritime Future
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pakistan’s first digital, sustainable, innovation-driven multi-stakeholder platform that connects, empowers, and transforms the maritime sector through technology.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION GRID */}
      <section className="py-20 container px-4 mx-auto -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Purpose */}
          <Card className="border-t-4 border-blue-500 shadow-xl">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Purpose</h3>
              <p className="text-slate-600 leading-relaxed">
                To create a unified ecosystem where industry, government, and innovators collaborate in real-time to build a resilient Blue Economy.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-t-4 border-teal-500 shadow-xl">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To build a smart, inclusive, and technology-enabled maritime ecosystem that accelerates ocean stewardship for Pakistan.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-t-4 border-indigo-500 shadow-xl">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Foster data-driven decisions, connect innovative tech solutions, and promote youth & women empowerment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. CORE OBJECTIVES */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionHeader 
            title="Core Objectives" 
            subtitle="How we are transforming the maritime landscape." 
          />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            {[
              "Link fragmented maritime sectors on a single hub",
              "Improve data access for sustainable decision making",
              "Provide a marketplace for maritime services",
              "Connect academia, industry & government",
              "Build capacities in maritime research & skills",
              "Strengthen community coastal development"
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-blue-50 p-1 rounded-full mt-1">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-lg text-slate-700">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & HIERARCHY */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <SectionHeader 
            title="Our Leadership" 
            subtitle="The team driving Pakistan's Blue Economy revolution."
            icon={Users}
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
             {/* CEO / Director */}
             <div className="md:col-span-3 flex justify-center mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full border border-slate-100">
                  <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="" 
                      alt="Dr. Nuzhat" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Dr. Nuzhat</h3>
                  <p className="text-blue-600 font-medium">CEO</p>
                  <p className="text-slate-500 mt-2 text-sm">
                    Leading the vision for a sustainable maritime future.
                  </p>
                </div>
             </div>

             {/* Team Members Placeholder */}
             {[1, 2, 3].map((item) => (
               <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                 <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for other team members */}
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Users className="w-8 h-8" />
                    </div>
                 </div>
                 <h4 className="text-lg font-bold text-slate-900">Team Lead {item}</h4>
                 <p className="text-teal-600 text-sm">Operations & Strategy</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PARTNERS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Trusted by Strategic Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Replace these spans with actual Partner Logos */}
                <span className="text-xl font-bold text-slate-400 border px-6 py-3 rounded">Ministry of Maritime Affairs</span>
                <span className="text-xl font-bold text-slate-400 border px-6 py-3 rounded">National Institute of Oceanography</span>
                <span className="text-xl font-bold text-slate-400 border px-6 py-3 rounded">UNDP Pakistan</span>
                <span className="text-xl font-bold text-slate-400 border px-6 py-3 rounded">Bahria University</span>
            </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Digital Maritime Revolution</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                Be part of Pakistan’s transformation toward a sustainable, inclusive, and innovation-led maritime future.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8">
                    Become a Stakeholder
                </Button>
               
            </div>
        </div>
      </section>
    </div>
  );
}