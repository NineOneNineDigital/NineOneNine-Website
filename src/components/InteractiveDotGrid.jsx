"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDotGrid({
  size = 24,
  spotlight = 260,
  baseOpacity = 0.12,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const parent = wrapper.parentElement;
    if (!parent) return;

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      wrapper.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      wrapper.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    parent.addEventListener("mousemove", onMove, { passive: true });
    return () => parent.removeEventListener("mousemove", onMove);
  }, []);

  const cellBg = `${size}px ${size}px`;

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          opacity: baseOpacity,
          backgroundImage:
            "radial-gradient(circle, rgba(250,250,247,0.55) 1px, transparent 1.5px)",
          backgroundSize: cellBg,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(205,164,0,0.85) 1px, transparent 1.5px)",
          backgroundSize: cellBg,
          maskImage: `radial-gradient(${spotlight}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(${spotlight}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
