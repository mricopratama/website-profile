import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'secure-banking-app',
    title: 'Secure Banking Application',
    description: 'Full-stack banking application with advanced security features including biometric authentication, real-time fraud detection, and encrypted transactions.',
    longDescription: 'This comprehensive banking application showcases modern security practices in fintech. Built with React and Node.js, it features end-to-end encryption, multi-factor authentication, and real-time fraud detection using machine learning algorithms.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'JWT', 'Biometric API', 'ML Models'],
    images: [
      'https://images.pexels.com/photos/5849573/pexels-photo-5849573.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5849593/pexels-photo-5849593.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    demoUrl: 'https://secure-banking-demo.com',
    githubUrl: 'https://github.com/username/secure-banking-app',
    category: 'security',
    featured: true,
    completedAt: '2024-10-15',
    challenges: [
      'Implementing real-time fraud detection without affecting performance',
      'Ensuring PCI DSS compliance across all system components',
      'Designing intuitive UX for complex security workflows'
    ],
    solutions: [
      'Developed asynchronous ML pipeline for fraud detection',
      'Implemented comprehensive audit logging and encryption',
      'Created progressive disclosure UI patterns for security features'
    ],
    role: 'Full-Stack Developer & Security Architect'
  },
  {
    id: 'ai-threat-detection',
    title: 'AI-Powered Threat Detection System',
    description: 'Machine learning system that analyzes network traffic patterns to identify and prevent cyber threats in real-time.',
    longDescription: 'An advanced cybersecurity solution that uses artificial intelligence to detect anomalies and potential threats in network traffic. The system processes millions of data points per second to identify suspicious patterns and automatically trigger defensive measures.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes', 'ELK Stack', 'Apache Kafka'],
    images: [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    demoUrl: 'https://ai-threat-detection-demo.com',
    githubUrl: 'https://github.com/username/ai-threat-detection',
    category: 'security',
    featured: true,
    completedAt: '2024-09-22',
    challenges: [
      'Processing high-volume network data in real-time',
      'Minimizing false positives while maintaining high detection accuracy',
      'Scaling the system to handle enterprise-level traffic'
    ],
    solutions: [
      'Implemented distributed processing with Apache Kafka',
      'Fine-tuned ML models using transfer learning techniques',
      'Designed microservices architecture for horizontal scaling'
    ],
    role: 'ML Engineer & Security Specialist'
  },
  {
    id: 'modern-ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Scalable e-commerce solution with microservices architecture, real-time inventory management, and advanced analytics.',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies and best practices. Features include real-time inventory management, personalized recommendations, multi-payment integration, and comprehensive admin dashboard with advanced analytics.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Stripe API', 'AWS S3', 'Docker'],
    images: [
      'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    demoUrl: 'https://modern-ecommerce-demo.com',
    githubUrl: 'https://github.com/username/modern-ecommerce',
    category: 'web',
    featured: true,
    completedAt: '2024-08-30',
    challenges: [
      'Handling high concurrent user traffic during peak sales',
      'Implementing real-time inventory synchronization',
      'Creating responsive design for all device types'
    ],
    solutions: [
      'Implemented caching strategies and load balancing',
      'Developed event-driven architecture for inventory management',
      'Used CSS Grid and Flexbox for responsive layouts'
    ],
    role: 'Full-Stack Developer & DevOps Engineer'
  },
  {
    id: 'blockchain-voting-system',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform using blockchain technology to ensure election integrity and voter privacy.',
    longDescription: 'A revolutionary voting system that leverages blockchain technology to create tamper-proof elections. The platform ensures complete transparency while maintaining voter anonymity through advanced cryptographic techniques.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Node.js', 'IPFS', 'Ethereum', 'MetaMask'],
    images: [
      'https://images.pexels.com/photos/6953876/pexels-photo-6953876.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6953862/pexels-photo-6953862.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    demoUrl: 'https://blockchain-voting-demo.com',
    githubUrl: 'https://github.com/username/blockchain-voting',
    category: 'security',
    featured: false,
    completedAt: '2024-07-18',
    challenges: [
      'Ensuring voter privacy while maintaining transparency',
      'Optimizing gas costs for mass adoption',
      'Creating intuitive interface for non-technical users'
    ],
    solutions: [
      'Implemented zero-knowledge proofs for privacy',
      'Optimized smart contract code for gas efficiency',
      'Designed progressive web app with offline capabilities'
    ],
    role: 'Blockchain Developer & Security Architect'
  }
];