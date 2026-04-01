import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#0b1220] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block">
              Education
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Academic Background
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-100/50 dark:border-white/[0.08] shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <GraduationCap size={26} className="text-white" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={12} />{edu.period}</span>
                      {edu.location && <span className="flex items-center gap-1"><MapPin size={12} />{edu.location}</span>}
                    </div>
                    {edu.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-2">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
