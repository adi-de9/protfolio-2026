'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Lenis instance with strict native touch preservation (Awwwards standard)
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      syncTouch: false,
      touchMultiplier: 1,
      lerp: 0.09,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
