# NineOneNine Digital — Company Website

The official website for **NineOneNine Digital**, a software development studio based in Raleigh, North Carolina. Built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Components:** [Headless UI](https://headlessui.com/), [Heroicons](https://heroicons.com/)
- **Forms:** [Formspree](https://formspree.io/)
- **Fonts:** Schibsted Grotesk, Geist Mono (Google Fonts)
- **Code quality:** Biome with Ultracite's core, React, and Next.js presets
- **Git hooks:** Husky runs a read-only code-quality check before commits

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
- **Work** — Four project overviews with dedicated pages, screenshots, and related services
- **About** — Company story and key stats
- **Services** — Full-stack web dev, eCommerce, mobile, CMS, consulting, API development
- **Process** — 4-step methodology (Discovery, Plan & Design, Build, Launch & Support)
- **FAQ** — Collapsible accordion with common questions
- **Contact** — Project inquiry form

The landing page leads with business goals and all four selected website
clients. “Discuss your project” links open the contact section. The Formspree
form collects `name`, `email`, optional `website`, and `message`, with a reply
expected within one business day. It uses a single `name` field in place of
the previous `firstName` and `lastName` fields.

Canonical URLs, crawlability, project evidence, inquiry events, and Search Console
activation are documented in [Search and measurement](docs/search-and-measurement.md).
Analytics reporting and Search Console verification require the owner's account
setup; inquiry events are currently available locally for a provider to consume.

The [follow-up plan](docs/launch-follow-up-plan.md) tracks verified team details,
testimonials/results, business profiles, and analytics/Search Console activation.

## Getting Started

Use Node.js **22.12.0 or newer** and npm. Ultracite's CLI dependencies require
this newer runtime even though Next.js itself supports older Node versions.

```bash
# Install the locked dependencies and activate Husky hooks
npm ci

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
| `npm run lint`  | Check formatting, imports, and lint rules with Ultracite/Biome |
| `npm run lint:fix` | Apply safe formatting and lint fixes |
| `npm run check` | Run lint, a fresh production build, and SEO validation |
| `npm run check:security` | Audit all production and development dependencies (requires network) |
| `npm run check:runtime` | Smoke-test a running production server at localhost:3000 |
| `npm run check:seo` | Validate prerendered SEO output after a build |
| `npm run prepare` | Install or reactivate Husky hooks |

### Code-quality workflow

[Biome](https://biomejs.dev/) handles formatting and linting through
[Ultracite's React and Next.js presets](https://www.ultracite.ai/docs/provider/biome),
configured in `biome.jsonc`. ESLint is no longer used. Install the recommended
Biome editor extension to enable formatting and safe fixes on save.

Run `npm run lint:fix`, review the diff, and stage the changes you intend to
commit. [Husky](https://typicode.github.io/husky/) runs `npm run lint` against
the whole working tree before each commit. The hook never modifies files or
stages changes automatically, so partially staged work stays under your control.
Unstaged code-quality failures also block a commit. Builds and SEO checks stay
out of the hook to keep commits fast; run `npm run check` before submitting work.

`npm ci` activates the hooks through the `prepare` script. If dependencies were
installed with lifecycle scripts disabled, run `npm run prepare` manually.
For CI installs where hooks are unnecessary, use `HUSKY=0 npm ci`.
The SEO-only command requires an existing build; use `npm run check` when source
files have changed so that validation cannot silently use stale output.

### Dependency security

Next.js must remain at **16.3.4 or newer within 16.x** and the direct PostCSS
dependency at **8.5.28 or newer within 8.x**. Commit the npm lockfile so deployment
uses the reviewed dependency tree. Security audits are network-dependent and
stay separate from the offline lint hook.

The Tailwind-scoped `postcss-selector-parser` override pins **7.1.6** because
Tailwind 3's declared 6.x range does not include the fix for
[GHSA-rj75-hqrm-r3gf](https://github.com/postcss/postcss-selector-parser/security/advisories/GHSA-rj75-hqrm-r3gf).
It also covers Tailwind's nested PostCSS plugin. This is a build-time dependency;
the site does not accept visitor-supplied CSS. The generated, minified stylesheet
was byte-identical before and after the security upgrade. Recheck CSS output
when changing this override, and remove it once upstream accepts a patched parser.

After dependency updates, run `npm ci`, `npm run check:security`, and
`npm run check`. Start that production build with `npm run start`, then run
`npm run check:runtime` in another terminal. For a different port, use
`npm run check:runtime -- http://127.0.0.1:3001`. Also check mobile navigation,
native FAQs, and mocked contact-form success/failure in a browser. Do not send
test inquiries to the live Formspree inbox. Local upgrades only protect the live
site after the updated build is deployed.

## Project Structure

```
src/
├── app/          # Pages, layout, SEO (robots.js, sitemap.js)
├── components/   # UI components (Header, Hero, About, Services, etc.)
├── lib/          # Constants and custom hooks (useReveal, useCountUp)
public/           # Logos, favicons, images
```
