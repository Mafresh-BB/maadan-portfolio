import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="education">Education</SectionTitle>
        <RevealOnScroll>
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-8 items-center md:items-start hover:shadow-lg transition-shadow">
          <div className="shrink-0 flex items-center md:flex-col md:items-start gap-4 md:gap-6">
            <div className="p-4 md:p-5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
              <GraduationCap size={32} className="md:w-10 md:h-10" />
            </div>
            {education.image && (
              <img
                src={education.image}
                alt="Convocation portrait"
                className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm saturate-75 contrast-90"
                loading="lazy"
              />
            )}
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{education.degree}</h3>
                  <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">{education.school}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 text-sm font-semibold border border-gray-100 dark:border-gray-600">
                <BookOpen size={16} /> {education.period}
              </div>
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mt-4">
               {education.details.map((detail, index) => (
                  <div key={index} className="flex gap-3 mb-3 last:mb-0">
                     <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mt-2.5 shrink-0"></span>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{detail}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
