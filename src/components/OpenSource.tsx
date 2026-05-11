"use client";

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative glass-card rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-ember/40 to-transparent" />
          <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-ember/40 to-transparent" />
          <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-ember/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-20 w-px bg-gradient-to-t from-ember/40 to-transparent" />

          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint dark:text-obsidian-500 mb-6">
                Trust & Transparency
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6 text-ink dark:text-[#C8C2B6]">
                You can read
                <br />
                <span className="ember-text">every line of code.</span>
              </h2>

              <p className="text-ink-muted dark:text-[#8A8274] text-base leading-relaxed mb-4">
                OpenKrow is 100% open source under the MIT license. Every feature, every data flow, every API call &mdash; fully auditable. When we say your data stays private, you don&apos;t have to take our word for it.
              </p>

              <p className="text-ink-muted dark:text-[#8A8274] text-base leading-relaxed mb-8">
                We believe AI tools should be built by communities, not locked behind paywalls. Join hundreds of contributors making AI accessible to everyone.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/openkrow/openkrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-ink dark:bg-[#C8C2B6] text-parchment dark:text-obsidian font-display text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
                <a
                  href="https://github.com/openkrow/openkrow/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ghost-border-light dark:border-ghost-border text-sm font-medium text-ink-muted dark:text-obsidian-500 hover:text-ink dark:hover:text-[#C8C2B6] hover:border-ember/30 transition-all duration-300"
                >
                  Contribute
                </a>
              </div>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "MIT", label: "License", detail: "Use it however you want" },
                { value: "3", label: "Platforms", detail: "macOS, Windows, Linux" },
                { value: "Local", label: "Data storage", detail: "Nothing leaves your machine" },
                { value: "$0", label: "Price", detail: "Free forever, no catch" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-ghost-border-light dark:border-ghost-border bg-parchment/40 dark:bg-obsidian/40 text-center group hover:border-ember/20 transition-colors duration-300"
                >
                  <div className="font-display text-2xl font-bold ember-text mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[13px] font-medium text-ink dark:text-[#C8C2B6] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-ink-faint dark:text-obsidian-500">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
