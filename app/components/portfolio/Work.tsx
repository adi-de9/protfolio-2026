"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS } from "@/app/data/portfolio";

export default function Work() {
  const [active, setActive] = useState(0);
  const current = PROJECTS[active];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="pb-16 pt-20 md:pb-24 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <header className="mb-16 border-b border-white/10 pb-8">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-heading text-sm font-medium text-accent">
                04
              </span>
              <h2
                id="work-heading"
                className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-alabaster"
              >
                Selected Work
              </h2>
              <p className="ml-auto hidden text-xs text-muted md:block">
                2025 · Four builds
              </p>
            </div>
          </header>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Sticky preview */}
          <div className="order-1 lg:order-2">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-jet/40 shadow-[0_0_90px_-10px_rgba(75,97,209,0.25)]">
                {PROJECTS.map((project, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={project.num}
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={675}
                    className={`preview-img absolute inset-0 h-full w-full object-cover brightness-[0.92] saturate-[0.8] ${
                      i === active ? "is-active" : ""
                    }`}
                  />
                ))}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-obsidian/25"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-alabaster">
                  <span className="mr-3 text-accent">{current.num}</span>
                  <span>{current.title}</span>
                </p>
                <p className="text-right text-[11px] text-muted">{current.tech}</p>
              </div>
            </Reveal>
          </div>

          {/* Project list */}
          <div className="order-2 lg:order-1">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.num} delay={i * 70}>
                <article
                  tabIndex={0}
                  aria-label={`${project.title} — ${project.meta}`}
                  className={`project-row group cursor-pointer border-t border-white/10 py-8 md:py-10 ${
                    i === PROJECTS.length - 1 ? "border-b" : ""
                  } ${i === active ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs text-muted">{project.num}</span>
                    <h3 className="project-name font-heading text-3xl font-medium md:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-10 text-[11px] uppercase tracking-[0.2em] text-muted md:pl-12">
                    {project.meta}
                  </p>
                  <div className="project-details pl-10 md:pl-12">
                    <div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-6 text-[11px] uppercase tracking-[0.18em]">
                        <a
                          href={project.live}
                          className="text-alabaster underline-offset-4 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live ↗
                        </a>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-alabaster underline-offset-4 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Repo ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
