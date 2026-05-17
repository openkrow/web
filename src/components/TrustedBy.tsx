"use client";

export function TrustedBy() {
  const personas = [
    "SaaS Founders",
    "Indie Hackers",
    "Solo Devs",
    "Bootstrappers",
    "Side Hustlers",
    "Micro-SaaS",
    "Solopreneurs",
    "1-Person Startups",
  ];

  return (
    <section className="border-b border-dashed border-[#cecec9] py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-4 h-4 text-[#fb923c] animate-heartbeat" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-wider text-[#475569]">Built for</span>
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...personas, ...personas].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-2 text-[#94A3B8] font-mono text-sm"
            >
              <div className="w-8 h-8 bg-[#f1f5f9] rounded-none flex items-center justify-center text-[#475569] font-bold text-xs">
                {name[0]}
              </div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
