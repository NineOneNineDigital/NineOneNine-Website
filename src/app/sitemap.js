import { servicePageList } from "@/lib/services-content";

export default function sitemap() {
  const baseUrl = "https://nineonenine.dev";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePageList.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
