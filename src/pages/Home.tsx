import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Anchor,
  Users,
  Globe,
  Database,
  GraduationCap,
  Lightbulb,
  Mic,
  Ship,
  Briefcase,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function Home() {
  const navigate = useNavigate();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans selection:bg-[#FF7F50] selection:text-white">
      {/* 1. HERO SECTION (Ocean Data Style) */}
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

        <div className="container relative z-10 px-4 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-teal-400/50 text-teal-300 px-4 py-1 text-sm tracking-wider uppercase backdrop-blur-md"
          >
            BlueNet+
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
            Digital Hub for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#FF7F50]">
              Pakistan's Blue Economy
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connecting industry, government, and researchers to transform the
            maritime sector through technology, collaboration, and inclusive
            innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#FF7F50] hover:bg-[#E06040] text-white border-0 px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(255,127,80,0.4)] transition-all hover:scale-105"
              onClick={() => navigate("/membership")}
            >
              Join the Ecosystem
            </Button>

            <Button
              size="lg"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
              onClick={() =>
                document
                  .getElementById("offerings")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* 2. VISION & MISSION */}
      <div className="relative py-24 bg-[#001E2B]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Globe className="text-teal-400 w-8 h-8" />
                Our Vision
              </h2>
              <p className="text-slate-300 leading-relaxed">
                To build a smart, inclusive, and technology-enabled maritime
                ecosystem that accelerates sustainable economic growth.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Database, text: "Foster data-driven decision making" },
                {
                  icon: Lightbulb,
                  text: "Connect stakeholders to innovative tech",
                },
                { icon: Users, text: "Promote youth & women empowerment" },
                { icon: Leaf, text: "Ensure climate-smart business growth" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHAT MSH OFFERS */}
      <div id="offerings" className="py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What MSH Offers"
            subtitle="Five pillars powering the maritime revolution."
            icon={Anchor}
            className="mb-12 text-center"
          />

          <div className="flex justify-center">
            <Carousel
              className="w-full max-w-6xl"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    title: "Stakeholder Platform",
                    desc: "Stakeholder profiles, networking, and smart collaboration tools.",
                    icon: Users,
                    color: "bg-blue-500",
                    link: "/membership",
                  },
                  {
                    title: "Maritime Marketplace",
                    desc: "Connect with experts, consultants, and marine tech providers.",
                    icon: Briefcase,
                    color: "bg-teal-500",
                    link: "/marketplace",
                  },
                  {
                    title: "Maritime Data Portal",
                    desc: "Real-time access to scientific data, tides, and research findings.",
                    icon: Database,
                    color: "bg-cyan-500",
                    link: "/data",
                  },
                  {
                    title: "Blue Skills Academy",
                    desc: "Training, certifications, and internships for the future workforce.",
                    icon: GraduationCap,
                    color: "bg-indigo-500",
                    link: "/academy",
                  },
                  {
                    title: "Maritime Satrtup & Innovation",
                    desc: "Mentorship and funding for OceanTech and aquaculture startups.",
                    icon: Lightbulb,
                    color: "bg-[#FF7F50]",
                    link: "/incubator",
                  },
                ].map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative bg-white">
                        <div
                          className={`absolute top-0 left-0 w-full h-2 ${item.color}`}
                        />
                        <CardContent className="p-8 flex flex-col h-full">
                          <div
                            className={`w-14 h-14 ${item.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <item.icon
                              className={`w-7 h-7 ${item.color.replace(
                                "bg-",
                                "text-"
                              )}`}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                            {item.desc}
                          </p>
                          <Button
                            variant="ghost"
                            className="w-full justify-between group-hover:bg-slate-50 hover:text-blue-600"
                            onClick={() => navigate(item.link)}
                          >
                            Explore
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 border-slate-300 text-slate-500 hover:bg-slate-100" />
                <CarouselNext className="-right-12 border-slate-300 text-slate-500 hover:bg-slate-100" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* 4. WHO WE SERVE */}
      <div className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF7F50] font-bold tracking-widest uppercase text-sm">
                Ecosystem
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
                Who We Serve
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                MSH links fragmented maritime sectors on a single digital hub.
              </p>

              <div className="space-y-4">
                <StakeholderRow
                  title="Maritime Stakeholders"
                  desc="Maritime Affairs, Ports, Fisheries, Climate Agencies."
                  color="bg-blue-100 text-blue-700"
                />
                <StakeholderRow
                  title="Public & Private Sector"
                  desc="Shipping, Logistics, Aquaculture, Tourism."
                  color="bg-teal-100 text-teal-700"
                />
                <StakeholderRow
                  title="Academia"
                  desc="Universities, Marine Labs, Research Institutes."
                  color="bg-indigo-100 text-indigo-700"
                />
                <StakeholderRow
                  title="Communities & Youth"
                  desc="Coastal livelihoods, Women Entrepreneurs."
                  color="bg-orange-100 text-orange-700"
                />
              </div>
            </div>

            <div className="relative h-[600px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                alt="Community"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-2">
                    Connecting 5+ Key Sectors
                  </h4>
                  <p className="text-sm text-slate-200">
                    From deep-sea ports to local fishing communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. OCEAN KAFE */}
      <div className="py-24 bg-[#FF7F50] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Mic className="w-4 h-4" />
                <span className="font-bold text-sm">#OceanStorytelling</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ocean Kafe
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your Voice, Your Story. A creative space giving a platform to
                unheard voices from Pakistan's coastline.
              </p>
              <div className="flex gap-4">
                {/* <Button className="bg-white text-[#FF7F50] hover:bg-slate-100 border-0 rounded-full px-8">
                  Read Stories
                </Button>
                <Button className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-8 transition-colors">
                  Submit Yours
                </Button> */}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* <StoryCard
                img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                category="Coastal Women"
                title="The Guardians of Mangroves"
              />
              <StoryCard
                img="https://images.unsplash.com/photo-1534960680480-ca9853707e10?auto=format&fit=crop&q=80"
                category="Innovation"
                title="Sailing Against the Tide"
                className="translate-y-8"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* 6. THE UNHEARD OCEAN */}
      <div className="py-24 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Ship className="w-12 h-12 text-teal-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            The Unheard Ocean
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            New Frontiers in Science, Law, Economy, and Society.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <ResearchStat label="Deep Sea" value="Exploration" />
            <ResearchStat label="Maritime Law" value="Governance" />
            <ResearchStat label="Blue Growth" value="Economy" />
            <ResearchStat label="Community" value="Society" />
          </div>

          <div className="mt-12 pt-12 border-t border-slate-800">
            {/* <Button
              variant="link"
              className="text-teal-400 hover:text-teal-300 text-lg"
            >
              Join the Upcoming Conference{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* 7. CTA */}
      <div className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto relative z-10">
              Join Pakistan’s transformation toward a sustainable, inclusive,
              innovation-led maritime future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 px-10 py-6 text-lg rounded-full font-bold shadow-lg"
                onClick={() => navigate("/membership")}
              >
                Sign Up Now
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full transition-colors"
                onClick={() =>
                  (window.location.href = "mailto:info@bluenetplus.org")
                }
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StakeholderRow({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`w-2 h-12 rounded-full shrink-0 ${color.split(" ")[0]}`}
      />
      <div>
        <h3 className={`font-bold text-lg ${color.split(" ")[1]}`}>{title}</h3>
        <p className="text-slate-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function StoryCard({
  img,
  category,
  title,
  className,
}: {
  img: string;
  category: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-lg",
        className
      )}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF7F50] bg-white px-2 py-1 rounded mb-2 inline-block">
          {category}
        </span>
        <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-[#FF7F50] underline-offset-4">
          {title}
        </h4>
      </div>
    </div>
  );
}

function ResearchStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-500/50 transition-colors">
      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="text-white font-bold text-xl">{value}</div>
    </div>
  );
}
