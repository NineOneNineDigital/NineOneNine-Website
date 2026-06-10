import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative flex-1 flex items-center overflow-hidden">
        <InteractiveDotGrid />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/[0.06] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400">
            404
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-50">
            Page not found.
          </h1>
          <p className="mt-6 text-base text-ink-300 leading-relaxed max-w-xl mx-auto">
            The page you{"'"}re looking for doesn{"'"}t exist or has moved. Head back
            home or get in touch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary text-ink-950 font-mono text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-gold-400 hover:text-ink-950 transition-all duration-300 hover:shadow-[0_0_40px_rgba(205,164,0,0.35)]"
            >
              <span>Back home</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-lg font-mono text-xs tracking-[0.2em] uppercase text-gold-400 px-6 py-4 border border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/[0.06] hover:text-gold-300 transition-all duration-300"
            >
              <span>Contact us</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
