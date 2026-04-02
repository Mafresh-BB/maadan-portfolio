import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const links = [
    { label: "Email", url: `mailto:${personalInfo.email}` },
    { label: "GitHub", url: personalInfo.github },
    { label: "LinkedIn", url: personalInfo.linkedin },
    { label: "Twitter / X", url: personalInfo.twitter },
    { label: "Résumé", url: personalInfo.resumePdf }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-full flex flex-col items-center"
        >
          <span className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-8">
            03 // Next Steps
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-balance leading-[1] mb-12 uppercase">
            Let's build <br /> something <br /> <span className="text-text-secondary">exceptional.</span>
          </h2>
          
          <a 
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center justify-center gap-3 bg-text-primary text-background px-8 py-4 rounded-full font-medium text-lg mb-8 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <p className="font-mono text-sm text-text-secondary/70 italic mb-24 max-w-md text-balance">
            "{personalInfo.personality}"
          </p>
        </motion.div>

        {/* Footer Links Matrix */}
        <motion.div 
           className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-border/50 pt-12"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3 }}
        >
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1 font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors hover:-translate-y-0.5"
            >
              {link.label}
              {idx !== 0 && <ArrowUpRight className="w-3 h-3 opacity-50" />}
            </a>
          ))}
        </motion.div>
        
        <div className="mt-24 font-mono text-xs text-text-secondary/50">
          © {new Date().getFullYear()} ABDULYEKEEN MAADAN. ENGINEERED IN LAGOS.
        </div>
      </div>
    </section>
  );
}
