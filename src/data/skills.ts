import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Vue.js', level: 90, category: 'frontend' },
  { name: 'Astro', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Laravel', level: 95, category: 'backend' },
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 90, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'Redis', level: 80, category: 'backend' },
  
  // Security
  { name: 'Penetration Testing', level: 90, category: 'security' },
  { name: 'Network Security', level: 85, category: 'security' },
  { name: 'Cryptography', level: 80, category: 'security' },
  { name: 'OWASP Top 10', level: 95, category: 'security' },
  { name: 'Vulnerability Assessment', level: 90, category: 'security' },
  { name: 'Incident Response', level: 85, category: 'security' },
  
  // Tools
  { name: 'Docker', level: 85, category: 'tools' },
  { name: 'AWS', level: 80, category: 'tools' },
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Linux', level: 90, category: 'tools' },
  { name: 'Nginx', level: 85, category: 'tools' },
  { name: 'Apache', level: 80, category: 'tools' },

  { name: 'Selenium', level: 90, category: 'sqa' },
  { name: 'Cypress', level: 85, category: 'sqa' },
  { name: 'Jest', level: 88, category: 'sqa' },
  { name: 'Burp Suite', level: 92, category: 'sqa' },
  { name: 'Postman', level: 95, category: 'sqa' },
  { name: 'JMeter', level: 80, category: 'sqa' },
];