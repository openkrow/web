"use client";

const features = [
  {
    title: "Works with Your Files",
    description:
      "Point OpenKrow at PDFs, Word docs, spreadsheets, or code. It reads, understands, and acts on your local files without uploading them anywhere.",
    steps: ["Reading contract_v2.docx", "Analyzing 24 clauses for risk factors", "Found 3 clauses needing attention", "Report saved to ~/Desktop/review.md"],
    link: { label: "Learn More", href: "#download" },
    layout: "text-left",
  },
  {
    title: "Natural Language Interface",
    description:
      "No complex prompts or config files. Just tell OpenKrow what you need in plain English. It figures out the rest — file access, multi-step reasoning, and output formatting.",
    steps: ["Scanning 142 files in ~/projects/webapp", "Found 23 TODO comments across 11 files", "Categorizing by urgency and effort", "todo_list.md created with priority matrix"],
    link: { label: "Learn More", href: "#download" },
    layout: "text-right",
  },
  {
    title: "Bring Your Own AI",
    description:
      "Use OpenAI, Anthropic, Google, or any compatible API. Pick the right model for every task — a thinking model to plan, a fast model to execute, a large-context model for big files.",
    steps: ["claude-4-sonnet → planning, complex tasks", "gpt-4o-mini → quick edits, formatting", "gemini-2.0 → large file analysis"],
    link: { label: "Model Selection", href: "#download" },
    layout: "text-left",
    badges: ["OpenAI", "Anthropic", "Google", "Ollama"],
  },
  {
    title: "100% Private, 100% Local",
    description:
      "Your data never leaves your machine. OpenKrow runs entirely on your desktop — no cloud sync, no telemetry, no accounts. You own everything.",
    steps: ["Runtime: local", "Cloud sync: disabled", "Telemetry: none", "License: MIT"],
    link: { label: "Privacy Details", href: "#download" },
    layout: "text-right",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-dashed border-[#cecec9]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
            Why OpenKrow?
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Built for real work, not demos.
          </p>
        </div>

        {/* Feature rows */}
        <div className="space-y-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Text */}
              <div
                className={`lg:col-span-5 ${
                  feature.layout === "text-right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">
                  {feature.description}
                </p>
                {feature.badges && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 text-xs font-mono border border-dashed border-[#fb923c]/30 text-[#fb923c] rounded-none animate-heartbeat"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={feature.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#fb923c] hover:text-[#f97316] transition-colors"
                >
                  {feature.link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* App window mockup */}
              <div
                className={`lg:col-span-7 ${
                  feature.layout === "text-right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="bg-white border border-[#e9e9e4] rounded-none overflow-hidden shadow-lg">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e9e9e4] bg-[#fafafa]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  {/* Content */}
                  <div className="p-5 space-y-2">
                    {feature.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                        <span className="text-[#28c840] text-xs">&#10003;</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
