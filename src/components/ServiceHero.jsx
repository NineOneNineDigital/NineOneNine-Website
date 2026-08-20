"use client";

import { useReveal } from "@/lib/hooks";

export default function ServiceHero({ service }) {
  const { hero, name } = service;
  const { ref, revealClass } = useReveal({ threshold: 0, rootMargin: "0px" });

  return (
    <section
      ref={ref}
      className={`rule-b pt-28 lg:pt-32 ${revealClass}`}
    >
      <div className="shell">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-5 rule-b">
          <nav aria-label="Breadcrumb">
            <ol className="label flex items-center gap-2.5">
              <li>
                <a
                  href="/"
                  className="text-ink-400 transition-colors duration-300 hover:text-ink-50"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-ink-600">
                /
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-ink-400 transition-colors duration-300 hover:text-ink-50"
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
          <p className="label hidden text-ink-500 sm:block">Raleigh, North Carolina</p>
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
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-ink-50 px-7 py-4 text-sm font-medium text-ink-950 transition-colors duration-300 hover:bg-gold-400"
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
                href="/#work"
                className="link-underline text-sm text-ink-200 hover:text-ink-50"
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
