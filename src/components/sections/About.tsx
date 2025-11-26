import { Terminal, Star, ArrowRight } from 'lucide-react';
import { personalInfo, skills, journey, braggingRights } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="about">My Journey & Skills</SectionTitle>
        
        {/* Journey Section (New) */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {journey.map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowRight size={48} className="text-blue-600" />
              </div>
              <div className="text-blue-600 font-bold mb-2">{step.year}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Bragging Rights (New) */}
          <div className="md:col-span-6 space-y-8">
             <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
               <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-xl">
                <Star className="text-yellow-400 fill-yellow-400" />
                What I'm Proud Of
              </h3>
              <ul className="space-y-4">
                {braggingRights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-loose">
               <p className="italic border-l-4 border-blue-200 pl-4 py-2">
                 "{personalInfo.about}"
               </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-6">
             <div className="bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
};