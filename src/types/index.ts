export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  image?: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string[];
  link?: string;
  image?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

// Added Article interface to fix the error
export interface Article {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  platform: string;
}
