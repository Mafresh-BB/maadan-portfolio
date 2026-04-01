import { Mail, Phone, Github, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-[#0B1120] text-white overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Big CTA text */}
          <div>
            <RevealOnScroll direction="left">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-6 block">
                Let's Connect
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
                Let's Build
                <br />
                <span className="gradient-text-light">Together.</span>
              </h2>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4 max-w-md">
                Looking for a developer who's consistent, coachable, and focused on clean UI? Let's talk.
              </p>

              <p className="text-white/80 font-medium text-base mb-2">
                {personalInfo.lookingFor}.
              </p>

              <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-10">
                {personalInfo.availability}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
                  whileHover={{ y: -3 }}
                >
                  <FileText size={18} />
                  View Resume
                </motion.a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Contact Cards in asymmetric layout */}
          <div className="space-y-6">
            <RevealOnScroll direction="right" delay={0.1}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-wider font-semibold mb-1">Email Me</div>
                    <div className="font-medium text-white text-sm sm:text-base break-all">{personalInfo.email}</div>
                  </div>
                  <ArrowRight size={18} className="ml-auto text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-wider font-semibold mb-1">Call Me</div>
                    <div className="font-medium text-white text-sm sm:text-base">{personalInfo.phone}</div>
                  </div>
                  <ArrowRight size={18} className="ml-auto text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.3}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="block p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-wider font-semibold mb-1">Follow Me</div>
                    <div className="font-medium text-white text-sm sm:text-base">GitHub Profile</div>
                  </div>
                  <ArrowRight size={18} className="ml-auto text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </RevealOnScroll>

            {/* Location info */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs uppercase tracking-[0.3em] text-white/20 pt-4">
              <span>{personalInfo.location}</span>
              <span className="h-3 w-px bg-white/10" />
              <span>{personalInfo.timezone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
