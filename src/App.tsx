import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Education } from './components/sections/Education';
import { CallToAction } from './components/sections/CallToAction';
import { Contact } from './components/sections/Contact';
import { AIChatWidget } from './components/AIChatWidget';
import { HowIBuiltThis } from './components/sections/HowIBuiltThis';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Removed 'writing' from spy list
      const sections = ['home', 'about', 'experience', 'projects', 'how', 'testimonials', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      
       <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .dark .bg-grid-pattern {
           background-image: linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <Hero scrollToContact={() => scrollToSection('contact')} />
      <About />
      <Experience />
      <Projects />
      <HowIBuiltThis />
      {/* Writing Section removed until you have articles */}
      <Testimonials />
      <Education />
      <CallToAction scrollToContact={() => scrollToSection('contact')} />
      <Contact />
      <Footer />
 
      <AIChatWidget />
      <BackToTop />
      <Analytics />
      <SpeedInsights />
      
    </div>
  );
}
