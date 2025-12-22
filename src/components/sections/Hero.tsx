import { Mail, Code2, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] -z-10"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-10 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-semibold border border-blue-100 dark:border-blue-800 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Full-time Roles
              </div>
              
              {/* IMPACT HEADLINE */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Frontend Engineer building <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  production-ready
                </span> React apps.
              </h1>
              
              {/* SUB-HEADLINE */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                I design and ship clean, scalable user interfaces for real businesses — from NGOs to startups. Self-taught engineer with a Mathematics background.
              </p>
              
              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:shadow-blue-400/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
                <a 
                  href={personalInfo.resumePdf} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download size={20} />
                  View CV
                </a>
              </div>

              {/* PROOF STRIP (The High-Value Tweak) */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center md:justify-start text-sm font-medium text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>5+ Real-world sites shipped</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>React, TS, Framer Motion</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>Clients across NGO & Business</span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Hero Visual */}
            <div className="flex-1 flex justify-center md:justify-end relative z-10 animate-in fade-in zoom-in duration-1000 delay-300">
               <div className="w-64 h-64 md:w-md md:h-112 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-500">
                      
                      {personalInfo.avatar ? (
                         <div className="w-full h-full relative">
                           <img 
                              src={personalInfo.avatar} 
                              alt={personalInfo.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = document.getElementById('avatar-fallback');
                                if(fallback) fallback.style.display = 'flex';
                              }}
                           />
                           <div id="avatar-fallback" className="hidden absolute inset-0 flex-col items-center justify-center bg-dot-pattern">
                              <div className="w-32 h-32 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                                <Code2 size={64} className="text-blue-600 dark:text-blue-400" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{personalInfo.name}</h3>
                           </div>
                         </div>
                      ) : (
                        <div className="flex-1 w-full p-8 flex flex-col items-center justify-center bg-dot-pattern">
                           <div className="w-32 h-32 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-1.02 transition-transform duration-500">
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