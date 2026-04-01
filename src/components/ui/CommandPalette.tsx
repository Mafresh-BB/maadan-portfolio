import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Moon, Sun, MessageSquare, Download, Github, Home, User, Briefcase, Code2, GraduationCap, Mail, Star } from 'lucide-react';
import { personalInfo } from '../../data/content';
import { useTheme } from '../../hooks/useTheme';

interface CommandPaletteProps {
  scrollToSection: (id: string) => void;
  onOpenChat?: () => void;
}

export const CommandPalette = ({ scrollToSection, onOpenChat }: CommandPaletteProps) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (fn: () => void) => {
    fn();
    setOpen(false);
  };

  const sections = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Logic Engines', id: 'logic-engines', icon: Code2 },
    { name: 'Projects', id: 'projects', icon: Code2 },
    { name: 'Testimonials', id: 'testimonials', icon: Star },
    { name: 'Education', id: 'education', icon: GraduationCap },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="fixed top-[20%] left-1/2 z-[101] w-[90%] max-w-lg"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Command
              className="bg-white/90 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden"
              label="Command Menu"
            >
              <div className="flex items-center gap-3 px-4 border-b border-gray-100 dark:border-gray-800">
                <Search size={18} className="text-gray-400" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>

              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-gray-500">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigate" className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-2">
                  {sections.map((section) => (
                    <Command.Item
                      key={section.id}
                      onSelect={() => runCommand(() => scrollToSection(section.id))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 transition-colors"
                    >
                      <section.icon size={16} className="text-gray-400" />
                      <span>{section.name}</span>
                      <ArrowRight size={14} className="ml-auto text-gray-300" />
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator className="h-px bg-gray-100 dark:bg-gray-800 my-1" />

                <Command.Group heading="Actions" className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-2">
                  <Command.Item
                    onSelect={() => runCommand(toggleTheme)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 transition-colors"
                  >
                    {theme === 'light' ? <Moon size={16} className="text-gray-400" /> : <Sun size={16} className="text-gray-400" />}
                    <span>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                  </Command.Item>

                  {onOpenChat && (
                    <Command.Item
                      onSelect={() => runCommand(onOpenChat)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 transition-colors"
                    >
                      <MessageSquare size={16} className="text-gray-400" />
                      <span>Ask AI Assistant</span>
                    </Command.Item>
                  )}

                  <Command.Item
                    onSelect={() => runCommand(() => window.open(personalInfo.resumePdf, '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 transition-colors"
                  >
                    <Download size={16} className="text-gray-400" />
                    <span>Download Resume</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => window.open(personalInfo.github, '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 transition-colors"
                  >
                    <Github size={16} className="text-gray-400" />
                    <span>Open GitHub</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="px-4 py-2.5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                <span>Navigate with ↑↓ • Select with ↵</span>
                <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono">ESC</span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
