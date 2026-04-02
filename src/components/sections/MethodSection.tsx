import { motion } from 'framer-motion';
import { personalInfo, skillCategories } from '../../data/content';


export function MethodSection() {
  return (
    <section id="method" className="py-24 md:py-32 bg-surface/30 border-y border-border/50">
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
              02 // Method
            </span>
            <div className="h-px bg-border flex-grow max-w-xs" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            How I Build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-6">
              The Philosophy
            </h3>
            <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light text-balance mb-6">
              {personalInfo.about}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-10%" }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
             {skillCategories.map((category, idx) => (
                <div key={idx} className={idx === 2 ? 'sm:col-span-2' : ''}>
                   <h3 className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-6">
                     {category.title}
                   </h3>
                   <div className="flex flex-col gap-3">
                     {category.skills.map((skill) => (
                       <div key={skill} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                         <span className="font-medium text-sm text-text-primary">{skill}</span>
                       </div>
                     ))}
                   </div>
                </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
