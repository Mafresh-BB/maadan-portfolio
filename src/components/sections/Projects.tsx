import { Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="projects">Featured Projects</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
            <div className="group flex flex-col h-full bg-white dark:bg-gray-700 rounded-2xl border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="h-48 sm:h-56 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden group-hover:from-blue-50 dark:group-hover:from-gray-800 group-hover:to-indigo-50 dark:group-hover:to-gray-900 transition-colors">
                
                {project.image ? (
                   <div className="w-full h-full relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = document.getElementById(`project-fallback-${index}`);
                          if(fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div id={`project-fallback-${index}`} className="hidden absolute inset-0 flex-col items-center justify-center bg-gray-50 dark:bg-gray-800">
                         <Globe size={40} className="text-gray-300 dark:text-gray-600" />
                      </div>
                   </div>
                ) : (
                  <div className="absolute top-4 left-4 right-4 h-full bg-white dark:bg-gray-800 rounded-t-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex flex-col">
                     <div className="h-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     </div>
                     <div className="flex-1 flex items-center justify-center bg-dot-pattern text-gray-300 dark:text-gray-600">
                        <Globe size={40} className="group-hover:text-blue-400 transition-colors" />
                     </div>
                  </div>
                )}

              </div>
              
              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-100 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 mb-8 grow">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                       <ChevronRight size={16} className="text-blue-400 shrink-0 mt-0.5" />
                       {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-600">
                   <a 
                     href={project.link || "#"} 
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center text-gray-900 dark:text-white font-semibold text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                   >
                     View Live Project 
                     <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                   </a>
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
