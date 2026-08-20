"use client";

import { useReveal } from "@/lib/hooks";

export default function ServiceCTA({ service }) {
  const { ref, revealClass } = useReveal();

  return (
    <section className="pb-24 pt-12 lg:pb-36 lg:pt-20">
      <div ref={ref} className={`reveal shell ${revealClass}`}>
        <div className="rule-t pt-14 lg:pt-20">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="label text-ink-500">Next step</p>
              <h2 className="display-lg mt-6 text-ink-50">
                Let&rsquo;s build your
                <br />
                <span className="text-gold-400">
                  {service.name.toLowerCase()}
                </span>
                .
              </h2>
            </div>

            <div className="col-span-12 flex flex-col gap-7 lg:col-span-4 lg:col-start-9 lg:pb-3">
              <p className="text-[0.9375rem] leading-relaxed text-ink-400">
                Tell us what you are building. We reply within one business day
                with honest next steps — or a referral if we are not the
                right fit for it.
              </p>
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
                  href="/#services"
                  className="link-underline text-sm text-ink-200 hover:text-ink-50"
                >
                  All services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
