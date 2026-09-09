"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/measurement";

export default function SiteMeasurement() {
  useEffect(() => {
    const onClick = (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href="/#contact"], a[href="#contact"]');
      if (!link) return;
      const section = link.closest("section");
      const source = link.closest("header") ? "header"
        : link.closest("footer") ? "footer"
        : section?.id || "page";
      trackEvent("contact_click", source);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
