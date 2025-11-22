import type { Handler } from '@netlify/functions';

const profileContext = `
Nama: Rico Pratama (Mr. Rico Pratama)

## Tentang Saya
Saya adalah seorang Full-Stack Developer dan Cybersecurity Analyst yang passionate dalam membangun aplikasi web modern dan mengamankan sistem digital. Saya memiliki pengalaman dalam berbagai teknologi web development dan keamanan siber.

## Keahlian Teknis

### Frontend Development
- React, Next.js, Vue.js, Astro
- TypeScript, JavaScript
- Tailwind CSS
- Pengembangan UI/UX yang modern dan responsif

### Backend Development
- Node.js, Python, PHP, Java, Go
- Laravel framework
- RESTful API development
- Database: PostgreSQL, MySQL, Redis

### DevOps & Infrastructure
- Docker containerization
- AWS Cloud Platform
- Nginx web server
- Linux system administration
- Git version control
- Cisco Networking

### Security & Testing
- Penetration Testing
- Vulnerability Assessment
- Network Security
- OWASP Top 10
- Selenium, Cypress, Jest untuk automated testing
- Postman untuk API testing
- Burp Suite untuk security testing

## Sertifikasi & Kredensial

### Cybersecurity (Cisco Networking Academy)
1. Junior Cybersecurity Analyst Career Path (Agustus 2025)
   - Cybersecurity Controls, Network & Systems Security
   - Vulnerability Assessment & Risk Assessment
   - Incident Management & Response

2. Cyber Threat Management (Agustus 2025)
   - Compliance Frameworks
   - Vulnerability Assessment Planning
   - Risk Management & Disaster Recovery
   - Forensic Investigation

3. Network Defense (Agustus 2025)
   - Network Security Configuration
   - Endpoint Security (Linux/Windows)
   - Firewall Configuration & Cloud Security
   - PKI & Virtualization

4. Endpoint Security (Agustus 2024)
   - Data Security Challenges
   - Malware Analysis
   - Endpoint Security Evaluation

5. Networking Devices and Initial Configuration (Agustus 2025)
   - Hierarchical Network Design
   - IPv4 Subnetting
   - Cisco IOS

6. Networking Basics (Juli 2025)
   - Network fundamentals
   - IPv4 Addresses & Network Media
   - Protocols & Standards

7. Introduction to Cybersecurity (Juli 2025)
   - Cyber Best Practices
   - Threat Detection
   - Privacy & Data Confidentiality

### Kubernetes (Udemy)
1. Certified Kubernetes Security Specialist (CKS) - Agustus 2025
   - Cluster & System Hardening
   - Microservice Vulnerabilities
   - Supply Chain Security

2. Certified Kubernetes Application Developer (CKAD) - Agustus 2025
   - Kubernetes Application Deployment
   - Container Orchestration

### Cloud & Development (Dicoding)
1. Learn Cloud and Gen AI Basics on AWS (Mei 2025)
   - AWS Cloud Computing
   - Generative AI

2. Learn to Build Back-End Applications for Beginners with Google Cloud (April 2025)
   - RESTful API with Node.js
   - Google Cloud Compute Engine

3. Learn Basic Web Programming (Mei 2025)
   - HTML & CSS fundamentals

4. Start Programming with Kotlin (Desember 2024)
   - Kotlin programming
   - Functional Programming & OOP

## Prestasi & Achievement

### Cybersecurity Seminars
1. Seminar "Tech Power Up: Cybersmart Campus" - Juni 2025 (McAfee)
   - Cyber technology dalam kampus
   - Cybersecurity challenges dalam pendidikan

2. Seminar "Data Security, Access Management, and Authentication" - November 2024 (BEM FAST UAD)
   - Data protection & authentication systems
   - Secure access management

### Taekwondo Championships (National Level)
1. Gold Medal - Ganesha National Taekwondo Championship 2024 (Under 54 Kg)
   - Organized by Kemenpora RI
   - Juni 2024

2. Silver Medal - Everest Taekwondo Championship 2023 (Under 54 Kg)
   - Kemenpora Cup
   - Desember 2023

3. Gold Medal - DANREM 052/Wijayakrama National Championship 2023 (Under 54 Kg)
   - Military Resort Command 052/Wijayakrama
   - Oktober 2023

4. Bronze Medal - Bhayangkara Presisi (Kapolda DIY Cup) 2023 (Under 54 Kg)
   - Polda DIY
   - Agustus 2023

## Soft Skills
- Leadership & Team Management (dari pengalaman kompetisi)
- Time Management & Discipline
- Problem Solving & Analytical Thinking
- Continuous Learning & Adaptability
- Communication & Collaboration

## Kontak & Portfolio
Untuk informasi lebih lanjut tentang proyek-proyek saya, silakan jelajahi website portfolio ini atau hubungi saya melalui form kontak yang tersedia.

## Portfolio Proyek

### 1. Cine-Finder (Web Application)
**Role:** Front-End Developer
**Completed:** Juli 2025
**Technologies:** JavaScript, HTML, CSS, React, REST API, TMDb API, Netlify
**Deskripsi:** Aplikasi pencarian film yang memungkinkan pengguna menemukan informasi detail tentang film, termasuk sinopsis, rating, dan cast. Proyek ini dibangun untuk mempraktikkan consuming REST APIs dan mendalami fundamental front-end web development.
**Demo:** https://findermov.netlify.app
**GitHub:** https://github.com/mricopratama/cine-finder
**Challenges & Solutions:**
- Mengelola state aplikasi secara efisien tanpa framework → Menggunakan arsitektur component-based dengan JavaScript modules
- Layout gallery film yang fully responsive → Memanfaatkan CSS Grid dan Flexbox
- Handling asynchronous API requests → Implementasi async/await dengan Fetch API

### 2. Dimsum Date Company Profile (Full-Stack Web)
**Role:** Full-Stack Developer
**Completed:** Juli 2025
**Technologies:** Laravel, PHP, Livewire, Tailwind CSS, MySQL, Filament
**Deskripsi:** Website profil perusahaan untuk bisnis kuliner Dimsum Date, menampilkan menu, galeri, informasi kontak, dan lokasi. Proyek ini dibangun dari nol dengan Laravel untuk backend dan Tailwind CSS untuk interface yang responsif dan modern. Termasuk admin panel dengan Filament untuk memudahkan owner mengelola konten website.
**Demo:** https://dimsumdate.com
**GitHub:** https://github.com/padiw123/Web-Profile-Dimsum-Date
**Challenges & Solutions:**
- Admin panel intuitif untuk klien non-teknis → Menggunakan Filament untuk admin panel yang cepat dan user-friendly
- Optimasi gambar menu untuk loading cepat → Implementasi teknik kompresi gambar dan lazy loading
- Layout menarik sesuai branding → Kolaborasi dengan designer untuk UI/UX modern

### 3. Responsible Consumption and Production (Visual Novel Game)
**Role:** Technical Artist
**Completed:** Juli 2025
**Technologies:** Python, Ren'Py, Photoshop, Audacity, Adobe Express
**Deskripsi:** Visual novel edukatif bertema SDG-12 untuk meningkatkan kesadaran tentang pentingnya konsumsi dan produksi yang bertanggung jawab. Tanggung jawab mencakup integrasi visual assets ke Ren'Py engine, scripting storyline interaktif, dan menambahkan animasi sederhana untuk meningkatkan player experience.
**Demo:** https://youtu.be/yIp6PruS_Sg?si=-K_77Yx4wSkC4hVt
**GitHub:** https://github.com/mricopratama/Tekmul-Tema-Sampah
**Challenges & Solutions:**
- Adaptasi cerita linear ke narrative interaktif dengan branches → Menggunakan state dan flag system Ren'Py
- Optimasi visual assets untuk berbagai devices → Kompresi dan penyesuaian resolusi
- Menerjemahkan konsep SDG-12 ke storyline menarik → Design dialog dan skenario relevan dengan kehidupan sehari-hari

### 4. Enterprise Resource Planning (ERP System)
**Role:** Backend Developer
**Completed:** Juli 2025
**Technologies:** Laravel, PHP, MySQL, AdminLTE, REST API, Git
**Deskripsi:** Sistem ERP berbasis web untuk membantu perusahaan mengelola proses bisnis inti seperti inventory, sales, dan human resources. Fokus pada pengembangan business logic dan arsitektur database, membangun modul utama dengan Laravel, mendesain database schema di MySQL, dan membuat REST API untuk komunikasi backend-frontend.
**GitHub:** https://github.com/ardiansyah-sweng/erp_rpl
**Challenges & Solutions:**
- Database structure scalable untuk modul kompleks → Implementasi normalisasi database dan relationship efisien
- Keamanan data dan otorisasi user berbasis role → Implementasi Laravel's role-based authentication (RBAC)
- Proses bisnis kompleks ke logical workflow → Menggunakan modular approach untuk setiap fitur bisnis

### 5. My Web Profile (Personal Portfolio)
**Role:** Full-Stack Developer
**Completed:** Agustus 2026
**Technologies:** Astro, TypeScript, Tailwind CSS, React, Netlify
**Deskripsi:** Website portfolio personal yang cepat dan responsif, dibangun untuk menampilkan proyek, skills, dan pengalaman profesional. Dikembangkan menggunakan Astro untuk performa optimal dengan arsitektur "islands" untuk meminimalkan JavaScript footprint. Menggunakan TypeScript untuk kualitas kode tinggi dan Tailwind CSS untuk design modern yang fully responsive.
**Demo:** https://mricopratama.netlify.app
**GitHub:** https://github.com/mricopratama/website-profile
**Challenges & Solutions:**
- Design unik dan personal → Menggunakan Tailwind CSS untuk kustomisasi design mendalam
- High performance scores (Lighthouse) → Memanfaatkan static site generation features Astro
- Content structure mudah dinavigasi → Design information architecture yang jelas dan ringkas

## Catatan Penting
Saya selalu terbuka untuk diskusi tentang:
- Proyek web development
- Konsultasi keamanan siber
- Kolaborasi dalam bidang teknologi
- Peluang karir di bidang Full-Stack Development atau Cybersecurity

Jangan ragu untuk bertanya tentang pengalaman, skill, atau proyek spesifik yang ingin Anda ketahui!
`;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

