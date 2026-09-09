import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { projectPageList, projectPages } from "@/lib/projects-content";
import { servicePages } from "@/lib/services-content";
import { BUSINESS_ID, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return projectPageList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = Object.hasOwn(projectPages, slug) ? projectPages[slug] : null;
  if (!project) {
    return {};
  }

  const canonical = `${SITE_URL}/work/${project.slug}`;
  const images = [
    {
      url: `${SITE_URL}${project.image}`,
      width: 1920,
      height: 1070,
      alt: `${project.name} website preview`,
    },
  ];

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: canonical,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: images.map((image) => image.url),
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = Object.hasOwn(projectPages, slug) ? projectPages[slug] : null;
  if (!project) {
    notFound();
  }

  const canonical = `${SITE_URL}/work/${project.slug}`;
  const relatedServices = project.serviceSlugs.map(
    (serviceSlug) => servicePages[serviceSlug]
  );
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: project.metaTitle,
        description: project.metaDescription,
        publisher: { "@id": BUSINESS_ID },
        mainEntity: { "@id": `${canonical}#project` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#project`,
        name: `${project.name} — ${project.category}`,
        description: project.overview,
        url: canonical,
        image: `${SITE_URL}${project.image}`,
        creator: { "@id": BUSINESS_ID },
        about: {
          "@type": "Organization",
          name: project.name,
          url: project.href,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${SITE_URL}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink-50 focus:px-5 focus:py-3 focus:font-medium focus:text-ink-950 focus:text-sm"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="pt-28 lg:pt-32">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="rule-b pb-5">
              <ol className="label flex flex-wrap items-center gap-2.5">
                <li>
                  <Link className="text-ink-400 hover:text-ink-50" href="/">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-ink-600">
                  /
                </li>
                <li>
                  <Link
                    className="text-ink-400 hover:text-ink-50"
                    href="/#work"
                  >
                    Work
                  </Link>
                </li>
                <li aria-hidden="true" className="text-ink-600">
                  /
                </li>
                <li aria-current="page" className="text-gold-500">
                  {project.name}
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-16 lg:py-24">
              <div className="col-span-12 lg:col-span-8">
                <p className="label mb-6 text-gold-500">
                  {project.category} · Selected work
                </p>
                <h1 className="display-xl text-ink-50">{project.name}</h1>
                <p className="prose-editorial mt-8 max-w-2xl">{project.lede}</p>
              </div>
              <dl className="col-span-12 grid gap-6 self-end sm:grid-cols-2 lg:col-span-3 lg:col-start-10 lg:grid-cols-1">
                <div>
                  <dt className="label text-ink-500">Industry</dt>
                  <dd className="mt-2 text-ink-200 text-sm">
                    {project.industry}
                  </dd>
                </div>
                <div>
                  <dt className="label text-ink-500">Client location</dt>
                  <dd className="mt-2 text-ink-200 text-sm">
                    {project.location}
                  </dd>
                </div>
              </dl>
            </div>

            <figure>
              <Image
                alt={`${project.name} website homepage`}
                className="h-auto w-full border border-ink-800"
                height={1070}
                preload
                sizes="(max-width: 1344px) 100vw, 1264px"
                src={project.image}
                width={1920}
              />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4 text-ink-400 text-sm">
                <span>{project.name} — website preview</span>
                <a
                  className="link-underline text-ink-200 hover:text-ink-50"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit {project.name}
                  <span className="sr-only"> (opens in a new tab)</span>{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-24 lg:py-36">
          <div className="shell grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <p className="label text-gold-500">01 / Project overview</p>
              <h2 className="display-md mt-6">
                The business
                <br />
                behind the website.
              </h2>
            </div>
            <div className="col-span-12 space-y-7 lg:col-span-7 lg:col-start-6">
              <p className="prose-editorial text-ink-200">{project.context}</p>
              <p className="prose-editorial">{project.overview}</p>
              <p className="text-ink-400 text-sm leading-relaxed">
                Explore the business and website on{" "}
                <a
                  className="link-underline text-ink-200 hover:text-ink-50"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.name}&rsquo;s live site
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-36">
          <div className="shell">
            <div className="rule-t pt-10">
              <p className="label text-gold-500">02 / Website experience</p>
              <h2 className="display-lg mt-6">What visitors can explore.</h2>
            </div>
            <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div className="rule-t pt-6" key={highlight.title}>
                  <h3 className="font-medium text-ink-200 text-xl tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] text-ink-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-36">
          <div className="shell">
            <div className="rule-t grid grid-cols-12 gap-x-6 gap-y-10 pt-12 lg:pt-16">
              <div className="col-span-12 lg:col-span-7">
                <p className="label text-gold-500">Related services</p>
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        className="link-underline text-ink-200 hover:text-ink-50"
                        href={`/services/${service.slug}`}
                      >
                        {service.name} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h2 className="display-lg mt-12">
                  What could your
                  <br />
                  <span className="text-gold-400">website do?</span>
                </h2>
              </div>
              <div className="col-span-12 flex flex-col items-start justify-end gap-7 lg:col-span-4 lg:col-start-9">
                <p className="text-[0.9375rem] text-ink-400 leading-relaxed">
                  Tell us about your business and what you want to improve. We
                  reply within one business day with next steps.
                </p>
                <Link
                  className="inline-flex items-center gap-3 bg-ink-50 px-7 py-4 font-medium text-ink-950 text-sm transition-colors hover:bg-gold-400"
                  href="/#contact"
                >
                  Discuss your project <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className="link-underline text-ink-300 text-sm hover:text-ink-50"
                  href="/#work"
                >
                  Explore all projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
