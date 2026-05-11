"use client";

const steps = [
  {
    num: "1",
    title: "Download the app",
    description: "One installer for macOS, Windows, or Linux. Under 50MB. No account needed.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Add your API key",
    description: "Paste your OpenAI, Anthropic, or Google key. It stays encrypted on your machine &mdash; never sent anywhere.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Ask Krow anything",
    description: "Type what you need in plain language. Krow reads your files, executes tasks, and delivers results.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="get-started" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-parchment-100 dark:bg-obsidian-100 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint dark:text-obsidian-500 mb-4">
            Get started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-4 text-ink dark:text-[#C8C2B6]">
            Up and running in <span className="ember-text">2 minutes</span>
          </h2>
        </div>

        {/* Steps - clean horizontal */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-ember/20 via-ember/30 to-ember/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full border border-ghost-border-light dark:border-ghost-border group-hover:border-ember/30 transition-colors duration-500" />
                  <div className="absolute inset-1.5 rounded-full bg-parchment dark:bg-obsidian group-hover:bg-ember/[0.05] transition-colors duration-500 flex items-center justify-center">
                    <span className="text-ember dark:text-ember-light">{step.icon}</span>
                  </div>
                </div>

                <div className="font-mono text-[11px] tracking-[0.2em] text-ink-faint dark:text-obsidian-500 mb-2">
                  STEP {step.num}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-ink dark:text-[#C8C2B6]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted dark:text-[#8A8274] max-w-xs mx-auto" dangerouslySetInnerHTML={{ __html: step.description }}>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
