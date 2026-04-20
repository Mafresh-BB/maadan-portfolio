import { HeroSection } from '../components/sections/HeroSection';
import { MetricsBar } from '../components/sections/MetricsBar';
import { CaseStudies } from '../components/sections/CaseStudies';
import { MethodSection } from '../components/sections/MethodSection';
import { EducationSection } from '../components/sections/EducationSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <CaseStudies />
      <MethodSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
