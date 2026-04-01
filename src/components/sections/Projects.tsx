import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

/* ─── Individual Stacked Card ─── */
const ProjectCard = ({ project, index, totalCards }: { project: typeof projects[0]; index: number; totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="stacked-card w-full"
      style={{
        scale,
        opacity,
        zIndex: totalCards - index,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="h-64 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden group">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-dot-pattern">
                  <Globe size={48} className="text-gray-300 dark:text-gray-600" />
                </div>
              )}

              {/* Gallery thumbnails */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {project.gallery.slice(0, 2).map((src, i) => (
                    <div key={i} className="w-16 h-12 rounded-lg overflow-hidden border border-white/30 shadow-sm">
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100/50 dark:border-blue-800/30">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">{project.title}</h3>

              <ul className="space-y-3 mb-8">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <ChevronRight size={14} className="text-blue-400 shrink-0 mt-0.5" />
                    {desc}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                >
                  View Live
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
export const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50/50 dark:bg-[#0b1220] transition-colors duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="pt-24 sm:pt-32">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block">
                Projects
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Featured Work
              </h2>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stacked Cards */}
        <div className="space-y-8 pb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
