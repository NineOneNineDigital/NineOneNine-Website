"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { projects } from "@/lib/constants";
import { useReveal } from "@/lib/hooks";

function ProjectCard({ project, className = "" }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }, []);

  const hasMedia = Boolean(project.image || project.video);
  const isExternal = Boolean(project.href);

  return (
    <a
      ref={cardRef}
      href={project.href || "#contact"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal ? `${project.name} — opens in new tab` : project.name
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-glow group relative block overflow-hidden rounded-lg bg-cream-50 border border-cream-300 hover:border-primary/40 transition-colors duration-500 ${className}`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
        />
      )}
      {project.video && !project.image && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.poster}
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500"
        />
      )}

      {/* Placeholder visual when no media — intentional, not "missing image" */}
      {!hasMedia && (
        <>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/[0.12] blur-[100px] group-hover:bg-primary/[0.20] transition-colors duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[clamp(4rem,12vw,9rem)] leading-none text-ink-900/[0.06] group-hover:text-ink-900/[0.10] transition-colors duration-500 select-none">
              {project.id}
            </span>
          </div>
        </>
      )}

      {/* Scrims for text legibility over media — dark so the photo stays vivid */}
      {hasMedia && (
        <>
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-ink-900/55 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent pointer-events-none" />
        </>
      )}

      {/* Meta — top row */}
      <div
        className={`absolute top-0 inset-x-0 flex items-center justify-between px-6 py-5 text-[10px] font-mono tracking-[0.2em] uppercase ${
          hasMedia ? "text-cream-100/80" : "text-neutral-600"
        }`}
      >
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      {/* Title — bottom */}
      <div className="absolute bottom-0 inset-x-0 px-6 py-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`text-2xl lg:text-3xl font-semibold tracking-tight transition-colors duration-300 truncate ${
                hasMedia
                  ? "text-cream-50 group-hover:text-primary-300"
                  : "text-ink-900 group-hover:text-primary-700"
              }`}
            >
              {project.name}
            </h3>
            {project.summary && (
              <p
                className={`mt-1.5 text-sm truncate ${
                  hasMedia ? "text-cream-100/80" : "text-neutral-600"
                }`}
              >
                {project.summary}
              </p>
            )}
          </div>
          <span
            aria-hidden="true"
            className={`shrink-0 font-mono text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ${
              hasMedia
                ? "text-cream-100/70 group-hover:text-primary-300"
                : "text-neutral-400 group-hover:text-primary-700"
            }`}
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  // Bento spans for 3 cards: wide + narrow on top, full-width feature below.
  const spans = [
    "lg:col-span-8 min-h-[320px] lg:min-h-[480px]",
    "lg:col-span-4 min-h-[280px] lg:min-h-[480px]",
    "lg:col-span-12 min-h-[300px] lg:min-h-[440px]",
  ];

  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-32 border-t border-cream-300">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headingRef}
          className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary-700">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-900">
              Recent projects.
            </h2>
          </div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500">
            {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} shown
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 lg:grid-cols-12 gap-3"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={spans[i] || "lg:col-span-6 min-h-[280px]"}
            />
          ))}
        </div>
      </div>

      <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
    </section>
  );
}
