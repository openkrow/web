"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative border-b border-dashed border-[#cecec9]">
      <div className="grid-background">
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

              {/* Install command */}
              <div
                className={`inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-5 py-3 rounded-none font-mono text-sm mb-6 ${
                  visible ? "animate-fade-in-up delay-2" : "opacity-0"
                }`}
              >
                <span className="text-[#94A3B8]">$</span>
                <span>brew install openkrow</span>
                <button
                  className="ml-4 text-[#94A3B8] hover:text-white transition-colors"
                  onClick={() => navigator.clipboard.writeText("brew install openkrow")}
                  aria-label="Copy command"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* CTA */}
              <div className={`${visible ? "animate-fade-in-up delay-3" : "opacity-0"}`}>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 text-[#fb923c] hover:text-[#f97316] font-medium text-sm transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Terminal Widget */}
            <div className={`lg:col-span-5 ${visible ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
              <div className="bg-[#181818] rounded-none border border-[#333] overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#333]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-[#666]">openkrow</span>
                </div>
                {/* Terminal body */}
                <div className="p-5 font-mono text-sm leading-7 text-white">
                  <div>
                    <span className="text-[#fb923c]">$</span>{" "}
                    <span className="text-[#E2E8F0]">krow &quot;Summarize this PDF and list action items&quot;</span>
                  </div>
                  <div className="mt-3 space-y-1 text-[#94A3B8]">
                    <div><span className="text-[#28c840]">+</span> Reading quarterly_report.pdf</div>
                    <div><span className="text-[#28c840]">+</span> Extracting key findings and action items</div>
                    <div><span className="text-[#28c840]">+</span> Generating summary with 4 action items</div>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#28c840]">Done</span>
                    <span className="text-[#666]"> &mdash; summary saved to ~/Desktop/summary.md</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-[#fb923c]">$</span>{" "}
                    <span className="inline-block w-2 h-5 bg-[#fb923c]/60 animate-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
