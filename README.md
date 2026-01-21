# Ovela Studio Landing Page

A modern, premium design studio landing page built with Next.js 16, Tailwind CSS v4, and GSAP animations.

## Features

- 🎨 **Premium Dark Theme** - Sleek dark UI with orange accent colors
- ✨ **Smooth Animations** - GSAP-powered scroll animations and transitions
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Performance Optimized** - Built with Next.js 16 App Router
- 🎭 **Smooth Scrolling** - Lenis smooth scroll integration

## Sections

- Hero with animated entrance
- Studio Introduction with stats
- Featured Projects with category filters
- Services with hover effects
- Pricing plans
- Client testimonials with tabs
- Process/Method steps
- FAQ accordion
- Blog/Insights
- Newsletter/Contact

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & design system
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScrollLayout.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── StudioIntro.tsx
│       ├── Projects.tsx
│       ├── Services.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── StudioMethod.tsx
│       ├── FAQ.tsx
│       ├── Blog.tsx
│       └── Newsletter.tsx
```

## License

MIT
