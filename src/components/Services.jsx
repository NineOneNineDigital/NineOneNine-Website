"use client";

import { useRef, useCallback } from "react";
import { services } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

function ServiceCard({ service }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card-glow group relative bg-neutral-950 p-8 lg:p-10 transition-all duration-300 hover:bg-neutral-900/40"
    >
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none" />
      <service.icon
        className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <h3 className="mt-5 text-sm font-semibold text-white group-hover:text-primary/90 transition-colors duration-300">
        {service.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/40">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headingRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
            Services
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            What we build.
          </h2>
          <p className="mt-5 text-base text-white/40 leading-relaxed">
            End-to-end development services for teams that need reliable,
            production-grade software.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger mt-16 grid grid-cols-1 gap-px bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.04] rounded-sm"
        >
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}
