import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { faqs, services } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, BUSINESS_ID, WEBSITE_ID, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

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
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-50 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink-950"
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
