'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if device is coarse pointer / touch or reduced motion
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Center dot snaps immediately
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const onMouseDown = () => {
      isClicking = true;
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.85)`;
      }
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      const interactiveEl = target.closest('button, a, input, [role="button"]') as HTMLElement | null;

      if (cursorEl) {
        isHovering = true;
        const label = cursorEl.getAttribute('data-cursor') || '';
        ring.style.width = '84px';
        ring.style.height = '28px';
        ring.style.borderRadius = '9999px';
        ring.style.backgroundColor = '#E04F33';
        ring.style.borderColor = '#E04F33';
        if (text) {
          text.textContent = label;
          text.style.opacity = '1';
        }
      } else if (interactiveEl) {
        isHovering = true;
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderRadius = '9999px';
        ring.style.backgroundColor = 'rgba(224, 79, 51, 0.15)';
        ring.style.borderColor = 'rgba(224, 79, 51, 0.8)';
        if (text) {
          text.textContent = '';
          text.style.opacity = '0';
        }
      } else {
        isHovering = false;
        ring.style.width = '24px';
        ring.style.height = '24px';
        ring.style.borderRadius = '9999px';
        ring.style.backgroundColor = 'rgba(224, 79, 51, 0.08)';
        ring.style.borderColor = 'rgba(244, 243, 239, 0.35)';
        if (text) {
          text.textContent = '';
          text.style.opacity = '0';
        }
      }
    };

    // Smooth Lerp Animation Loop for outer capsule/ring
    const render = () => {
      // Lerp formula: current + (target - current) * factor
      const factor = isHovering ? 0.22 : 0.16;
      ringX += (mouseX - ringX) * factor;
      ringY += (mouseY - ringY) * factor;

      if (!isClicking) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 rounded-full bg-vermilion shadow-[0_0_8px_rgba(224,79,51,0.8)] will-change-transform"
      />

      {/* Smooth trailing outer capsule/ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hidden lg:flex pointer-events-none fixed top-0 left-0 z-50 w-6 h-6 rounded-full border border-alabaster/35 bg-vermilion/10 items-center justify-center overflow-hidden transition-[width,height,background-color,border-color] duration-240 ease-out will-change-transform"
      >
        <span
          ref={textRef}
          className="font-mono text-[9px] font-semibold tracking-wider text-white uppercase opacity-0 transition-opacity duration-150 select-none px-1.5 truncate"
        />
      </div>
    </>
  );
}
