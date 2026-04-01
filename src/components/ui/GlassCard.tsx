import { motion } from 'framer-motion';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ children, className = '', hover = true, glow = false }: GlassCardProps) => (
  <motion.div
    className={`
      rounded-2xl p-6
      bg-white/70 dark:bg-white/[0.05]
      backdrop-blur-xl
      border border-white/40 dark:border-white/[0.1]
      shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.2)]
      transition-colors duration-300
      ${glow ? 'glow-border' : ''}
      ${className}
    `.trim()}
    whileHover={hover ? {
      y: -4,
      transition: { duration: 0.3, ease: 'easeOut' }
    } : undefined}
  >
    {children}
  </motion.div>
);
