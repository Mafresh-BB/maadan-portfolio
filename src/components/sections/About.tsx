import { Terminal, Github, GraduationCap, Layout, Database } from 'lucide-react';
import { personalInfo, skills } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed: subtitle needs to be a string, and text must be inside the tag */}
        <SectionTitle subtitle="about">About & Skills</SectionTitle>
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-8">
            <div className="prose prose-lg text-gray-600 leading-loose">
              <p>{personalInfo.about}</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner">
               <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                <Terminal size={22} className="text-blue-600" />
                Technical Proficiency
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: Layout, title: "Frontend", sub: "React, TS, Vite", color: "text-blue-600", bg: "bg-blue-50" },
               { icon: Database, title: "Data Logic", sub: "DTOs, State Mgmt", color: "text-green-600", bg: "bg-green-50" },
               { icon: Github, title: "Workflow", sub: "Git, CI/CD", color: "text-purple-600", bg: "bg-purple-50" },
               { icon: GraduationCap, title: "Math Logic", sub: "Algorithms, Stats", color: "text-orange-600", bg: "bg-orange-50" }
             ].map((item, idx) => (
               <Card key={idx} className="flex flex-col items-center justify-center text-center p-6 h-full border-transparent hover:border-gray-200">
                  <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                    <item.icon size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{item.sub}</p>
               </Card>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};