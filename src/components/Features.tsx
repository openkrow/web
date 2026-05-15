"use client";

const features = [
  {
    title: "Works with your files",
    description: "Reads PDFs, Word docs, spreadsheets, code files. Krow accesses files directly on your machine.",
  },
  {
    title: "Natural language",
    description: "No commands to memorize. Just describe what you need in plain language. Krow figures out the rest.",
  },
  {
    title: "100% private",
    description: "Everything runs locally on your desktop. Your documents and API keys never leave your machine.",
  },
  {
    title: "Bring your own AI",
    description: "Use OpenAI, Anthropic, Google, or any compatible API. Switch providers anytime. No vendor lock-in.",
  },
  {
    title: "Multi-step tasks",
    description: "Krow executes multi-step workflows. Research, analyze, summarize, export — all in one go.",
  },
  {
    title: "Extensible & open",
    description: "MIT licensed. Build plugins, contribute features, audit the code. A tool that grows with its community.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[12px] uppercase tracking-[0.08em] text-[#52525B] mb-4">
            Why OpenKrow
          </span>
          <h2 className="text-4xl sm:text-[48px] font-extrabold tracking-[-0.02em] text-white mb-4">
            Built different. <span className="text-[#F97316]">On purpose.</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto">
            Not another chatbot in a browser. A desktop-native agent that actually gets work done.
          </p>
        </div>

        {/* Feature grid - 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl p-8 hover:border-[#2A2A2A] hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-[18px] font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <span className="text-[#F97316] text-sm hover:opacity-75 transition-opacity cursor-pointer">
                Learn More &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
