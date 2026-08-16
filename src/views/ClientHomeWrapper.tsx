"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroSection } from '../components/sections/HeroSection';
import Loader from '../components/ui/Loader';

export function ClientHomeWrapper({ 
  contentSections 
}: { 
  contentSections: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem('hasLoaded');
    if (!alreadyLoaded) {
      setShowLoader(true);
    } else {
      setHeroVisible(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setShowLoader(false);
    setHeroVisible(true);
    window.dispatchEvent(new Event('portfolio-loaded'));
  };

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}

      <div className="relative w-full">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'auto',
            transformOrigin: 'center top',
          }}
        >
          <HeroSection visible={heroVisible} />
        </motion.div>

        <div style={{ height: '100vh', pointerEvents: 'none' }} />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            backgroundColor: '#050505',
            boxShadow: '0 -60px 120px 40px #050505',
          }}
        >
          {contentSections}
        </div>
      </div>
    </>
  );
}
