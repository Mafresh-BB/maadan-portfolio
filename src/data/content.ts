import type { Experience, Project, Education, JourneyStep, Testimonial, Article } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Developer",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  avatar: "/images/profile.webp",
  resumePdf: "/resume/Abdulyekeen-Maadan-Resume.pdf",
  resumePdfBranded: "/resume/Abdulyekeen-Maadan-Resume-branded.pdf",
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
    image: "/images/nysc-professional.jpg",
    description: [
      "Taught Mathematics and Further Mathematics to SSS 1-3, breaking down complex logic into understandable concepts.",
      "Managed classroom performance data to identify learning gaps and adjust teaching strategies.",
      "Developed discipline, public speaking, and leadership skills while managing 100+ students."
    ]
  },
  {
    role: "Frontend Developer (Contract)",
    company: "ATEKER Luxury Safaris",
    period: "Oct 2024 - Present",
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
    period: "May 2023 - Jul 2024",
    description: [
      "Delivered multi-page websites for non-profits (JTF Foundation) and small businesses using WordPress CMS and semantic HTML.",
      "Launched e-commerce solutions (Shopify), implementing technical SEO strategies and product structuring to drive organic search visibility.",
      "Managed full deployment lifecycles and ensured all deliverables met basic mobile responsiveness standards."
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
    image: "/images/ensii.jpg",
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
    image: "/images/project1_dark.webp",
    link: "https://maadan-portfolio.vercel.app"
  },
  {
    title: "JTF Foundation NGO Website",
    tech: ["WordPress", "CMS", "SEO"],
    description: [
      "Goal: Improve digital presence for a non-profit.",
      "Work: Configured responsive themes and managed content structure.",
      "Focus: Accessibility and content readability."
    ],
    image: "/images/project2.jpg",
    link: "https://www.jtffoundation.org"
  }
];

export const otherCompetence = {
  label: "Other competence",
  items: [
    "Graphic design (brand identity, flyers, business cards).",
    "Tools: Adobe Photoshop, Canva."
  ]
};

export const education: Education = {
  degree: "Bachelor of Science (B.Sc.) in Mathematics",
  school: "Federal University of Agriculture, Abeokuta",
  period: "Oct 2019 - Aug 2024",
  image: "/images/convocation.jpg",
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
  "Data Analysis with Python Certified (AQskill)",
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

export const resumeHighlights = [
  "Built responsive multi-page experiences for nonprofit and business clients.",
  "Shipped a branded hero and UI refresh for a travel platform.",
  "Created an AI-assisted portfolio experience with clear, recruiter-friendly UX."
];
export const howIBuiltThis = {
  title: "How I built this",
  items: [
    {
      label: "Stack",
      text: "React 19 + Vite, styled with Tailwind CSS v4."
    },
    {
      label: "Structure",
      text: "Component-based sections (Hero, About, Experience, Projects, etc.) with content separated into a typed content.ts file for easy updates."
    },
    {
      label: "Navigation",
      text: "Smooth scrolling via scrollIntoView and an active-section scroll spy that updates the navbar based on section offsets."
    },
    {
      label: "Performance & monitoring",
      text: "Vercel Analytics + Speed Insights to track real-user metrics and page performance."
    },
    {
      label: "Accessibility",
      text: "Semantic sections, clear heading structure, keyboard-friendly links/buttons, and focus-visible styles on primary actions."
    },
    {
      label: "Deployment",
      text: "Deployed on Vercel."
    }
  ]
};
