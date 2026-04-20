import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { Badge } from './Badge';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const isEven = index % 2 === 0;
  const isGif = project.image.endsWith('.gif');
  const isVideo = project.image.endsWith('.mp4') || project.image.endsWith('.webm');
  const isAnimated = isGif || isVideo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-24 border-b border-border/50 last:border-0 ${
        project.featured ? 'md:py-28' : ''
      }`}
    >
      {/* Image/Video Container */}
      <div className={`${project.featured ? 'md:col-span-7' : 'md:col-span-7'} relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block relative overflow-hidden bg-surface rounded-sm w-full ${
            isAnimated ? 'aspect-auto' : 'aspect-[4/3]'
          } ${project.featured ? 'ring-1 ring-accent/20 rounded-lg' : ''}`}
          whileHover="hover"
        >
          {isVideo ? (
            <video
              src={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain bg-[#0a0a0a] relative z-10"
            />
          ) : (
            <motion.img 
              src={project.image} 
              alt={project.title}
              className={`w-full h-full object-cover object-center relative z-10 ${
                isGif ? 'object-contain bg-[#0a0a0a]' : ''
              }`}
              variants={{
                hover: { scale: isAnimated ? 1 : 1.05, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            />
          )}
          {/* Cinematic overlay — skip for animated content */}
          {!isAnimated && (
            <motion.div 
              className="absolute inset-0 z-20 bg-background/20"
              variants={{
                hover: { backgroundColor: "rgba(5,5,5,0)", transition: { duration: 0.4 } }
              }}
            />
          )}
        </motion.a>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-30">
            <Badge variant="solid">Featured Project</Badge>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className={`md:col-span-5 flex flex-col gap-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-text-secondary uppercase tracking-widest">
            {project.role}
          </p>
        </div>

        <div className="space-y-4 text-text-secondary leading-relaxed text-[15px]">
          <p><strong className="text-text-primary font-medium">Problem:</strong> {project.problem}</p>
          <p><strong className="text-text-primary font-medium">Execution:</strong> {project.execution}</p>
          <p><strong className="text-text-primary font-medium">Result:</strong> {project.result}</p>
        </div>

        {/* Technical highlights for featured projects */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/30">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Technical Highlights</span>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-text-primary hover:text-accent transition-colors group/link"
          >
            View Live
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors group/gh"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/gh:translate-x-1 group-hover/gh:-translate-y-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
