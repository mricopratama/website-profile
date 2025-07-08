import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'security-researcher-award',
    title: 'Outstanding Security Researcher Award 2023',
    description: 'Recognized for discovering and responsibly disclosing critical vulnerabilities in major web applications, contributing to improved cybersecurity standards.',
    date: '2023-12-01',
    category: 'award',
    organization: 'International Cybersecurity Research Foundation',
    details: [
      'Discovered 15+ critical vulnerabilities in Fortune 500 companies',
      'Contributed to security improvements affecting millions of users',
      'Received recognition from major tech companies for responsible disclosure',
      'Published security research that influenced industry best practices'
    ],
    featured: true,
    image: 'https://images.pexels.com/photos/5849573/pexels-photo-5849573.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://example.com/security-award'
  },
  {
    id: 'hackathon-winner',
    title: 'Global Cybersecurity Hackathon - First Place',
    description: 'Led a team to victory in the international cybersecurity hackathon, developing an AI-powered threat detection system in 48 hours.',
    date: '2023-09-15',
    category: 'competition',
    organization: 'CyberSec Global',
    details: [
      'Competed against 200+ teams from 50+ countries',
      'Developed innovative AI-powered threat detection solution',
      'Implemented real-time network monitoring capabilities',
      'Achieved 99.7% accuracy in threat identification',
      'Won $50,000 prize and mentorship program'
    ],
    featured: true,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://example.com/hackathon-winner'
  },
  {
    id: 'open-source-contributor',
    title: 'Top Open Source Contributor 2023',
    description: 'Recognized as one of the top contributors to cybersecurity and web development open source projects, with over 500 commits and 50+ merged PRs.',
    date: '2023-11-30',
    category: 'recognition',
    organization: 'GitHub',
    details: [
      'Contributed to 25+ major open source projects',
      'Maintained 3 popular security tools with 10K+ stars',
      'Mentored 50+ new contributors in the community',
      'Organized virtual meetups and workshops',
      'Featured in GitHub\'s annual report'
    ],
    featured: true,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://github.com/username'
  },
  {
    id: 'speaker-conference',
    title: 'Keynote Speaker - DevSecOps Summit 2023',
    description: 'Delivered keynote presentation on "The Future of Application Security" to an audience of 2000+ security professionals and developers.',
    date: '2023-10-20',
    category: 'recognition',
    organization: 'DevSecOps Foundation',
    details: [
      'Presented to 2000+ industry professionals',
      'Shared insights on emerging security threats',
      'Discussed integration of AI in cybersecurity',
      'Received standing ovation and 4.9/5 rating',
      'Presentation viewed 50K+ times online'
    ],
    featured: false,
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: 'https://example.com/devsecops-keynote'
  },
  {
    id: 'million-users-milestone',
    title: 'Applications Serving 1M+ Users',
    description: 'Successfully architected and deployed applications that collectively serve over 1 million active users with 99.9% uptime.',
    date: '2023-08-01',
    category: 'milestone',
    details: [
      'Built scalable applications serving 1M+ users',
      'Maintained 99.9% uptime across all applications',
      'Implemented robust security measures',
      'Optimized performance for global user base',
      'Zero major security incidents reported'
    ],
    featured: false,
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'security-audit-excellence',
    title: 'Excellence in Security Auditing',
    description: 'Completed 100+ security audits with zero false positives and identified critical vulnerabilities that prevented potential breaches.',
    date: '2023-07-15',
    category: 'milestone',
    details: [
      'Conducted 100+ comprehensive security audits',
      'Achieved zero false positive rate',
      'Prevented 15+ potential security breaches',
      'Saved clients over $2M in potential damages',
      'Developed custom security testing frameworks'
    ],
    featured: false,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];