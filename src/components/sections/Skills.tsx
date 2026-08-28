import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";
import { skillsData } from "../../data/content";

export function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader command="ls -la skills/" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <TerminalWindow key={idx} title={`./${skillGroup.category.toLowerCase().replace(/ /g, '_')}.sh`}>
                  <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                    <Icon className="w-5 h-5 text-accent" />
                    <h3 className="font-mono text-lg">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between font-mono text-sm mb-1.5">
                          <span className="text-text/80">{skill.name}</span>
                          <span className="text-text/50">{skill.level}%</span>
                        </div>
                        {/* ASCII-style progress bar */}
                        <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TerminalWindow>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
