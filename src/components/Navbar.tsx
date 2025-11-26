import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { personalInfo } from '../data/content';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleMobileClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-40 border-b border-gray-200/50 supports-backdrop-filter:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
             className="shrink-0 font-bold text-2xl tracking-tighter cursor-pointer flex items-center gap-2 group" 
             onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform">
              <span className="font-mono text-lg">&lt;/&gt;</span>
            </div>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
              MAADAN
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id 
                    ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a 
               href={personalInfo.github}
               target="_blank"
               rel="noreferrer"
               className="ml-4 p-2 text-gray-500 hover:text-black transition-colors"
            >
               <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleMobileClick(link.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${
                  activeSection === link.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};