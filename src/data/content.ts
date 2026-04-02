import type { Project, Metric, SkillCategory } from '../types';

export const personalInfo = {
  name: "ABDULYEKEEN MAADAN",
  role: "Frontend Developer",
  headline: "Frontend engineering with precision and clarity.",
  subHeadline: "Background in mathematics. Focused on building clean, high-performance web applications with React.",
  about: "I don't just assemble components. I solve state management and logic problems with mathematical precision. My journey started with a mathematics degree and accelerated through a ruthless 'sink or swim' software immersion. I work through problems independently, break down complex logic, and focus on getting things to work properly—not just look good.",
  email: "babatundemaadan@gmail.com",
  github: "https://github.com/Mafresh-BB",
  linkedin: "https://www.linkedin.com/in/abdulyekeenmaadan",
  twitter: "https://x.com/Olamails_",
  resumePdf: "/resume/Abdulyekeen-Maadan-Resume.pdf",
  personality: "I prefer solving real problems over building pretty placeholders."
};

export const metrics: Metric[] = [
  { label: "B.Sc. Mathematics", value: "Strong foundation in logic & problem solving" },
  { label: "01-edu Piscine", value: "Intensive low-level programming (Go, algorithms)" },
  { label: "Projects Built", value: "Multiple functional apps with React" }
];

export const projects: Project[] = [
  {
    title: "ATEKER Luxury Safaris",
    role: "UI Developer (Contract)",
    problem: "Needed a modern, responsive web presence that reflected the premium nature of their services.",
    execution: "Developed the responsive hero section, interactive horizontal scroll cards, and collaborated on a brand visual refresh using React, Tailwind, and Framer Motion.",
    result: "Delivered a mobile-optimized landing experience with improved usability and premium aesthetics.",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/ensii.webp",
    link: "https://ensiisafaris.ca/"
  },
  {
    title: "Algorithmic Systems (01-edu)",
    role: "Learner / Systems Developer",
    problem: "Master low-level programming concepts and algorithmic logic without formal instruction in a 4-week high-stakes environment.",
    execution: "Engineered a Brainfuck interpreter managing virtual memory tapes, and a recursive Sudoku solver using Go. Operated as technical anchor during group raids.",
    result: "Transitioned from zero Go knowledge to 65% completion rate.",
    tech: ["Go (Golang)", "Unix Shell", "Algorithms", "Data Structures"],
    image: "/images/piscine-office.png",
    link: "https://github.com/Mafresh-BB" 
  },
  {
    title: "Executive Persona Platform",
    role: "Frontend Developer",
    problem: "Build an authoritative digital presence for a diplomatic executive.",
    execution: "Designed and implemented a clean design system focusing on typography, whitespace, and high-performance load times.",
    result: "Established a commanding web presence, optimized for both desktop and mobile viewing with zero layout shift.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/segunalabi.webp",
    link: "https://segunalabi.me"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Go (Golang)", "HTML5/CSS3"]
  },
  {
    title: "Architecture & Frameworks",
    skills: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Tooling & DevOps",
    skills: ["Git/GitHub", "Unix Shell", "REST APIs", "Performance Tuning"]
  }
];
