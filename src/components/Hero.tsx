"use client";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Open Source &middot; Free Forever
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Your AI Desktop
          <br />
          <span className="gradient-text">Companion</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-light-text-muted dark:text-dark-text-muted leading-relaxed mb-10">
          OpenKrow is an open-source AI agent that lives on your desktop. It helps with office tasks, research, study, and everyday productivity.{" "}
          <span className="text-light-text dark:text-dark-text font-medium">
            The open-source alternative to Claude Cowork.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download for Free
          </a>
          <a
            href="https://github.com/openkrow/openkrow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-light-border dark:border-dark-border font-semibold text-base hover:bg-light-surface-2 dark:hover:bg-dark-surface-2 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="glow rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-light-border dark:border-dark-border bg-light-surface-2 dark:bg-dark-surface-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-light-text-muted dark:text-dark-text-muted ml-2">OpenKrow</span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono text-sm leading-7 text-left">
              <div className="text-light-text-muted dark:text-dark-text-muted">
                <span className="text-primary">krow</span>
                <span className="text-accent"> &gt;</span> Summarize the Q3 sales report and create a presentation
              </div>
              <div className="mt-3 text-light-text dark:text-dark-text">
                <span className="text-green-400">&#10003;</span> Reading Q3_Sales_Report.xlsx...
              </div>
              <div className="text-light-text dark:text-dark-text">
                <span className="text-green-400">&#10003;</span> Analyzing revenue trends across 4 regions...
              </div>
              <div className="text-light-text dark:text-dark-text">
                <span className="text-green-400">&#10003;</span> Generating executive summary with key insights...
              </div>
              <div className="text-light-text dark:text-dark-text">
                <span className="text-green-400">&#10003;</span> Creating presentation with 12 slides...
              </div>
              <div className="mt-3 text-primary">
                Done! Presentation saved to ~/Documents/Q3_Summary.pptx
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
