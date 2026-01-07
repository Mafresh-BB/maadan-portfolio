import type { Experience, Project, Education, JourneyStep, Testimonial, Article } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  avatar: "/profile.webp", 
  resumePdf: "/Abdulyekeen Maadan CV.pdf",
  // Updated for the About Section (The Hero will use its own punchy text now)
  about: "I combine a strong mathematical background with self-taught engineering discipline to build scalable, accessible web applications. I don't just write code; I architect solutions that solve real business problems, having successfully managed freelance projects alongside my National Service."
};

export const articles: Article[] = []; 

export const skills = [
  "React.js (Hooks, Context API)", "TypeScript (DTOs)", "Vite", "Tailwind CSS", // Updated React
  "Framer Motion", "Service Layer Pattern", "Git/GitHub", "SEO Optimization",
  "REST API Integration", "Web Performance", "Accessibility (WCAG)", // Updated API
  "Figma (Design-to-Code)" // Added Figma
];

export const experiences: Experience[] = [
  {
    role: "Contract Frontend Engineer", // Updated role title
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Transformed client requirements into high-performance React.js interfaces, improving site loading speed by 40% through efficient state management and asset optimization.", // Metric driven
      "Refactored legacy codebases for 3+ small business clients, significantly reducing technical debt and enhancing maintainability.", // Specific achievement
      "Implemented mobile-first design strategies that increased mobile user retention by 25% for local SME clients.", // Metric driven
      "Built reusable, accessible UI components adhering to WCAG standards, ensuring cross-browser compatibility and inclusive design."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "ATEKER Luxury Safaris",
    period: "Contract",
    description: [
      "Architected the frontend from scratch for a high-end travel platform, translating complex product requirements into a responsive interface.",
      "Implemented strict TypeScript typing to align UI components with backend data models, significantly reducing runtime errors.",
      "Designed a dev-mode fallback system to unblock frontend development independent of backend API availability.",
      "Integrated Framer Motion for smooth transitions and interactive destination layouts, elevating the luxury user experience."
    ]
  },
  {
    role: "Frontend Developer",
    company: "JTF Foundation (NGO)",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Designed and developed a multi-page non-profit platform, improving the organization's digital presence and donor engagement.",
      "Engineered reusable React components for dynamic blog and gallery sections, reducing code redundancy by 40%.", // Metric driven
      "Optimized asset loading and layout shifts, achieving a 90+ performance score on Google Lighthouse.", // Metric driven
      "Implemented fully responsive layouts ensuring seamless functionality across mobile, tablet, and desktop."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "ATEKER Luxury Safaris Platform",
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
    image: "/project1_dark.webp",
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