import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'cine-finder',
    title: 'Cine-Finder',
    description: 'A film search application that allows users to find detailed information about films, including synopsis, ratings, and cast.',
    longDescription: 'Cine-Finder is a front-end web application I built to practice consuming REST APIs. The application connects to The Movie Database (TMDb) API to fetch real-time movie data. Users can search for films by title, view popular movies, and get complete details for each film. This project was built to deepen the fundamental understanding of front-end web development.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API', 'TMDb API', 'Netlify', 'React'],
    images: [
      '/film-icon.svg'
    ],
    demoUrl: 'https://findermov.netlify.app',
    githubUrl: 'https://github.com/mricopratama/cine-finder',
    category: 'web',
    featured: true,
    completedAt: '2025-07-28',
    challenges: [
      'Managing application state efficiently without a framework.',
      'Creating a fully responsive film gallery layout.',
      'Handling asynchronous API requests cleanly and correctly.'
    ],
    solutions: [
      'Used a component-based architecture with JavaScript modules.',
      'Utilized CSS Grid and Flexbox for an adaptive design.',
      'Implemented async/await with the Fetch API for readable requests.'
    ],
    role: 'Front-End Developer'
  },
  {
    id: 'dimsum-date',
    title: 'Dimsum Date Company Profile',
    description: 'A company profile website for the culinary business Dimsum Date, featuring a menu, gallery, contact information, and location.',
    longDescription: 'As a Full-Stack Developer, I built this profile website from scratch using Laravel for the backend and data management, and Tailwind CSS for a responsive and modern interface. The project includes an admin panel created with Filament, allowing the owner to easily manage website content such as menus, promotions, and other business information independently.',
    technologies: ['Laravel', 'PHP', 'Livewire', 'Tailwind', 'MySQL', 'Filament'],
    images: [
      '/logo-dimsum.svg'
    ],
    demoUrl: 'https://dimsumdate.com',
    githubUrl: 'https://github.com/padiw123/Web-Profile-Dimsum-Date',
    category: 'web',
    featured: true,
    completedAt: '2025-07-14',
    challenges: [
      'Creating an intuitive admin panel for non-technical clients.',
      'Optimizing menu images for fast loading without losing quality.',
      'Designing an attractive layout that matches the Dimsum Date branding.'
    ],
    solutions: [
      'Used Filament to build a fast and user-friendly admin panel.',
      'Implemented image compression and lazy loading techniques.',
      'Collaborated with a designer to implement a modern UI/UX.'
    ],
    role: 'Full-Stack Developer'
  },
  {
    id: 'visual-novel-sdgs12',
    title: 'Responsible Consumption and Production',
    description: 'An educational visual novel themed on SDG-12, aiming to raise awareness about the importance of responsible consumption and production.',
    longDescription: 'In this project, I served as a Technical Artist. My responsibilities included integrating visual assets (characters, backgrounds) into the Ren\'Py engine, scripting the interactive storyline, and adding simple animations and visual effects to enhance the player experience. This project combines narrative and visual elements to effectively deliver an educational message.',
    technologies: ['Python', 'Ren Py', 'Photoshop', 'Audacity', 'Adobe Express'],
    images: [
      '/circular_economy_diagram.png'
    ],
    demoUrl: 'https://youtu.be/yIp6PruS_Sg?si=-K_77Yx4wSkC4hVt',
    githubUrl: 'https://github.com/mricopratama/Tekmul-Tema-Sampah',
    category: 'multimedia',
    featured: false,
    completedAt: '2025-07-09',
    challenges: [
      'Adapting a linear story into an interactive narrative with branches.',
      'Optimizing visual assets to run smoothly on various devices.',
      'Translating the abstract concept of SDG-12 into an engaging storyline.'
    ],
    solutions: [
      'Used Ren\'Py\'s state and flag system to manage player choices.',
      'Performed compression and resolution adjustments on all visual assets.',
      'Designed dialogues and scenarios relevant to daily life.'
    ],
    role: 'Technical Artist'
  },
  {
    id: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning',
    description: 'A web-based ERP system designed to help companies manage core business processes such as inventory, sales, and human resources.',
    longDescription: 'As a Backend Developer, I focused on developing the core business logic and database architecture. I built the main modules using Laravel, designed the database schema in MySQL, and created a REST API for communication between the backend and frontend. The system uses the AdminLTE template for a functional and user-friendly admin dashboard.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'AdminLTE', 'REST API', 'Git'],
    images: [
      'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/ardiansyah-sweng/erp_rpl',
    category: 'web',
    featured: false,
    completedAt: '2025-07-30',
    challenges: [
      'Designing a scalable database structure for complex modules.',
      'Ensuring data security and user authorization based on roles.',
      'Managing complex business processes into a logical workflow within the system.'
    ],
    solutions: [
      'Implemented database normalization and efficient relationships.',
      'Implemented Laravel\'s role-based authentication and authorization system (RBAC).',
      'Used a modular approach for each business feature.'
    ],
    role: 'Backend Developer'
  },
  {
    id: 'my-web-profile',
    title: 'My Web Profile',
    description: 'A fast and responsive personal portfolio website, built to showcase my projects, skills, and professional experience.',
    longDescription: 'This website was developed using Astro for optimal performance and a smooth Browse experience, featuring an "islands" architecture to minimize the JavaScript footprint. I used TypeScript to ensure high code quality and type safety, and Tailwind CSS to build a modern and fully responsive design. This project serves as my online profile hub.',
    technologies: ['Astro', 'TypeScript', 'Tailwind', 'React', 'Netlify'],
    images: [
      '/icon-logo.svg',
    ],
    demoUrl: 'https://mricopratama.netlify.app',
    githubUrl: 'https://github.com/mricopratama/website-profile',
    category: 'web',
    featured: true,
    completedAt: '2026-08-03',
    challenges: [
      'Implementing a unique and personal design.',
      'Ensuring high performance scores (Lighthouse).',
      'Structuring content to be easily navigable and informative.'
    ],
    solutions: [
      'Used Tailwind CSS for deep design customization.',
      'Leveraged Astro\'s static site generation features for maximum loading speed.',
      'Designed a clear and concise information architecture.'
    ],
    role: 'Full-Stack Developer'
  }
];