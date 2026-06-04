import Wordmark from "@/components/Wordmark";
import { navigation } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Wordmark className="text-lg" />
          </div>

          <nav className="flex flex-wrap gap-8" aria-label="Footer">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-xs tracking-wide uppercase text-neutral-500 hover:text-ink-900 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-cream-300">
          <p className="font-mono text-xs text-neutral-400">
            &copy; {currentYear} NineOneNine, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
