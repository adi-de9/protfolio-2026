"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { animate, createTimeline, svg } from "animejs";
import { ArrowRight, FileText, Github, Globe, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { SOCIALS } from "@/app/data/portfolio";

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [localTime, setLocalTime] = useState("--:-- IST");

  const btnRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const checkWrapRef = useRef<SVGSVGElement>(null);
  const checkPathRef = useRef<SVGPathElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const drawableRef = useRef<ReturnType<typeof svg.createDrawable> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (checkPathRef.current) {
      drawableRef.current = svg.createDrawable(checkPathRef.current);
      animate(drawableRef.current, { draw: "0 0", duration: 1 });
    }

    const tick = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date());
        setLocalTime(`${formatted} IST`);
      } catch {
        setLocalTime(new Date().toTimeString().slice(0, 5));
      }
    };
    tick();
    const interval = setInterval(tick, 30000);

    return () => {
      clearInterval(interval);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const badName = values.name.trim().length < 2;
    const badEmail = !EMAIL_RE.test(values.email.trim());
    const badMsg = values.message.trim().length < 10;
    setErrors({ name: badName, email: badEmail, message: badMsg });

    if (badName || badEmail || badMsg) {
      if (btnRef.current) {
        animate(btnRef.current, {
          x: [0, -6, 6, -3, 0],
          duration: 350,
          ease: "outQuad",
        });
      }
      return;
    }

    const check = drawableRef.current;
    if (!check || !btnRef.current) return;
    setSending(true);

    createTimeline()
      .add(btnRef.current, { width: 48, duration: 320, ease: "inOutQuad" })
      .add(labelRef.current!, { opacity: [1, 0], duration: 150 }, 0)
      .add(arrowRef.current!, { opacity: [1, 0], duration: 150 }, 0)
      .add(checkWrapRef.current!, { opacity: [0, 1], duration: 120 }, 380)
      .add(check, { draw: ["0 0", "0 1"], duration: 360, ease: "outQuad" }, 400)
      .add(statusRef.current!, { opacity: [0, 1], duration: 300, ease: "outQuad" }, 750);

    resetTimerRef.current = setTimeout(() => {
      createTimeline({
        onComplete: () => {
          setSending(false);
          setValues({ name: "", email: "", message: "" });
        },
      })
        .add(check, { draw: ["0 1", "0 0"], duration: 260, ease: "inQuad" })
        .add(statusRef.current!, { opacity: [1, 0], duration: 250 }, 0)
        .add(checkWrapRef.current!, { opacity: [1, 0], duration: 120 }, 200)
        .add(btnRef.current!, { width: 176, duration: 320, ease: "inOutQuad" }, 220)
        .add(labelRef.current!, { opacity: [0, 1], duration: 220 }, 480)
        .add(arrowRef.current!, { opacity: [0, 1], duration: 220 }, 480);
    }, 2600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        {/* Info column */}
        <div>
          <Reveal>
            <div className="mb-10 flex items-baseline gap-4">
              <span aria-hidden="true" className="font-heading text-sm font-medium text-accent">
                06
              </span>
              <h2
                id="contact-heading"
                className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-alabaster"
              >
                Contact
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-heading text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-alabaster md:text-7xl">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-alabaster/40">precise.</span>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
              Currently open to full-time roles and select freelance work.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.2em] text-muted">
              <a
                href={`mailto:${SOCIALS.email}`}
                className="contact-link inline-flex items-center gap-2 transition-colors duration-300 hover:text-alabaster"
              >
                <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                {SOCIALS.email}
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link inline-flex items-center gap-2 transition-colors duration-300 hover:text-alabaster"
              >
                <Github aria-hidden="true" className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link inline-flex items-center gap-2 transition-colors duration-300 hover:text-alabaster"
              >
                <Linkedin aria-hidden="true" className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href={SOCIALS.website}
                target="_blank"
                rel="noreferrer"
                className="contact-link inline-flex items-center gap-2 transition-colors duration-300 hover:text-alabaster"
              >
                <Globe aria-hidden="true" className="h-3.5 w-3.5" />
                adityafsd.online
              </a>
              <a
                href={SOCIALS.resume}
                target="_blank"
                rel="noreferrer"
                className="contact-link inline-flex items-center gap-2 transition-colors duration-300 hover:text-alabaster"
              >
                <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                Résumé
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-16 max-w-sm border-t border-white/10 pt-6">
              <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
                <span>Location</span>
                <span className="text-alabaster">{SOCIALS.location}</span>
              </div>
              <div className="mt-3 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
                <span>Local time</span>
                <span className="tabular-nums text-alabaster">{localTime}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form column */}
        <Reveal delay={120} className="lg:pt-24">
          <form
            aria-label="Contact form"
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            <div className={`field ${errors.name ? "has-error" : ""}`}>
              <label
                htmlFor="cf-name"
                className="text-[10px] uppercase tracking-[0.24em] text-muted"
              >
                Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                aria-invalid={errors.name ? "true" : undefined}
                className="field-input mt-1"
              />
              <p role="alert" className="error-msg mt-2 text-[11px] text-red-400">
                Please enter your name.
              </p>
            </div>
            <div className={`field ${errors.email ? "has-error" : ""}`}>
              <label
                htmlFor="cf-email"
                className="text-[10px] uppercase tracking-[0.24em] text-muted"
              >
                Email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                aria-invalid={errors.email ? "true" : undefined}
                className="field-input mt-1"
              />
              <p role="alert" className="error-msg mt-2 text-[11px] text-red-400">
                Please enter a valid email address.
              </p>
            </div>
            <div className={`field ${errors.message ? "has-error" : ""}`}>
              <label
                htmlFor="cf-message"
                className="text-[10px] uppercase tracking-[0.24em] text-muted"
              >
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                aria-invalid={errors.message ? "true" : undefined}
                className="field-input mt-1 resize-none"
              />
              <p role="alert" className="error-msg mt-2 text-[11px] text-red-400">
                A few words help — 10 characters or more.
              </p>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p
                ref={statusRef}
                aria-live="polite"
                className="text-[11px] uppercase tracking-[0.18em] text-muted opacity-0"
              >
                Message sent — I&apos;ll reply soon.
              </p>
              <button
                ref={btnRef}
                type="submit"
                className="relative flex h-12 w-44 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 text-[11px] uppercase tracking-[0.22em] text-alabaster transition-colors duration-300 hover:border-accent/60 hover:bg-accent/10"
              >
                <span ref={labelRef}>Send message</span>
                <span ref={arrowRef}>
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <svg
                  ref={checkWrapRef}
                  aria-hidden="true"
                  className="absolute opacity-0"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    ref={checkPathRef}
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="#E5E4E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
