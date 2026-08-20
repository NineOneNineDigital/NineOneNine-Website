"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element the first time it scrolls into view.
 *
 * The visible flag is React state, not an imperative `classList.add`. That
 * matters: any re-render of the owning component (Work re-renders on every
 * row hover) rewrites the element's className, which would silently strip
 * an imperatively-added class and make revealed content vanish.
 *
 * Spread `ref` onto the element and include `revealClass` in its className.
 *
 * @param {object} options
 * @param {number} options.threshold  fraction visible before triggering.
 *   Tall sections need a small value or they never reach it on short
 *   viewports.
 * @param {string} options.rootMargin  shrinks the viewport so elements start
 *   animating just before their top edge reaches the fold.
 */
export function useReveal({
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    // Reduced motion and browsers without IntersectionObserver render the
    // final state immediately — the CSS hides content until this lands, so
    // it must always arrive one way or another.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible, revealClass: isVisible ? "is-visible" : "" };
}
