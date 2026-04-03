import { motion } from 'framer-motion';
import { testimonials } from '../../data/content';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
            Proof of Work
          </h2>
          <p className="text-text-secondary max-w-md font-light text-balance">
            Don't just take my word for it. Here's what colleagues and clients say about my approach to engineering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative p-8 md:p-10 rounded-2xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:bg-surface transition-colors"
          >
            <Quote className="text-white/10 w-12 h-12 absolute top-6 right-6 group-hover:text-white/20 transition-colors" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl font-display leading-relaxed text-text-primary mb-8 font-light italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-mono text-sm text-accent font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-xs text-text-secondary uppercase tracking-wider mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
