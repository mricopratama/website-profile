import type { Certification, Achievement } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cisco-networking-devices-config',
    name: 'Networking Devices and Initial Configuration',
    issuer: 'Cisco Networking Academy',
    issuedDate: '2025-08-03',
    credentialId: 'bc86cba3-88aa-45a4-bf52-e51aa6cf732e',
    credentialUrl: 'https://www.credly.com/badges/bc86cba3-88aa-45a4-bf52-e51aa6cf732e',
    category: 'security',
    description: 'This course covers the essentials of network device configuration and underlying network principles. It provides proficiency in hierarchical network design, number system conversions (decimal, binary, hexadecimal), and the operation of Ethernet in switched networks. Key skills include designing IPv4 subnetting schemes, understanding local network communication via ARP, and the functioning of DNS and DHCP services. It also involves comparing transport layer protocols and practical experience in building a simple computer network using Cisco IOS.',
    skills: ['Hierarchical Network Design', 'IPv4 Subnetting', 'Ethernet Operates', 'Virtualization and Cloud Services', 'Network Layer Protocols', 'ARP', 'DNS', 'DHCP', 'Transport Layer Protocols', 'Cisco IOS'],
    featured: true,
    logo: '/logo-cisco.png'
  },
  {
    id: 'kubernetes-cks',
    name: 'Certified Kubernetes Security Specialist (CKS)',
    issuer: 'Udemy',
    issuedDate: '2025-08-02',
    credentialId: 'UC-1ca65a39-4781-4433-a4d6-a25eb871485d',
    credentialUrl: 'https://ude.my/UC-1ca65a39-4781-4433-a4d6-a25eb871485d',
    category: 'security',
    description: 'This course provides a deep dive into Kubernetes security, covering everything from cluster and system hardening to minimizing microservice vulnerabilities. With a strong focus on practical, hands-on learning, it prepares you to secure Kubernetes environments and pass the CKS exam. You will learn to manage cluster security, secure the software supply chain, and implement robust monitoring, logging, and runtime security.',
    skills: ['Cluster Setup', 'Cluster Hardening', 'System Hardening', 'Microservice Vulnerabilities', 'Supply Chain Security', 'Monitoring, Logging, and Runtime Security'],
    featured: true,
    logo: '/logo-kubernetes.png'
  },
  {
    id: 'kubernetes-ckad',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Udemy',
    issuedDate: '2025-08-02',
    credentialId: 'UC-062450bc-03d8-4cad-bad7-121da480c50f',
    credentialUrl: 'https://ude.my/UC-062450bc-03d8-4cad-bad7-121da480c50f',
    category: 'development',
    description: 'This course is designed to provide a strong foundation in Kubernetes and prepare you for the Certified Kubernetes Application Developer (CKAD) exam. Starting with the basics of container orchestration, the course quickly moves into a deep dive into Kubernetes, with a focus on practical, hands-on labs. You will learn to deploy and manage applications on Kubernetes, and gain the confidence to pass the CKAD exam.',
    skills: ['Kubernetes', 'Application Deployment', 'CKAD', 'Container Orchestration', 'YAML'],
    featured: true,
    logo: '/logo-kubernetes.png'
  },
  {
    id: 'cisco-networking-basics',
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    issuedDate: '2025-07-27',
    credentialId: 'f1bdb2e1-ddb1-4cd0-921a-e5074fe7d784',
    credentialUrl: 'https://www.credly.com/badges/f1bdb2e1-ddb1-4cd0-921a-e5074fe7d784',
    category: 'security',
    description: 'The internet is the backbone of our digital world, and understanding networking is key to unlocking limitless tech career opportunities. I have thoroughly studied the fundamentals of computer networking, covering essential devices, media, and protocols. From observing how data moves through networks to configuring devices for seamless connections and utilizing various network applications and protocols for diverse tasks, I am ready for the challenges of the tech world. These skills provide a strong foundation for starting a fulfilling career in technology.',
    skills: ['Application Layer Services', 'IPv4 Addresses', 'Network Media', 'Network Types', 'Protocols Standards', 'Wireless Access'],
    featured: false,
    logo: '/logo-cisco.png'
  },
  {
    id: 'cisco-intro-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issuedDate: '2025-07-27',
    credentialId: '5d63a421-f4c4-46d5-98ad-1df2f857ab3f',
    credentialUrl: 'https://www.credly.com/badges/5d63a421-f4c4-46d5-98ad-1df2f857ab3f',
    category: 'security',
    description: 'With a deep understanding of cybersecurity fundamentals, I am prepared to face digital security challenges. I not only know how to protect personal digital life but also have insights into complex security issues faced by large organizations. Recognizing the important role of reliable cybersecurity professionals, I am dedicated to developing the necessary skills to protect and defend networks in an evolving environment.',
    skills: ['Cybersecurity', 'Cyber Best Practices', 'Network Vulnerabilities', 'Threat Detection', 'Privacy and Data Confidentiality'],
    featured: false,
    logo: '/logo-cisco.png'
  },
  {
    id: 'dicoding-aws-cloud-gen-ai',
    name: 'Learn Cloud and Gen AI Basics on AWS',
    issuer: 'Dicoding',
    issuedDate: '2025-05-01',
    credentialId: '98XWENWGJXM3',
    credentialUrl: 'https://www.dicoding.com/certificates/98XWENWGJXM3',
    category: 'cloud',
    description: 'Cloud computing has grown significantly and become increasingly popular in recent years. One of the leading and most comprehensive cloud platforms is Amazon Web Services (AWS). Millions of customers have used AWS, including three Indonesian unicorns such as Traveloka, Tokopedia, and Gojek. Therefore, master cloud computing to meet the growing industry demands and begin your cloud journey by studying this certification.',
    skills: ['Cloud Computing', 'AWS', 'Generative AI', 'Cloud Services'],
    featured: false,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-web-pemula',
    name: 'Learn Basic Web Programming',
    issuer: 'Dicoding',
    issuedDate: '2025-05-01',
    credentialId: 'NVP75DY1WXR0',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP75DY1WXR0',
    category: 'development',
    description: 'Websites in this era have become a primary, indispensable need. All business or educational sectors can leverage websites as tools for promotion, information exchange, and more. According to data from World Wide Web Technology Surveys, among all active websites, 88.2% use HTML and 95.6% use CSS. This certification thoroughly covers HTML and CSS as foundational elements in website creation.',
    skills: ['HTML', 'CSS', 'Front-End Development', 'Web Basics'],
    featured: false,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-gcp-backend',
    name: 'Learn to Build Back-End Applications for Beginners with Google Cloud',
    issuer: 'Dicoding',
    issuedDate: '2025-04-30',
    credentialId: 'QLZ93YJKMZ5D',
    credentialUrl: 'https://www.dicoding.com/certificates/QLZ93YJKMZ5D',
    category: 'cloud',
    description: 'Back-End Developers play a very crucial role in building an application system, even though their role is not directly visible to users. A Back-End Developer must be able to build services that can support Front-End applications to function properly. This certification thoroughly covers the basic skills to become a Back-End Developer by building RESTful APIs using Node.js technology and Google Cloud\'s computing service, Compute Engine.',
    skills: ['Back-End Development', 'RESTful API', 'Google Cloud Platform', 'Node.js', 'Compute Engine'],
    featured: false,
    logo: '/logo-dicoding.jpeg'
  },
  {
    id: 'dicoding-kotlin-pemula',
    name: 'Start Programming with Kotlin',
    issuer: 'Dicoding',
    issuedDate: '2024-12-30',
    credentialId: '53XEDLQ1KPRN',
    credentialUrl: 'https://www.dicoding.com/certificates/53XEDLQ1KPRN',
    category: 'development',
    description: 'Kotlin is currently the primary language used in Android development. This is due to the benefits it offers, such as being concise, fast, and secure. Additionally, its interoperability allows developers to quickly switch from Java to Kotlin. No wonder Google once reported that nearly 80% of the top 1000 apps on the Play Store use Kotlin. Besides Android development, Kotlin can be used for various types of development, be it server, back-end, or website.',
    skills: ['Kotlin', 'Functional Programming', 'OOP', 'Concurrency', 'Mobile Development'],
    featured: false,
    logo: '/logo-dicoding.jpeg'
  }
];

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
    featured: false,
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
    featured: false,
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