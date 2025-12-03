# Personal Portfolio Website

A modern, tech-aesthetic portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Clean Homepage**: Minimalist design with your name and navigation
- **Blog Section**: Showcase your thoughts and articles
- **Portfolio Gallery**: Display your projects with detailed descriptions
- **Modern Tech Aesthetic**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Works seamlessly on all devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with zero configuration

The site will automatically build and deploy on every push to your main branch.

## Customization

### Update Your Name

Edit `/app/page.tsx` and change "Christopher Johnson" to your name.

### Add Blog Posts

Edit `/app/blog/page.tsx` and update the `blogPosts` array with your content.

### Add Portfolio Projects

Edit `/app/portfolio/page.tsx` and update the `projects` array with your work.

### Change Colors

Modify the gradient colors in Tailwind classes throughout the components to match your brand.

## License

MIT
