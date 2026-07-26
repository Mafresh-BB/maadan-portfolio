"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import CustomCursor from '../ui/CustomCursor';

const DeveloperTerminal = dynamic(
  () => import('../ui/DeveloperTerminal').then((m) => ({ default: m.DeveloperTerminal })),
  { ssr: false }
);

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const isResumePage = pathname === '/resume';

  useEffect(() => {
    // Skip Lenis on /resume — its CSS transforms break position:sticky
    if (isResumePage) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isResumePage]);

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent selection:text-white">
      {isHomePage && <CustomCursor />}
      <Navigation />
      <main className="relative z-10 w-full">
        {children}
      </main>
      <Footer />
      <DeveloperTerminal />
    </div>
  );
}
