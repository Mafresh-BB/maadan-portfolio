import { useEffect, useMemo, useState } from "react";
import { Mail, Code2, Download } from "lucide-react";
import { personalInfo } from "../../data/content";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const rotatingWords = ["Creative", "Responsive", "Thoughtful", "Intentional"];
const typeSpeedMs = 90;
const deleteSpeedMs = 45;
const pauseMs = 900;

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const [imgError, setImgError] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const floatClass = prefersReducedMotion ? "" : "animate-float";
  const blobClass = prefersReducedMotion ? "" : "animate-blob";

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharIndex(rotatingWords[wordIndex].length);
      return;
    }

    const currentWord = rotatingWords[wordIndex];
    const isWordComplete = charIndex === currentWord.length;
    const isWordEmpty = charIndex === 0;
    let delay = isDeleting ? deleteSpeedMs : typeSpeedMs;

    if (!isDeleting && isWordComplete) {
      delay = pauseMs;
    }

    if (isDeleting && isWordEmpty) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      delay = typeSpeedMs;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isWordComplete) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && !isWordEmpty) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, prefersReducedMotion, wordIndex]);

  return (
    <section
      id="home"
      className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-[0.1]" />
      <div className="absolute inset-0">
        <div className={`absolute -top-20 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl ${blobClass}`} />
        <div className={`absolute top-24 -left-10 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl ${blobClass} animation-delay-2000`} />
        <div className={`absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl ${blobClass} animation-delay-4000`} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <span className={`absolute left-10 top-16 h-3 w-12 rounded-full border border-gray-300/60 dark:border-white/20 ${floatClass}`} />
        <span className={`absolute right-10 top-24 h-4 w-4 rounded-full border border-blue-400/40 ${floatClass} animation-delay-1000`} />
        <span className={`absolute right-24 bottom-16 h-3 w-10 rounded-full border border-blue-400/40 ${floatClass} animation-delay-3000`} />
        <span className="absolute left-1/2 top-10 h-2 w-2 rounded-full bg-gray-400/50 dark:bg-white/40" />
        <span className="absolute left-20 bottom-20 h-2 w-2 rounded-full bg-gray-400/50 dark:bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-start relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 rounded-full bg-white/70 dark:bg-white/10" />
                <div className={`absolute -inset-4 rounded-full border border-gray-200/70 dark:border-white/10 ${floatClass}`} />
                <div className="absolute -inset-8 rounded-full border border-gray-200/40 dark:border-white/5" />
                <div className="absolute -left-10 bottom-6 text-6xl font-extrabold text-gray-900/70 dark:text-white/80">01</div>
                <div className="absolute -right-8 top-8 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-white/50">
                  <span className="rotate-90 origin-left">Scroll down</span>
                  <span className="h-12 w-px bg-gray-300 dark:bg-white/30" />
                </div>

                <div className="relative w-full h-full overflow-visible">
                  <div className="absolute -inset-6 rounded-full bg-blue-500/15 blur-2xl dark:bg-blue-500/20" />
                  <div className="absolute -inset-2 rounded-full border border-gray-200/70 dark:border-white/10" />
                  <div className="absolute -inset-2 rounded-full pointer-events-none">
                    <span className="absolute -top-1 right-8 h-3 w-8 bg-gray-50 dark:bg-slate-950" />
                  </div>
                  <div className="relative z-10 w-full h-full rounded-full bg-white/80 dark:bg-white/5 shadow-2xl overflow-hidden border border-gray-200/60 dark:border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_60%)]" />
                    {!imgError ? (
                      <img
                        src="/hero-transparent.png"
                        alt={`${personalInfo.name} portrait`}
                        className="w-full h-full object-cover object-[50%_20%]"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/60 dark:bg-black/40">
                        <div className="w-16 h-16 bg-white/80 dark:bg-white/10 rounded-full flex items-center justify-center mb-4">
                          <Code2 size={28} className="text-gray-900 dark:text-white" />
                        </div>
                        <div className="text-sm font-semibold text-white">{personalInfo.name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-white/10 text-gray-800 dark:text-white rounded-full text-xs sm:text-sm font-semibold border border-gray-200/70 dark:border-white/10 shadow-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Internship or Junior Roles
              </div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-500 dark:text-white/50">
                  Frontend Developer
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-white dark:via-white/90 dark:to-white/70">
                    {rotatingWords[wordIndex].slice(0, charIndex)}
                  </span>
                  <span className="inline-block w-[0.6ch] text-blue-600 dark:text-white/80 animate-pulse">|</span>
                  <span className="ml-2 text-gray-900 dark:text-blue-300">DEVELOPER</span>
                </h1>
                <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-gray-500 dark:text-white/50">
                  Sensible to frontend
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build responsive interfaces with clean structure, smooth motion, and strong visual hierarchy.
              </p>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                {personalInfo.stackSummary}
              </div>

              <div className="flex flex-row flex-wrap gap-3 pt-2 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-blue-900/30 hover:-translate-y-1 flex items-center justify-center gap-2
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-slate-950"
                >
                  <Mail size={20} />
                  Contact Me
                </button>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base bg-white dark:bg-transparent text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-white/30 hover:border-gray-300 dark:hover:border-white/60 hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-slate-950"
                >
                  <Download size={20} />
                  View CV
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-white/40">
                <span>{personalInfo.location}</span>
                <span className="h-3 w-px bg-gray-300 dark:bg-white/20" />
                <span>{personalInfo.timezone}</span>
                <span className="h-3 w-px bg-gray-300 dark:bg-white/20" />
                <span>React + TypeScript</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
