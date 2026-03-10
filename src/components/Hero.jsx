"use client";

import { useReveal } from "@/lib/hooks";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_70%)]" />

      {/* Ambient gold glow */}
      <div className="animate-ambient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[120px]" />

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8">
          Software Development Studio
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
          We build software
          <br />
          <span className="text-gradient">that works.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg text-white/40 leading-relaxed">
          Custom web applications, eCommerce platforms, and APIs for businesses
          that need more than a template.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative font-mono text-sm tracking-wide uppercase bg-primary text-black px-10 py-4 hover:bg-primary-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(205,164,0,0.3)]"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="font-mono text-sm tracking-wide uppercase text-white/40 px-10 py-4 border border-white/10 hover:border-white/25 hover:text-white/70 transition-all duration-300"
          >
            What we do
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
