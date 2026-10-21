'use client';

import StudioDeskCard from './StudioDesk/StudioDeskCard';
import { useSound } from '../../hooks/use-sound-fx';
import { SOCIAL_LINKS } from '../../data/portfolio-data';

export default function Hero() {
  const { playSound } = useSound();

  return (
    <section id="overview" className="pt-6 pb-12 lg:py-16 hairline-b scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Intro & Key Highlights */}
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-charcoal hairline-box text-alabaster font-medium">
              Full-Stack
            </span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal hairline-box text-alabaster font-medium">
              Backend
            </span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal hairline-box text-alabaster font-medium">
              Mobile
            </span>
            <span className="px-2.5 py-1 rounded-md bg-charcoal hairline-box text-alabaster font-medium">
              Cloud
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-[2.25rem] sm:text-5xl xl:text-[3.65rem] leading-[1.08] tracking-tight text-alabaster descender-safe">
            Building dependable{' '}
            <span className="font-serif italic font-normal text-vermilion">backend services</span>,
            cloud infrastructure, and mobile apps.
          </h1>

          {/* Primary Action Links with Awwwards Full Interaction Arc */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              onClick={() => playSound('tap')}
              className="btn-awwwards h-12 px-6 rounded-xl bg-vermilion text-white font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-alabaster hover:text-obsidian transition active:scale-95"
              data-cursor="Explore"
            >
              <span>View Selected Projects</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="btn-awwwards h-12 px-4 rounded-xl bg-charcoal hairline-box text-alabaster font-mono text-xs flex items-center justify-center gap-2 hover:border-vermilion active:scale-95"
              data-cursor="GitHub"
            >
              <span>github.com/adi-de9</span>
              <span className="text-stone">↗</span>
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="btn-awwwards h-12 px-4 rounded-xl bg-charcoal hairline-box text-alabaster font-mono text-xs flex items-center justify-center gap-2 hover:border-vermilion active:scale-95"
              data-cursor="LinkedIn"
            >
              <span>linkedin.com/in/adi-de9</span>
              <span className="text-stone">↗</span>
            </a>

            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="btn-awwwards h-12 px-4 rounded-xl bg-charcoal hairline-box text-alabaster font-mono text-xs flex items-center justify-center gap-2 hover:border-vermilion active:scale-95"
              data-cursor="Resume"
            >
              <span>Resume (PDF)</span>
              <span className="text-stone">↗</span>
            </a>
          </div>

          {/* Key Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-charcoal hairline-box rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 sm:p-5 hairline-b sm:border-b-0 hairline-r">
              <div className="font-mono font-semibold text-2xl sm:text-3xl text-alabaster">
                200+
              </div>
              <div className="text-xs text-stone mt-1 leading-snug">
                UI modules rebuilt at CONVOMAX
              </div>
            </div>
            <div className="p-4 sm:p-5 hairline-b sm:border-b-0 sm:hairline-r">
              <div className="font-mono font-semibold text-2xl sm:text-3xl text-alabaster">
                99.9%
              </div>
              <div className="text-xs text-stone mt-1 leading-snug">
                Uptime across production AWS EC2, RDS, and S3 environments
              </div>
            </div>
            <div className="p-4 sm:p-5 hairline-r">
              <div className="font-mono font-semibold text-2xl sm:text-3xl text-alabaster">
                10+
              </div>
              <div className="text-xs text-stone mt-1 leading-snug">
                Production web, API, and mobile applications shipped
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="font-mono font-semibold text-2xl sm:text-3xl text-moss">
                Remote
              </div>
              <div className="text-xs text-stone mt-1 leading-snug">
                Available for full-time remote software engineering roles
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Studio Desk */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <StudioDeskCard />
        </div>
      </div>
    </section>
  );
}
