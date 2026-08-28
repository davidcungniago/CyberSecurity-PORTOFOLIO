import type { ReactNode } from "react";
import { cn } from "../../utils";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function TerminalWindow({ children, className, title }: TerminalWindowProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#161d27]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-danger/80"></div>
          <div className="w-3 h-3 rounded-full bg-warning/80"></div>
          <div className="w-3 h-3 rounded-full bg-success/80"></div>
        </div>
        {title && (
          <div className="text-xs font-mono text-text/50 select-none">
            {title}
          </div>
        )}
        <div className="w-11"></div> {/* Spacer for symmetry */}
      </div>
      
      {/* Window Body */}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
}
