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
            standfirst={`Every ${name.toLowerCase()} engagement is scoped, designed, and built by the same people.`}
            title="What we do."
          />

          <div
            className={`reveal mt-16 grid grid-cols-12 gap-x-6 lg:mt-24 ${introClass}`}
            ref={introRef}
          >
            <div className="col-span-12 space-y-7 lg:col-span-8 lg:col-start-5">
              {intro.map((paragraph, i) => (
                <p
                  className={`prose-editorial ${i === 0 ? "text-ink-200" : ""}`}
                  key={paragraph}
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
            aside={`${String(deliverables.length).padStart(2, "0")} items`}
            index="02"
            label="Deliverables"
            standfirst="Design, build, deploy, and the long tail after launch."
            title="What's included."
          />

          <ul
            className={`reveal-stagger mt-14 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:mt-20 ${listClass}`}
            ref={listRef}
          >
            {deliverables.map((item, i) => (
              <li className="rule-b flex items-baseline gap-5 py-5" key={item}>
                <span className="font-mono text-[11px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] text-ink-200 leading-relaxed">
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
            standfirst="Chosen for what fits the problem and stays maintainable — not for what trended last quarter."
            title="What we build it with."
          />

          <ul
            className={`reveal-stagger mt-14 grid grid-cols-2 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4 ${techClass}`}
            ref={techRef}
          >
            {tech.map((item) => (
              <li
                className="rule-b border-[color:var(--rule)] border-t py-5 font-medium text-base text-ink-200 tracking-[-0.02em]"
                key={item}
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
