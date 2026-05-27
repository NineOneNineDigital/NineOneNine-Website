import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
            404 / Service
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            We don{"'"}t offer that one.
          </h1>
          <p className="mt-6 text-base text-white/55 leading-relaxed">
            The service you were looking for isn{"'"}t one we list. Head back to see
            everything we build, or get in touch with what you have in mind.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#services"
              className="inline-flex items-center justify-center gap-3 bg-primary text-black font-mono text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-primary-400 transition-all duration-300"
            >
              <span>All services</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-white/60 px-6 py-4 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
            >
              <span>Contact us</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
