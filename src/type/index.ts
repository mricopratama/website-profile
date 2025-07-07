export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'security' | 'ai' | 'other';
  featured: boolean;
  completedAt: string;
  challenges: string[];
  solutions: string[];
  role: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  category: 'development' | 'security' | 'tutorial' | 'thoughts';
  featured: boolean;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'security' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}