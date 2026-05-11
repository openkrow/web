"use client";

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface overflow-hidden p-8 sm:p-12 md:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Built in the open,{" "}
                <span className="gradient-text">for everyone</span>
              </h2>
              <p className="text-light-text-muted dark:text-dark-text-muted text-lg leading-relaxed mb-6">
                OpenKrow is 100% open source under the MIT license. We believe AI tools should be transparent, auditable, and community-driven. No vendor lock-in, no hidden agendas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/openkrow/openkrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Repository
                </a>
                <a
                  href="https://github.com/openkrow/openkrow/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-light-border dark:border-dark-border font-semibold text-sm hover:bg-light-surface-2 dark:hover:bg-dark-surface-2 transition-colors"
                >
                  Report an Issue
                </a>
              </div>
            </div>

            {/* Stats / highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "License", value: "MIT" },
                { label: "Platforms", value: "3" },
                { label: "Privacy", value: "Local" },
                { label: "Cost", value: "Free" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface-2 dark:bg-dark-surface-2 text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-light-text-muted dark:text-dark-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
