import type { ReactNode } from "react";
import { cn } from "../../utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "border-border text-text/80 bg-background/50",
    success: "border-success/30 text-success bg-success/10",
    warning: "border-warning/30 text-warning bg-warning/10",
    danger: "border-danger/30 text-danger bg-danger/10",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded-sm",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
