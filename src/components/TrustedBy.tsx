"use client";

export function TrustedBy() {
  const logos = [
    "Developers",
    "Researchers",
    "Students",
    "Writers",
    "Designers",
    "Analysts",
    "Engineers",
    "Founders",
  ];

  return (
    <section className="border-b border-dashed border-[#cecec9] py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-4 h-4 text-[#fb923c] animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-wider text-[#475569]">Trusted by</span>
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
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
