import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/Badge";

// We'll define the props to receive the project data
interface ProjectDetailProps {
  project: any;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex justify-center items-start overflow-y-auto bg-background/95 backdrop-blur-sm p-4 sm:p-8"
    >
      <div className="w-full max-w-4xl min-h-full py-10 flex flex-col relative">
        
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={handleClose}
          className="sticky top-0 self-start inline-flex items-center gap-2 mb-8 text-text/70 hover:text-accent font-mono text-sm transition-colors bg-background/80 px-4 py-2 rounded-full border border-border backdrop-blur-md z-10"
        >
          <ArrowLeft className="w-4 h-4" /> [back_to_projects]
        </motion.button>

        {/* Header - Shared Layout */}
        <motion.div 
          layoutId={`project-container-${project.id}`}
          className="border border-border bg-card rounded-lg p-6 md:p-10 mb-10"
        >
          <motion.h1 
            layoutId={`project-title-${project.id}`}
            className="font-mono text-2xl md:text-4xl font-bold text-accent mb-4"
          >
            {project.title}
          </motion.h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 font-mono text-sm text-text/50">
            <motion.span layoutId={`project-date-${project.id}`}>
              [{project.date}]
            </motion.span>
            <motion.div layoutId={`project-status-${project.id}`}>
              <Badge variant={project.status}>status: {project.status}</Badge>
            </motion.div>
          </div>

          <motion.div layoutId={`project-tags-${project.id}`} className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </motion.div>

          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-text hover:text-accent transition-colors"
            >
              [view_live_source] <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>

        {/* Content Details with Staggered Fade-in */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
          className="space-y-12"
        >
          {/* Gallery / Image */}
          <motion.div 
            layoutId={`project-image-container-${project.id}`}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="border border-border p-2 bg-card/30 rounded-lg relative overflow-hidden"
          >
            {project.image ? (
              <motion.img 
                layoutId={`project-image-${project.id}`}
                src={project.image} 
                alt="Project Preview" 
                className="w-full h-auto max-h-[60vh] object-cover rounded border border-border/50" 
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              />
            ) : (
              <div className="flex items-center justify-center aspect-video text-text/30 font-mono text-sm">
                [image_placeholder.png — 1920x1080]
              </div>
            )}
          </motion.div>

          {/* Overview */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="font-mono text-accent mb-4">$ cat overview.md</div>
            <p className="text-text/80 leading-relaxed">{project.detail.overview}</p>
          </motion.div>

          {/* Problem */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="font-mono text-accent mb-4">$ cat problem.md</div>
            <p className="text-text/80 leading-relaxed">{project.detail.problem}</p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="font-mono text-accent mb-4">$ cat approach.md</div>
            <p className="text-text/80 leading-relaxed">{project.detail.approach}</p>
          </motion.div>

          {/* Impact */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="font-mono text-accent mb-4">$ cat impact.md</div>
            <p className="text-text/80 leading-relaxed">{project.detail.impact}</p>
          </motion.div>

          {/* Sanitized Report Section */}
          {project.detail.report && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-8 border-t border-border/50">
              <div className="font-mono text-accent mb-6 text-xl">$ ls reports/</div>
              
              <div className="border border-border bg-card rounded-lg p-6">
                <div className="mb-8 pb-4 border-b border-border/50">
                  <h3 className="font-mono text-lg mb-2">Sanitized Security Assessment Report</h3>
                  <p className="text-xs font-mono text-warning/80">
                    // Note: Full technical details (endpoints, credentials, payloads) have been redacted for responsible disclosure.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-accent text-sm mb-2"># Executive Summary</h4>
                    <p className="text-text/80 text-sm">{project.detail.report.executiveSummary}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-accent text-sm mb-2"># Methodology</h4>
                    <p className="text-text/80 text-sm">{project.detail.report.methodology}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-accent text-sm mb-4"># Findings Summary</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border text-text/50">
                            <th className="py-2 px-4 font-normal">Category</th>
                            <th className="py-2 px-4 font-normal">Severity</th>
                            <th className="py-2 px-4 font-normal">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.detail.report.findings.map((finding: any, i: number) => (
                            <tr key={i} className="border-b border-border/50 hover:bg-white/5">
                              <td className="py-3 px-4 text-text/80">{finding.category}</td>
                              <td className="py-3 px-4"><Badge variant={finding.severity}>{finding.severity}</Badge></td>
                              <td className="py-3 px-4 text-text/70">{finding.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-accent text-sm mb-2"># Remediation Approach</h4>
                    <p className="text-text/80 text-sm">{project.detail.report.remediation}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-accent text-sm mb-2"># Lessons Learned</h4>
                    <p className="text-text/80 text-sm">{project.detail.report.lessonsLearned}</p>
                  </div>

                  {project.detail.report.hasPdf && (
                    <div className="pt-6 mt-6 border-t border-border/50">
                      <button 
                        onClick={() => setShowPdf(!showPdf)}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-mono text-sm hover:bg-accent/10 hover:border-accent hover:text-accent transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        {showPdf ? "[close_pdf_viewer]" : "[view_full_report.pdf]"}
                      </button>
                      
                      {showPdf && (
                        <div className="mt-4 border border-border rounded bg-[#0a0e14] h-[600px] flex flex-col">
                          <div className="p-2 border-b border-border flex justify-between items-center bg-[#11161d]">
                            <span className="font-mono text-xs text-text/50">report_sanitized.pdf</span>
                            <a href={project.detail.report.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-mono hover:text-accent">
                              <Download className="w-3 h-3" /> download
                            </a>
                          </div>
                          <iframe 
                            src={project.detail.report.pdfUrl} 
                            className="w-full flex-1"
                            title="PDF Report"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>
    </motion.div>
  );
}
