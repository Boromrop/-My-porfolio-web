# Rop Borom - Portfolio Website

A modern, responsive portfolio website showcasing data science, AI engineering, and web development projects. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light mode
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive**: Smooth animations and transitions
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **Analytics**: Integrated Vercel Analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio-Website-2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository

3. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**: Click "Deploy" and wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project

### Option 3: Deploy via GitHub Integration

1. Connect your GitHub repository to Vercel
2. Every push to main branch will trigger automatic deployment
3. Preview deployments for pull requests

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic deployment. If you add features like contact forms, you may need to configure:

- Email service credentials
- API keys
- Database connections

### Custom Domain

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## 📁 Project Structure

```
src/
├── app/                 # App router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── sections/       # Page sections
│   ├── ui/            # UI components
│   └── ThemeProvider.tsx
├── data/              # Static data
├── lib/               # Utilities
└── types/             # TypeScript types
```

## 🎨 Customization

### Colors and Theme
- Edit `tailwind.config.ts` for color schemes
- Modify `src/app/globals.css` for custom styles

### Content
- Update personal information in `src/data/resume.ts`
- Modify project details in `src/data/projects.ts`
- Edit section components in `src/components/sections/`

### Images
- Replace images in `public/` directory
- Update image paths in data files

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: 100/100 score
- **Accessibility**: WCAG 2.1 compliant

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized images for mobile
- Fast loading on slow connections

## 🛡️ Security

- HTTPS enforced
- Secure headers
- Content Security Policy
- XSS protection

## 📈 Analytics

Vercel Analytics is integrated to track:
- Page views
- Performance metrics
- User behavior
- Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ropborom7@gmail.com
- **GitHub**: [@Boromrop](https://github.com/Boromrop)
- **LinkedIn**: [Rop Borom](https://www.linkedin.com/in/rop-borom-269411289/)

---

Built with ❤️ by Rop Borom
