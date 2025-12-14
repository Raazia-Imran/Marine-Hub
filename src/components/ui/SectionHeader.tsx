import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12 max-w-3xl",
        centered && "text-center mx-auto",
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4"
          )}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
      <div
        className={cn(
          "w-24 h-1 bg-primary rounded-full mt-6",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
