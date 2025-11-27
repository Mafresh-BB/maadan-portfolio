import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials'; // <--- Import this
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { AIChatWidget } from './components/AIChatWidget';

export default function App() {
  // ... (Keep existing scroll logic same as before) ...
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
      // Add 'testimonials' to this list
      const sections = ['home', 'about', 'experience', 'projects', 'testimonials', 'education', 'contact'];
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
      
       <style>{/* ... keep existing styles ... */}</style>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <Hero scrollToContact={() => scrollToSection('contact')} />
      <About />
      <Experience />
      <Projects />
      <Testimonials />  {/* <--- Add this line here */}
      <Education />
      <Contact />
      
      <AIChatWidget />
      
    </div>
  );
}