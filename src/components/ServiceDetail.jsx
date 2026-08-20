"use client";

import SectionHeader from "@/components/SectionHeader";
import { useReveal } from "@/lib/hooks";

export default function ServiceDetail({ service }) {
  const { intro, deliverables, tech, name } = service;
  const { ref: introRef, revealClass: introClass } = useReveal();
  const { ref: listRef, revealClass: listClass } = useReveal();
  const { ref: techRef, revealClass: techClass } = useReveal();

  return (
    <>
      <section className="py-24 lg:py-36">
        <div className="shell">
          <SectionHeader
            index="01"
            label="Overview"
            title="What we do."
            standfirst={`Every ${name.toLowerCase()} engagement is scoped, designed, and built by the same people.`}
          />

          <div
            ref={introRef}
            className={`reveal mt-16 grid grid-cols-12 gap-x-6 lg:mt-24 ${introClass}`}
          >
            <div className="col-span-12 space-y-7 lg:col-span-8 lg:col-start-5">
              {intro.map((paragraph, i) => (
                <p
                  key={i}
                  className={`prose-editorial ${i === 0 ? "text-ink-200" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="shell">
          <SectionHeader
            index="02"
            label="Deliverables"
            title="What's included."
            standfirst="Design, build, deploy, and the long tail after launch."
            aside={`${String(deliverables.length).padStart(2, "0")} items`}
          />

          <ul
            ref={listRef}
            className={`reveal-stagger mt-14 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:mt-20 ${listClass}`}
          >
            {deliverables.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 rule-b py-5"
              >
                <span className="font-mono text-[11px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-ink-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="shell">
          <SectionHeader
            index="03"
            label="Stack"
            title="What we build it with."
            standfirst="Chosen for what fits the problem and stays maintainable — not for what trended last quarter."
          />

          <ul
            ref={techRef}
            className={`reveal-stagger mt-14 grid grid-cols-2 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4 ${techClass}`}
          >
            {tech.map((item) => (
              <li
                key={item}
                className="rule-b border-t border-[color:var(--rule)] py-5 text-base font-medium tracking-[-0.02em] text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
