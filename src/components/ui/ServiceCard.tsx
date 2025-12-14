import { Ship, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  onRequestQuote: (service: Service) => void;
  className?: string;
}

export function ServiceCard({ service, onRequestQuote, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border overflow-hidden hover-lift group",
        className
      )}
    >
      <div className="h-40 bg-secondary relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors" />
        <Ship className="w-12 h-12 text-muted-foreground/30" />
        <span className="absolute top-3 right-3 bg-card px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1">
          <Award className="w-3 h-3 text-accent" />
          {service.rating}
        </span>
      </div>
      
      <div className="p-5">
        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
          {service.category}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1">{service.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">by {service.provider}</p>
        {service.description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {service.description}
          </p>
        )}
        
        <div className="pt-4 border-t border-border">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onRequestQuote(service)}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
