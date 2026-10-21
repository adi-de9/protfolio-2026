'use client';

import { useState } from 'react';
import { useSound } from '../../hooks/use-sound-fx';
import { SOCIAL_LINKS } from '../../data/portfolio-data';

interface ContactSectionProps {
  onCopyEmail: () => void;
}

export default function ContactSection({ onCopyEmail }: ContactSectionProps) {
  const { playSound } = useSound();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    playSound('switch');
    setCopied(true);
    onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-14 sm:py-20 scroll-mt-14">
      <div className="contact-card p-6 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-moss">
            <span className="flex h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
            <span>Available for full-time remote software engineering roles</span>
          </div>
          <span className="font-mono text-xs text-stone">Remote, India</span>
        </div>

        <div className="relative">
          {/* Soft orange radial glow behind heading */}
          <div
            className="pointer-events-none absolute -top-12 -left-6 w-96 h-48 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,106,42,0.14),transparent_70%)] blur-2xl -z-10"
            aria-hidden="true"
          />
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-alabaster leading-tight max-w-3xl mb-4 descender-safe">
            Let’s build your next{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#ff6a2a] via-[#ff493d] to-[#ff6a2a] bg-clip-text text-transparent">
              web or mobile application
            </span>
            .
          </h2>
        </div>

        <p className="text-stone text-base sm:text-lg max-w-2xl mb-8">
          Reach out directly via email or connect on GitHub and LinkedIn.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <button
            type="button"
            onClick={handleCopy}
            className="btn-awwwards h-14 px-5 rounded-2xl bg-gradient-to-r from-[#ff6a2a] to-[#ff493d] text-white font-medium flex items-center justify-between hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,106,42,0.35)] transition active:scale-95"
            data-cursor="Copy Email"
          >
            <span className="truncate">
              {copied ? 'Copied to clipboard ✓' : SOCIAL_LINKS.email}
            </span>
            <span className="ml-2 text-sm font-sans">⎘</span>
          </button>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('tap')}
            className="btn-awwwards h-14 px-5 rounded-2xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-[#ff6a2a]/60 hover:shadow-[0_0_15px_rgba(255,106,42,0.12)] active:scale-95"
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
            className="btn-awwwards h-14 px-5 rounded-2xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-[#ff6a2a]/60 hover:shadow-[0_0_15px_rgba(255,106,42,0.12)] active:scale-95"
            data-cursor="LinkedIn"
          >
            <span>linkedin.com/in/adi-de9</span>
            <span className="text-stone">↗</span>
          </a>

          <a
            href={SOCIAL_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('tap')}
            className="btn-awwwards h-14 px-5 rounded-2xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-[#ff6a2a]/60 hover:shadow-[0_0_15px_rgba(255,106,42,0.12)] active:scale-95"
            data-cursor="Website"
          >
            <span>adityapro.online</span>
            <span className="text-moss">●</span>
          </a>
        </div>

        {/* Auxiliary Links Row: Resume, Twitter/X, and Archive */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-white/5 font-mono text-xs text-stone">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="hover:text-alabaster hover:underline transition flex items-center gap-1.5"
            >
              <span>📄 Resume (Google Drive)</span>
              <span className="text-stone">↗</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="hover:text-alabaster hover:underline transition flex items-center gap-1.5"
            >
              <span>𝕏 @adityadesh937</span>
              <span className="text-stone">↗</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={SOCIAL_LINKS.oldPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('tap')}
              className="hover:text-alabaster hover:underline transition flex items-center gap-1.5"
            >
              <span>Archive: adityafsd.online</span>
              <span className="text-stone">↗</span>
            </a>
          </div>
          <span className="text-[11px] text-stone/70">Built with Next.js 16 & React 19</span>
        </div>
      </div>
    </footer>
  );
}
