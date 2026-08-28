import { siteConfig } from "../../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border mt-24 py-8">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-text/50">
        <div>
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>build: v1.0.0</span>
          <span>status: [OK]</span>
        </div>
      </div>
    </footer>
  );
}
