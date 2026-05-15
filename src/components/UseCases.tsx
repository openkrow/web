"use client";

const scenarios = [
  {
    persona: "Office Worker",
    task: "Summarize all emails from the marketing team and draft replies for the urgent ones.",
    result: "All emails categorized, 3 draft replies ready, and a morning brief waiting in your inbox.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    persona: "Researcher",
    task: "Compare the methodology across these 5 papers and create a literature review table.",
    result: "A structured comparison table with key findings, methodology differences, and citation-ready summaries.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    persona: "Developer",
    task: "Review this module, find potential bugs, and suggest improvements with tests.",
    result: "Identified 3 edge cases, refactored 2 functions, and generated unit tests with explanations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[12px] uppercase tracking-[0.08em] text-[#52525B] mb-4">
            Real scenarios
          </span>
          <h2 className="text-4xl sm:text-[48px] font-extrabold tracking-[-0.02em] text-white mb-4">
            Your work. <span className="text-[#F97316]">Accelerated.</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto">
            OpenKrow handles the parts of your job that slow you down, so you can focus on what matters.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((scenario, i) => (
            <div
              key={i}
              className="group bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl p-8 hover:border-[#2A2A2A] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.15)] text-[#F97316] mb-5">
                {scenario.icon}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2">
                {scenario.persona}
              </h3>
              <p className="text-[#A1A1AA] text-sm mb-3 italic">
                &ldquo;{scenario.task}&rdquo;
              </p>
              <p className="text-[#A1A1AA] text-sm mb-4">
                {scenario.result}
              </p>
              <a href="#features" className="text-[#F97316] text-sm hover:opacity-75 transition-opacity">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
