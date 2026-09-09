import { Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import SiteMeasurement from "@/components/SiteMeasurement";
import {
  SITE_URL, SITE_TITLE, SITE_DESCRIPTION, businessSchema, websiteSchema,
} from "@/lib/site";

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  title: {
    default: SITE_TITLE,
    template: "%s | NineOneNine",
  },
  description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "NineOneNine",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={businessSchema} />
        <JsonLd data={websiteSchema} />
        <noscript>
          <style>{`
            .reveal, .reveal-stagger > *, .reveal-rule, .reveal-line > * {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body
        className={`${schibsted.variable} ${geistMono.variable} font-sans antialiased noise`}
      >
        <SiteMeasurement />
        {children}
      </body>
    </html>
  );
}
