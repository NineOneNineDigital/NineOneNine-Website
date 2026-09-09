// Match the production redirect: the www host is the canonical site.
export const SITE_URL = "https://www.nineoneninedigital.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SITE_TITLE = "Websites & Custom Software in Raleigh, NC | NineOneNine";
export const SITE_DESCRIPTION =
  "NineOneNine builds custom websites, web applications, mobile apps, and eCommerce experiences. Work directly with our Raleigh, NC development team from planning through launch.";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": BUSINESS_ID,
  name: "NineOneNine",
  alternateName: "NineOneNine Digital",
  legalName: "NineOneNine, Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-gold.png`,
  email: "hello@nineoneninedigital.com",
  description: SITE_DESCRIPTION,
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raleigh",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Raleigh" },
    { "@type": "AdministrativeArea", name: "North Carolina" },
    { "@type": "Country", name: "United States" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@nineoneninedigital.com",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "NineOneNine",
  url: SITE_URL,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-US",
};
