"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { OpenSource } from "@/components/OpenSource";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export { ScrollReveal };

export default function Home() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-[#111111] border-b border-[#1E1E1E]">
        <div className="max-w-[1200px] mx-auto px-6 py-2.5 text-center text-sm text-[#A1A1AA]">
          OpenKrow v1.0 is now available &mdash;{" "}
          <a href="https://github.com/openkrow/openkrow/releases" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:opacity-75 transition-opacity">
            See what&apos;s new &rarr;
          </a>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <ScrollReveal><UseCases /></ScrollReveal>
        <ScrollReveal delay={100}><Features /></ScrollReveal>
        <ScrollReveal delay={100}><HowItWorks /></ScrollReveal>
        <ScrollReveal delay={100}><OpenSource /></ScrollReveal>
        <ScrollReveal delay={100}><Download /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
