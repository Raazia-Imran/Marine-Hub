import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Database,
  Globe,
  Shield,
  Radio,
  BookOpen,
  Users,
  Anchor,
  Search,
  ArrowRight,
  Activity,
  Cpu,
  Map,
  Waves,
  Fish,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function OceanData() {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen animate-fade-in bg-slate-50 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <div className="relative bg-[#0a192f] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Ocean Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
            <Globe className="w-4 h-4" />
            <span>Powered by BlueNet+</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight font-heading">
            Ocean Data & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
              Research Collaboration
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            A national ecosystem for scientific data sharing, collaborative
            research, and technology-driven ocean monitoring to support
            evidence-based maritime decision-making in Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-900/20 px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
              onClick={() =>
                document
                  .getElementById("offerings")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Database className="mr-2 h-5 w-5" />
              Explore Capabilities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm rounded-full"
              onClick={() => navigate("/membership")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Collaboration
            </Button>
          </div>
        </div>
      </div>

      {/* 2. VISION & MISSION */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                title="Why Ocean Data Matters"
                subtitle="Bridging the gap between fragmented research and industry needs."
                icon={Globe}
                className="mb-6"
              />
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Pakistan’s coastal decisions are often hindered by limited
                real-time ocean data and research silos. <strong>ODRC</strong>{" "}
                bridges research institutions, government agencies, and
                industries to generate open, reliable, and actionable maritime
                data.
              </p>

              <div className="space-y-4 mt-8">
                <MissionItem text="Democratize ocean knowledge for all stakeholders" />
                <MissionItem text="Strengthen evidence-based maritime decisions" />
                <MissionItem text="Improve climate resilience & disaster planning" />
                <MissionItem text="Support innovation in ocean tech & startups" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Global Data Network"
                className="relative rounded-2xl shadow-2xl border border-slate-100 z-10 w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-slate-100">
                <p className="text-blue-900 font-bold text-lg mb-1">
                  "Better data means smarter governance."
                </p>
                <p className="text-slate-500 text-sm">— ODRC Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PLATFORM OFFERINGS (The 5 Pillars) */}
      <div id="offerings" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What the Platform Offers"
            subtitle="Five core pillars powering Pakistan's maritime knowledge revolution."
            icon={BookOpen}
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <OfferingCard
              icon={<BookOpen className="w-8 h-8 text-blue-500" />}
              title="Knowledge Repository"
              items={[
                "Scientific publications",
                "Marine policies & laws",
                "Climate assessments",
              ]}
              delay={0}
            />

            <OfferingCard
              icon={<Users className="w-8 h-8 text-teal-500" />}
              title="Research Collaboration"
              items={[
                "Scientist-Industry links",
                "Joint funding opps",
                "Proposal support",
              ]}
              delay={100}
            />

            <OfferingCard
              icon={<Database className="w-8 h-8 text-cyan-500" />}
              title="Marine Data Access"
              items={[
                "Tides, waves, currents",
                "Fisheries & biodiversity",
                "Logistics insights",
              ]}
              delay={200}
            />

            <OfferingCard
              icon={<Radio className="w-8 h-8 text-indigo-500" />}
              title="Tech Monitoring"
              items={[
                "GIS & Remote Sensing",
                "AI Ocean Analytics",
                "Drone & Buoy Data",
              ]}
              delay={300}
            />

            <OfferingCard
              icon={<Shield className="w-8 h-8 text-emerald-500" />}
              title="IP Protection"
              items={[
                "Secure data sharing",
                "Startup IP Advisory",
                "Tech Licensing",
              ]}
              delay={400}
            />
          </div>
        </div>
      </div>

      {/* 4. TOOLS & CAPABILITIES (Tech Spec) */}
      <div className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools & Capabilities
            </h2>
            <p className="text-slate-400">
              We leverage advanced technology to provide actionable insights for
              universities, ports, and marine consultants.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <TechCard
              icon={<Radio className="w-10 h-10 text-blue-400" />}
              title="Ocean Monitoring"
              desc="Buoys, sensors, drones, and coastal stations for real-time tracking."
            />
            <TechCard
              icon={<Cpu className="w-10 h-10 text-teal-400" />}
              title="Data Analytics"
              desc="GIS mapping, AI/ML modeling, and predictive environmental algorithms."
            />
            <TechCard
              icon={<Map className="w-10 h-10 text-cyan-400" />}
              title="Visualization"
              desc="Interactive dashboards, heatmaps, and forecasting tools."
            />
            <TechCard
              icon={<Database className="w-10 h-10 text-indigo-400" />}
              title="Open Sharing"
              desc="Standardized formats (CSV/GeoJSON) & secure API portals."
            />
          </div>
        </div>
      </div>

      {/* 5. INTERACTIVE GALLERY */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research & Fieldwork Gallery"
            subtitle="Documenting our collaborative efforts in ocean monitoring and data collection."
            icon={Activity}
            className="mb-12"
          />

          {/* Bento Grid Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {/* Featured Item (Large) */}
            <GalleryItem
              image="/images/img-11.png"
              className="md:col-span-2 md:row-span-2"

            />

            {/* Item 2 */}
            <GalleryItem
              image="/images/img-01.png"
              className="md:col-span-1 md:row-span-1"
            />

            {/* Item 3 */}
            <GalleryItem
              image="/images/img-03.png"
              className="md:col-span-1 md:row-span-1"
            />

            {/* Item 4 (Wide) */}
            <GalleryItem
              image="/images/img-10.png"
              className="md:col-span-2 md:row-span-1"
            />
            
          </div>
        </div>
        {/* See More Button */}
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
              onClick={() => navigate("/pictures")}
            >
              See More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

      </div>

      {/* 6. IMPACT GOALS */}
      <div className="py-20 bg-blue-50/50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Our Impact Goals"
            subtitle="What we aim to achieve together."
            icon={Anchor}
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ImpactItem text="Strengthen evidence-based maritime decisions" />
            <ImpactItem text="Scale sustainable fisheries management" />
            <ImpactItem text="Enable data-driven port modernization" />
            <ImpactItem text="Support innovation in ocean tech startups" />
            <ImpactItem text="Foster global collaboration for marine science" />
            <ImpactItem text="Improve climate resilience & disaster planning" />
          </div>
        </div>
      </div>

      {/* 7. CTA / PARTNERS */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Be Part of Pakistan’s Ocean Knowledge Revolution
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Whether you are a researcher, an industry leader, or a government
            institution — the ODRC platform empowers you to connect, share, and
            innovate.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg"
              onClick={() => navigate("/membership")}
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-full text-lg"
              onClick={() =>
                (window.location.href = "mailto:info@bluenetplus.org")
              }
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Internal Helper Components for Clean Code
// ------------------------------------------------------------------

function MissionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

function OfferingCard({
  icon,
  title,
  items,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 text-lg mb-4">{title}</h3>
      <ul className="space-y-3 mt-auto">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
            <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function GalleryItem({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <div
  className={cn(
    "relative group overflow-hidden rounded-2xl cursor-pointer bg-slate-100 flex items-center justify-center",
    className
  )}
>

      <img
        src={image}
        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      </div>
    </div>
  );
}

function ImpactItem({ text }: { text: string }) {
  return (
    <div className="bg-white px-6 py-4 rounded-xl border border-blue-100 shadow-sm flex items-center gap-3 text-left">
      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <span className="text-slate-700 font-medium text-sm">{text}</span>
    </div>
  );
}
