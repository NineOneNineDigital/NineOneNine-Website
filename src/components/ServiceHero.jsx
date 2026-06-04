import InteractiveDotGrid from "@/components/InteractiveDotGrid";

export default function ServiceHero({ service }) {
  const { hero, name } = service;

  return (
    <section className="relative overflow-hidden border-b border-cream-300">
      <InteractiveDotGrid />
      <div className="absolute -bottom-32 -left-32 w-[640px] h-[640px] rounded-full bg-primary/[0.07] blur-[140px]" />
      <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="relative z-10 pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-[0.3em] uppercase">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 text-neutral-600">
              <li>
                <a
                  href="/"
                  className="hover:text-ink-900 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-neutral-400">
                /
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-ink-900 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li aria-hidden="true" className="text-neutral-400">
                /
              </li>
              <li aria-current="page" className="text-primary-700">
                {name}
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-6 text-neutral-500">
            <span>Raleigh, NC</span>
            <span aria-hidden="true" className="h-px w-6 bg-cream-400" />
            <span>35.78°N · 78.64°W</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          <h1 className="col-span-12 lg:col-span-9 text-ink-900 font-bold tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)]">
            <span className="block">{hero.headline}</span>
            <span className="block font-serif italic font-light text-primary-700">
              {hero.headlineAccent}
            </span>
          </h1>

          <div className="col-span-12 lg:col-span-8 lg:col-start-1 flex flex-col gap-8">
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {hero.lede}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-between gap-4 rounded-lg bg-primary text-ink-900 font-mono text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-primary-700 hover:text-cream-50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(205,164,0,0.35)]"
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
                className="group inline-flex items-center justify-between gap-4 rounded-lg font-mono text-xs tracking-[0.2em] uppercase text-teal-700 px-6 py-4 border border-teal-500/40 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300"
              >
                <span>See our work</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↘
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">{name} in Raleigh, North Carolina by NineOneNine</span>
    </section>
  );
}
