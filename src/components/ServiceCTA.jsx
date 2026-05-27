export default function ServiceCTA({ service }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden border border-white/[0.06] bg-neutral-950 px-8 py-16 lg:px-16 lg:py-24">
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-xl">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
                Ready to start?
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {"Let's build your"}
                <br />
                <span className="text-white/40">
                  {service.name.toLowerCase()}.
                </span>
              </h2>
              <p className="mt-5 text-base text-white/50 leading-relaxed">
                Tell us about your project and {"we'll"} get back to you within one
                business day with next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-between gap-4 bg-primary text-black font-mono text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-primary-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(205,164,0,0.25)]"
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
                className="group inline-flex items-center justify-between gap-4 font-mono text-xs tracking-[0.2em] uppercase text-white/60 px-6 py-4 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                <span>All services</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
