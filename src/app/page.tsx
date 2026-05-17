"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { Benchmarks } from "@/components/Benchmarks";
import { OpenSource } from "@/components/OpenSource";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full border-b border-dashed border-[#cecec9]">
        <div className="max-w-[1200px] mx-auto px-6 py-2.5 text-center text-sm text-[#475569]">
          5 AI agents. 1 desktop app. 0 employees needed. &mdash;{" "}
          <a
            href="https://github.com/openkrow/openkrow/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fb923c] hover:text-[#f97316] font-medium transition-colors"
          >
            Get early access &rarr;
          </a>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <ScrollReveal><Features /></ScrollReveal>
        <ScrollReveal><Benchmarks /></ScrollReveal>
        <OpenSource />
        <ScrollReveal><Download /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
