import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Download, Code2, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/content';

const rotatingWords = ['Creative', 'Responsive', 'Logic-Driven', 'Intentional'];
const typeSpeedMs = 90;
const deleteSpeedMs = 45;
const pauseMs = 900;

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax-fade: content fades and moves up as you scroll away
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const imageY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharIndex(rotatingWords[wordIndex].length);
      return;
    }
    const currentWord = rotatingWords[wordIndex];
    const isWordComplete = charIndex === currentWord.length;
    const isWordEmpty = charIndex === 0;
    let delay = isDeleting ? deleteSpeedMs : typeSpeedMs;
    if (!isDeleting && isWordComplete) delay = pauseMs;
    if (isDeleting && isWordEmpty) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      delay = typeSpeedMs;
    }
    const timer = window.setTimeout(() => {
      if (!isDeleting && !isWordComplete) setCharIndex((p) => p + 1);
      else if (isDeleting && !isWordEmpty) setCharIndex((p) => p - 1);
      else if (!isDeleting && isWordComplete) setIsDeleting(true);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, prefersReducedMotion, wordIndex]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#0b1220] transition-colors duration-300"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: bgScale }}>
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] dark:opacity-[0.12]" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-400/10 dark:bg-indigo-400/15 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[80px] animate-blob animation-delay-4000" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Profile Image with orbit */}
        <motion.div
          className="relative mb-10"
          style={{ scale: imageScale, y: imageY }}
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl" />
            <motion.div
              className="absolute -inset-6 rounded-full border border-blue-500/20 dark:border-blue-400/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-10 rounded-full border border-dashed border-indigo-400/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {/* Small orbiting dot */}
            <motion.div
              className="absolute -inset-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            </motion.div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl">
              {!imgError ? (
                <img
                  src="/images/hero-transparent.webp"
                  alt={`${personalInfo.name} portrait`}
                  className="w-full h-full object-cover object-[50%_20%]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
                  <Code2 size={28} className="text-white" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="space-y-6"
        >
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full text-xs font-semibold border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Internship & Junior Roles
            </div>
          </motion.div>

          {/* Massive Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-gray-400 dark:text-white/30 mb-4">
              Frontend Developer
            </p>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
              <span className="gradient-text dark:gradient-text-light block">
                {rotatingWords[wordIndex].slice(0, charIndex)}
                <span className="inline-block w-[0.5ch] text-blue-600 dark:text-white/40 animate-pulse">|</span>
              </span>
              <span className="text-gray-900 dark:text-white/90 block mt-2">Developer.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-gray-500 dark:text-white/50 leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Building responsive interfaces with clean structure, smooth motion, and strong visual hierarchy.
          </motion.p>

          {/* Stack */}
          <motion.div
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {personalInfo.stackSummary}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </button>
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 text-sm font-bold bg-white/80 dark:bg-white/5 backdrop-blur-sm text-gray-800 dark:text-white rounded-full border border-gray-200 dark:border-white/15 hover:border-gray-300 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Download size={18} />
              View Resume
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-white/25 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span>{personalInfo.location}</span>
            <span className="h-3 w-px bg-gray-300/50 dark:bg-white/10" />
            <span>{personalInfo.timezone}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-gray-300 dark:text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};
