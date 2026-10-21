'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { CharacterMode } from '../../../types/portfolio';
import { SPEECH_LINES } from '../../../data/portfolio-data';
import { useSound } from '../../../hooks/use-sound-fx';

// Dynamically import Three.js StudioCanvas with ssr: false for optimal bundle and zero hydration mismatch
const DynamicStudioCanvas = dynamic(() => import('./StudioCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[370px] flex items-center justify-center bg-charcoal/50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-vermilion border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-stone">Loading 3D Studio...</span>
      </div>
    </div>
  ),
});

const MODE_LABELS: Record<CharacterMode, string> = {
  follow: 'Follow Cursor',
  coding: 'Coding Mode',
  float: 'Float View',
  wireframe: 'Wireframe',
};

export default function StudioDeskCard() {
  const { playSound } = useSound();
  const [mode, setMode] = useState<CharacterMode>('follow');
  const [speechIdx, setSpeechIdx] = useState(0);
  const [speechBounce, setSpeechBounce] = useState(false);

  const handleWave = useCallback(() => {
    playSound('wave');
    setSpeechIdx((prev) => (prev + 1) % SPEECH_LINES.length);
    setSpeechBounce(true);
    setTimeout(() => setSpeechBounce(false), 240);
  }, [playSound]);

  const handleModeChange = (newMode: CharacterMode) => {
    playSound('switch');
    setMode(newMode);
  };

  return (
    <div className="rounded-3xl bg-charcoal hairline-box-strong overflow-hidden shadow-2xl">
      {/* Studio Stage Header */}
      <div className="px-4 py-3 hairline-b flex items-center justify-between bg-obsidian/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-moss" />
          <span className="font-sans font-semibold text-xs text-alabaster">
            Interactive Studio Desk
          </span>
        </div>
        <span id="active-mode-label" className="font-mono text-[11px] text-stone">
          {MODE_LABELS[mode]}
        </span>
      </div>

      {/* Speech Bubble + Canvas */}
      <div className="relative">
        <div className="absolute top-3 left-3 right-3 z-10 pointer-events-none flex justify-start">
          <div
            className={`px-3.5 py-2 rounded-xl bg-obsidian/90 hairline-box-strong text-xs text-alabaster shadow-lg flex items-center gap-2 transition-transform duration-300 ${
              speechBounce ? 'scale-105' : 'scale-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-vermilion shrink-0" />
            <span className="font-sans font-medium">{SPEECH_LINES[speechIdx]}</span>
          </div>
        </div>

        <DynamicStudioCanvas mode={mode} onWaveTrigger={handleWave} />

        <div className="absolute bottom-2.5 right-3 z-10 pointer-events-none font-mono text-[10px] text-stone bg-obsidian/75 px-2.5 py-1 rounded-md hairline-box">
          Tap character to wave · Drag to rotate
        </div>
      </div>

      {/* 4 Mode Buttons */}
      <div className="p-3 bg-obsidian/90 hairline-t">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[11px]">
          {(['follow', 'coding', 'float', 'wireframe'] as const).map((key) => {
            const isActive = mode === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleModeChange(key)}
                className={`py-2 px-2.5 rounded-lg transition active:scale-95 text-center truncate font-medium ${
                  isActive
                    ? 'bg-vermilion text-white'
                    : 'bg-surface hairline-box text-stone hover:text-alabaster'
                }`}
              >
                {MODE_LABELS[key]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
