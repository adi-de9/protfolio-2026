'use client';

import { useSound } from '../../hooks/use-sound-fx';

interface MobileNavDockProps {
  onOpenQuickInfo: () => void;
}

export default function MobileNavDock({ onOpenQuickInfo }: MobileNavDockProps) {
  const { playSound } = useSound();

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-4 inset-x-4 max-w-md mx-auto z-40 bg-charcoal/95 backdrop-blur-xl border border-alabaster/20 rounded-2xl p-1.5 shadow-2xl flex items-center justify-between gap-1 lg:hidden"
    >
      <a
        href="#overview"
        onClick={() => playSound('tap')}
        className="flex-1 py-2.5 rounded-xl text-center font-mono text-[11px] text-alabaster hover:bg-surface active:scale-95 transition"
      >
        Overview
      </a>
      <a
        href="#projects"
        onClick={() => playSound('tap')}
        className="flex-1 py-2.5 rounded-xl text-center font-mono text-[11px] text-alabaster hover:bg-surface active:scale-95 transition"
      >
        Projects
      </a>
      <a
        href="#experience"
        onClick={() => playSound('tap')}
        className="flex-1 py-2.5 rounded-xl text-center font-mono text-[11px] text-alabaster hover:bg-surface active:scale-95 transition"
      >
        Experience
      </a>
      <a
        href="#skills"
        onClick={() => playSound('tap')}
        className="flex-1 py-2.5 rounded-xl text-center font-mono text-[11px] text-alabaster hover:bg-surface active:scale-95 transition"
      >
        Skills
      </a>
      <button
        type="button"
        onClick={() => {
          playSound('switch');
          onOpenQuickInfo();
        }}
        className="flex-1 py-2.5 rounded-xl text-center font-mono text-[11px] bg-vermilion text-white font-medium active:scale-95 transition"
      >
        Quick Info
      </button>
    </nav>
  );
}
