import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { CaseStudyCard } from '../ui/CaseStudyCard';

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm tracking-widest text-text-secondary uppercase">
              01 // Work
            </span>
            <div className="h-px bg-border flex-grow max-w-xs" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Selected Systems.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
