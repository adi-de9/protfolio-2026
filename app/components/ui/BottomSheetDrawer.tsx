'use client';

import { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { SOCIAL_LINKS } from '../../data/portfolio-data';
import { useSound } from '../../hooks/use-sound-fx';

interface BottomSheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeProject: Project | null;
  mode: 'project' | 'quick-info' | null;
  onCopyEmail: () => void;
}

export default function BottomSheetDrawer({
  isOpen,
  onClose,
  activeProject,
  mode,
  onCopyEmail,
}: BottomSheetDrawerProps) {
  const { playSound } = useSound();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        playSound('tap');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playSound]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => {
          playSound('tap');
          onClose();
        }}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity duration-300 animate-in fade-in"
      />

      {/* Spring Bottom Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed bottom-0 inset-x-0 z-50 max-w-3xl mx-auto bg-charcoal border-t border-alabaster/25 rounded-t-3xl p-5 sm:p-8 max-h-[88vh] overflow-y-auto shadow-2xl transition-transform duration-400 ease-out animate-in slide-in-from-bottom"
      >
        {/* Handle */}
        <div
          className="w-12 h-1.5 bg-stone/30 rounded-full mx-auto mb-5 cursor-pointer hover:bg-stone/60 transition"
          onClick={() => {
            playSound('tap');
            onClose();
          }}
        />

        {mode === 'project' && activeProject && (
          <div>
            <div className="flex items-start justify-between gap-4 pb-4 hairline-b mb-5">
              <div>
                <span className="font-mono text-xs text-vermilion font-medium">
                  Project {activeProject.number} · {activeProject.category}
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-alabaster mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  playSound('tap');
                  onClose();
                }}
                className="h-9 px-3.5 rounded-xl bg-surface hairline-box font-mono text-xs text-stone hover:text-alabaster shrink-0 transition active:scale-95"
              >
                Close ✕
              </button>
            </div>

            {activeProject.imageUrl && (
              <div className="relative w-full h-52 sm:h-72 mb-6 rounded-2xl overflow-hidden bg-charcoal border border-white/5">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Clean Animated SVG System Flow Diagram */}
            <div className="p-4 sm:p-6 rounded-2xl bg-obsidian hairline-box mb-6">
              <div className="flex items-center justify-between font-mono text-[11px] text-stone mb-4">
                <span>System Flow Diagram</span>
                <span className="text-moss flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
                  Live Architecture Path
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center font-mono">
                <div className="p-4 rounded-xl bg-charcoal hairline-box text-center">
                  <div className="text-[10px] text-stone mb-1">Step 01</div>
                  <div className="text-xs sm:text-sm font-medium text-alabaster">
                    {activeProject.nodes[0]}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-charcoal border border-vermilion/45 text-center">
                  <div className="text-[10px] text-vermilion mb-1">Step 02</div>
                  <div className="text-xs sm:text-sm font-medium text-alabaster">
                    {activeProject.nodes[1]}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-charcoal hairline-box text-center">
                  <div className="text-[10px] text-moss mb-1">Step 03</div>
                  <div className="text-xs sm:text-sm font-medium text-alabaster">
                    {activeProject.nodes[2]}
                  </div>
                </div>
              </div>

              <svg className="w-full h-7 mt-3" viewBox="0 0 400 24" fill="none">
                <line
                  x1="16"
                  y1="12"
                  x2="384"
                  y2="12"
                  stroke="#E04F33"
                  strokeWidth="2"
                  className="flow-line"
                />
                <circle cx="16" cy="12" r="4" fill="#2E9B68" />
                <circle cx="200" cy="12" r="4" fill="#E04F33" />
                <circle cx="384" cy="12" r="4" fill="#F4F3EF" />
              </svg>
            </div>

            <p className="text-stone text-sm sm:text-base leading-relaxed mb-5">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-surface hairline-box font-mono text-xs text-alabaster"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Direct Live & GitHub Link Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('tap')}
                  className="btn-awwwards h-12 rounded-xl bg-vermilion text-white font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-alabaster hover:text-obsidian transition active:scale-95"
                >
                  <span>Launch Live Project</span>
                  <span>↗</span>
                </a>
              )}

              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('tap')}
                  className="btn-awwwards h-12 rounded-xl bg-surface hairline-box text-alabaster font-mono text-xs flex items-center justify-center gap-2 hover:border-vermilion active:scale-95"
                >
                  <span>View Source on GitHub</span>
                  <span className="text-stone">↗</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                playSound('tap');
                onClose();
              }}
              className="w-full h-11 rounded-xl bg-surface hairline-box text-stone font-mono text-xs hover:text-alabaster transition active:scale-95"
            >
              Close
            </button>
          </div>
        )}

        {mode === 'quick-info' && (
          <div>
            <div className="flex items-center justify-between pb-4 hairline-b mb-5">
              <div>
                <span className="font-mono text-xs text-moss flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                  Quick Info &amp; Direct Links
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-alabaster mt-0.5">
                  Aditya Deshmukh
                </h3>
              </div>
              <button
                onClick={() => {
                  playSound('tap');
                  onClose();
                }}
                className="h-9 px-3.5 rounded-xl bg-surface hairline-box font-mono text-xs text-stone hover:text-alabaster transition active:scale-95"
              >
                Close ✕
              </button>
            </div>

            <p className="text-stone text-sm leading-relaxed mb-5">
              Full-Stack Web and Mobile Developer · Associate Software Engineer at Quick Events · BCA (IGNOU). Available for full-time remote software engineering roles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-6">
              <button
                onClick={() => {
                  playSound('switch');
                  onCopyEmail();
                }}
                className="btn-awwwards p-4 rounded-xl bg-vermilion text-white font-medium flex items-center justify-between hover:bg-alabaster hover:text-obsidian transition active:scale-95"
              >
                <span>Copy: {SOCIAL_LINKS.email}</span>
                <span>⎘</span>
              </button>

              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('tap')}
                className="btn-awwwards p-4 rounded-xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-vermilion transition touch-card"
              >
                <span>View Resume (PDF)</span>
                <span className="text-stone">↗</span>
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('tap')}
                className="btn-awwwards p-4 rounded-xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-vermilion transition touch-card"
              >
                <span>github.com/adi-de9</span>
                <span className="text-stone">↗</span>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('tap')}
                className="btn-awwwards p-4 rounded-xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-vermilion transition touch-card"
              >
                <span>linkedin.com/in/adi-de9</span>
                <span className="text-stone">↗</span>
              </a>

              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('tap')}
                className="btn-awwwards p-4 rounded-xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-vermilion transition touch-card"
              >
                <span>x.com/adityadesh937</span>
                <span className="text-stone">↗</span>
              </a>

              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('tap')}
                className="btn-awwwards p-4 rounded-xl bg-surface hairline-box text-alabaster flex items-center justify-between hover:border-vermilion transition touch-card"
              >
                <span>adityapro.online</span>
                <span className="text-moss">●</span>
              </a>
            </div>

            <button
              onClick={() => {
                playSound('tap');
                onClose();
              }}
              className="w-full h-11 rounded-xl bg-surface hairline-box text-alabaster font-mono text-xs hover:border-alabaster transition active:scale-95"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
}
