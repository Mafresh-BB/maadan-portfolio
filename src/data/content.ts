import type { Experience, Project, Education, JourneyStep, Testimonial, Article } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Developer", // "Junior" is implied by years of experience; don't put it in the headline.
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  avatar: "/profile.webp",
  resumePdf: "/Abdulyekeen-Maadan-CV.pdf",
  availability: "Available for full-time roles (Remote/Hybrid)",
  lookingFor: "Junior Frontend or Internship roles with mentorship",
  stackSummary: "React • TypeScript • Tailwind",
  about: "A disciplined Frontend Developer with a B.Sc. in Mathematics. I build responsive, accessible web interfaces and am currently focused on mastering React ecosystems. I am looking for a team where I can contribute immediately while growing under senior mentorship."
};

export const articles: Article[] = [];

export const skills = [
  "JavaScript (ES6+)",
  "React (Hooks, Components)",
  "TypeScript (Interfaces/Types)",
  "Vite",
  "Tailwind CSS",
  "Git/GitHub",
  "REST API Integration",
  "Accessibility (Semantic HTML, WCAG)",
  "Figma (Design-to-Code)",
  "Lighthouse Performance Tuning"
];

export const experiences: Experience[] = [
  {
    role: "STEM Educator (NYSC)",
    company: "Royal Brook International School",
    period: "Dec 2024 - Dec 2025",
    image: "/nysc-professional.jpg",
    description: [
      "Taught Mathematics and Further Mathematics to SSS 1-3, breaking down complex logic into understandable concepts.",
      "Managed classroom performance data to identify learning gaps and adjust teaching strategies.",
      "Developed discipline, public speaking, and leadership skills while managing 100+ students."
    ]
  },
  {
    role: "Frontend Developer (Contract)", // Removed "(Junior)" - Contract implies specific scope
    company: "ATEKER Luxury Safaris",
    period: "Oct 2024 - Nov 2024",
    description: [
      "Collaborated with the lead developer to refresh the visual identity, including logo design and color system.",
      "Developed the responsive hero section and reusable package cards using React and Tailwind.",
      "Implemented mobile responsiveness updates that improved the site's usability on smaller screens.",
      "Tech Stack: React, TypeScript, Tailwind CSS, Framer Motion."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Delivered responsive websites for small businesses and nonprofits, focusing on clean layout and semantic HTML.",
      "Adopted mobile-first workflows to ensure consistent experiences across devices.",
      "utilized AI tools to accelerate debugging and learn modern React patterns during development."
    ]
  },
  {
    role: "Frontend Developer",
    company: "JTF Foundation (NGO)",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Contributed to the development of a multi-page nonprofit website, focusing on layout structure and content readability.",
      "Built reusable UI components for the blog and gallery sections to maintain consistency.",
      "Ensured the site was fully responsive and accessible for mobile users."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "ATEKER Luxury Safaris Platform",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    description: [
      "Role: UI Developer & Visual Designer.",
      "Contribution: Built the responsive hero section and horizontal scroll cards.",
      "Design: Refreshed the brand identity (Logo & Color Palette).",
      "Outcome: delivered a modern, mobile-responsive landing page component."
    ],
    image: "/ensii.jpg",
    link: "https://ensiisafaris.ca/"
  },
  {
    title: "AI-Augmented Portfolio",
    tech: ["React", "Gemini API"],
    description: [
      "Goal: Create an interactive experience for recruiters.",
      "Feature: Integrated a custom AI assistant to answer questions about my resume.",
      "Tech: Used Vercel SDK and Gemini API for real-time responses."
    ],
    image: "/project1_dark.webp",
    link: "https://maadan-portfolio.vercel.app"
  },
  {
    title: "JTF Foundation NGO Website",
    tech: ["React", "CMS", "SEO"],
    description: [
      "Goal: Improve digital presence for a non-profit.",
      "Work: Developed responsive layouts and CMS integration.",
      "Focus: Accessibility and mobile performance."
    ],
    image: "/project2.jpg",
    link: "https://www.jtffoundation.org"
  }
];

export const education: Education = {
  degree: "Bachelor of Science (B.Sc.) in Mathematics",
  school: "Federal University of Agriculture, Abeokuta",
  period: "Oct 2019 - Aug 2024",
  image: "/convocation.jpg",
  details: [
    "Final Year Project: 'Some Application of First Order Delay Differential Equation in Biology.'",
    "Applied mathematical logic to software algorithms and state management complexity."
  ]
};

export const journey: JourneyStep[] = [
  {
    year: "The Beginning",
    title: "The Hard Path",
    description: "I wasn't handed these skills. I taught myself HTML, CSS, and JavaScript while juggling school, proving wrong everyone who thought I wasn't 'smart enough'."
  },
  {
    year: "2023 - 2024",
    title: "Freelancing & Growth",
    description: "I started taking small web projects, learned WordPress, and began learning React and TypeScript while finishing my B.Sc in Mathematics."
  },
  {
    year: "Dec 2025",
    title: "Ready to Deploy",
    description: "Completed National Service (NYSC). I am now fully available for full-time opportunities, eager to apply my math background and coding skills in a real team."
  }
];

export const braggingRights = [
  "FreeCodeCamp Responsive Web Design certified (2022)",
  "Completed NYSC as a STEM Educator (Mathematics)",
  "Shipped production UI for ATEKER Luxury Safaris",
  "Self-taught React developer with a B.Sc. in Mathematics",
  "Built an AI-powered portfolio from scratch"
];

export const testimonials: Testimonial[] = [
  {
    name: "Janet Fayemi",
    role: "Operations Coordinator",
    company: "Jaytee Fayemi Foundation",
    image: "https://ui-avatars.com/api/?name=Janet+Fayemi&background=0D8ABC&color=fff",
    text: "I'm thrilled to share my positive experience working with Abdulyekeen on the website for the Jaytee Fayemi Foundation. The website is visually appealing and perfectly reflects our mission. He was attentive to our needs and delivered a product that exceeds our expectations."
  }
];