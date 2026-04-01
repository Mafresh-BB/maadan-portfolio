import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Star, Layout, Database, Github, GraduationCap } from 'lucide-react';
import { personalInfo, skills, braggingRights, resumeHighlights, otherCompetence } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  // Circle expands as the section scrolls into viewport
  const clipRadius = useTransform(scrollYProgress, [0, 0.8], [5, 150]);

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen transition-colors duration-300">
      {/* Circle Reveal Mask */}
      <motion.div
        className="bg-white dark:bg-gray-900/95 transition-colors duration-300"
        style={{
          clipPath: useTransform(clipRadius, (v) => `circle(${v}% at 50% 50%)`),
        }}
      >
        <div className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-3 block">
                  About
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  My Journey & Skills
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  {personalInfo.about}
                </p>
              </div>
            </RevealOnScroll>

            {/* Skill Categories - Now a 2x2 grid with large icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {[
                { icon: Layout, title: 'Frontend', sub: 'React, TS, Tailwind', gradient: 'from-blue-500 to-cyan-400' },
                { icon: Database, title: 'Backend / Logic', sub: 'Go, Algorithms', gradient: 'from-green-500 to-emerald-400' },
                { icon: Github, title: 'Workflow', sub: 'Git, Unix Shell', gradient: 'from-purple-500 to-violet-400' },
                { icon: GraduationCap, title: 'Problem Solving', sub: 'Math + Logic', gradient: 'from-orange-500 to-amber-400' },
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 0.1} direction="scale">
                  <GlassCard className="flex flex-col items-center justify-center text-center py-8 sm:py-10" glow>
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                      <item.icon size={28} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.sub}</p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>

            {/* Skills Marquee - full width dark band */}
            <RevealOnScroll>
              <div className="bg-gray-900 dark:bg-black/60 rounded-3xl p-6 sm:p-8 mb-16 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-15 -mr-16 -mt-16" />
                <h3 className="font-bold text-white mb-5 flex items-center gap-2 text-base sm:text-lg relative z-10">
                  <Terminal size={20} className="text-blue-400" />
                  Technical Stack
                </h3>
                <div className="relative w-full overflow-hidden z-10 py-2">
                  <div className="flex gap-3 animate-marquee whitespace-nowrap">
                    {duplicatedSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Two-column: Bragging Rights + Resume Highlights */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <RevealOnScroll direction="left">
                <GlassCard className="h-full !bg-blue-50/60 dark:!bg-blue-900/10 !border-blue-100 dark:!border-blue-900/30">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-base sm:text-lg">
                    <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    What I'm Proud Of
                  </h3>
                  <ul className="space-y-3">
                    {braggingRights.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.04, duration: 0.3 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealOnScroll>

              <div className="space-y-6">
                <RevealOnScroll direction="right">
                  <GlassCard>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">Resume Highlights</h3>
                    <ul className="space-y-3">
                      {resumeHighlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={0.1}>
                  <GlassCard>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">{otherCompetence.label}</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {otherCompetence.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
