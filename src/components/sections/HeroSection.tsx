import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { AnimatedText } from '../ui/AnimatedText';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-10">
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px bg-border w-12 md:w-24" />
            <span className="font-mono text-sm tracking-widest text-text-secondary uppercase">
              {personalInfo.role}
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-balance leading-[1.05] lg:leading-[1.02] mb-8">
            <AnimatedText text={personalInfo.headline} />
          </h1>

          <motion.p 
            className="text-lg md:text-xl text-text-secondary max-w-2xl font-light leading-relaxed text-balance mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {personalInfo.subHeadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button as="a" href="#case-studies" variant="primary" withArrow>
              View Selected Work
            </Button>
            <Button as="a" href={personalInfo.resumePdf} variant="secondary" target="_blank">
              Download Résumé
            </Button>
          </motion.div>
        </div>

        {/* Profile Image Portrait */}
        <motion.div 
           className="lg:col-span-5 relative w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden border-b-0 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent z-10 h-full w-full" />
          <img 
            src="/images/profile.webp?v=2" 
            alt="Abdulyekeen Maadan Portrait" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-text-primary origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
