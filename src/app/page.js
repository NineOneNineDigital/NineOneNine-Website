import About from "@/components/About";
import Contact from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { faqs, services } from "@/lib/constants";
import {
  BUSINESS_ID,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": BUSINESS_ID },
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={webPageSchema} />
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink-50 focus:px-5 focus:py-3 focus:font-medium focus:text-ink-950 focus:text-sm"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
