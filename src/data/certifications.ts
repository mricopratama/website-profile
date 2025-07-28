import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cisco-intro-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issuedDate: '2025-07-27',
    credentialId: '5d63a421-f4c4-46d5-98ad-1df2f857ab3f',
    credentialUrl: 'https://www.credly.com/badges/5d63a421-f4c4-46d5-98ad-1df2f857ab3f',
    category: 'security',
    description: 'Learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today. Cybersecurity professionals who can protect and defend an organization’s network are in high demand.',
    skills: ['Cybersecurity', 'Cyber Best Practices', 'Network Vulnerabilities', 'Threat Detection', 'Privary and Data Confidentiality'],
    featured: true,
    logo: '/logo-cisco.png'
  },
  {
    id: 'dicoding-aws-cloud-gen-ai',
    name: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding',
    issuedDate: '2025-05-01',
    credentialId: '98XWENWGJXM3', 
    credentialUrl: 'https://www.dicoding.com/certificates/98XWENWGJXM3',
    category: 'cloud',
    description: 'Pelajari materi dasar Cloud dengan menggunakan AWS, dari konsep cloud computing, hingga penerapan generative AI dengan AWS.',
    skills: ['Cloud Computing', 'AWS', 'Generative AI', 'Cloud Services'],
    featured: true,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-web-pemula',
    name: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    issuedDate: '2025-05-01',
    credentialId: 'NVP75DY1WXR0',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP75DY1WXR0',
    category: 'development',
    description: 'Pelajari komponen-komponen dasar HTML dan CSS yang merupakan fondasi utama untuk menjadi front-end web developer.',
    skills: ['HTML', 'CSS', 'Front-End Development', 'Web Basics'],
    featured: true,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-gcp-backend',
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud',
    issuer: 'Dicoding',
    issuedDate: '2025-04-30',
    credentialId: 'QLZ93YJKMZ5D',
    credentialUrl: 'https://www.dicoding.com/certificates/QLZ93YJKMZ5D',
    category: 'cloud',
    description: 'Belajar membuat RESTful API, dari HTTP server, routing, hingga membangun aplikasi Back-End dengan Google Cloud menggunakan Compute Engine.',
    skills: ['Back-End Development', 'RESTful API', 'Google Cloud Platform', 'Node.js', 'Compute Engine'],
    featured: true,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-kotlin-pemula',
    name: 'Memulai Pemrograman dengan Kotlin',
    issuer: 'Dicoding',
    issuedDate: '2024-12-30', 
    credentialId: '53XEDLQ1KPRN',
    credentialUrl: 'https://www.dicoding.com/certificates/53XEDLQ1KPRN',
    category: 'development',
    description: 'Pelajari dasar bahasa pemrograman, functional programming, object-oriented programming (OOP), serta concurrency dengan menggunakan Kotlin.',
    skills: ['Kotlin', 'Functional Programming', 'OOP', 'Concurrency', 'Mobile Development'],
    featured: false,
    logo: '/logo-dicoding.jpeg'
  }
];