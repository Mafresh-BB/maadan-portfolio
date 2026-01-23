import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="experience">Experience</SectionTitle>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 left-0 md:left-auto absolute md:relative">
                 <Briefcase size={16} className="text-white" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 ml-auto md:ml-0">
                <RevealOnScroll>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group-hover:-translate-y-1 relative">
                  {/* Arrow for Desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-r border-gray-100 dark:border-gray-700 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-r-0 border-t-0 border-l border-b shadow-[-2px_2px_2px_-1px_rgba(0,0,0,0.05)]' : '-right-2 shadow-[2px_-2px_2px_-1px_rgba(0,0,0,0.05)]'}`}></div>

                  <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                     <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{exp.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">{exp.company}</p>
                     </div>
                     <div className="flex items-center gap-3">
                      {exp.image && (
                        <img
                          src={exp.image}
                          alt={`${exp.role} photo`}
                          className="w-14 h-14 rounded-xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm"
                          loading="lazy"
                        />
                      )}
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold whitespace-nowrap">
                        {exp.period}
                      </span>
                     </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
