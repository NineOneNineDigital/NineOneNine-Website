"use client";

import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

function ServiceRow({ service, index }) {
  const Wrapper = service.slug ? "a" : "div";
  const wrapperProps = service.slug
    ? {
        href: `/services/${service.slug}`,
        "aria-label": `${service.name} — read more`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`rule-b row-hover block py-8 lg:py-10 ${
        service.slug ? "group" : ""
      }`}
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <span className="col-span-2 pt-1 font-mono text-[11px] text-ink-600 transition-colors duration-500 group-hover:text-gold-500 lg:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="col-span-10 font-medium text-ink-100 text-xl leading-tight tracking-[-0.03em] transition-colors duration-500 group-hover:text-ink-50 lg:col-span-4 lg:text-2xl">
          {service.name}
        </h3>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p className="max-w-xl text-[0.9375rem] text-ink-400 leading-relaxed transition-colors duration-500 group-hover:text-ink-300">
            {service.description}
          </p>
          {Boolean(service.slug) && (
            <span className="mt-4 inline-flex items-center gap-2 text-gold-400 text-sm">
              <span>Read more</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default function Services() {
  const { ref: listRef, revealClass: listClass } = useReveal();

  return (
    <section className="scroll-mt-24 py-24 lg:py-36" id="services">
      <div className="shell">
        <SectionHeader
          aside={`${String(services.length).padStart(2, "0")} disciplines`}
          index="03"
          label="Services"
          standfirst="Engagements run end to end — discovery through launch and the maintenance that follows."
          title="What we build."
        />

        <div
          className={`reveal-stagger mt-16 lg:mt-20 ${listClass}`}
          ref={listRef}
        >
          {services.map((service, i) => (
            <ServiceRow index={i} key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
