import type { Experience, Project, Education, JourneyStep, Testimonial, Article } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Junior Frontend Developer",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  avatar: "/profile.webp",
  resumePdf: "/Abdulyekeen Maadan CV.pdf",
  availability: "Available for full-time roles from Jan 2026",
  lookingFor: "Internship or junior frontend roles with mentorship",
  stackSummary: "React • TypeScript • Tailwind",
  // Updated for the About Section (The Hero will use its own punchy text now)
  about: "Self-taught and still learning the fundamentals. I build responsive web interfaces, learn fast, and use AI as a learning assistant. I'm looking for an internship or junior role to grow in a real team."
};

export const articles: Article[] = [];

export const skills = [
  "JavaScript (ES6+)",
  "React (Hooks)",
  "TypeScript (types/interfaces)",
  "Vite",
  "Tailwind CSS",
  "Git/GitHub",
  "REST API integration",
  "Accessibility basics (semantic HTML, forms, keyboard nav)",
  "Lighthouse performance tuning",
  "Figma (design-to-code)"
];


export const experiences: Experience[] = [
  {
    role: "STEM Educator (NYSC)",
    company: "Royal Brook International School (PPA)",
    period: "Completed Dec 18, 2025",
    image: "/nysc-professional.jpg",
    description: [
      "Taught Mathematics and Further Mathematics to SSS 1-3, strengthening my ability to explain complex logic clearly.",
      "Used student performance data to improve learning outcomes and refine instruction.",
      "Delivered lesson plans and assessments on strict timelines, sharpening planning and execution."
    ]
  },
  {
    role: "Freelance Web Developer (Junior)",
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Built responsive websites for small businesses and nonprofits while learning modern frontend workflows.",
      "Practiced HTML/CSS layout, mobile-first design, and basic accessibility patterns on real projects.",
      "Collaborated with clients and used AI guidance to deliver UI changes and iterate quickly."
    ]
  },
  {
    role: "Frontend Contributor (Junior)",
    company: "ATEKER Luxury Safaris",
    period: "Contract (Learning Role)",
    description: [
      "Designed the logo, brand colors, and visual identity to refresh the site's look.",
      "Built the hero section with horizontal package cards using React + Tailwind.",
      "Updated site colors across pages to match the new brand identity.",
      "Improved mobile responsiveness with AI-assisted guidance.",
      "Tech used: React, Tailwind CSS, TypeScript, Framer Motion."
    ]
  },
  {
    role: "Frontend Developer (Junior)",
    company: "JTF Foundation (NGO)",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Helped build a multi-page non-profit website and practiced responsive layout skills.",
      "Worked on UI sections and learned to organize components for reuse.",
      "Focused on clean layouts, readable content, and mobile-friendly design."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "ATEKER Luxury Safaris Platform",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    description: [
      "My Role: Logo design, brand colors, and visual identity refresh.",
      "UI Work: Built the hero section with horizontal package cards.",
      "UI Work: Updated site colors to match the new brand.",
      "Outcome: Improved mobile responsiveness with AI-assisted guidance."
    ],
    image: "/ensii.jpg",
    link: "https://ensiisafaris.ca/"
  },
  {
    title: "AI-Augmented Portfolio (Meta)",
    tech: ["React", "Gemini API"],
    description: [
      "Goal: Make the portfolio more interactive and useful for recruiters.",
      "Built: A simple AI assistant that answers questions about my resume.",
      "Focus: Clear UI, readable content, and basic API integration."
    ],
    image: "/project1_dark.webp",
    link: "https://maadan-portfolio.vercel.app"
  },
  {
    title: "JTF Foundation NGO Website",
    tech: ["React", "CMS", "SEO"],
    description: [
      "Goal: Give the NGO a clearer, mobile-friendly website.",
      "Work: Built responsive sections and improved layout consistency.",
      "Focus: Simple structure and readable content."
    ],
    image: "/project2.jpg",
    link: "https://www.jtffoundation.org"
  }
];

export const education: Education = {
  degree: "Bachelor of Science (B.Sc.) in Mathematics",
  school: "Federal University of Agriculture, Abeokuta",
  period: "Oct 2019 - Aug 2024",
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
    description: "Completed National Service (NYSC) with Certificate in hand. I am now fully available for full-time opportunities, bringing a year of freelance engineering experience to a dedicated team."
  }
];

export const braggingRights = [
  "FreeCodeCamp Responsive Web Design certified (2022)",
  "Completed NYSC as a STEM Educator (Mathematics and Further Mathematics)",
  "Built responsive pages for clients and practice projects",
  "Self-taught and learning JavaScript/React fundamentals",
  "Used AI as a learning assistant to follow instructions and ship UI changes",
  "Graduated with a Mathematics degree"
];

export const resumeHighlights = [
  "Built responsive multi-page experiences for nonprofit and business clients.",
  "Shipped a branded hero and UI refresh for a travel platform.",
  "Created an AI-assisted portfolio experience with clear, recruiter-friendly UX."
];

export const testimonials: Testimonial[] = [
  {
    name: "Janet Fayemi",
    role: "Operations Coordinator",
    company: "Jaytee Fayemi Foundation",
    image: "https://ui-avatars.com/api/?name=Janet+Fayemi&background=0D8ABC&color=fff",
    text: "I'm thrilled to share my positive experience working with Abdulyekeen on the website for the Jaytee Fayemi Foundation. The website is visually appealing, well-organized, and perfectly reflects our mission and values. The design and functionality are top-notch, making it easy for our visitors to engage with our content. He was attentive to our needs and delivered a product that exceeds our expectations."
  }
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
