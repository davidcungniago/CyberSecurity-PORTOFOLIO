import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";
import { aboutData } from "../../data/content";

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader command="whoami" />
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <TerminalWindow title="user_profile.txt">
                <p className="text-text/80 leading-relaxed text-lg mb-6">
                  {aboutData.summary}
                </p>
                
                <div className="mt-8">
                  <div className="font-mono text-accent mb-4">$ cat interests.txt</div>
                  <ul className="space-y-2 font-mono text-sm">
                    {aboutData.interests.map((interest, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-success">&gt;</span>
                        <span className="text-text/80">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TerminalWindow>
            </div>
            
            <div className="md:col-span-2 hidden md:block">
              {/* Decorative ASCII art or grid element */}
              <div className="h-full border border-border/50 rounded-lg bg-card/30 flex items-center justify-center p-6 text-text/10 font-mono text-xs overflow-hidden select-none">
                <pre>
{`
01010011 01000101
01000011 01010101
01010010 01001001
01010100 01011001

   ______
  / ____/
 / / __  
/ /_/ /  
\\____/   
`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
