import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { OBJECTIVES } from "@/data/mockData";
import {
  ArrowRight,
  ChevronRight,
  Database,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Users,
  Ship,
  Anchor,
  Waves,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Unified Ecosystem": ChevronRight,
  "Data-Driven Decisions": Database,
  "Digital Marketplace": Briefcase,
  "Innovation Nexus": Lightbulb,
  "Capacity Building": GraduationCap,
  "Community Growth": Users,
};

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Anchor className="w-24 h-24 text-primary" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
            <Ship className="w-32 h-32 text-primary" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
            <Waves className="w-20 h-20 text-accent" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold tracking-wide mb-6 animate-fade-in">
              Powered by BlueNet+
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary-foreground animate-slide-up">
              Pakistan's Digital{" "}
              <span className="text-gradient-ocean">Blue Economy Catalyst</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Connect, empower, and transform the maritime sector through technology.
              The first unified ecosystem for industry, government, and innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/membership">
                  Join the Hub
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/marketplace">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Objectives
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Driving sustainable economic growth and ocean stewardship for Pakistan's future
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {OBJECTIVES.map((objective, idx) => {
              const Icon = iconMap[objective.title] || ChevronRight;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl border border-border p-8 hover-lift animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Pakistan's Blue Economy?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of maritime professionals, researchers, and innovators on the MSH platform.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/membership">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
