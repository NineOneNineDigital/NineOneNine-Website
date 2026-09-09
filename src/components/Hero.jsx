"use client";

import { projects } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

// The disciplines row that closes the hero. Static and ruled — it states
// what the company does rather than scrolling a stack of vendor logos past.
const DISCIPLINES = [
  { name: "Web applications", href: "/services/web-development" },
  { name: "Mobile", href: "/services/mobile-app-development" },
  { name: "Commerce", href: "/services/ecommerce-development" },
  { name: "APIs & integrations", href: "/#services" },
];

export default function Hero() {
  // Threshold 0 so the hero animates on first paint rather than waiting for
  // a scroll that may never come.
  const { ref, revealClass } = useReveal({ threshold: 0, rootMargin: "0px" });

  return (
    <section
      className={`relative flex min-h-[100svh] flex-col pt-28 lg:pt-32 ${revealClass}`}
      ref={ref}
    >
      {/* Standing meta line — location and founding, no fake telemetry. */}
      <div className="shell">
        <div className="rule-b flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-5">
          {/* The wide tracking on .label makes the full string wider than a
              small phone viewport, so the long form is desktop-only. */}
          <p className="label text-ink-400">
            <span className="sm:hidden">Development — Raleigh, NC</span>
            <span className="hidden sm:inline">
              Websites & software — Raleigh, North Carolina
            </span>
          </p>
          <p className="label text-ink-400">Est. 2019</p>
        </div>
      </div>

      {/* Statement. The headline runs the full measure in two lines, and the
          supporting band sits beneath it on its own rule — so the width is
          filled rather than leaving a column of dead space beside the type. */}
      <div className="shell flex flex-1 flex-col justify-center py-12 lg:py-16">
        <h1 className="display-xl text-ink-50">
          <span className="reveal-line -mb-[0.12em] pb-[0.12em]">
            <span>Websites &amp; software.</span>
          </span>
          <span className="reveal-line -mb-[0.12em] pb-[0.12em]">
            <span>
              Built to <span className="text-gold-400">grow your business</span>
              .
            </span>
          </span>
        </h1>

        <div className="rule-t mt-12 grid grid-cols-1 gap-x-6 gap-y-8 pt-8 lg:mt-16 lg:grid-cols-12 lg:pt-10">
          <div className="reveal reveal-delay-1 lg:col-span-6">
            <p className="prose-editorial max-w-lg">
              Win new clients, sell online, or simplify the way your team works.
              We design and build custom websites and software around your
              business goals, from the first conversation through launch.
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <a
              className="group inline-flex items-center gap-3 bg-ink-50 px-7 py-4 font-medium text-ink-950 text-sm transition-colors duration-300 hover:bg-gold-400"
              href="/#contact"
            >
              <span>Discuss your project</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              className="link-underline text-ink-200 text-sm hover:text-ink-50"
              href="/#work"
            >
              See selected work
            </a>
            <p className="w-full text-ink-400 text-sm leading-relaxed lg:text-right">
              Tell us what you have in mind. We reply within one business day.
            </p>
          </div>
        </div>
        <div className="rule-t mt-10 pt-6">
          <p className="label">Selected website clients</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-ink-200 text-sm">
            {projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disciplines — the hero's baseline rule */}
      <div className="shell">
        <div className="rule-t grid grid-cols-2 border-[color:var(--rule)] md:grid-cols-4">
          {DISCIPLINES.map((item, i) => (
            <a
              className={`group flex items-baseline gap-2.5 py-4 text-ink-300 text-sm transition-colors duration-300 hover:text-ink-50 md:py-5 ${
                i > 0 ? "md:border-[color:var(--rule)] md:border-l md:pl-6" : ""
              }`}
              href={item.href}
              key={item.name}
            >
              <span className="font-mono text-[10px] text-ink-600 transition-colors duration-300 group-hover:text-gold-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
