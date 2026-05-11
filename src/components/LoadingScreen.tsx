"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after the animation completes ~1.8s (half cycle)
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    // Remove from DOM after fade transition
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-parchment dark:bg-obsidian transition-opacity duration-600 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <span className="braille-dissolve text-ink dark:text-[#C8C2B6]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint dark:text-obsidian-500 animate-pulse">
          Initializing
        </span>
      </div>
    </div>
  );
}
