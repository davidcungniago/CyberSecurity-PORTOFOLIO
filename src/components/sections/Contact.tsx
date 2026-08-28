import { motion } from "framer-motion";
import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from "react-icons/fi";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";
import { siteConfig } from "../../data/content";

export function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader command="netcat -lvp 4444" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-text/80 text-lg mb-8">
                Listening for incoming connections... Jika Anda memiliki pertanyaan, tawaran kerja, atau sekadar ingin berdiskusi soal keamanan sistem, silakan hubungi saya melalui form atau link di bawah ini.
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-text/70 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center group-hover:border-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">{siteConfig.email}</span>
                </a>
                
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text/70 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center group-hover:border-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">github.com/{siteConfig.username}</span>
                </a>
                
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text/70 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center group-hover:border-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/{siteConfig.username}</span>
                </a>
              </div>
            </div>
            
            <TerminalWindow title="send_message.sh">
              <form className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-text/50 mb-1">Target IP / Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border rounded-sm px-3 py-2 text-text font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="guest@unknown"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs text-text/50 mb-1">Return Address (Email)</label>
                  <input 
                    type="email" 
                    className="w-full bg-background border border-border rounded-sm px-3 py-2 text-text font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="guest@example.com"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs text-text/50 mb-1">Payload (Message)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-background border border-border rounded-sm px-3 py-2 text-text font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="button"
                  className="w-full py-3 bg-text/10 hover:bg-accent hover:text-[#0a0e14] text-text font-mono text-sm transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <span className="text-accent hover:text-[#0a0e14]">$</span> ./execute_send
                </button>
              </form>
            </TerminalWindow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