interface Message {
  message: string;
}

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request body is required' }),
      };
    }

    const { message }: Message = JSON.parse(event.body);

    if (!message || message.trim() === '') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Check if API key is configured
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'API key not configured',
          response: 'Maaf, chatbot sedang dalam maintenance. Silakan coba lagi nanti.' 
        }),
      };
    }

    // Prepare the prompt with context
    const systemPrompt = `Anda adalah asisten portfolio untuk Rico Pratama. Gunakan informasi berikut untuk menjawab pertanyaan:

${profileContext}

Instruksi:
1. Jawab dengan ramah, profesional, dan informatif
2. Gunakan bahasa Indonesia secara default
3. Jika ditanya dalam bahasa Inggris, jawab dalam bahasa Inggris
4. Berikan jawaban yang spesifik berdasarkan informasi yang tersedia
5. Jika tidak tahu jawabannya, katakan dengan jujur dan sarankan untuk menghubungi langsung
6. Jangan buat informasi yang tidak ada dalam context
7. Highlight skill dan achievement yang relevan dengan pertanyaan
8. Tetap fokus pada topik portfolio dan keahlian Rico Pratama

Pertanyaan user: ${message}`;

    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract response text
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                      'Maaf, saya tidak dapat memberikan respons saat ini. Silakan coba lagi.';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        response: aiResponse,
        timestamp: new Date().toISOString()
      }),
    };

  } catch (error) {
    console.error('Error in chat function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        response: 'Maaf, terjadi kesalahan pada server. Silakan coba lagi nanti.'
      }),
    };
  }
};
