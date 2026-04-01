import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub', hoverColor: 'hover:text-white' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', hoverColor: 'hover:text-blue-400' },
  { icon: Twitter, href: personalInfo.twitter, label: 'Twitter / X', hoverColor: 'hover:text-sky-400' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', hoverColor: 'hover:text-white' },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#080e1a] border-t border-gray-200/50 dark:border-gray-800/50 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {personalInfo.title}
          </p>
        </div>

        <div className="flex gap-5">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={`text-gray-400 ${link.hoverColor} transition-colors`}
              aria-label={link.label}
              whileHover={{ y: -3, scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
