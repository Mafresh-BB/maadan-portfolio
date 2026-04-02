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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-24 border-b border-border/50 last:border-0`}
    >
      {/* Image Container */}
      <div className={`md:col-span-7 relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden bg-surface rounded-sm aspect-[4/3] w-full"
          whileHover="hover"
        >
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-center relative z-10"
            variants={{
              hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          />
          {/* Cinematic Overlay overlay */}
          <motion.div 
            className="absolute inset-0 z-20 bg-background/20"
            variants={{
              hover: { backgroundColor: "rgba(5,5,5,0)", transition: { duration: 0.4 } }
            }}
          />
        </motion.a>
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

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="pt-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-text-primary hover:text-accent transition-colors group/link"
          >
            Explore System 
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
