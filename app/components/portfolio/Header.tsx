'use client';

import { useState } from 'react';
import { useSound } from '../../hooks/use-sound-fx';

interface HeaderProps {
  onCopyEmail: () => void;
}

export default function Header({ onCopyEmail }: HeaderProps) {
  const { playSound } = useSound();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    playSound('switch');
    setCopied(true);
    onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-obsidian/85 hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between text-xs">
        {/* Left: Name & Live Status */}
        <div className="flex items-center gap-3">
          <a
            href="#overview"
            onClick={() => playSound('tap')}
            className="flex items-center gap-2.5 group"
            data-cursor="Top"
          >
            <span className="flex h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
            <span className="font-sans font-bold text-sm text-alabaster tracking-tight group-hover:text-vermilion transition-colors">
              Aditya Deshmukh
            </span>
          </a>
        </div>

        {/* Center: Desktop Section Links */}
        <nav className="hidden lg:flex items-center gap-7 font-sans font-medium text-xs text-stone">
          <a
            href="#overview"
            onClick={() => playSound('tap')}
            className="hover:text-alabaster transition-colors"
          >
            Overview
          </a>
          <a
            href="#projects"
            onClick={() => playSound('tap')}
            className="hover:text-alabaster transition-colors"
          >
            Selected Projects
          </a>
          <a
            href="#experience"
            onClick={() => playSound('tap')}
            className="hover:text-alabaster transition-colors"
          >
            Work Experience
          </a>
          <a
            href="#skills"
            onClick={() => playSound('tap')}
            className="hover:text-alabaster transition-colors"
          >
            Technical Skills
          </a>
          <a
            href="#contact"
            onClick={() => playSound('tap')}
            className="hover:text-alabaster transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: One-Tap Email Copy with Awwwards lifecycle */}
        <div className="flex items-center gap-2 sm:gap-2.5 font-mono text-[11px]">
          <button
            type="button"
            onClick={handleCopy}
            className="btn-awwwards px-3 py-1.5 rounded-lg bg-alabaster text-obsidian font-semibold hover:bg-vermilion hover:text-white transition active:scale-95"
            data-cursor="Copy"
          >
            {copied ? 'Copied email ✓' : 'adityadesh937@gmail.com'}
          </button>
        </div>
      </div>
    </header>
  );
}
