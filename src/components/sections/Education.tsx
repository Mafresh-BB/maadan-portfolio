import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="education">Education</SectionTitle>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow">
          <div className="p-5 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
            <GraduationCap size={40} />
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                  <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
                  <p className="text-xl text-blue-600 font-medium mt-1">{education.school}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-600 text-sm font-semibold border border-gray-100">
                <BookOpen size={16} /> {education.period}
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mt-4">
               {education.details.map((detail, index) => (
                  <div key={index} className="flex gap-3 mb-3 last:mb-0">
                     <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 shrink-0"></span>
                     <p className="text-gray-600 leading-relaxed">{detail}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};