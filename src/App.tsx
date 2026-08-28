import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { useEffect, useState } from "react";
import { siteConfig } from "./data/content";

function App() {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Fake boot sequence
    const bootLogs = [
      "Initializing core system...",
      "Loading user profile...",
      "Mounting file system...",
      "Starting network interfaces...",
      "Establishing secure connection...",
      "[OK] System ready."
    ];
    
    let currentLog = 0;
    
    const interval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="font-mono text-accent mb-4 text-sm">
            {siteConfig.hostname} login: {siteConfig.username}
          </div>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <div key={i} className="font-mono text-sm text-text/80">
                {log}
              </div>
            ))}
          </div>
          <div className="mt-8 font-mono text-xs text-text/50 animate-pulse">
            Press any key to skip...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent/30 selection:text-accent">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
