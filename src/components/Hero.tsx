"use client";

import { useEffect, useState } from "react";
import { DotPattern } from "@/components/DotPattern";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="border-b border-dashed border-[#cecec9]">
      <DotPattern
        className="min-h-[500px]"
        dotSize={2}
        gap={28}
        baseColor="#d4d4d4"
        glowColor="#fb923c"
        proximity={140}
        glowIntensity={1.2}
        waveSpeed={0.4}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left - Text */}
            <div className="lg:col-span-7">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#0F172A] mb-6 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Your AI Desktop Companion
              </h1>

              <p
                className={`text-lg text-[#475569] max-w-[520px] mb-8 leading-relaxed ${
                  visible ? "animate-fade-in-up delay-1" : "opacity-0"
                }`}
              >
                OpenKrow is a free, open-source AI agent that lives on your desktop. Draft reports, research topics, summarize documents, or automate tasks &mdash; all locally and privately.
              </p>

              {/* CTAs */}
              <div className={`flex flex-wrap items-center gap-4 ${visible ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white font-medium text-sm hover:bg-[#1e293b] transition-colors"
                >
                  Download for Free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-[#fb923c] hover:text-[#f97316] font-medium text-sm transition-colors"
                >
                  See how it works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - App Window Mockup */}
            <div className={`lg:col-span-5 ${visible ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
              <div className="bg-white border border-[#e9e9e4] rounded-none overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e9e9e4] bg-[#fafafa]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-[#94A3B8] font-mono">OpenKrow</span>
                </div>
                {/* App body */}
                <div className="p-5 space-y-4">
                  {/* User message */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 bg-[#f1f5f9] flex items-center justify-center text-xs font-bold text-[#475569] shrink-0">Y</div>
                    <div className="bg-[#f8fafc] border border-[#e9e9e4] px-4 py-2.5 text-sm text-[#0F172A]">
                      Summarize this PDF and list the action items
                    </div>
                  </div>
                  {/* Agent response */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 bg-[#fb923c]/10 flex items-center justify-center text-xs font-bold text-[#fb923c] shrink-0">K</div>
                    <div className="space-y-2 text-sm text-[#475569]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#28c840]">&#10003;</span>
                        Reading quarterly_report.pdf
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#28c840]">&#10003;</span>
                        Extracting key findings
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#28c840]">&#10003;</span>
                        4 action items identified
                      </div>
                      <div className="mt-2 px-3 py-2 bg-[#f8fafc] border border-[#e9e9e4] text-xs text-[#475569]">
                        Summary saved to ~/Desktop/summary.md
                      </div>
                    </div>
                  </div>
                  {/* Input bar */}
                  <div className="flex items-center gap-2 border border-[#e9e9e4] px-3 py-2 mt-2">
                    <span className="text-sm text-[#94A3B8] flex-1">Ask OpenKrow anything...</span>
                    <div className="w-2 h-4 bg-[#fb923c]/60 animate-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DotPattern>
    </section>
  );
}
