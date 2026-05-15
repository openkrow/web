"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        {/* H1 */}
        <h1
          className={`text-5xl sm:text-6xl md:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-6 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Your AI Desktop Companion
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg text-[#A1A1AA] max-w-[600px] mx-auto mb-10 leading-relaxed ${
            visible ? "animate-fade-in-up delay-1" : "opacity-0"
          }`}
        >
          An open-source AI agent that sits right on your desktop. Draft reports, research topics, summarize documents, or write code &mdash; in natural language.
        </p>

        {/* Terminal code block */}
        <div
          className={`max-w-[540px] mx-auto mb-10 bg-[#111111] border border-[#1E1E1E] rounded-lg overflow-hidden text-left ${
            visible ? "animate-fade-in-up delay-2" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1E1E1E]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="font-mono text-[11px] text-[#52525B] ml-2">terminal</span>
          </div>
          <div className="p-4 sm:p-5 font-mono text-sm leading-7">
            <div>
              <span className="text-[#22D3EE]">$</span>{" "}
              <span className="text-[#E2E8F0]">krow &quot;Summarize this meeting transcript and draft a follow-up email&quot;</span>
            </div>
            <div className="mt-3 space-y-1">
              <div className="text-[#E2E8F0]"><span className="text-[#22C55E]">+</span> Reading meeting_notes_may.docx</div>
              <div className="text-[#E2E8F0]"><span className="text-[#22C55E]">+</span> Extracting 5 action items and 3 decisions</div>
              <div className="text-[#E2E8F0]"><span className="text-[#22C55E]">+</span> Drafting follow-up email with summary</div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[#22C55E]">Done</span>
              <span className="text-[#A1A1AA]">&mdash; email draft saved and ready to send</span>
            </div>
            <div className="mt-2">
              <span className="text-[#22D3EE]">$</span>{" "}
              <span className="inline-block w-2 h-4 bg-[#F97316]/60 animate-cursor" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 ${
            visible ? "animate-fade-in-up delay-3" : "opacity-0"
          }`}
        >
          <a
            href="#download"
            className="inline-flex items-center px-7 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#E5E5E5] hover:scale-[1.02] transition-all duration-150 shadow-[0_0_60px_rgba(249,115,22,0.2)]"
          >
            Download Free
          </a>
          <a
            href="#use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-[#2A2A2A] rounded-lg hover:border-[#F97316] hover:text-[#F97316] transition-all duration-150"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div
          className={`flex items-center justify-center gap-6 mt-10 ${
            visible ? "animate-fade-in-up delay-4" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            macOS, Windows, Linux
          </div>
          <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Data stays on your machine
          </div>
          <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Open Source
          </div>
        </div>
      </div>
    </section>
  );
}
