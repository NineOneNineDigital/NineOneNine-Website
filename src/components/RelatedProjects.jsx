import Link from "next/link";
import { projectPageList } from "@/lib/projects-content";

export default function RelatedProjects({ serviceSlug }) {
  const projects = projectPageList.filter((project) =>
    project.serviceSlugs.includes(serviceSlug)
  );
  if (!projects.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-projects"
      className="shell py-16 lg:py-24"
    >
      <p className="label rule-t pt-6">Selected work</p>
      <h2 className="display-lg mt-8" id="related-projects">
        See this work in practice.
      </h2>
      <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
        {projects.map((project) => (
          <li className="rule-b py-6" key={project.slug}>
            <Link
              className="link-underline text-xl"
              href={`/work/${project.slug}`}
            >
              {project.name} <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-3 text-ink-400 text-sm">
              {project.category} · {project.industry}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
