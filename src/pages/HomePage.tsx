import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Abdulyekeen Maadan | Software Developer — Lagos, Nigeria</title>
        <meta name="description" content="Software developer based in Lagos. I build real products for real clients using React, TypeScript, Go, and AI-augmented workflows. Currently shipping NextRole NG — a full-stack CV optimization tool for the Nigerian job market." />
        <meta property="og:title" content="Abdulyekeen Maadan — Software Developer" />
        <meta property="og:description" content="Software developer based in Lagos. Building real products with React, TypeScript, Go, and AI-augmented workflows." />
        <meta property="og:image" content="https://maadan.dev/og/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Portfolio preview of Abdulyekeen Maadan" />
        <meta property="og:url" content="https://maadan.dev/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Olamails_" />
        <meta name="twitter:creator" content="@Olamails_" />
        <meta name="twitter:title" content="Abdulyekeen Maadan | Software Developer" />
        <meta name="twitter:description" content="Software developer based in Lagos. Building real products with React, TypeScript, Go, and AI-augmented workflows." />
        <meta name="twitter:image" content="https://maadan.dev/og/og-image.jpg" />
        <meta name="twitter:image:alt" content="Portfolio preview of Abdulyekeen Maadan" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdulyekeen Maadan",
            "jobTitle": "Software Developer",
            "url": "https://maadan.dev",
            "image": "https://maadan.dev/images/profile.webp",
            "sameAs": [
              "https://www.linkedin.com/in/abdulyekeenmaadan",
              "https://github.com/mafresh-bb"
            ],
            "knowsAbout": [
              "React",
              "TypeScript",
              "Go",
              "AI-Augmented Development",
              "Fullstack Development",
              "Software Architecture"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Lagos",
                "addressCountry": "NG"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NextRole NG",
            "url": "https://nextrole-ng.vercel.app",
            "logo": "https://maadan.dev/images/nextrole.webp",
            "description": "AI-powered CV optimization tool for the Nigerian job market",
            "founder": {
              "@type": "Person",
              "name": "Abdulyekeen Maadan"
            },
            "sameAs": [
              "https://github.com/mafresh-bb/nextrole-ng"
            ],
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "NGN"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://maadan.dev",
            "name": "Maadan Portfolio",
            "description": "Portfolio and blog of software developer Abdulyekeen Maadan.",
            "publisher": {
              "@type": "Person",
              "name": "Abdulyekeen Maadan"
            }
          })}
        </script>
      </Helmet>
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
