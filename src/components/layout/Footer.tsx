import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/#case-studies" },
    { label: "Writing", path: "/writing" },
    { label: "Contact", path: "/#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", url: personalInfo.linkedin },
    { label: "GitHub", url: personalInfo.github },
    { label: "Twitter", url: personalInfo.twitter },
  ];

  return (
    <footer className="bg-background border-t border-border/30 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8 transition-transform hover:scale-105">
              <img 
                src="/icon.png" 
                alt="Maadan" 
                className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </Link>
            <h3 className="font-display text-2xl font-semibold text-text-primary mb-6 uppercase tracking-tight">
              AbdulYekeen Maadan
            </h3>
            <p className="text-text-secondary max-w-sm leading-relaxed mb-8">
              Building high-signal digital products with a focus on engineering integrity and AI-augmented workflows.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-8">Sitemap</h4>
            <nav className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path}
                  className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center group"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-8">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 text-text-secondary/50 group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center group"
              >
                Drop an email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono text-[10px] text-text-secondary/50 uppercase tracking-[0.2em]">
              © {currentYear} ABDULYEKEEN MAADAN. ALL RIGHTS RESERVED.
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex flex-col items-end">
              <span className="font-mono text-[10px] text-text-secondary/50 uppercase tracking-[0.2em]">Engineered in</span>
              <span className="font-mono text-[10px] text-text-primary uppercase tracking-[0.2em]">Lagos, Nigeria</span>
            </div>
            <div className="w-8 h-px bg-accent/30" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
