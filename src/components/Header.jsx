"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Wordmark from "@/components/Wordmark";
import { navigation } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-ink-700 shadow-[0_1px_20px_rgba(0,0,0,0.45)]"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" aria-label="NineOneNine — home" className="flex items-center gap-3 group">
          <Wordmark className="text-xl transition-opacity duration-200 group-hover:opacity-80" />
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative font-mono text-xs tracking-wide text-ink-300 uppercase hover:text-ink-50 transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="font-mono text-xs tracking-wide uppercase rounded-lg border border-primary/60 text-gold-400 px-5 py-2.5 hover:bg-primary hover:text-ink-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(205,164,0,0.35)]"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-ink-300 hover:text-ink-50 transition-colors duration-200"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Bars2Icon className="h-5 w-5" />
        </button>
      </div>

      <Dialog className="md:hidden" open={open} onClose={setOpen}>
        <div className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-ink-900 border-l border-ink-700 px-6 py-6">
          <div className="flex items-center justify-between">
            <Wordmark className="text-lg" />
            <button
              type="button"
              className="text-ink-300 hover:text-ink-50"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-wide uppercase py-3.5 text-ink-300 hover:text-ink-50 border-b border-ink-700 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-8 font-mono text-sm tracking-wide uppercase text-center rounded-lg border border-primary/60 text-gold-400 px-4 py-3.5 hover:bg-primary hover:text-ink-950 transition-all duration-300"
            >
              Start a project
            </a>
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
