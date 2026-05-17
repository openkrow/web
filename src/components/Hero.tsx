"use client";

import { useEffect, useState } from "react";
import { DotPattern } from "@/components/DotPattern";

const agents = [
  { label: "MKT", name: "Marketing" },
  { label: "DEV", name: "Development" },
  { label: "LGL", name: "Legal" },
  { label: "FIN", name: "Finance" },
  { label: "OPS", name: "Operations" },
];

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
              <p
                className={`font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                The all-in-one AI team for solo founders
              </p>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#0F172A] mb-6 ${
                  visible ? "animate-fade-in-up delay-1" : "opacity-0"
                }`}
              >
                You run the vision.
                <br />
                <span className="text-[#fb923c]">Your agents run the company.</span>
              </h1>

              <p
                className={`text-lg text-[#475569] max-w-[520px] mb-8 leading-relaxed ${
                  visible ? "animate-fade-in-up delay-2" : "opacity-0"
                }`}
              >
                Stop juggling marketing, dev, legal, finance, and ops alone. OpenKrow puts 5 specialized AI agents on your desktop &mdash; so you can focus on building, not burning out.
              </p>

              {/* CTAs */}
              <div className={`flex flex-wrap items-center gap-4 ${visible ? "animate-fade-in-up delay-3" : "opacity-0"}`}>
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
                  Meet your agents
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - App Window with 5 agents */}
            <div className={`lg:col-span-5 ${visible ? "animate-fade-in-up delay-3" : "opacity-0"}`}>
              <div className="bg-white border border-[#e9e9e4] rounded-none overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e9e9e4] bg-[#fafafa]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-[#94A3B8] font-mono">OpenKrow</span>
                </div>
                {/* Agent list */}
                <div className="p-4 space-y-2">
                  {agents.map((agent) => (
                    <div key={agent.label} className="flex items-center gap-3 px-3 py-2.5 border border-[#e9e9e4] bg-[#f8fafc]">
                      <div className="w-8 h-8 bg-[#fb923c]/10 flex items-center justify-center text-[10px] font-bold font-mono text-[#fb923c] shrink-0">
                        {agent.label}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-[#0F172A]">{agent.name} Agent</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                        <span className="text-[10px] font-mono text-[#94A3B8]">active</span>
                      </div>
                    </div>
                  ))}
                  {/* Input bar */}
                  <div className="flex items-center gap-2 border border-[#e9e9e4] px-3 py-2 mt-2">
                    <span className="text-sm text-[#94A3B8] flex-1">What should we work on today?</span>
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
