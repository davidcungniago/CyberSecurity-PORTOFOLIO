import { siteConfig } from "../../data/content";

interface SectionHeaderProps {
  command: string;
}

export function SectionHeader({ command }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-8 font-mono text-xl sm:text-2xl font-semibold">
      <span className="text-accent">{siteConfig.username}@{siteConfig.hostname}:</span>
      <span className="text-text/70">~</span>
      <span className="text-text">$</span>
      <span className="ml-2">{command}</span>
    </div>
  );
}
