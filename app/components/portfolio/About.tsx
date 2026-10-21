"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Reveal from "./Reveal";
import { STATS, SOCIALS } from "@/app/data/portfolio";

const DETAILS = [
  { term: "Role", value: "Full Stack Engineer" },
  { term: "Focus", value: "Backend & APIs" },
  { term: "Location", value: SOCIALS.location },
  { term: "Education", value: "BCA, IGNOU ’26" },
];

export default function About() {
  const globeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;
    const float = animate(globeRef.current, {
      y: [-6, 6],
      duration: 2400,
      alternate: true,
      loop: true,
      ease: "inOut(3)",
    });
    return () => {
      float.revert();
    };
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-40"
    >
      {/* Ambient wireframe globe */}
      <Reveal className="pointer-events-none absolute top-1/2 -right-56 -translate-y-1/2 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={globeRef}
          src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/delapouite/wireframe-globe.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={540}
          height={540}
          className="globe-tint w-[540px]"
        />
      </Reveal>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-6 md:px-12">
        <div className="col-span-12 lg:col-span-4">
          <Reveal className="lg:-ml-3">
            <span
              aria-hidden="true"
              className="block select-none font-heading text-[9rem] font-semibold leading-[0.8] tracking-tight text-white/[0.05] md:text-[12rem]"
            >
              01
            </span>
            <p
              id="about-label"
              className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted"
            >
              <span aria-hidden="true" className="h-px w-10 bg-accent/70" />
              Context
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-16 border-t border-white/10 lg:max-w-[250px]">
              {DETAILS.map((item) => (
                <div
                  key={item.term}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4"
                >
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {item.term}
                  </dt>
                  <dd className="text-right text-xs text-alabaster">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="max-w-[65ch] text-xl font-light leading-relaxed text-ink md:text-2xl">
              I&apos;m a software engineer who obsesses over the details most
              people never notice — the idempotent webhook, the accessible
              focus state, the query that stays fast under load. Precision
              isn&apos;t decoration; it&apos;s how software earns trust.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-10 max-w-[65ch] text-base leading-relaxed text-muted">
              Currently a full stack / backend engineer at Quick Events,
              building NestJS microservices, REST APIs and event-driven
              workflows on AWS. Before that I shipped production UI for the
              DMIHER University portal and high-performance Next.js sites at
              Sanggo Tech — with Gemini and Claude doing the boring parts.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-obsidian p-5 transition-colors duration-300 hover:bg-[#16181a]"
                >
                  <p className="font-heading text-2xl font-medium">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
