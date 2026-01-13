import { useMemo, useState } from "react";
import { Mail, Code2, Download, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../../data/content";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const [imgError, setImgError] = useState(false);

  // Optional: respect reduced motion (basic)
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  return (
    <section
      id="home"
      className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] -z-10" />

      {/* Background blobs (disabled if reduced motion) */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-0 -left-6 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-25 dark:opacity-10 animate-blob" />
          <div className="absolute top-8 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply blur-2xl opacity-25 dark:opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-28 left-24 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply blur-2xl opacity-25 dark:opacity-10 animate-blob animation-delay-4000" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-4 md:py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-[11px] md:text-sm font-semibold border border-blue-100 dark:border-blue-800 shadow-sm mt-2 md:mt-0">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to Internship or Junior Roles
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                Junior frontend developer building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  responsive
                </span>{" "}
                web interfaces.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
                Learning JavaScript and React fundamentals, building responsive layouts and small projects while looking for a team to grow with.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row flex-wrap gap-3 pt-4 justify-center md:justify-start">
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

              {/* Proof strip */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>FreeCodeCamp RWD (2022)</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>Learning React + TypeScript</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>Client site contributions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex-1 flex justify-center md:justify-end relative z-10">
              <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-[28rem] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl" />
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-500">
                  {personalInfo.avatar && !imgError ? (
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-[1.02] transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex-1 w-full p-8 flex flex-col items-center justify-center bg-dot-pattern">
                      <div className="w-32 h-32 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                        <Code2 size={64} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{personalInfo.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-mono text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        &lt;FrontendDeveloper /&gt;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
