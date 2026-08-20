"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

/**
 * Floating preview that trails the cursor across the project index.
 * Desktop only — it is an enhancement over a list that already works, and
 * it is skipped entirely for coarse pointers and reduced-motion users.
 */
function HoverPreview({ activeIndex }) {
  const previewRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    // Ease toward the cursor rather than snapping to it — the lag is what
    // makes the preview feel weighted instead of glued on.
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={previewRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[260px] w-[380px] lg:block"
    >
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`absolute inset-0 overflow-hidden transition-all duration-500 ease-out ${
            activeIndex === i
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          {project.image && (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="380px"
              className="object-cover object-top"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectRow({ project, onEnter, onLeave }) {
  const isExternal = Boolean(project.href);

  return (
    <a
      href={project.href || "/#contact"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal
          ? `${project.name} — ${project.category} for ${project.industry}. Opens in a new tab.`
          : `${project.name} — ${project.category} for ${project.industry}`
      }
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="row-hover group block rule-b py-8 lg:py-11"
    >
      <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-5">
        <span className="col-span-2 font-mono text-[11px] text-ink-600 transition-colors duration-500 group-hover:text-gold-500 lg:col-span-1">
          {project.id}
        </span>

        <h3 className="display-md col-span-10 text-ink-200 transition-colors duration-500 group-hover:text-ink-50 lg:col-span-5">
          {project.name}
        </h3>

        <p className="col-span-5 col-start-3 text-sm text-ink-400 lg:col-span-3 lg:col-start-7">
          {project.category}
        </p>

        <div className="col-span-5 flex items-baseline justify-between gap-4 lg:col-span-3 lg:col-start-10">
          <span className="text-sm text-ink-400">{project.industry}</span>
          <span
            aria-hidden="true"
            className="shrink-0 text-ink-600 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-400"
          >
            ↗
          </span>
        </div>
      </div>

      {/* Mobile carries the screenshot inline, since there is no hover state
          to reveal the preview with. */}
      {project.image && (
        <div className="relative mt-6 aspect-[16/10] overflow-hidden lg:hidden">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category} for ${project.industry}`}
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      )}
    </a>
  );
}

export default function Work() {
  const { ref: listRef, revealClass } = useReveal();
  const [activeIndex, setActiveIndex] = useState(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanHover(fine && !reduce);
  }, []);

  const handleEnter = useCallback((i) => () => setActiveIndex(i), []);
  const handleLeave = useCallback(() => setActiveIndex(null), []);

  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Shipped, live, and earning."
          standfirst="A sample of recent client engagements. Each was designed, built, and deployed by us end to end."
          aside={`${String(projects.length).padStart(2, "0")} projects`}
        />

        <div
          ref={listRef}
          className={`reveal-stagger mt-16 lg:mt-20 ${revealClass}`}
        >
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              onEnter={handleEnter(i)}
              onLeave={handleLeave}
            />
          ))}
        </div>

        <div className="mt-8 flex items-baseline justify-between gap-6">
          {canHover && (
            <p className="label hidden text-ink-600 lg:block">
              Hover a row to preview
            </p>
          )}
          <a
            href="/#contact"
            className="link-underline ml-auto text-sm text-ink-300 hover:text-ink-50"
          >
            Start a project
          </a>
        </div>
      </div>

      {canHover && <HoverPreview activeIndex={activeIndex} />}
    </section>
  );
}
