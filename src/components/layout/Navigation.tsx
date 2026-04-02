import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex items-center justify-between rounded-none md:rounded-full px-0 md:px-6 py-0 md:py-3 transition-all duration-500 ${
          scrolled ? 'md:bg-surface/80 md:backdrop-blur-md md:border md:border-border/50' : ''
        }`}>
          {/* Logo / Name */}
          <a href="#" className="font-display font-semibold tracking-tight text-white flex gap-2 items-center">
            <span className="w-2 h-2 bg-text-primary rounded-full"></span>
            A. MAADAN
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text-secondary">
            <a href="#case-studies" className="hover:text-text-primary transition-colors">Work</a>
            <a href="#method" className="hover:text-text-primary transition-colors">Methodology</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
          </nav>

          {/* Right Action */}
          <div className="hidden md:block">
            <a 
              href={personalInfo.resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-background bg-text-primary px-4 py-2 rounded-full hover:bg-white/90 transition-colors bg-white font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle (Simplified) */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className="w-5 h-[2px] bg-white block"></span>
            <span className="w-5 h-[2px] bg-white block"></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
