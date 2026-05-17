"use client";

const stats = [
  { label: "Open Source", value: "100%" },
  { label: "Agents", value: "5" },
  { label: "Cost", value: "$0" },
  { label: "License", value: "MIT" },
];

export function OpenSource() {
  return (
    <section className="bg-[#0A0A0A] border-y border-dashed border-[#cecec9]">
      <div>
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
              Open Source
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built in the open, for founders like you
            </p>
            <p className="text-[#94A3B8] max-w-md mx-auto">
              No vendor lock-in. No subscription traps. Fork it, self-host it, make it yours. Join thousands of solo founders building the future of one-person companies.
            </p>
            <a
              href="https://discord.gg/openkrow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[#333] text-white text-sm font-medium hover:border-[#fb923c] hover:text-[#fb923c] transition-all"
            >
              Join the founder community
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#333]">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0A0A0A] p-8 text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/openkrow/openkrow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
