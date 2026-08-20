import { Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

// Schibsted Grotesk carries the whole system — display, UI, and body. Its
// flat terminals and tight apertures give the large display sizes real
// presence while staying neutral at body sizes. Variable, so no weight list.
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Geist Mono is used only for the small tracked labels and indices.
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://nineoneninedigital.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NineOneNine — Software Development Studio | Raleigh, NC",
    template: "%s | NineOneNine",
  },
  description:
    "NineOneNine is a software development studio in Raleigh, North Carolina. We design and build custom web applications, mobile apps, eCommerce platforms, and APIs for businesses of all sizes.",
  keywords: [
    "web development",
    "software development",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Raleigh NC",
    "custom web applications",
    "React",
    "Next.js",
    "eCommerce development",
    "API development",
    "software development studio Raleigh",
    "web developer North Carolina",
    "mobile app developer Raleigh NC",
    "custom software Raleigh NC",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "NineOneNine — Software Development Studio | Raleigh, NC",
    description:
      "Custom web applications, mobile apps, eCommerce platforms, and APIs. Based in Raleigh, NC.",
    url: SITE_URL,
    siteName: "NineOneNine",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NineOneNine — Software Development Studio | Raleigh, NC",
    description:
      "Custom web applications, mobile apps, eCommerce platforms, and APIs. Based in Raleigh, NC.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const CONTACT_EMAIL = "hello@nineoneninedigital.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NineOneNine",
    legalName: "NineOneNine, Inc.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-gold.png`,
    email: CONTACT_EMAIL,
    description: metadata.description,
    foundingDate: "2019",
    slogan: "We build software, end to end.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: "NineOneNine",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-gold.png`,
    email: CONTACT_EMAIL,
    description: metadata.description,
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7796,
      longitude: -78.6382,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Raleigh",
      },
      {
        "@type": "AdministrativeArea",
        name: "North Carolina",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    priceRange: "$$",
    serviceType: [
      "Web Development",
      "Mobile Development",
      "eCommerce Development",
      "API Development",
      "CMS Development",
      "Software Consulting",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${schibsted.variable} ${geistMono.variable} font-sans antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
