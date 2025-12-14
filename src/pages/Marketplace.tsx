import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Search } from "lucide-react";
import { Service } from "@/types";

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredServices = SERVICES.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestQuote = (service: Service) => {
    toast({
      title: "Quote Requested",
      description: `Your request for "${service.title}" has been submitted. We'll get back to you soon!`,
    });
  };

  return (
    <div className="py-12 bg-background min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Maritime Services Marketplace"
          subtitle="One-stop platform connecting you with verified marine professionals and solutions."
          icon={Briefcase}
        />

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for surveys, diving, consulting..."
            className="w-full pl-12 pr-4 py-4 rounded-full bg-card border border-border shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ServiceCard
                service={service}
                onRequestQuote={handleRequestQuote}
              />
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No services found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
