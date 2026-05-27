import {
  CodeBracketSquareIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export const servicePages = {
  "web-development": {
    slug: "web-development",
    icon: CodeBracketSquareIcon,
    name: "Web Development",
    title: "Custom Web Development in Raleigh, NC",
    metaTitle: "Custom Web Development in Raleigh, NC",
    metaDescription:
      "Custom web application development in Raleigh, North Carolina. Production-grade React, Next.js, and full-stack apps for businesses ready to outgrow templates.",
    hero: {
      headline: "Custom web development,",
      headlineAccent: "built end to end.",
      lede: "Production-grade web applications and marketing sites — designed, engineered, and deployed by a Raleigh-based studio that handles the full stack.",
    },
    intro: [
      "We design and build custom web applications from scratch — not templates, not no-code stitched together with duct tape. Whether you need a customer-facing platform, an internal tool, or a content-heavy marketing site, we handle the full stack: database modeling, API design, authentication, hosting, and the interface your users actually see.",
      "Most of our clients come to us when off-the-shelf software has stopped working — when SaaS pricing no longer makes sense at their scale, or when drag-and-drop builders can't model their business logic. Based in Raleigh, we work closely with teams across the Triangle and North Carolina with the same level of access and accountability you'd expect from an in-house team.",
    ],
    deliverables: [
      "Custom UI and UX design tuned to your brand",
      "Frontend built with React and Next.js",
      "REST or GraphQL APIs",
      "PostgreSQL schema design and migrations",
      "Authentication, role-based access, and user management",
      "Payment processing integration when needed",
      "Responsive design across desktop, tablet, and mobile",
      "Accessibility to WCAG 2.1 AA",
      "Production deployment on Vercel or AWS",
      "Analytics, error monitoring, and observability",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
      "AWS",
    ],
    faqs: [
      {
        question: "How long does a custom web application take to build?",
        answer:
          "Most full-stack applications take 8–16 weeks from kickoff to launch. Marketing sites and lighter projects run 4–8 weeks. We scope everything upfront so timelines are committed, not guessed.",
      },
      {
        question: "Will we own the code at the end of the project?",
        answer:
          "Yes. All code is delivered into your repository, and you have full ownership of the application, the infrastructure, and the data. We can hand off operations or stay on as a retained partner.",
      },
      {
        question: "Can you work with our existing brand and design system?",
        answer:
          "Yes. If you have a brand guide, design system, or Figma library, we'll work within it. If you don't, we'll design from scratch with you.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We offer maintenance retainers for ongoing development, security patches, and feature additions. For one-off updates, we have per-task pricing. Either way, you're not left on your own at go-live.",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    icon: DevicePhoneMobileIcon,
    name: "Mobile App Development",
    title: "Mobile App Development in Raleigh, NC",
    metaTitle: "Mobile App Development in Raleigh, NC",
    metaDescription:
      "iOS and Android app development in Raleigh, North Carolina. Native and React Native apps built for performance, offline support, and the app stores.",
    hero: {
      headline: "Mobile apps,",
      headlineAccent: "native where it counts.",
      lede: "iOS and Android apps engineered for performance and the long tail of post-launch updates — built by a studio that ships to both app stores.",
    },
    intro: [
      "We build iOS and Android applications — native when the platform demands it, React Native when shared code makes sense. From mobile-first startups to companion apps for existing platforms, we handle design, development, app store submission, and the long tail of post-launch updates.",
      "Mobile is its own discipline. Offline-first data handling, push notifications, background tasks, app store review cycles, and the differences between iOS and Android user expectations all matter. Based in Raleigh, we work with founders and product teams across the Triangle who need apps that feel genuinely native — not web pages wrapped in a shell.",
    ],
    deliverables: [
      "Native iOS development with Swift and SwiftUI",
      "Native Android development with Kotlin and Jetpack Compose",
      "React Native for shared-codebase apps",
      "Offline-first data sync and caching",
      "Push notifications and deep linking",
      "In-app purchases and subscription billing",
      "App Store and Google Play submission",
      "TestFlight and internal track distribution",
      "Crash reporting, analytics, and performance monitoring",
      "Post-launch updates and OS migration support",
    ],
    tech: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Expo",
      "Firebase",
      "Supabase",
      "RevenueCat",
    ],
    faqs: [
      {
        question: "Should we go native or use React Native?",
        answer:
          "It depends on the app. If you need deep platform integration, high-frame-rate animation, or hardware access, native is usually the right call. If your app is primarily forms, lists, and content, React Native lets us ship to both platforms from one codebase — at a meaningful cost savings.",
      },
      {
        question: "Do you handle App Store and Google Play submissions?",
        answer:
          "Yes. We manage the entire submission process — provisioning, certificates, store listings, screenshots, and review responses. If a build gets rejected, we handle the back-and-forth.",
      },
      {
        question: "Can you build a mobile app on top of our existing backend?",
        answer:
          "Yes. If you already have a REST or GraphQL API, we can build the mobile client against it. If your existing backend needs adjustments for mobile use cases — offline sync, push, auth — we can handle those changes too.",
      },
      {
        question: "What about ongoing updates after launch?",
        answer:
          "Mobile platforms change frequently — new iOS versions, new Android SDK requirements, deprecated APIs. We offer maintenance retainers to keep your app current and on the store, so it doesn't quietly break six months after launch.",
      },
    ],
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    icon: ShoppingCartIcon,
    name: "eCommerce Development",
    title: "eCommerce Development in Raleigh, NC",
    metaTitle: "eCommerce Development in Raleigh, NC",
    metaDescription:
      "Custom eCommerce development in Raleigh, North Carolina. Storefronts engineered for conversion — Stripe, Shopify, headless commerce, and custom platforms.",
    hero: {
      headline: "eCommerce,",
      headlineAccent: "engineered for conversion.",
      lede: "Custom storefronts, headless Shopify, and Stripe-powered checkout flows built to move product — by a Raleigh studio that treats every conversion as a design decision.",
    },
    intro: [
      "Whether you need a custom-built storefront, a headless Shopify implementation, or a Stripe-powered checkout grafted onto an existing site, we build commerce experiences that move product. Every choice — payment processor, cart UX, checkout flow, tax handling, inventory model — has a measurable effect on conversion. We make those choices deliberately, with your business model in mind.",
      "Based in Raleigh, North Carolina, we work with local and national brands that have outgrown drag-and-drop builders or want a stack tailored to a specific catalog, fulfillment model, or customer experience.",
    ],
    deliverables: [
      "Custom storefront design and frontend",
      "Headless commerce with Shopify, Medusa, or Stripe",
      "Product catalog and inventory management",
      "One-page and multi-step checkout flows",
      "Payment processing with Stripe, Apple Pay, and Google Pay",
      "Subscription and recurring billing",
      "Tax calculation and shipping integration",
      "Order management and admin dashboards",
      "Transactional email flows",
      "Analytics, conversion tracking, and A/B testing",
    ],
    tech: [
      "Next.js",
      "Stripe",
      "Shopify",
      "Hydrogen",
      "Medusa",
      "Sanity",
      "Algolia",
      "Resend",
    ],
    faqs: [
      {
        question: "Should we use Shopify or build a custom platform?",
        answer:
          "Shopify is the right choice for most product-led businesses — it's stable, well-supported, and lets us spend our effort on the experience rather than the plumbing. Headless Shopify gives us full control of the storefront while keeping Shopify's backend. We recommend a fully custom build when your catalog, pricing logic, or checkout flow is genuinely unusual.",
      },
      {
        question: "Do you support subscriptions and recurring billing?",
        answer:
          "Yes. We build subscription products on Stripe Billing, RevenueCat, or Shopify Subscriptions depending on your stack and customer needs. We handle proration, plan changes, dunning, and cancellation flows.",
      },
      {
        question: "Can you migrate us from another platform?",
        answer:
          "Yes. We've migrated stores off WooCommerce, Squarespace, BigCommerce, and legacy custom platforms. We plan migrations to preserve SEO equity, redirect old URLs, and avoid revenue gaps during cutover.",
      },
      {
        question: "How do you handle tax and shipping?",
        answer:
          "For US-based stores, we typically integrate Stripe Tax or TaxJar. For shipping, we use real-time rates from Shippo, EasyPost, or carrier-specific APIs depending on your fulfillment setup.",
      },
    ],
  },
};

export const servicePageList = Object.values(servicePages);
