import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const SITE_URL = "https://nineonenine.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NineOneNine — Software Development Studio | Raleigh, NC",
    template: "%s | NineOneNine",
  },
  description:
    "NineOneNine is a software development studio in Raleigh, North Carolina. We design and build custom web applications, eCommerce platforms, and APIs for businesses of all sizes.",
  keywords: [
    "web development",
    "software development",
    "Raleigh NC",
    "custom web applications",
    "React",
    "Next.js",
    "eCommerce development",
    "API development",
    "software development studio Raleigh",
    "web developer North Carolina",
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
      "Custom web applications, eCommerce platforms, and APIs. Based in Raleigh, NC.",
    url: SITE_URL,
    siteName: "NineOneNine",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NineOneNine — Software Development Studio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NineOneNine — Software Development Studio | Raleigh, NC",
    description:
      "Custom web applications, eCommerce platforms, and APIs. Based in Raleigh, NC.",
    images: [`${SITE_URL}/og-image.png`],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NineOneNine",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-gold.png`,
    description: metadata.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NineOneNine",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-gold.png`,
    description: metadata.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.7796,
        longitude: -78.6382,
      },
    },
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
        className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
