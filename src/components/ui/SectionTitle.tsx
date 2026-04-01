import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

export const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <RevealOnScroll>
    <div className="mb-16">
      {subtitle && (
        <motion.span
          className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
        {children}
      </h2>
      <motion.div
        className="h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
    </div>
  </RevealOnScroll>
);
