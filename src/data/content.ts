import type { Experience, Project, Education } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 706 780 1635",
  email: "babatundemaadan@gmail.com",
  github: "https://mafresh-bb.github.io/Maadan-Abdulyekeen-Portfolio/",
  avatar: "/profile.jpg", 
  about: "Creative and performance-driven Frontend Engineer with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS, delivering responsive, accessible, and visually engaging web applications. Skilled in translating UI/UX concepts into scalable, high-performance interfaces that improve user engagement and site efficiency. Adept at problem-solving, API integration, and collaborative version control using Git and GitHub."
};

export const skills = [
  "React.js & Hooks", "TypeScript (DTOs)", "Vite", "Tailwind CSS", 
  "Framer Motion", "Service Layer Pattern", "Git/GitHub", "SEO Optimization",
  "API Integration", "Web Performance", "Accessibility (WCAG)"
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    period: "May 2023 - Present",
    description: [
      "Develop and maintain responsive, cross-browser web applications using HTML5, CSS3, and JavaScript.",
      "Implement reusable UI components and scalable styling with React.js and Tailwind CSS.",
      "Collaborate with clients to define project requirements and transform design wireframes into functional websites.",
      "Manage version control and collaborative workflows using Git and GitHub."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Client Project - JTF Foundation",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Designed and launched a 5-page NGO website (Home, About, Blog, Gallery, Contact) focused on clarity and usability.",
      "Integrated a dynamic blog system, optimized for search visibility and mobile responsiveness.",
      "Improved site speed and navigation through performance tuning and accessibility improvements."
    ]
  },
  {
    role: "Website Designer (Freelance)",
    company: "Freelance",
    period: "Feb 2023 - Jan 2024",
    description: [
      "Built professional, client-branded websites using WordPress and custom HTML/CSS.",
      "Enhanced user engagement through layout redesign, on-page SEO, and analytics tracking.",
      "Created visually appealing landing pages and product showcases aligned with business goals."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "ENSII Luxury Safaris Platform",
    tech: ["React", "TypeScript", "Vite", "Framer Motion"],
    description: [
      "Architected a high-performance luxury travel platform interfacing with a Java Spring Boot backend, ensuring type safety with DTOs.",
      "Engineered a 'Dev Mode' fallback strategy using custom hooks to switch between live API data and local mock data.",
      "Implemented complex UI animations including a 'Yosemite-style' hero slider and synchronized text transitions.",
      "Overhauled the Admin Dashboard into a mobile-first design, enabling staff to manage bookings from any device."
    ],
    image: "/ensii.jpg",
    link: "https://www.ensii-safaris.com" 
  },
  {
    title: "Personal Portfolio Website",
    tech: ["React", "Tailwind CSS", "Gemini AI"],
    description: [
      "Built with React and Tailwind CSS to showcase projects and technical skills in a clean, interactive layout.",
      "Integrated Google Gemini AI to create a context-aware chatbot that answers recruiter questions based on resume data."
    ],
    image: "/project1.jpg",
    link: "https://maadan-portfolio.vercel.app"
  },
  {
    title: "JTF Foundation NGO Website",
    tech: ["React", "CMS", "SEO"],
    description: [
      "Designed a full 5-page non-profit website integrating dynamic blog content and gallery features.",
      "Improved accessibility, performance, and mobile experience across all devices."
    ],
    image: "/project2.jpg",
    link: "https://www.jtf-foundation.org"
  }
];

export const education: Education = {
  degree: "Bachelor of Science (B.Sc.) in Mathematics",
  school: "Federal University of Agriculture, Abeokuta",
  period: "Oct 2019 - Aug 2024",
  details: [
    "Relevant Coursework: Calculus, Linear Algebra, Differential Equations, Probability & Statistics, Numerical Methods, Data Analysis",
    "Final Year Project: 'Some Application of First Order Delay Differential Equation in Biology.'"
  ]
};