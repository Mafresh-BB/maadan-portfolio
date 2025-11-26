import { Mail, MapPin, Globe, Code2, Download } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] -z-10"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-8 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {personalInfo.title}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                {personalInfo.about}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-400/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
                <a 
                  href={personalInfo.resumePdf} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all hover:border-gray-300 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>

              <div className="flex gap-6 pt-8 text-gray-500 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-500" />
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-green-500" />
                  <span className="font-medium">Open to Remote</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="flex-1 flex justify-center md:justify-end relative z-10 animate-in fade-in zoom-in duration-1000 delay-300">
               <div className="w-80 h-80 md:w-md md:h-112 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-500">
                      
                      {personalInfo.avatar ? (
                         <div className="w-full h-full relative">
                           <img 
                              src={personalInfo.avatar} 
                              alt={personalInfo.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = document.getElementById('avatar-fallback');
                                if(fallback) fallback.style.display = 'flex';
                              }}
                           />
                           <div id="avatar-fallback" className="hidden absolute inset-0 flex-col items-center justify-center bg-dot-pattern">
                              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Code2 size={64} className="text-blue-600" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h3>
                           </div>
                         </div>
                      ) : (
                        <div className="flex-1 w-full p-8 flex flex-col items-center justify-center bg-dot-pattern">
                           <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Code2 size={64} className="text-blue-600" />
                           </div>
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h3>
                           <p className="text-gray-500 font-mono text-sm bg-gray-100 px-3 py-1 rounded-full">
                              &lt;FrontendDeveloper /&gt;
                           </p>
                        </div>
                      )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
  );
};