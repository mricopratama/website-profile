import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'dimsum-date',
    title: 'Web Profile Dimsum Date',
    description: 'Website profil perusahaan untuk bisnis kuliner Dimsum Date, menampilkan menu, galeri, informasi kontak, dan lokasi.',
    longDescription: 'Sebagai Full-Stack Developer, saya membangun website profil ini dari awal menggunakan Laravel untuk backend dan manajemen data, serta Tailwind CSS untuk antarmuka yang responsif dan modern. Proyek ini dilengkapi dengan panel admin yang dibuat menggunakan Filament, memungkinkan pemilik untuk dengan mudah mengelola konten website seperti menu, promo, dan informasi bisnis lainnya secara mandiri.',
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
      'Membuat panel admin yang intuitif untuk klien non-teknis',
      'Mengoptimalkan gambar menu untuk loading cepat tanpa kehilangan kualitas',
      'Merancang desain yang menarik dan sesuai dengan branding Dimsum Date'
    ],
    solutions: [
      'Menggunakan Filament untuk membangun panel admin yang cepat dan user-friendly',
      'Menerapkan teknik kompresi gambar dan lazy loading',
      'Berkolaborasi dengan desainer untuk mengimplementasikan UI/UX yang modern'
    ],
    role: 'Full-Stack Developer'
  },
  {
    id: 'visual-novel-sdgs12',
    title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
    description: 'Visual novel edukatif bertema SDG-12 yang bertujuan meningkatkan kesadaran tentang pentingnya konsumsi dan produksi yang bertanggung jawab.',
    longDescription: 'Dalam proyek ini, saya berperan sebagai Technical Artist. Tanggung jawab saya meliputi integrasi aset visual (karakter, latar belakang) ke dalam engine Ren\'Py, membuat script untuk alur cerita interaktif, serta menambahkan animasi dan efek visual sederhana untuk meningkatkan pengalaman pemain. Proyek ini menggabungkan narasi dan elemen visual untuk menyampaikan pesan edukatif secara efektif.',
    technologies: ['Python', 'Ren Py', 'Photoshop', 'Audacity', 'Adobe Express'],
    images: [
      '/circular_economy_diagram.png'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/mricopratama/Tekmul-Tema-Sampah',
    category: 'multimedia',
    featured: true,
    completedAt: '2025-07-09',
    challenges: [
      'Mengadaptasi cerita linear menjadi narasi interaktif dengan cabang',
      'Mengoptimalkan aset visual agar berjalan lancar di berbagai perangkat',
      'Menerjemahkan konsep abstrak SDG-12 menjadi alur cerita yang menarik'
    ],
    solutions: [
      'Menggunakan sistem state dan flag dalam Ren\'Py untuk mengelola pilihan pemain',
      'Melakukan proses kompresi dan penyesuaian resolusi pada semua aset visual',
      'Merancang dialog dan skenario yang relevan dengan kehidupan sehari-hari'
    ],
    role: 'Technical Artist'
  },
  {
    id: 'enterprise-resources-planning',
    title: 'Enterprise Resources Planning',
    description: 'Sistem ERP berbasis web yang dirancang untuk membantu perusahaan mengelola proses bisnis inti seperti inventaris, penjualan, dan sumber daya manusia.',
    longDescription: 'Sebagai Backend Developer, saya berfokus pada pengembangan logika bisnis inti dan arsitektur database. Saya membangun modul-modul utama menggunakan Laravel, merancang skema database di MySQL, dan membuat REST API untuk komunikasi antara backend dan frontend. Sistem ini menggunakan template AdminLTE untuk dashboard admin yang fungsional dan mudah digunakan.',
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
      'Merancang struktur database yang scalable untuk modul yang kompleks',
      'Memastikan keamanan data dan otorisasi user berdasarkan peran',
      'Mengelola proses bisnis yang rumit menjadi alur kerja yang logis di dalam sistem'
    ],
    solutions: [
      'Menerapkan normalisasi database dan relasi yang efisien',
      'Mengimplementasikan sistem otentikasi dan otorisasi berbasis-peran (Role-Based Access Control) dari Laravel',
      'Menggunakan pendekatan modular untuk setiap fitur bisnis'
    ],
    role: 'Backend Developer'
  },
  {
    id: 'self-webs-profile',
    title: 'My Web Profile',
    description: 'Website portofolio pribadi yang cepat dan responsif, dibangun untuk menampilkan proyek, keahlian, dan pengalaman profesional saya.',
    longDescription: 'Website ini dikembangkan menggunakan Astro untuk performa yang optimal dan pengalaman Browse yang mulus, dengan arsitektur "islands" untuk meminimalkan jejak JavaScript. Saya menggunakan TypeScript untuk memastikan kualitas kode yang tinggi dan type safety, serta Tailwind CSS untuk membangun desain yang modern dan sepenuhnya responsif. Proyek ini berfungsi sebagai pusat profil online saya.',
    technologies: ['Astro', 'Typescript', 'Tailwind', 'React', 'Netlify'],
    images: [
      '/icon-logo.svg',
    ],
    demoUrl: 'https://mricopratama.netlify.app',
    githubUrl: 'https://github.com/mricopratama/website-profile',
    category: 'web',
    featured: true,
    completedAt: '2026-08-03',
    challenges: [
      'Mengimplementasikan desain yang unik dan personal',
      'Memastikan skor performa (Lighthouse) yang tinggi',
      'Menstrukturkan konten agar mudah dinavigasi dan informatif'
    ],
    solutions: [
      'Menggunakan Tailwind CSS untuk kustomisasi desain yang mendalam',
      'Memanfaatkan fitur static site generation dari Astro untuk kecepatan loading maksimal',
      'Merancang arsitektur informasi yang jelas dan ringkas'
    ],
    role: 'Full-Stack Developer'
  }
];