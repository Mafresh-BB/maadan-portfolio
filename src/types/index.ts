export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
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

// New Type for your Personal Journey
export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}