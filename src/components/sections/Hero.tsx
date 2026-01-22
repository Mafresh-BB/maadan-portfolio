import { useMemo, useState } from "react";
import { Mail, Code2, Download, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/content";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const highlightChips = ["React", "TypeScript", "Tailwind", "Vite"];

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const [imgError, setImgError] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const floatClass = prefersReducedMotion ? "" : "animate-float";
  const blobClass = prefersReducedMotion ? "" : "animate-blob";

  return (
    <section
      id="home"
      className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className={`absolute -top-20 right-10 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl ${blobClass}`} />
        <div className={`absolute top-24 -left-10 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl ${blobClass} animation-delay-2000`} />
        <div className={`absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl ${blobClass} animation-delay-4000`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-white/10 text-gray-800 dark:text-gray-100 rounded-full text-xs sm:text-sm font-semibold border border-gray-200/70 dark:border-white/10 shadow-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Internship or Junior Roles
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Frontend Developer
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                  Building crisp, responsive{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-300">
                    web experiences
                  </span>{" "}
                  with heart.
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Self-taught and still learning the fundamentals, I craft clean UI, ship fast iterations, and look for teams that value growth.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-100">
                  <MapPin size={16} className="text-blue-500" />
                  {personalInfo.location}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-100">
                  <Sparkles size={16} className="text-emerald-400" />
                  React + TypeScript
                </div>
              </div>

              <div className="flex flex-row flex-wrap gap-3 pt-2 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:shadow-blue-400/50 hover:-translate-y-1 flex items-center justify-center gap-2
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
                >
                  <Mail size={20} />
                  Contact Me
                </button>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
                >
                  <Download size={20} />
                  View CV
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {[
                    "FreeCodeCamp RWD (2022)",
                    "Learning React + TypeScript",
                    "Client site contributions",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-center lg:justify-start gap-2">
                      <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end relative z-10">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className={`absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 shadow-lg ${floatClass}`} />
                <div className={`absolute -bottom-8 right-6 h-24 w-24 rounded-[2rem] bg-blue-500/20 border border-blue-200/50 dark:border-blue-500/20 shadow-lg ${floatClass} animation-delay-3000`} />

                <div className="absolute -top-10 right-8 hidden sm:block">
                  <div className={`px-4 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-100 shadow-lg ${floatClass} animation-delay-1000`}>
                    Available for hire
                  </div>
                </div>

                <div className="relative rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 border border-gray-200/70 dark:border-gray-700/70 shadow-2xl overflow-hidden backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10" />

                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                    {highlightChips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-gray-700 dark:text-gray-100"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="aspect-[4/5] w-full">
                    {!imgError ? (
                      <>
                        <img
                          src="/hero-white.png"
                          alt={`${personalInfo.name} portrait`}
                          className="w-full h-full object-cover dark:hidden"
                          onError={() => setImgError(true)}
                        />
                        <img
                          src="/hero-dark.png"
                          alt={`${personalInfo.name} portrait`}
                          className="hidden dark:block w-full h-full object-cover"
                          onError={() => setImgError(true)}
                        />
                      </>
                    ) : (
                      <div className="flex-1 w-full p-8 flex flex-col items-center justify-center bg-dot-pattern">
                        <div className="w-28 h-28 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                          <Code2 size={56} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{personalInfo.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-mono text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          &lt;FrontendDeveloper /&gt;
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute -bottom-10 left-6 right-6 hidden sm:block">
                  <div className={`rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-gray-200/70 dark:border-gray-700/70 p-4 shadow-xl ${floatClass}`}>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                      Current focus
                    </div>
                    <div className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
                      Building fast, accessible interfaces with React + TypeScript.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
