import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cissp',
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: '(ISC)² - International Information System Security Certification Consortium',
    issuedDate: '2023-08-15',
    expiryDate: '2026-08-15',
    credentialId: 'CISSP-789456',
    credentialUrl: 'https://www.isc2.org/Certifications/CISSP',
    category: 'security',
    description: 'Advanced cybersecurity certification covering eight domains of information security, demonstrating expertise in security architecture, risk management, and incident response.',
    skills: ['Risk Management', 'Security Architecture', 'Incident Response', 'Cryptography', 'Network Security'],
    featured: true,
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    issuedDate: '2022-11-20',
    expiryDate: '2025-11-20',
    credentialId: 'CEH-456789',
    credentialUrl: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
    category: 'security',
    description: 'Comprehensive ethical hacking certification covering penetration testing methodologies, vulnerability assessment, and security testing techniques.',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Scanning', 'Social Engineering', 'Malware Analysis'],
    featured: true,
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 'aws-solutions-architect',
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    issuedDate: '2023-03-10',
    expiryDate: '2026-03-10',
    credentialId: 'AWS-SAP-123456',
    credentialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    category: 'cloud',
    description: 'Advanced AWS certification demonstrating expertise in designing distributed systems and applications on the AWS platform with focus on scalability and security.',
    skills: ['Cloud Architecture', 'AWS Services', 'Scalability Design', 'Cost Optimization', 'Security Best Practices'],
    featured: true,
    logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 'laravel-certified',
    name: 'Laravel Certified Developer',
    issuer: 'Laravel LLC',
    issuedDate: '2023-01-15',
    credentialId: 'LARAVEL-DEV-789',
    credentialUrl: 'https://laravel.com/certification',
    category: 'development',
    description: 'Official Laravel certification demonstrating advanced proficiency in Laravel framework, including Eloquent ORM, Artisan CLI, and Laravel ecosystem.',
    skills: ['Laravel Framework', 'Eloquent ORM', 'Artisan CLI', 'Laravel Ecosystem', 'PHP Development'],
    featured: false,
    logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 'react-advanced',
    name: 'Advanced React Developer Certification',
    issuer: 'Meta (Facebook)',
    issuedDate: '2022-09-30',
    credentialId: 'META-REACT-456',
    credentialUrl: 'https://developers.facebook.com/docs/react/',
    category: 'development',
    description: 'Advanced React certification covering hooks, context API, performance optimization, and modern React patterns for building scalable applications.',
    skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Component Architecture', 'State Management'],
    featured: false,
    logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 'pmp',
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute (PMI)',
    issuedDate: '2022-06-15',
    expiryDate: '2025-06-15',
    credentialId: 'PMP-987654',
    credentialUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    category: 'project-management',
    description: 'Globally recognized project management certification demonstrating expertise in leading and directing projects and teams.',
    skills: ['Project Management', 'Agile Methodologies', 'Risk Management', 'Team Leadership', 'Stakeholder Management'],
    featured: false,
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];