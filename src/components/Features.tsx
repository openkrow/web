"use client";

const agents = [
  {
    code: "MKT",
    title: "Marketing Agent",
    description:
      "Writes blog posts, manages social media content, drafts newsletters, plans campaigns, and tracks what's working. Your entire marketing department in one agent.",
    steps: [
      "Drafted 3 blog posts from your product changelog",
      "Scheduled 12 tweets for this week",
      "Generated landing page copy for new feature",
      "Monthly content calendar created",
    ],
    layout: "text-left",
  },
  {
    code: "DEV",
    title: "Development Agent",
    description:
      "Reviews code, writes features, fixes bugs, manages your repo, and generates documentation. Pair programs with you so you ship faster without hiring.",
    steps: [
      "Reviewed 4 pull requests with inline comments",
      "Fixed authentication bug in /api/auth",
      "Generated API docs from codebase",
      "Scaffolded new payment integration module",
    ],
    layout: "text-right",
  },
  {
    code: "LGL",
    title: "Legal Agent",
    description:
      "Drafts terms of service, privacy policies, contractor agreements, and compliance docs. Reviews contracts before you sign. No $500/hr lawyer needed.",
    steps: [
      "Generated Terms of Service for your SaaS",
      "Reviewed vendor contract — flagged 2 risky clauses",
      "Created GDPR-compliant privacy policy",
      "Drafted NDA template for contractors",
    ],
    layout: "text-left",
  },
  {
    code: "FIN",
    title: "Finance Agent",
    description:
      "Tracks expenses, generates invoices, forecasts runway, and prepares financial reports. Keeps your books clean so you can focus on revenue, not spreadsheets.",
    steps: [
      "Categorized 47 transactions from last month",
      "Generated invoice #0042 for client project",
      "12-month runway forecast updated",
      "Monthly P&L report ready for review",
    ],
    layout: "text-right",
  },
  {
    code: "OPS",
    title: "Operations Agent",
    description:
      "Manages your email, schedules meetings, organizes files, handles customer support tickets, and keeps your day running. The chief of staff you can't afford yet.",
    steps: [
      "Triaged 23 emails — 4 need your response",
      "Rescheduled Wednesday meeting to Thursday",
      "Responded to 8 support tickets",
      "Weekly task summary prepared",
    ],
    layout: "text-left",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-dashed border-[#cecec9]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
            Meet Your Team
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            5 agents. 5 departments. 1 app.
          </p>
          <p className="text-[#475569] max-w-xl">
            Every startup needs marketing, engineering, legal, finance, and operations. Now you have all five &mdash; without the payroll.
          </p>
        </div>

        {/* Agent rows */}
        <div className="space-y-20">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Text */}
              <div
                className={`lg:col-span-5 ${
                  agent.layout === "text-right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#fb923c]/10 flex items-center justify-center text-xs font-bold font-mono text-[#fb923c]">
                    {agent.code}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {agent.title}
                  </h3>
                </div>
                <p className="text-[#475569] leading-relaxed mb-4">
                  {agent.description}
                </p>
                <a
                  href="#download"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#fb923c] hover:text-[#f97316] transition-colors"
                >
                  Try it free
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* App window mockup */}
              <div
                className={`lg:col-span-7 ${
                  agent.layout === "text-right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="bg-white border border-[#e9e9e4] rounded-none overflow-hidden shadow-lg">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#e9e9e4] bg-[#fafafa]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">{agent.code} Agent</span>
                  </div>
                  {/* Content */}
                  <div className="p-5 space-y-2.5">
                    {agent.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                        <span className="text-[#28c840] text-xs mt-0.5">&#10003;</span>
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
