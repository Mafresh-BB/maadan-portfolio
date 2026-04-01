import { useState, useEffect } from 'react';
import { Menu, X, Github, Moon, Sun, Command } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data/content';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  // Morphing values
  const navBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.85)']);
  const navBgDark = useTransform(scrollY, [0, 100], ['rgba(11,18,32,0)', 'rgba(11,18,32,0.85)']);
  const navWidth = useTransform(scrollY, [0, 100], ['100%', '90%']);
  const navBorderRadius = useTransform(scrollY, [0, 100], ['0px', '24px']);
  const navMarginTop = useTransform(scrollY, [0, 100], ['0px', '12px']);
  const navShadow = useTransform(scrollY, [0, 100], ['0 0 0 rgba(0,0,0,0)', '0 8px 32px rgba(0,0,0,0.08)']);

  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
      setScrolled(totalScroll > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const triggerCmdK = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
  };

  return (
    <motion.nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-40 backdrop-blur-xl ${
        scrolled ? 'border border-gray-200/30 dark:border-white/10' : 'border border-transparent'
      }`}
      style={{
        width: navWidth,
        borderRadius: navBorderRadius,
        marginTop: navMarginTop,
        boxShadow: navShadow,
        backgroundColor: theme === 'dark' ? navBgDark : navBg,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="shrink-0 font-bold text-xl tracking-tighter cursor-pointer flex items-center gap-2 group"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:rotate-12 transition-transform text-sm">
              <span className="font-mono">&lt;/&gt;</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 hidden sm:inline">
              MAADAN
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-700 mx-2" />

            <button
              onClick={triggerCmdK}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-100/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all"
            >
              <Command size={11} />
              <span className="font-mono">K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/10 rounded-full transition-colors ml-1"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={triggerCmdK} className="p-2 text-gray-400"><Command size={18} /></button>
            <button onClick={toggleTheme} className="p-2 text-gray-400">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 dark:text-gray-300 p-2">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100/50 dark:border-gray-800/50 absolute w-full rounded-b-2xl shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileClick(link.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${
                    activeSection === link.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
