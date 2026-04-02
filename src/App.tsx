import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsBar } from './components/sections/MetricsBar';
import { CaseStudies } from './components/sections/CaseStudies';
import { MethodSection } from './components/sections/MethodSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <MetricsBar />
      <CaseStudies />
      <MethodSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
