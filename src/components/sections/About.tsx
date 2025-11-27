import { Terminal, Star, ArrowRight, Layout, Database, Github, GraduationCap } from 'lucide-react';
import { personalInfo, skills, journey, braggingRights } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="about">My Journey & Skills</SectionTitle>
        
        {/* Journey Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {journey.map((step, idx) => (
            <RevealOnScroll key={idx}>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowRight size={48} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">{step.year}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Bragging Rights */}
          <div className="md:col-span-6 space-y-8">
             <RevealOnScroll>
             <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl p-8 border border-blue-100 dark:border-blue-900/30">
               <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-xl">
                <Star className="text-yellow-400 fill-yellow-400" />
                What I'm Proud Of
              </h3>
              <ul className="space-y-4">
                {braggingRights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-loose mt-8">
               <p className="italic border-l-4 border-blue-200 dark:border-blue-800 pl-4 py-2">
                 "{personalInfo.about}"
               </p>
            </div>
            </RevealOnScroll>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-6">
             <RevealOnScroll>
             <div className="bg-gray-900 dark:bg-black text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                
                <h3 className="font-bold mb-6 flex items-center gap-2 text-xl relative z-10">
                  <Terminal size={22} className="text-blue-400" />
                  Technical Stack
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
             </div>
             </RevealOnScroll>

             <div className="grid grid-cols-2 gap-4 mt-6">
               {[
                 { icon: Layout, title: "Frontend", sub: "React, TS, Vite", color: "text-blue-600", bg: "bg-blue-50" },
                 { icon: Database, title: "Data Logic", sub: "DTOs, State Mgmt", color: "text-green-600", bg: "bg-green-50" },
                 { icon: Github, title: "Workflow", sub: "Git, CI/CD", color: "text-purple-600", bg: "bg-purple-50" },
                 { icon: GraduationCap, title: "Math Logic", sub: "Algorithms, Stats", color: "text-orange-600", bg: "bg-orange-50" }
               ].map((item, idx) => (
                 <RevealOnScroll key={idx}>
                 <Card className="flex flex-col items-center justify-center text-center p-6 h-full border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                    <div className={`w-14 h-14 ${item.bg} dark:bg-gray-700 ${item.color} dark:text-gray-200 rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                      <item.icon size={28} />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{item.sub}</p>
                 </Card>
                 </RevealOnScroll>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};