import { BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dataset } from "@/types";
import { cn } from "@/lib/utils";

interface DatasetCardProps {
  dataset: Dataset;
  onRequestAccess: (dataset: Dataset) => void;
  className?: string;
}

export function DatasetCard({ dataset, onRequestAccess, className }: DatasetCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover-lift",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <BarChart className="w-5 h-5" />
        </div>
        <div>
          <span className="font-medium text-foreground block">{dataset.title}</span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <span>{dataset.category}</span>
            {dataset.size && (
              <>
                <span>•</span>
                <span>{dataset.size}</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onRequestAccess(dataset)}
        className="whitespace-nowrap"
      >
        Request Access
      </Button>
    </div>
  );
}
