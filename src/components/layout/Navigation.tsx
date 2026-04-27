import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../../data/content';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex items-center justify-between rounded-none md:rounded-full px-0 md:px-6 py-0 md:py-3 transition-all duration-500 ${scrolled ? 'md:bg-surface/80 md:backdrop-blur-md md:border md:border-border/50' : ''
          }`}>
          {/* Logo / Name */}
          <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
            <img
              src="/logo_horizontal.png"
              alt="ABDULYEKEEN MAADAN"
              className="h-6 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text-secondary">
            {isBlogPage ? (
              <>
                <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
                <Link to="/#case-studies" className="hover:text-text-primary transition-colors">Work</Link>
                <Link to="/#contact" className="hover:text-text-primary transition-colors">Contact</Link>
              </>
            ) : (
              <>
                <a href="#case-studies" className="hover:text-text-primary transition-colors">Work</a>
                <Link to="/writing" className="hover:text-text-primary transition-colors">Writing</Link>
                <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
              </>
            )}
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-[#0b1220]/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {isBlogPage ? (
            <>
              <Link to="/" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Home</Link>
              <Link to="/#case-studies" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Work</Link>
              <Link to="/#contact" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Contact</Link>
            </>
          ) : (
            <>
              <a href="#case-studies" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Work</a>
              <Link to="/writing" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Writing</Link>
              <a href="#contact" onClick={() => setIsOpen(false)} className="font-display text-3xl text-white hover:text-accent transition-colors">Contact</a>
            </>
          )}
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm uppercase tracking-widest text-[#0b1220] bg-white px-6 py-3 rounded-full mt-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
}
