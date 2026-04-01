import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';
import { experiences } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // The non-piscine entries scroll in opposite directions on each side
  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const piscine = experiences.find((e) => e.company.includes('Learn2Earn'));
  const others = experiences.filter((e) => !e.company.includes('Learn2Earn'));
  const leftEntries = others.filter((_, i) => i % 2 === 0);
  const rightEntries = others.filter((_, i) => i % 2 !== 0);

  return (
    <section id="experience" ref={sectionRef} className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#0b1220] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block">
              Experience
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Where I've Grown
            </h2>
          </div>
        </RevealOnScroll>

        {/* Three-column Layout: Left | Sticky Piscine | Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Left Column — scrolls up */}
          <motion.div className="space-y-6 hidden lg:block" style={{ y: leftY }}>
            {leftEntries.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} delay={idx * 0.1} />
            ))}
          </motion.div>

          {/* Center — Sticky Piscine Card */}
          <div className="lg:sticky lg:top-[15vh] z-10">
            <RevealOnScroll direction="scale">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800/50 ring-1 ring-blue-100 dark:ring-blue-900/30 shadow-xl">
                {/* Glow Decoration */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">{piscine?.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{piscine?.company}</p>
                  </div>
                </div>

                {/* Image */}
                {piscine?.image && (
                  <div className="rounded-2xl overflow-hidden mb-5 border border-blue-100 dark:border-blue-800/30 relative z-10">
                    <img
                      src={piscine.image}
                      alt="Piscine session"
                      className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Period */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-4 relative z-10">
                  <Briefcase size={12} />
                  {piscine?.period}
                </div>

                {/* Growth Metric */}
                <div className="mb-5 relative z-10">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-gray-500 dark:text-gray-400">Logic Completion Growth</span>
                    <span className="text-blue-600 dark:text-blue-400">28% → 65%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ width: '28%' }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 relative z-10">
                  {piscine?.description.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Closer Badge */}
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold relative z-10">
                  <TrendingUp size={12} />
                  The Closer — Final Raid Technical Anchor
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column — scrolls down */}
          <motion.div className="space-y-6 hidden lg:block" style={{ y: rightY }}>
            {rightEntries.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} delay={idx * 0.1} />
            ))}
          </motion.div>

          {/* Mobile: All other entries stacked below */}
          <div className="lg:hidden space-y-6 col-span-1">
            {others.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Experience Card ─── */
const ExperienceCard = ({ exp, delay }: { exp: typeof experiences[0]; delay: number }) => (
  <RevealOnScroll delay={delay}>
    <div className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3 gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">{exp.role}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-0.5">{exp.company}</p>
        </div>
        {exp.image && (
          <img
            src={exp.image}
            alt={`${exp.role} photo`}
            className="w-12 h-12 rounded-xl object-cover border border-gray-100 dark:border-gray-700 shadow-sm shrink-0"
            loading="lazy"
          />
        )}
      </div>
      <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">
        {exp.period}
      </span>
      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </RevealOnScroll>
);
