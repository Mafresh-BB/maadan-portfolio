import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <motion.div
    className={`
      bg-white dark:bg-gray-800/80
      p-6 rounded-2xl shadow-sm
      border border-gray-100 dark:border-gray-700/50
      backdrop-blur-sm
      transition-colors duration-300
      ${className}
    `.trim()}
    whileHover={{
      y: -6,
      transition: { duration: 0.3, ease: 'easeOut' }
    }}
  >
    {children}
  </motion.div>
);