import { CheckIcon } from "@heroicons/react/24/outline";

export default function ServiceDetail({ service }) {
  const { intro, deliverables, tech, name } = service;

  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                Overview
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                What we do.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-7 text-white/55">
              {intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                Deliverables
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {"What's included."}
              </h2>
              <p className="mt-5 text-base text-white/40 leading-relaxed max-w-md">
                Every {name.toLowerCase()} engagement covers the full lifecycle — design,
                build, deploy, and the long tail after launch.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  <span className="text-sm text-white/65 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              Stack
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Tech we use.
            </h2>
            <p className="mt-5 text-base text-white/40 leading-relaxed">
              We pick tools based on what fits your problem — not what's trending. These
              are the ones we reach for most.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 border border-white/10 px-4 py-2.5 hover:border-primary/40 hover:text-white transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </section>
    </>
  );
}
