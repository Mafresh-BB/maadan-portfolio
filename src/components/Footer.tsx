import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {personalInfo.title}
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={personalInfo.twitter} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            aria-label="Twitter / X"
          >
            <Twitter size={20} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
