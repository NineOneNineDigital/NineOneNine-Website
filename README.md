# NineOneNine Digital — Company Website

The official website for **NineOneNine Digital**, a software development studio based in Raleigh, North Carolina. Built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Components:** [Headless UI](https://headlessui.com/), [Heroicons](https://heroicons.com/)
- **Forms:** [Formspree](https://formspree.io/)
- **Fonts:** Space Grotesk, Space Mono (Google Fonts)

## Features

- Single-page layout with smooth scroll navigation
- Scroll-reveal animations and animated count-up stats
- Interactive service cards with mouse-tracking glow effects
- Mobile-responsive design with hamburger menu
- Contact form powered by Formspree
- SEO-optimized with schema.org structured data, OpenGraph, and Twitter cards
- Accessible with semantic HTML and ARIA labels

## Sections

- **Hero** — Introduction with tagline and CTA
- **About** — Company story and key stats
- **Services** — Full-stack web dev, eCommerce, mobile, CMS, consulting, API development
- **Process** — 4-step methodology (Discovery, Plan & Design, Build, Launch & Support)
- **FAQ** — Collapsible accordion with common questions
- **Contact** — Project inquiry form

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
├── app/          # Pages, layout, SEO (robots.js, sitemap.js)
├── components/   # UI components (Header, Hero, About, Services, etc.)
├── lib/          # Constants and custom hooks (useReveal, useCountUp)
public/           # Logos, favicons, images
```
