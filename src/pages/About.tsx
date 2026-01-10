import { useNavigate } from "react-router-dom"; 
import {
  Users,
  Target,
  Globe,
  Award,
  ChevronRight,
  Anchor,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

export default function About() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative py-28 bg-[#0a192f] text-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004e92] to-[#0a192f] opacity-95" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container relative z-10 px-4 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-teal-400 text-teal-300 px-4 py-1 text-sm tracking-widest uppercase"
          >
            Who We Are
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Connecting Pakistan’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Maritime Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            We are building Pakistan’s first digital ecosystem to connect
            industry, government, and communities for a sustainable Blue
            Economy.
          </p>
        </div>
      </section>

      
      {/* 3. MISSION & VISION GRID */}
      <section className="py-20 container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Purpose */}
          <Card className="border-t-4 border-blue-500 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Purpose
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To create a unified ecosystem where industry, government, and
                innovators collaborate in real-time.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-t-4 border-teal-500 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 hover:-rotate-6 transition-transform">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To build a smart, inclusive, and technology-enabled maritime
                ecosystem that accelerates ocean stewardship.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-t-4 border-indigo-500 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <CardContent className="pt-8 p-8 text-center">
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Foster data-driven decisions, connect innovative tech solutions,
                and promote youth & women empowerment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (New Section) */}
      <section className="py-20 bg-slate-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Our Strategy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bridging the Gap Between Policy & Practice
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Pakistan's maritime sector has operated in silos for too long.
                We are changing that by providing a central digital
                infrastructure.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Anchor, text: "Link fragmented maritime sectors" },
                  {
                    icon: TrendingUp,
                    text: "Provide a marketplace for services",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Improve data access for decisions",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full shadow-sm text-teal-600">
                      <item.icon size={20} />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & HIERARCHY */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Our Leadership"
            subtitle="The dedicated team driving Pakistan's Blue Economy revolution."
            icon={Users}
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* CEO / Director */}
            <div className="md:col-span-3 flex justify-center mb-8">
              <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-2xl w-full">
                <div className="w-40 h-40 bg-slate-200 rounded-full mb-6 md:mb-0 md:mr-8 overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                  <img
                    src=""
                    alt="Dr. Nuzhat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-slate-900">
                    Dr. Nuzhat
                  </h3>
                  <p className="text-teal-600 font-semibold text-lg mb-3">
                    Founder & CEO
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    "Our goal is to unlock the hidden potential of Pakistan's
                    oceans through digital innovation and inclusive
                    collaboration."
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-slate-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center border border-slate-100"
              >
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 overflow-hidden shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center text-slate-300">
                  <Users className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  Team Lead {item}
                </h4>
                <p className="text-slate-500 text-sm">Operations & Strategy</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS LOGO GRID */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by Strategic Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos - replace these text blocks with <img> tags */}
            <div className="flex items-center justify-center w-48 h-16 border-2 border-slate-200 rounded-lg bg-white font-bold text-slate-400">
              Maritime Affairs
            </div>
            <div className="flex items-center justify-center w-48 h-16 border-2 border-slate-200 rounded-lg bg-white font-bold text-slate-400">
              NIO Pakistan
            </div>
            <div className="flex items-center justify-center w-48 h-16 border-2 border-slate-200 rounded-lg bg-white font-bold text-slate-400">
              UNDP
            </div>
            <div className="flex items-center justify-center w-48 h-16 border-2 border-slate-200 rounded-lg bg-white font-bold text-slate-400">
              Bahria Univ
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-blue-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join the network that is reshaping Pakistan's maritime future.
            Connect, collaborate, and grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-teal-500/30 transition-all"
              onClick={() => navigate("/membership")} //  Navigates to Membership Page
            >
              Become a Stakeholder
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
