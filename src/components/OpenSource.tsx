"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedStat({ value, suffix = "", label }: { value: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    // If value is not a number, just display it
    const num = parseInt(value);
    if (isNaN(num)) {
      setDisplayed(value);
      return;
    }
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayed(Math.round(eased * num).toString());
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center px-8">
      <div className="text-5xl sm:text-[64px] font-extrabold text-white leading-none">
        {displayed}{suffix}
      </div>
      <div className="text-[#A1A1AA] text-sm mt-2">{label}</div>
    </div>
  );
}

export function OpenSource() {
  return (
    <section id="open-source" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[12px] uppercase tracking-[0.08em] text-[#52525B] mb-4">
            Trust & Transparency
          </span>
          <h2 className="text-4xl sm:text-[48px] font-extrabold tracking-[-0.02em] text-white mb-4">
            You can read <span className="text-[#F97316]">every line of code.</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            OpenKrow is 100% open source under the MIT license. Every feature, every data flow, every API call &mdash; fully auditable.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center divide-x divide-[#1E1E1E] mb-14">
          <AnimatedStat value="100" suffix="%" label="Open Source" />
          <AnimatedStat value="3" suffix="+" label="Platforms" />
          <AnimatedStat value="0" suffix="" label="Cost ($)" />
          <AnimatedStat value="MIT" label="License" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/openkrow/openkrow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#E5E5E5] hover:scale-[1.02] transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Source Code
          </a>
          <a
            href="https://github.com/openkrow/openkrow/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-[#2A2A2A] rounded-lg hover:border-[#F97316] hover:text-[#F97316] transition-all duration-150"
          >
            Contribute
          </a>
        </div>
      </div>
    </section>
  );
}
