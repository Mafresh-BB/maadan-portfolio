import { Mail, Phone, Github } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Get In Touch</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          I'm looking for internship or junior roles where I can learn and grow.
          If you have a team that values curiosity and steady progress, let's connect.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <a href={`mailto:${personalInfo.email}`} className="p-7 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
              <Mail size={28} className="text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">Email Me</div>
            <div className="font-medium wrap-break-word text-white">{personalInfo.email}</div>
          </a>
          
          <a href={`tel:${personalInfo.phone}`} className="p-7 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
              <Phone size={28} className="text-green-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">Call Me</div>
            <div className="font-medium text-white">{personalInfo.phone}</div>
          </a>

          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-7 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-500 transition-colors">
              <Github size={28} className="text-indigo-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">Follow Me</div>
            <div className="font-medium text-white">GitHub Profile</div>
          </a>
        </div>
      </div>
    </section>
  );
};
