import {
  CodeBracketSquareIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// Anchors use /# so they resolve from subpages back to homepage sections.
export const navigation = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "FAQ", href: "/#faq" },
];

// Real projects render with their screenshot in /public.
// Per-project fields:
//   image    — screenshot path (preferred; next/image optimizes on demand)
//   video    — autoplay-on-hover silent loop (used if no image)
//   summary  — optional one-liner (omit to render just the title)
//   href     — optional outbound link to the live site or case study
export const projects = [
  {
    id: "01",
    name: "Bost Homes",
    category: "Website",
    year: "2024",
    image: "/bost-homes-site.jpg",
    href: "https://bosthomes.com",
  },
  {
    id: "02",
    name: "Grande Manor",
    category: "Website",
    year: "2024",
    image: "/grande-manor-site.jpg",
    href: "https://grandemanorhomes.com",
  },
  {
    id: "03",
    name: "McMillan Design",
    category: "Website",
    year: "2024",
    image: "/mcmillan-design-site.jpg",
    href: "https://mcmillan-design.com",
  },
];

export const services = [
  {
    name: "Full-Stack Web Development",
    description:
      "From database architecture to pixel-perfect UI — we handle the entire stack. Custom web applications, responsive websites, CRMs, dashboards, and internal tools built end-to-end so nothing falls through the cracks.",
    icon: CodeBracketSquareIcon,
    slug: "web-development",
  },
  {
    name: "eCommerce",
    description:
      "Storefronts engineered for conversion. Payment processing, inventory management, and checkout flows that feel effortless.",
    icon: ShoppingCartIcon,
    slug: "ecommerce-development",
  },
  {
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Offline-capable, performant, and built to feel right on every device.",
    icon: DevicePhoneMobileIcon,
    slug: "mobile-app-development",
  },
  {
    name: "CMS Development",
    description:
      "Content management systems that give your team full control. Publish, update, and measure — no developer required.",
    icon: DocumentTextIcon,
  },
  {
    name: "Consulting",
    description:
      "Technical strategy, architecture reviews, and technology selection. We help teams make informed decisions before writing a single line of code.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "API Development",
    description:
      "RESTful and GraphQL APIs that connect your systems. Clean documentation, robust error handling, and built for third-party integration.",
    icon: ArrowsRightLeftIcon,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What does the typical timeline look like?",
    answer:
      "Most websites take 4–8 weeks from kickoff to launch. Applications with more complex requirements — custom integrations, user authentication, admin dashboards — typically run 8–16 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    id: 2,
    question: "How is pricing structured?",
    answer:
      "We scope each project individually based on complexity, timeline, and technical requirements. After an initial consultation, we provide a detailed proposal with fixed pricing — no hourly billing, no scope creep. Contact us for a free estimate.",
  },
  {
    id: 3,
    question: "How involved will I be during the build?",
    answer:
      "As involved as you want to be. At minimum, we check in at key milestones — wireframes, design review, staging deployment, and launch. Many clients prefer more frequent collaboration, and we accommodate that easily.",
  },
  {
    id: 4,
    question: "Do you handle ongoing maintenance and updates?",
    answer:
      "Yes. We offer retainer agreements for ongoing development, security updates, and feature additions. For smaller one-off updates, we have straightforward per-task pricing.",
  },
  {
    id: 5,
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes React, Next.js, Node.js, and PostgreSQL. We also work with TypeScript, Python, AWS, and Vercel depending on project needs. We choose tools based on what solves your problem best — not what's trendy.",
  },
];

