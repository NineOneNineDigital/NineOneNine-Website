import { projectPageList } from "@/lib/projects-content";
import { servicePageList } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  // Omit lastModified until content has independently maintained update dates.
  return [
    { url: SITE_URL },
    ...servicePageList.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
    })),
    ...projectPageList.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
    })),
  ];
}
