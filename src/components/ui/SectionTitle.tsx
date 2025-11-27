import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <RevealOnScroll>
    <div className="mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
        {children}
      </h2>
      {subtitle && <div className="h-1 w-20 bg-blue-600 rounded-full mb-4"></div>}
    </div>
  </RevealOnScroll>
);