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

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'security' | 'development' | 'cloud' | 'project-management' | 'other';
  description: string;
  skills: string[];
  featured: boolean;
  logo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'recognition' | 'competition' | 'milestone' | 'other';
  organization?: string;
  details: string[];
  featured: boolean;
  image?: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  type: 'research-paper' | 'article' | 'book' | 'whitepaper' | 'case-study' | 'other';
  publisher: string;
  publishedDate: string;
  description: string;
  abstract: string;
  authors: string[];
  tags: string[];
  category: 'security' | 'development' | 'technology' | 'other';
  featured: boolean;
  url?: string;
  doi?: string;
  citations?: number;
}