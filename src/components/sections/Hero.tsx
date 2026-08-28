import { motion } from "framer-motion";
import { siteConfig } from "../../data/content";
import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = siteConfig.role;
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            {/* Terminal styled profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 mb-6 rounded-lg border border-border bg-card overflow-hidden group relative hover:border-accent/80 transition-colors duration-500 shadow-xl inline-block"
            >
              {/* Window controls */}
              <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border bg-[#161d27]">
                <div className="w-1.5 h-1.5 rounded-full bg-danger/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-warning/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-success/80"></div>
              </div>
              
              {/* Image with grayscale effect */}
              <div className="w-full h-[calc(100%-1.25rem)] bg-background relative">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center font-mono text-[8px] text-accent leading-none overflow-hidden select-none pointer-events-none">
                  {Array(10).fill("10").join(" ")}
                </div>
                
                <img 
                  src="/assets/profile.jpg" 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </motion.div>

            <div className="block">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-success/10 border border-success/20 text-success text-xs font-mono mb-4">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(149,183,126,0.6)]"></div>
                [STATUS: {siteConfig.status}]
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight">
              Hi, I'm <span className="text-accent">{siteConfig.name}</span>.
            </h1>
            
            <div className="text-2xl md:text-3xl font-mono text-text/80 h-10">
              <span>&gt; </span>
              {typedText}
              <span className="animate-blink inline-block w-3 h-8 bg-accent ml-1 align-middle shadow-[0_0_10px_rgba(57,186,230,0.5)]"></span>
            </div>
            
            <p className="text-lg text-text/60 max-w-2xl mt-6">
              {siteConfig.tagline}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a 
                href="#projects"
                className="px-6 py-3 bg-accent text-[#0a0e14] font-mono font-medium hover:bg-accent/90 transition-colors rounded-sm shadow-[0_0_15px_rgba(57,186,230,0.3)] hover:shadow-[0_0_20px_rgba(57,186,230,0.5)]"
              >
                ./view_projects.sh
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border border-border text-text font-mono hover:bg-card hover:border-accent/50 transition-colors rounded-sm"
              >
                ping --contact
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
