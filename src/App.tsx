import { useState, useEffect, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { CustomCursor } from './components/ui/CustomCursor';
import { CommandPalette } from './components/ui/CommandPalette';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { LogicEngines } from './components/sections/LogicEngines';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { AIChatWidget } from './components/AIChatWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'logic-engines', 'projects', 'testimonials', 'education', 'contact'];
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
    <SmoothScroll>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0b1220] font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
        <CustomCursor />
        <CommandPalette scrollToSection={scrollToSection} onOpenChat={() => setChatOpen(true)} />
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        <Hero scrollToContact={() => scrollToSection('contact')} />
        <About />
        <Experience />
        <LogicEngines />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
        <Footer />

        <AIChatWidget externalOpen={chatOpen} onExternalClose={() => setChatOpen(false)} />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </div>
    </SmoothScroll>
  );
}
