import { motion } from 'framer-motion';
import { metrics } from '../../data/content';

export function MetricsBar() {
  return (
    <section className="border-y border-border/50 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col gap-1 ${index === 0 ? '' : 'pt-8 md:pt-0 md:pl-12'} md:justify-center`}
            >
              <h4 className="font-mono text-sm tracking-widest text-text-secondary uppercase">
                {metric.label}
              </h4>
              <p className="font-display text-xl md:text-2xl font-medium tracking-tight text-text-primary">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
