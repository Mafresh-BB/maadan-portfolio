import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from '../components/layout/Layout';
import { Inter, Outfit, Geist_Mono, Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google';
import '../index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maadan.dev'),
  title: {
    default: 'Abdulyekeen Maadan | Software Developer — Lagos, Nigeria',
    template: '%s | Abdulyekeen Maadan',
  },
  description: 'Software developer based in Lagos. I build production software for real clients using Next.js, React, TypeScript, and Go. Open for freelance and part-time remote work.',
  keywords: [
    'Software Developer',
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Go',
    'Lagos',
    'Web Developer Nigeria',
    'AI-Augmented Development',
    'Fullstack'
  ],
  authors: [{ name: 'Abdulyekeen Maadan' }],
  creator: 'Abdulyekeen Maadan',
  robots: 'index, follow',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
  manifest: '/site.webmanifest?v=2',
  other: {
    'google-site-verification': 'gkl5-tw89O_eHr9XuuQyXnBPHSHMWSYqHFRBzs7g0mg',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.maadan.dev/',
    siteName: 'Maadan Dev',
    title: 'Abdulyekeen Maadan — Software Developer',
    description: 'Software developer based in Lagos. I build production software for real clients using Next.js, React, TypeScript, and Go. Open for freelance and part-time remote work.',
    images: [
      {
        url: '/og/og-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview of Abdulyekeen Maadan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@maadan_dev',
    creator: '@maadan_dev',
    title: 'Abdulyekeen Maadan | Software Developer',
    description: 'Software developer based in Lagos. I build production software for real clients using Next.js, React, TypeScript, and Go. Open for freelance and part-time remote work.',
    images: ['/og/og-image.jpg?v=2'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${geistMono.variable} ${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.maadan.dev/#website",
                  "url": "https://www.maadan.dev",
                  "name": "Maadan Dev",
                  "alternateName": ["Abdulyekeen Maadan", "Maadan", "Yekeen"],
                  "publisher": {
                    "@id": "https://www.maadan.dev/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.maadan.dev/#person",
                  "name": "Abdulyekeen Maadan",
                  "description": "Full-stack developer based in Lagos, Nigeria. Builds production AI tools and web applications using Next.js, React, TypeScript, and Go. Open for remote freelance and part-time engagements.",
                  "jobTitle": "Software Developer",
                  "url": "https://www.maadan.dev",
                  "image": "https://maadan.dev/images/profile.webp?v=2",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lagos",
                    "addressCountry": "NG"
                  },
                  "alternateName": ["Maadan Dev", "Maadan", "Yekeen"],
                  "sameAs": [
                    "https://www.linkedin.com/in/abdulyekeenmaadan",
                    "https://github.com/maadan-dev",
                    "https://x.com/maadan_dev"
                  ],
                  "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Federal University of Agriculture, Abeokuta"
                  },
                  "knowsAbout": [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Go",
                    "Supabase",
                    "Gemini AI",
                    "Frontend Development",
                    "AI-Augmented Development"
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://nextroleng.tech/#app",
                  "name": "NextRole NG",
                  "url": "https://nextroleng.tech",
                  "image": "https://www.maadan.dev/images/nextrole.webp",
                  "description": "AI-powered CV optimization tool for the Nigerian job market",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "NGN",
                    "availability": "https://schema.org/Discontinued"
                  },
                  "author": {
                    "@id": "https://www.maadan.dev/#person"
                  },
                  "sameAs": [
                    "https://github.com/maadan-dev/nextrole-ng-frontend"
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://tools.maadan.dev/#app",
                  "name": "Maadan Dev Tools",
                  "url": "https://tools.maadan.dev",
                  "description": "Client-facing document automation platform. Legal deed and agreement generator built with Next.js and @react-pdf/renderer.",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "author": {
                    "@id": "https://www.maadan.dev/#person"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
