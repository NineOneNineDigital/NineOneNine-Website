import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { faqs, services } from "@/lib/constants";

const SITE_URL = "https://nineonenine.dev";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

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
        provider: {
          "@type": "Organization",
          name: "NineOneNine",
          url: SITE_URL,
        },
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NineOneNine — Software Development Studio",
    description:
      "NineOneNine is a software development studio in Raleigh, North Carolina. We design and build custom web applications, eCommerce platforms, and APIs for businesses of all sizes.",
    url: SITE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: "NineOneNine",
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={webPageSchema} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
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
