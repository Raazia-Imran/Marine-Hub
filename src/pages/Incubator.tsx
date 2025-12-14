import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { INCUBATOR_BENEFITS } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, CheckCircle, Rocket } from "lucide-react";

export default function Incubator() {
  const [pitch, setPitch] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Pitch Submitted",
      description: "Your idea has been submitted successfully! Our team will review it.",
    });

    setPitch({ title: "", description: "" });
    setLoading(false);
  };

  return (
    <div className="py-12 bg-secondary/30 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Ocean Startup Incubator"
          subtitle="Accelerating blue innovation. Turning ideas into scalable ventures."
          icon={Lightbulb}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              Why Apply?
            </h3>
            <div className="space-y-6">
              {INCUBATOR_BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Stories Preview */}
            <div className="mt-12 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-bold text-foreground mb-4">Success Stories</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-ocean rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    O
                  </div>
                  <div>
                    <p className="font-medium text-foreground">OceanTech Solutions</p>
                    <p className="text-xs text-muted-foreground">Raised $500K in seed funding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-ocean rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    B
                  </div>
                  <div>
                    <p className="font-medium text-foreground">BlueFin Analytics</p>
                    <p className="text-xs text-muted-foreground">Now serving 50+ fishing communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="bg-card rounded-xl border border-border p-8 border-t-4 border-t-primary">
            <h3 className="text-xl font-bold mb-6 text-foreground">Submit Your Idea</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Startup/Project Name
                </label>
                <input
                  required
                  value={pitch.title}
                  onChange={(e) => setPitch({ ...pitch, title: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. BlueWave Monitoring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Problem & Solution
                </label>
                <textarea
                  required
                  value={pitch.description}
                  onChange={(e) =>
                    setPitch({ ...pitch, description: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Describe the problem you're solving and how your innovation addresses it..."
                />
              </div>
              <Button
                variant="hero"
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Pitch"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
