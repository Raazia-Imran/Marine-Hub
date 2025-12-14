import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  iconColor = "text-primary",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-secondary rounded-xl p-4 text-center transition-all hover:shadow-md",
        className
      )}
    >
      <Icon className={cn("w-6 h-6 mx-auto mb-2", iconColor)} />
      <div className="text-xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
