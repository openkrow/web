"use client";

const scenarios = [
  {
    persona: "Office Worker",
    context: "9 AM Monday, 47 unread emails",
    task: "\"Krow, summarize all emails from the marketing team and draft replies for the urgent ones.\"",
    result: "5 minutes later: All emails categorized, 3 draft replies ready, and a morning brief waiting in your inbox.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    persona: "Researcher",
    context: "Deadline in 2 days, 30 papers to review",
    task: "\"Krow, compare the methodology across these 5 papers and create a literature review table.\"",
    result: "A structured comparison table with key findings, methodology differences, and citation-ready summaries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    persona: "Developer",
    context: "Sprint review tomorrow, code needs refactoring",
    task: "\"Krow, review this module, find potential bugs, and suggest improvements with tests.\"",
    result: "Identified 3 edge cases, refactored 2 functions, and generated unit tests &mdash; all with explanations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-parchment-100 dark:bg-obsidian-100 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint dark:text-obsidian-500 mb-4">
            Real scenarios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-4 text-ink dark:text-[#C8C2B6]">
            Your work. <span className="ember-text">Accelerated.</span>
          </h2>
          <p className="text-ink-muted dark:text-[#8A8274] max-w-xl mx-auto text-base leading-relaxed">
            OpenKrow doesn&apos;t replace you &mdash; it handles the parts of your job that slow you down, so you can focus on what actually matters.
          </p>
        </div>

        {/* Scenario cards - stacked, story-driven */}
        <div className="space-y-4">
          {scenarios.map((scenario, i) => (
            <div
              key={i}
              className="group glass-card ember-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-[200px_1fr_1fr] gap-6 md:gap-8 items-start"
            >
              {/* Persona */}
              <div className="flex md:flex-col items-center md:items-start gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ember/[0.08] dark:bg-ember/[0.06] text-ember dark:text-ember-light group-hover:bg-ember/[0.15] transition-colors duration-300">
                  {scenario.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-ink dark:text-[#C8C2B6]">{scenario.persona}</div>
                  <div className="text-[13px] text-ink-faint dark:text-obsidian-500 mt-0.5">{scenario.context}</div>
                </div>
              </div>

              {/* The ask */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint dark:text-obsidian-500 mb-2">
                  The ask
                </div>
                <p className="text-sm leading-relaxed text-ink dark:text-[#C8C2B6] italic">
                  {scenario.task}
                </p>
              </div>

              {/* The result */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-2">
                  The result
                </div>
                <p className="text-sm leading-relaxed text-ink-muted dark:text-[#8A8274]" dangerouslySetInnerHTML={{ __html: scenario.result }}>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
