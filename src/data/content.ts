import type { Experience, Project, Education, JourneyStep, Testimonial, Article } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://mafresh-bb.github.io/Maadan-Abdulyekeen-Portfolio/",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  avatar: "/profile.jpg", 
  resumePdf: "/ABDULYEKEEN MAADAN- FRONTEND DEVELOPER CV.pdf",
  // Updated for the About Section (The Hero will use its own punchy text now)
  about: "I combine a strong mathematical background with self-taught engineering discipline to build scalable, accessible web applications. I don't just write code; I architect solutions that solve real business problems, having successfully managed freelance projects alongside my National Service."
};

export const articles: Article[] = []; 

export const skills = [
  "React.js & Hooks", "TypeScript (DTOs)", "Vite", "Tailwind CSS", 
  "Framer Motion", "Service Layer Pattern", "Git/GitHub", "SEO Optimization",
  "API Integration", "Web Performance", "Accessibility (WCAG)"
];

// REWRITTEN EXPERIENCE SECTION (Precise & Professional)
export const experiences: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "ENSII Luxury Safaris",
    period: "Contract",
    description: [
      "Built a 'Dev-Mode' fallback system that allowed frontend development to continue seamlessly while backend APIs were unavailable.",
      "Designed type-safe DTOs aligned with Java backend models, significantly reducing frontend runtime errors during QA testing.",
      "Developed a custom Yosemite-style hero slider with synchronized Framer Motion animations for a premium travel experience."
    ]
  },
  {
    role: "Frontend Developer",
    company: "JTF Foundation (NGO)",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Designed and launched a 5-page NGO website focused on clarity and accessibility for non-technical administrators.",
      "Integrated a dynamic blog system and optimized site performance, achieving 95+ Lighthouse scores on mobile.",
      "Managed the full deployment pipeline and SEO configuration."
    ]
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Shipped production-ready websites for diverse clients, translating business requirements into pixel-perfect code.",
      "Established a modular component workflow using React and Tailwind to accelerate delivery times.",
      "Provided technical consultation on UI/UX best practices and accessibility standards."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "ENSII Luxury Safaris Platform",
    tech: ["React", "TypeScript", "Vite", "Framer Motion"],
    description: [
      "The Problem: The client needed a premium feel for high-end travelers but the API was inconsistent.",
      "The Solution: I built a Service Layer to normalize API data and a custom animation engine for smooth transitions.",
      "Key Tech: Implemented Feature Flags to toggle between Mock Data and Live Data during development."
    ],
    image: "/ensii.jpg",
    link: "https://ensiisafaris.ca/" 
  },
  {
    title: "AI-Augmented Portfolio (Meta)",
    tech: ["React", "Gemini API", "RAG Pattern"],
    description: [
      "The Problem: Static portfolios are boring and recruiters don't have time to read everything.",
      "The Solution: I integrated Google's Gemini LLM to create a context-aware assistant that answers questions about my resume instantly.",
      "Key Tech: System Prompting, Environment Variable Security, and Stream-like UI updates."
    ],
    image: "/project1.jpg",
    link: "https://maadan-portfolio.vercel.app"
  },
  {
    title: "JTF Foundation NGO Website",
    tech: ["React", "CMS", "SEO"],
    description: [
      "The Problem: The foundation needed visibility but had a slow, non-responsive legacy site.",
      "The Solution: A mobile-first rebuild focusing on accessibility and speed.",
      "Key Feature: Dynamic gallery and blog integration that boosted SEO ranking."
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
    description: "While others waited for jobs, I built them. I designed websites for NGOs and businesses, learned WordPress, and mastered React/TypeScript—all while finishing my B.Sc in Mathematics."
  },
  {
    year: "Dec 2025", 
    title: "Ready to Deploy",
    description: "Completed National Service (NYSC) with Certificate in hand. I am now fully available for full-time opportunities, bringing a year of freelance engineering experience to a dedicated team."
  }
];

export const braggingRights = [
  "Built 5+ real-world websites for paying clients (NGOs, Ecommerce)",
  "Self-taught React + TypeScript ecosystem with zero formal bootcamp",
  "Implemented Google Gemini AI integration into a production React app",
  "Completed NYSC Service Year while maintaining freelance clients",
  "Graduated with a Mathematics degree while running a freelance business"
];

export const testimonials: Testimonial[] = [
  {
    name: "Janet Fayemi",
    role: "Operations Coordinator",
    company: "Jaytee Fayemi Foundation",
    image: "https://ui-avatars.com/api/?name=Janet+Fayemi&background=0D8ABC&color=fff", 
    text: "I’m thrilled to share my positive experience working with Abdulyekeen on the website for the Jaytee Fayemi Foundation. The website is visually appealing, well-organized, and perfectly reflects our mission and values. The design and functionality are top-notch, making it easy for our visitors to engage with our content. He was attentive to our needs and delivered a product that exceeds our expectations."
  }
];