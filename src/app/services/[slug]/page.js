import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import RelatedProjects from "@/components/RelatedProjects";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceHero from "@/components/ServiceHero";
import { servicePageList, servicePages } from "@/lib/services-content";
import { BUSINESS_ID, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return servicePageList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = Object.hasOwn(servicePages, slug) ? servicePages[slug] : null;
  if (!service) {
    return {};
  }

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
  const service = Object.hasOwn(servicePages, slug) ? servicePages[slug] : null;
  if (!service) {
    notFound();
  }

  const canonical = `${SITE_URL}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: canonical,
    provider: { "@id": BUSINESS_ID },
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
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink-50 focus:px-5 focus:py-3 focus:font-medium focus:text-ink-950 focus:text-sm"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <ServiceHero service={service} />
        <ServiceDetail service={service} />
        <RelatedProjects serviceSlug={service.slug} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
      <Footer />
    </>
  );
}
