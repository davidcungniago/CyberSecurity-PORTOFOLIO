import { useState, useEffect } from "react";
import { siteConfig } from "../../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "~/about", href: "#about" },
    { name: "~/skills", href: "#skills" },
    { name: "~/projects", href: "#projects" },
    { name: "~/contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-background/85 backdrop-blur-md border-accent/30 shadow-[0_1px_15px_rgba(57,186,230,0.05)] py-4" : "bg-transparent border-transparent py-6"}`}>
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        
        <a href="#" className="font-mono font-bold text-lg hover:text-accent transition-colors flex items-center gap-2 group">
          {/* Live connection dot */}
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(149,183,126,0.8)]" title="Connection: Secure"></div>
          
          <div>
            <span className="text-accent">{siteConfig.username}</span>
            <span className="text-text/50">@</span>
            <span>{siteConfig.hostname}</span>
            {/* Blinking cursor in logo */}
            <span className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle animate-blink opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="group font-mono text-sm text-text/70 transition-colors relative flex items-center"
            >
              {/* Bracket effect on hover */}
              <span className="text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 mr-1">[</span>
              <span className="group-hover:text-accent transition-colors">{link.name}</span>
              <span className="text-accent opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ml-1">]</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
