"use client";

import { useReveal } from "@/lib/hooks";

export default function ServiceHero({ service }) {
  const { hero, name } = service;
  const { ref, revealClass } = useReveal({ threshold: 0, rootMargin: "0px" });

  return (
    <section className={`rule-b pt-28 lg:pt-32 ${revealClass}`} ref={ref}>
      <div className="shell">
        <div className="rule-b flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-5">
          <nav aria-label="Breadcrumb">
            <ol className="label flex items-center gap-2.5">
              <li>
                <a
                  className="text-ink-400 transition-colors duration-300 hover:text-ink-50"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-ink-600">
                /
              </li>
              <li>
                <a
                  className="text-ink-400 transition-colors duration-300 hover:text-ink-50"
                  href="/#services"
                >
                  Services
                </a>
              </li>
              <li aria-hidden="true" className="text-ink-600">
                /
              </li>
              <li aria-current="page" className="text-gold-500">
                {name}
              </li>
            </ol>
          </nav>
          <p className="label hidden text-ink-500 sm:block">
            Raleigh, North Carolina
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-16 lg:py-24">
          {/* The accent here is a full clause, not the one or two words the
              homepage headlines use — gold across two whole lines overpowers
              the page, so it takes the muted treatment instead. */}
          <h1 className="display-xl col-span-12 text-ink-50 lg:col-span-10">
            <span className="reveal-line">
              <span>{hero.headline}</span>
            </span>
            <span className="reveal-line">
              <span className="text-ink-500">{hero.headlineAccent}</span>
            </span>
          </h1>

          <div className="reveal reveal-delay-1 col-span-12 flex flex-col gap-9 lg:col-span-7">
            <p className="prose-editorial max-w-2xl">{hero.lede}</p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                className="group inline-flex items-center gap-3 bg-ink-50 px-7 py-4 font-medium text-ink-950 text-sm transition-colors duration-300 hover:bg-gold-400"
                href="/#contact"
              >
                <span>Start a project</span>
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
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">
        {name} in Raleigh, North Carolina by NineOneNine
      </span>
    </section>
  );
}
