import { ArrowRight, FileText } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { personalInfo } from '../../data/content';

export const CallToAction = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  Let’s Work Together
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Have a project in mind or looking for a frontend developer who cares about clean UI and solid logic?
                </p>
                <p className="text-white font-medium text-lg">
                  I’m open to freelance work and full-time roles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <button 
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Start a Project
                    <ArrowRight size={20} />
                  </button>
                  
                  <a 
                    href={personalInfo.resumePdf} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:border-white"
                  >
                    <FileText size={20} />
                    View My CV
                  </a>
                </div>
              </div>

              {/* Visual/Image Side */}
              <div className="flex-1 w-full max-w-md md:max-w-none">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-400 to-purple-400 rounded-2xl transform rotate-6 opacity-50 group-hover:rotate-3 transition-transform duration-500 blur-sm"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-video md:aspect-square lg:aspect-video bg-gray-800">
                    {/* Placeholder Image - You can replace this src with "/your-photo.jpg" later */}
                    <img 
                      src="./workspace.jpg" 
                      alt="Developer Workspace" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};