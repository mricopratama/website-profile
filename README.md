# Professional Portfolio Website

A modern, responsive portfolio website built with Astro and Tailwind CSS, showcasing expertise in full-stack development and cybersecurity analysis. Features a long-scroll homepage design with detailed project pages, articles, certifications, achievements, and publications.

## 🌟 Features

### Core Functionality
- **Long-scroll Homepage**: Engaging storytelling format introducing skills and featured work
- **Multi-page Architecture**: Detailed pages for projects, articles, certifications, achievements, and publications
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Glass-morphism effects, smooth animations, and professional aesthetics
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization

### Content Sections
- **Hero Section**: Professional introduction with call-to-action
- **About**: Personal story and professional journey
- **Featured Projects**: Showcase of best work with detailed case studies
- **Latest Articles**: Technical blog posts and insights
- **Skills & Technologies**: Visual representation of technical expertise
- **Professional Certifications**: Industry credentials and qualifications
- **Achievements & Recognition**: Awards, competitions, and milestones
- **Publications & Research**: Academic papers, whitepapers, and articles
- **Contact**: Professional contact information and social links

## 🚀 Tech Stack

### Frontend
- **[Astro](https://astro.build/)** - Modern static site generator
- **[React](https://reactjs.org/)** - Component library for interactive elements
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing
- **ESLint & Prettier** - Code linting and formatting

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Articles.astro
│   │   ├── Skills.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/               # Content data files
│   │   ├── projects.ts
│   │   ├── articles.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   ├── achievements.ts
│   │   └── publications.ts
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/              # Route pages
│   │   ├── index.astro
│   │   ├── projects/
│   │   ├── articles/
│   │   ├── certifications/
│   │   ├── achievements/
│   │   └── publications/
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   └── assets/             # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

## 📝 Content Management

### Adding New Content

#### Projects
Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description for project page',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  images: ['image-url-1', 'image-url-2'],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/username/repo',
  category: 'web' | 'mobile' | 'security' | 'ai' | 'other',
  featured: true,
  completedAt: '2024-01-15',
  challenges: ['Challenge 1', 'Challenge 2'],
  solutions: ['Solution 1', 'Solution 2'],
  role: 'Full-Stack Developer'
}
```

#### Articles
Edit `src/data/articles.ts` to add new articles:

```typescript
{
  id: 'article-slug',
  title: 'Article Title',
  excerpt: 'Brief excerpt',
  content: 'Full article content in markdown',
  publishedAt: '2024-01-15',
  readingTime: 5,
  tags: ['tag1', 'tag2'],
  category: 'development' | 'security' | 'tutorial' | 'thoughts',
  featured: true,
  image: 'image-url'
}
```

#### Certifications
Edit `src/data/certifications.ts` to add new certifications:

```typescript
{
  id: 'cert-slug',
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  issuedDate: '2024-01-15',
  expiryDate: '2027-01-15', // optional
  credentialId: 'CERT-123456', // optional
  credentialUrl: 'https://verify.com', // optional
  category: 'security' | 'development' | 'cloud' | 'project-management' | 'other',
  description: 'Certification description',
  skills: ['Skill 1', 'Skill 2'],
  featured: true,
  logo: 'logo-url' // optional
}
```

### Customization

#### Colors & Theming
Modify `tailwind.config.mjs` to customize the color scheme:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ },
  // ... other color definitions
}
```

#### Typography
Update font families in `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

#### Personal Information
Update personal details in:
- `src/components/Hero.astro` - Hero section content
- `src/components/About.astro` - About section content
- `src/components/Contact.astro` - Contact information
- `src/components/Footer.astro` - Footer links and info

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and highlights
- **Secondary**: Purple tones for secondary elements
- **Accent**: Cyan tones for special highlights
- **Success**: Green tones for positive actions
- **Warning**: Yellow/Orange tones for warnings
- **Error**: Red tones for errors and security categories
- **Dark**: Grayscale for backgrounds and text

### Typography
- **Headings**: Inter font family, various weights
- **Body**: Inter font family, regular weight
- **Code**: JetBrains Mono for code snippets

### Components
- **Glass Effect**: Backdrop blur with transparency
- **Gradient Text**: Animated gradient text for headings
- **Hover Effects**: Smooth scale and color transitions
- **Cards**: Rounded corners with shadow effects

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly navigation
- Optimized image sizes
- Readable typography
- Accessible form controls

## 🔧 Performance Optimization

### Image Optimization
- WebP format support
- Lazy loading implementation
- Responsive image sizing
- CDN integration (Pexels for stock photos)

### Code Splitting
- Component-based architecture
- Dynamic imports for heavy components
- Minimal JavaScript bundle size

### SEO Features
- Semantic HTML structure
- Meta tags optimization
- Open Graph tags
- Structured data markup
- Sitemap generation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

#### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

#### Vercel
1. Connect your repository to Vercel
2. Vercel will auto-detect Astro configuration
3. Deploy automatically on git push

#### Static Hosting
1. Run `npm run build`
2. Upload `dist` folder to your hosting provider
3. Configure server for SPA routing (if needed)

### Environment Variables
Create `.env` file for environment-specific configurations:

```env
# Site Configuration
SITE_URL=https://yoursite.com
SITE_NAME=Your Portfolio

# Analytics (optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Contact Form (optional)
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

## 🔒 Security Considerations

### Content Security Policy
Implement CSP headers for enhanced security:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; script-src 'self' 'unsafe-inline';">
```

### Image Sources
- All images use HTTPS URLs
- External images from trusted sources (Pexels)
- No user-uploaded content without validation

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write semantic HTML
- Follow accessibility guidelines
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Astro Team** - For the amazing static site generator
- **Tailwind CSS** - For the utility-first CSS framework
- **Pexels** - For high-quality stock photography
- **Lucide** - For beautiful icon library
- **Framer Motion** - For smooth animations

## 📞 Support

For questions or support:
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

---

**Built with ❤️ using Astro, React, and Tailwind CSS**