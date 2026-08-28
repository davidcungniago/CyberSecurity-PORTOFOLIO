import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { projectsData } from "../../data/content";
import { ProjectDetail } from "./ProjectDetail";

export function Projects() {
  const location = useLocation();
  const match = location.pathname.match(/^\/projects\/(.+)$/);
  const selectedSlug = match ? match[1] : null;
  const selectedProject = projectsData.find(p => p.slug === selectedSlug);

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        {/* Main List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader command="tail -f /var/log/projects.log" />
          
          <div className="space-y-6">
            {projectsData.map((project, idx) => (
              <Link to={`/projects/${project.slug}`} key={project.id} className="block group">
                <motion.div 
                  layoutId={`project-container-${project.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="border border-border bg-card rounded-lg p-6 hover:border-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Project text */}
                    <div className="flex-1 order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FolderGit2 className="w-5 h-5 text-accent" />
                        <motion.h3 
                          layoutId={`project-title-${project.id}`}
                          className="font-mono text-xl font-semibold text-text group-hover:text-accent transition-colors"
                        >
                          {project.title}
                        </motion.h3>
                      </div>
                      
                      <div className="font-mono text-xs text-text/50 mb-4 flex items-center gap-4">
                        <motion.span layoutId={`project-date-${project.id}`}>
                          [{project.date}]
                        </motion.span>
                        <motion.div layoutId={`project-status-${project.id}`}>
                          <Badge variant={project.status as any}>
                            status: {project.status}
                          </Badge>
                        </motion.div>
                      </div>
                      
                      <p className="text-text/80 mb-6 max-w-3xl">
                        {project.description}
                      </p>
                      
                      <motion.div layoutId={`project-tags-${project.id}`} className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </motion.div>
                    </div>

                    {/* Project thumbnail */}
                    {project.image && (
                      <motion.div 
                        layoutId={`project-image-container-${project.id}`}
                        className="w-full md:w-56 h-36 shrink-0 order-1 md:order-2 rounded border border-border bg-card/50 overflow-hidden relative group-hover:border-accent/50 transition-colors"
                      >
                        <div className="absolute inset-0 opacity-10 flex items-center justify-center font-mono text-[8px] text-accent leading-none overflow-hidden select-none pointer-events-none">
                          {Array(10).fill("IMG").join(" ")}
                        </div>
                        <motion.img 
                          layoutId={`project-image-${project.id}`}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10 mix-blend-luminosity group-hover:mix-blend-normal"
                          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Overlay Detail */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail project={selectedProject} />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
