"use client";

const platforms = [
  {
    name: "macOS",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    detail: "macOS 12+ / Apple Silicon & Intel",
  },
  {
    name: "Windows",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    detail: "Windows 10+ / x64 & ARM64",
  },
  {
    name: "Linux",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    detail: "Ubuntu 20.04+ / Fedora 36+",
  },
];

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-parchment-100 dark:bg-obsidian-100 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-ember/[0.03] dark:bg-ember/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-ink dark:text-[#C8C2B6]">
            Ready to try <span className="ember-text">OpenKrow</span>?
          </h2>
          <p className="text-ink-muted dark:text-[#8A8274] max-w-lg mx-auto text-base leading-relaxed">
            Download for free. No sign-up required. Start working smarter in minutes.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href="https://github.com/openkrow/openkrow/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card ember-border rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-ink-muted dark:text-obsidian-500 group-hover:text-ember dark:group-hover:text-ember-light transition-colors duration-300 mb-4">
                {platform.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-1 text-ink dark:text-[#C8C2B6]">
                {platform.name}
              </h3>
              <p className="text-[12px] text-ink-faint dark:text-obsidian-500 mb-5 font-mono">
                {platform.detail}
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ember text-obsidian font-display text-sm font-semibold group-hover:bg-ember-light transition-colors duration-300 shadow-[0_0_20px_rgba(229,164,17,0.1)] group-hover:shadow-[0_0_30px_rgba(229,164,17,0.2)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </span>
            </a>
          ))}
        </div>

        {/* Build from source */}
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-faint dark:text-obsidian-500 mb-3">
            Prefer to build from source?
          </p>
          <div className="inline-block glass-card rounded-xl px-5 py-3">
            <code className="font-mono text-[13px] text-ink-muted dark:text-[#8A8274]">
              <span className="ember-text">$</span> git clone https://github.com/openkrow/openkrow && make build
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
