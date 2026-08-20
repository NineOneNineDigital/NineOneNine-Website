"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { useState, useEffect } from "react";
import Wordmark from "@/components/Wordmark";
import { navigation } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-md border-b border-[color:var(--rule)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-5 lg:py-6">
        <a
          href="/"
          aria-label="NineOneNine — home"
          className="flex items-baseline gap-3"
        >
          <Wordmark className="text-xl lg:text-2xl" />
          <span className="hidden sm:block label text-ink-500">Development</span>
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-9">
          {navigation.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-sm text-ink-300 hover:text-ink-50 transition-colors duration-300"
            >
              <span className="font-mono text-[10px] text-ink-600 group-hover:text-gold-500 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
          <a
            href="/#contact"
            className="group flex items-center gap-2 text-sm text-ink-50 border-b border-gold-500/50 pb-0.5 hover:border-gold-400 transition-colors duration-300"
          >
            <span>Start a project</span>
            <span
              aria-hidden="true"
              className="text-gold-400 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden label text-ink-200 hover:text-gold-400 transition-colors duration-200"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      <Dialog className="md:hidden" open={open} onClose={setOpen}>
        <div className="fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-0 z-50 bg-ink-950 flex flex-col">
          <div className="shell flex items-center justify-between py-5">
            <Wordmark className="text-xl" />
            <button
              type="button"
              className="label text-ink-200 hover:text-gold-400 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="shell flex-1 flex flex-col justify-center">
            {navigation.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 rule-b text-ink-50"
              >
                <span className="font-mono text-[10px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-md">{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="shell pb-10">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border border-gold-500/40 px-5 py-4 text-sm text-gold-400"
            >
              <span>Start a project</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
