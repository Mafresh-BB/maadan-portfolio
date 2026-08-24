import { NextResponse } from 'next/server';
import { personalInfo, projects, education, fellowship, skillCategories } from '../../../data/content';

export const dynamic = 'force-static';

export async function GET() {
  const resumeData = {
    name: personalInfo.name,
    title: personalInfo.role,
    contact: {
      email: personalInfo.email,
      github: personalInfo.github,
      linkedin: personalInfo.linkedin,
      twitter: personalInfo.twitter,
    },
    stack: skillCategories,
    experience: [
      {
        role: "Contract Frontend Developer",
        company: "Self-Employed",
        duration: "May 2023 – Dec 2025",
        tags: ["nextjs", "react", "typescript", "javascript", "framer-motion", "tailwind-css", "figma", "chrome-devtools", "rest-apis"],
        bullets: [
          "Delivered production Next.js and React/TypeScript interfaces for paying clients across travel, non-profit, and executive persona verticals.",
          "Built interactive UI components with Framer Motion; enforced strict TypeScript typing across API boundaries.",
          "Managed full project cycles independently — scoping, building, testing, and deploying."
        ]
      }
    ],
    projects: projects.map(p => ({
      title: p.title,
      role: p.role,
      tech: p.tech,
      link: p.link,
      github: p.github,
      highlights: p.highlights || [p.execution, p.result]
    })),
    education: [
      {
        institution: fellowship.name,
        degree: "Learn2Earn AI Engineering Fellowship",
        duration: fellowship.duration,
        description: fellowship.description
      },
      {
        institution: education.institution,
        degree: education.degree,
        duration: "2019 – 2024",
        description: education.description
      }
    ]
  };

  return NextResponse.json(resumeData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}
