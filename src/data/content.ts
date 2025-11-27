// Import the new Testimonial type at the top
import type { Experience, Project, Education, JourneyStep, Testimonial } from '../types';


export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  avatar: "/profile.jpg", 
  resumePdf: "/ABDULYEKEEN MAADAN- FRONTEND DEVELOPER CV.pdf", // Make sure this file is in public folder
  about: "I wasn't the 'tech kid' growing up. In fact, I had to fight to learn every skill I have today. Now, I'm a performance-driven Frontend Engineer who builds real-world solutions. I combine a strong mathematical background with self-taught engineering discipline to build scalable, accessible web applications."
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
    year: "Now",
    title: "Engineer & Leader",
    description: "Currently serving my NYSC year while preparing for graduate studies. I don't just write code; I architect solutions like the ENSII platform and build AI integrations."
  }
];

export const braggingRights = [
  "Built 5+ real-world websites for paying clients (NGOs, Ecommerce)",
  "Self-taught React + TypeScript ecosystem with zero formal bootcamp",
  "Implemented Google Gemini AI integration into a production React app",
  "Taught LaTeX and technical writing to fellow university students",
  "Graduated with a Mathematics degree while running a freelance business"
];

export const skills = [
  "React.js & Hooks", "TypeScript (DTOs)", "Vite", "Tailwind CSS", 
  "Framer Motion", "Service Layer Pattern", "Git/GitHub", "SEO Optimization",
  "API Integration", "Web Performance", "Accessibility (WCAG)", "WordPress CMS", "Responsive Web Design"
];

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "ENSII Luxury Safaris",
    period: "Contract",
    description: [
      "Solved the 'Empty Backend' problem by engineering a Dev Mode fallback strategy, allowing UI development to proceed without live APIs.",
      "Architected type-safe DTOs to mirror Java backend entities, reducing runtime errors by 40%.",
      "Built a custom 'Yosemite-style' hero slider with synchronized animations using Framer Motion."
    ]
  },
  {
    role: "Frontend Developer",
    company: "JTF Foundation (NGO)",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Problem: The client needed a platform to showcase their impact but had zero technical staff.",
      "Solution: Delivered a high-performance, accessible 5-page site with a dynamic blog system they could manage easily.",
      "Result: Improved mobile accessibility scores to 95+ via Lighthouse optimization."
    ]
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Managed the full lifecycle of client projects: from requirements gathering to deployment and SEO.",
      "Built reusable component libraries in React to speed up future client deliverables.",
      "Translated complex UI/UX designs into pixel-perfect, responsive code."
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
    tech: ["WordPress", "CMS", "SEO"],
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
export const testimonials: Testimonial[] = [
  {
    name: "Janet Fayemi",
    role: "Operations Coordinator",
    company: "Jaytee Fayemi Foundation",
    image: "https://ui-avatars.com/api/?name=Janet+Fayemi&background=0D8ABC&color=fff", // Auto-generates initials
    text: "I’m thrilled to share my positive experience working with Abdulyekeen on the website for the Jaytee Fayemi Foundation. The website is visually appealing, well-organized, and perfectly reflects our mission and values. The design and functionality are top-notch, making it easy for our visitors to engage with our content. He was attentive to our needs and delivered a product that exceeds our expectations."
  }
];