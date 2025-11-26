import { Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="projects">Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="h-56 bg-linear-to-br from-gray-100 to-gray-200 relative overflow-hidden group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors">
                
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
                      <div id={`project-fallback-${index}`} className="hidden absolute inset-0 flex-col items-center justify-center bg-gray-50">
                         <Globe size={40} className="text-gray-300" />
                      </div>
                   </div>
                ) : (
                  <div className="absolute top-4 left-4 right-4 h-full bg-white rounded-t-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex flex-col">
                     <div className="h-6 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     </div>
                     <div className="flex-1 flex items-center justify-center bg-dot-pattern text-gray-300">
                        <Globe size={40} className="group-hover:text-blue-400 transition-colors" />
                     </div>
                  </div>
                )}

              </div>
              
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 mb-8 grow">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                       <ChevronRight size={16} className="text-blue-400 shrink-0 mt-0.5" />
                       {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-gray-50">
                   <a 
                     href={project.link || "#"} 
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center text-gray-900 font-semibold text-sm hover:text-blue-600 transition-colors group/link"
                   >
                     View Live Project 
                     <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};