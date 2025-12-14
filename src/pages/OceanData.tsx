import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { DatasetCard } from "@/components/ui/DatasetCard";
import { Button } from "@/components/ui/button";
import { DATASETS, RESEARCH_PARTNERS } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import {
  Database,
  Globe,
  Droplets,
  Wind,
  Activity,
  Fish,
  CheckCircle,
} from "lucide-react";
import { Dataset } from "@/types";

export default function OceanData() {
  const { toast } = useToast();

  const handleRequestAccess = (dataset: Dataset) => {
    toast({
      title: "Access Requested",
      description: `Your request for "${dataset.title}" has been submitted. You'll be notified once approved.`,
    });
  };

  const handleSubmitPaper = () => {
    toast({
      title: "Coming Soon",
      description: "The research submission portal is under development.",
    });
  };

  return (
    <div className="py-12 bg-secondary/30 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Ocean Data & Research"
          subtitle="Collaborate on scientific data sharing to support evidence-based decision making."
          icon={Database}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Stats */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                <Globe className="w-5 h-5 text-primary" />
                Live Ocean Parameters (Karachi Coast)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  label="Water Temp"
                  value="24°C"
                  icon={Droplets}
                  iconColor="text-destructive"
                />
                <StatCard
                  label="Wind Speed"
                  value="12 kts"
                  icon={Wind}
                  iconColor="text-primary"
                />
                <StatCard
                  label="Tide Height"
                  value="1.2m"
                  icon={Activity}
                  iconColor="text-accent"
                />
                <StatCard
                  label="Salinity"
                  value="36 ppt"
                  icon={Fish}
                  iconColor="text-teal"
                />
              </div>
            </div>

            {/* Datasets */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Available Datasets
              </h3>
              <div className="space-y-4">
                {DATASETS.map((dataset, idx) => (
                  <div
                    key={dataset.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <DatasetCard
                      dataset={dataset}
                      onRequestAccess={handleRequestAccess}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish CTA */}
            <div className="gradient-navy rounded-xl p-6 text-primary-foreground border-none">
              <h3 className="font-bold text-lg mb-2">Publish Research</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Share your findings with the national repository and contribute to ocean science.
              </p>
              <Button
                variant="ocean"
                className="w-full"
                onClick={handleSubmitPaper}
              >
                Submit Paper
              </Button>
            </div>

            {/* Research Partners */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Research Partners</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {RESEARCH_PARTNERS.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
