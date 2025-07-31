import type { Skill } from '../types';

export const skills: Skill[] = [
  // 1. Bahasa Pemrograman
  { name: 'Java', category: 'backend', description: 'A high-level, class-based, object-oriented programming language designed for building large-scale enterprise applications.', color: '#E83E2E' },
  { name: 'Python', category: 'backend', description: 'A versatile programming language often used for web development, scripting, and data analysis.', color: '#3776AB' },
  { name: 'Go', category: 'backend', description: 'A statically typed language designed at Google for building simple, reliable, and efficient software.', color: '#00ADD8' },
  { name: 'PHP', category: 'backend', description: 'A popular general-purpose scripting language that is especially suited to web development.', color: '#777BB4' },
  { name: 'TypeScript', category: 'frontend', description: 'A superset of JavaScript that adds static typing for large-scale development.', color: '#3178C6' },

  // 2. Framework & Library (Frontend)
  { name: 'React', category: 'frontend', description: 'A JavaScript library for building interactive and dynamic user interfaces.', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', description: 'A React framework for production with features like server-side rendering and static site generation.', color: '#FFFFFF' },
  { name: 'Vue.js', category: 'frontend', description: 'A progressive JavaScript framework for creating modern single-page web applications.', color: '#4FC08D' },
  { name: 'Astro', category: 'frontend', description: 'A modern web framework for building fast websites with an island architecture.', color: '#FF5D01' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'A utility-first CSS framework for rapidly designing custom interfaces.', color: '#06B6D4' },
  
  // 3. Framework & Runtime (Backend)
  { name: 'Node.js', category: 'backend', description: 'A JavaScript runtime built on Chrome\'s V8 engine for building scalable network applications.', color: '#5FA04E' },
  { name: 'Laravel', category: 'backend', description: 'A PHP web application framework with expressive, elegant syntax.', color: '#FF2D20' },
  
  // 4. Database
  { name: 'PostgreSQL', category: 'backend', description: 'A powerful, open-source object-relational database management system.', color: '#4169E1' },
  { name: 'MySQL', category: 'backend', description: 'The world\'s most popular open-source relational database management system.', color: '#4479A1' },
  { name: 'Redis', category: 'backend', description: 'An in-memory data structure store used as a database, cache, and message broker.', color: '#DC382D' },
  
  // 5. Tools & Platform (DevOps, Infrastruktur & Networking)
  { name: 'Docker', category: 'tools', description: 'A platform for developing, shipping, and running applications in containers.', color: '#2496ED' },
  { name: 'AWS', category: 'tools', description: 'A cloud computing platform from Amazon that provides a wide range of cloud services.', color: '#FF9900' },
  { name: 'Nginx', category: 'tools', description: 'A high-performance web server that can also be used as a reverse proxy, load balancer, and HTTP cache.', color: '#269539' },
  { name: 'Cisco Networking', category: 'tools', description: 'Designing, building, and maintaining computer networks using Cisco hardware and software.', color: '#1BA0D7' },
  { name: 'Linux', category: 'tools', description: 'A family of open-source operating systems based on the Linux kernel.', color: '#FCC624' },
  { name: "Git", category: 'tools', description: 'A distributed version control system for tracking changes in source code during software development.', color: '#F05032' },

  // 6. Tools (Testing & Quality Assurance)
  { name: 'Selenium', category: 'sqa', description: 'A portable framework for automating web application testing.', color: '#43B02A' },
  { name: 'Cypress', category: 'sqa', description: 'A modern JavaScript-based end-to-end testing tool for web applications.', color: '#17202C' },
  { name: 'Jest', category: 'sqa', description: 'A delightful JavaScript testing framework with a focus on simplicity.', color: '#C21325' },
  { name: 'Postman', category: 'sqa', description: 'A collaboration platform for API development, used to build, test, and document APIs.', color: '#FF6C37' },
  { name: 'Burp Suite', category: 'sqa', description: 'An integrated platform for performing security testing of web applications.', color: '#FF6600' },

  // 7. Konsep & Praktik Keamanan
  { name: 'Penetration Testing', category: 'security', description: 'The practice of testing a computer system, network, or web application to find security vulnerabilities.', color: '#FF4136' },
  { name: 'Vulnerability Assessment', category: 'security', description: 'The process of identifying, quantifying, and prioritizing vulnerabilities in a system.', color: '#F012BE' },
  { name: 'Network Security', category: 'security', description: 'Protecting the integrity, confidentiality, and availability of network infrastructure.', color: '#2ECC40' },
  { name: 'OWASP Top 10', category: 'security', description: 'A standard awareness document for developers and web application security.', color: '#0074D9' },
];