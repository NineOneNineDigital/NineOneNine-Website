import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceCTA from "@/components/ServiceCTA";
import { servicePages, servicePageList } from "@/lib/services-content";

const SITE_URL = "https://nineoneninedigital.com";

export function generateStaticParams() {
  return servicePageList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) return {};

  const canonical = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) notFound();

  const canonical = `${SITE_URL}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: canonical,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Raleigh" },
      { "@type": "AdministrativeArea", name: "North Carolina" },
      { "@type": "Country", name: "United States" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/#services`,
      },
      { "@type": "ListItem", position: 3, name: service.name, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded-md focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <ServiceHero service={service} />
        <ServiceDetail service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
      <Footer />
    </>
  );
}
