import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'seminar-cybersmart-campus-2025',
    title: 'Seminar: Tech Power Up: Cybersmart Campus',
    description: 'Engaged in the "Tech Power Up: Cybersmart Campus" seminar, exploring the intersection of technology and cybersecurity to foster a safer digital campus environment. Applied seminar insights to improve campus IT security protocols.',
    date: '2025-06-14',
    category: 'seminar',
    organization: 'McAfee',
    details: [
      'Focused on the application of cyber technology in a campus setting.',
      'Discussed methods for creating a secure digital campus ecosystem.',
      'Gained insights into cybersecurity challenges in the education sector.',
      'Applied knowledge to internal campus cybersecurity project.'
    ],
    featured: true,
    image: '/techpowerup.jpg'
  },
  {
    id: 'seminar-data-security-2024',
    title: 'Seminar: Data Security, Access Management, and Authentication',
    description: 'Participated in a comprehensive seminar focusing on critical aspects of data security, including access control and modern authentication systems. Implemented seminar best practices in software development projects.',
    date: '2024-11-23',
    category: 'seminar',
    organization: 'BEM FAST UAD',
    details: [
      'Explored advanced topics in data protection and authentication.',
      'Learned industry best practices for secure access management.',
      'Updated knowledge on the latest cybersecurity threats and mitigation strategies.'
    ],
    featured: true,
    image: '/semnas-datasecurity.png',
  },
  {
    id: 'ganesha-championship-2024',
    title: 'Gold Medalist Under 54 Kg - Ganesha National Taekwondo Championship',
    description: 'Secured the first place gold medal in the Under 54 Kg Kyorugi category at the Ganesha National Taekwondo Championship 2024. Demonstrated discipline and resilience, skills that translate into team project success.',
    date: '2024-06-30',
    category: 'competition',
    organization: 'Kemenpora RI',
    details: [
      'Won the gold medal in the Kyorugi Under 54 Kg category.',
      'Competed against top national-level taekwondo athletes.',
      'Showcased peak performance and technique in a prestigious tournament.'
    ],
    featured: false,
    image: '/ganesha-2024.jpg'
  },
  {
    id: 'everest-championship-2023',
    title: 'Silver Medalist Under 54 Kg - Everest Taekwondo Championship (Kemenpora Cup)',
    description: 'Won the silver medal in the Under 54 Kg category at the prestigious Everest Taekwondo Championship, competing for the Kemenpora Cup.',
    date: '2023-12-17',
    category: 'competition',
    organization: 'Kemenpora RI',
    details: [
      'Achieved a silver medal in a national-level event.',
      'Competed for the rotating trophy from the Minister of Youth and Sports.',
      'Demonstrated high-level endurance and advanced techniques against strong opponents.'
    ],
    featured: false,
    image: '/everest-2023.jpg'
  },
  {
    id: 'danrem-championship-2023',
    title: 'Gold Medalist Under 54 Kg - DANREM 052/Wijayakrama National Taekwondo Championship',
    description: 'Achieved first place in the Under 54 Kg class at the DANREM 052/Wijayakrama National Taekwondo Championship. Developed strong leadership and time management skills.',
    date: '2023-10-29',
    category: 'competition',
    organization: 'Military Resort Command 052/Wijayakrama',
    details: [
      'Secured the gold medal in the Under 54 Kg weight class.',
      'The competition was organized by the Military Resort Command 052/Wijayakrama.',
      'Outperformed competitors from various provinces across Indonesia.'
    ],
    featured: false,
    image: '/danrem052-2023.jpg'
  },
  {
    id: 'bhayangkara-presisi-2023',
    title: 'Bronze Medalist Under 54 Kg - Bhayangkara Presisi (Kapolda DIY Cup)',
    description: 'Secured a bronze medal in the U-54 Kg category at the Bhayangkara Presisi Championship for the Kapolda DIY\'s rotating trophy.',
    date: '2023-08-06',
    category: 'competition',
    organization: 'Polda DIY',
    details: [
      'Earned a bronze medal in the competitive Under 54 Kg category.',
      'The event was hosted by the Special Region of Yogyakarta Regional Police.',
      'Fiercely competed for the prestigious Kapolda\'s rotating trophy.'
    ],
    featured: false,
    image: 'bhayangkara-presisi-2023.jpg'
  }
];