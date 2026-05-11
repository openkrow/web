"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-ember/[0.03] dark:bg-ember/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(26,23,18,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,23,18,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-[15%] w-px h-[40%] bg-gradient-to-b from-transparent via-ember/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Story */}
          <div>
            {/* Hook - start in the middle of action */}
            <div className={`mb-8 ${visible ? "animate-reveal" : "opacity-0"}`}>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-ember/20 bg-ember/[0.06] text-[13px] font-medium ember-text">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ember" />
                </span>
                Free &middot; Open Source &middot; MIT License
              </span>
            </div>

            {/* Headline: Problem-first, not product-first */}
            <h1 className={`font-display font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 ${visible ? "animate-reveal delay-1" : "opacity-0"}`}>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-ink dark:text-[#C8C2B6]">
                Stop switching between
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-ink dark:text-[#C8C2B6] mt-1">
                10 tabs to get
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl ember-text ember-glow mt-1">
                one thing done.
              </span>
            </h1>

            {/* Story: Customer is the hero */}
            <p className={`text-base sm:text-lg leading-relaxed text-ink-muted dark:text-[#8A8274] mb-8 max-w-lg ${visible ? "animate-reveal delay-3" : "opacity-0"}`}>
              OpenKrow is an AI agent that sits right on your desktop. Ask it to draft reports, research topics, summarize documents, or write code &mdash; in natural language. It works alongside you, not in another browser tab.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap items-center gap-4 ${visible ? "animate-reveal delay-4" : "opacity-0"}`}>
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-ember text-obsidian font-display font-semibold text-sm tracking-wide hover:bg-ember-light transition-all duration-300 shadow-[0_0_30px_rgba(229,164,17,0.15)] hover:shadow-[0_0_50px_rgba(229,164,17,0.25)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Free
              </a>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ghost-border-light dark:border-ghost-border text-sm font-medium text-ink-muted dark:text-obsidian-500 hover:text-ink dark:hover:text-[#C8C2B6] hover:border-ember/30 transition-all duration-300"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust signals */}
            <div className={`flex items-center gap-6 mt-10 ${visible ? "animate-reveal delay-5" : "opacity-0"}`}>
              <div className="flex items-center gap-2 text-[13px] text-ink-faint dark:text-obsidian-500">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                macOS, Windows, Linux
              </div>
              <div className="flex items-center gap-2 text-[13px] text-ink-faint dark:text-obsidian-500">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Data stays on your machine
              </div>
            </div>
          </div>

          {/* Right: Terminal demo - show don't tell */}
          <div className={`${visible ? "animate-reveal delay-6" : "opacity-0"}`}>
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-px bg-ember/10 animate-[line-scan_8s_linear_infinite]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-ghost-border-light dark:border-ghost-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10 dark:bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10 dark:bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10 dark:bg-white/10" />
                  </div>
                  <span className="font-mono text-[11px] tracking-wider text-ink-faint dark:text-obsidian-500">OpenKrow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-ink-faint dark:text-obsidian-500 tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Body - relatable Vietnamese professional scenario */}
              <div className="p-5 sm:p-6 font-mono text-[13px] leading-7 text-left space-y-4">
                <div className="text-ink-faint dark:text-obsidian-500">
                  <span className="ember-text">krow</span>
                  <span className="text-ink-muted dark:text-obsidian-400"> ~ </span>
                  Summarize this meeting transcript and draft a follow-up email to the team
                </div>
                <div className="space-y-1">
                  <div className="text-ink dark:text-[#C8C2B6]/80">
                    <span className="text-emerald-500 mr-2">+</span>
                    Reading meeting_notes_may.docx
                  </div>
                  <div className="text-ink dark:text-[#C8C2B6]/80">
                    <span className="text-emerald-500 mr-2">+</span>
                    Extracting 5 action items and 3 decisions
                  </div>
                  <div className="text-ink dark:text-[#C8C2B6]/80">
                    <span className="text-emerald-500 mr-2">+</span>
                    Drafting follow-up email with summary
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-ink dark:text-[#C8C2B6]">
                    Done &mdash; email draft saved and ready to send
                  </span>
                </div>
                <div className="text-ink-faint dark:text-obsidian-500 pt-1">
                  <span className="ember-text">krow</span>
                  <span className="text-ink-muted dark:text-obsidian-400"> ~ </span>
                  <span className="inline-block w-2 h-4 bg-ember/60 animate-cursor ml-0.5" />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="mt-4 text-center">
              <span className="text-[12px] text-ink-faint dark:text-obsidian-500">
                Real interaction &mdash; not a mockup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
