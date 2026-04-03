import { motion } from 'framer-motion';
import { education } from '../../data/content';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Image/Visual */}
        <motion.div 
          className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220]/80 via-transparent to-transparent z-10" />
          <img 
            src="/images/convocation.webp" 
            alt="Convocation" 
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
            <GraduationCap size={20} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/80">Academic Core</span>
          </div>
        </motion.div>

        {/* Right: Text content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
              Engineering Built on <span className="text-accent">Mathematics.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-text-secondary leading-relaxed font-light">
              {education.description}
            </p>

            <div className="p-6 border border-white/5 rounded-2xl bg-surface/30">
              <h3 className="font-bold text-white text-xl mb-1">{education.degree}</h3>
              <p className="text-sm text-text-secondary uppercase tracking-widest font-mono">
                {education.institution}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
