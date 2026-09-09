import { projectPageList } from "@/lib/projects-content";
import Link from "next/link";

export default function RelatedProjects({ serviceSlug }) {
  const projects = projectPageList.filter((project) =>
    project.serviceSlugs.includes(serviceSlug)
  );
  if (!projects.length) return null;

  return (
    <section className="shell py-16 lg:py-24" aria-labelledby="related-projects">
      <p className="label rule-t pt-6">Selected work</p>
      <h2 id="related-projects" className="display-lg mt-8">See this work in practice.</h2>
      <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="rule-b py-6">
            <Link href={`/work/${project.slug}`} className="link-underline text-xl">
              {project.name} <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-3 text-sm text-ink-400">{project.category} · {project.industry}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
