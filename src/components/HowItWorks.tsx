"use client";

const steps = [
  {
    num: "1",
    title: "Download the app",
    description: "One installer for macOS, Windows, or Linux. Under 50MB. No account needed.",
  },
  {
    num: "2",
    title: "Add your API key",
    description: "Paste your OpenAI, Anthropic, or Google key. It stays encrypted on your machine.",
  },
  {
    num: "3",
    title: "Ask Krow anything",
    description: "Type what you need in plain language. Krow reads your files, executes tasks, and delivers results.",
  },
];

export function HowItWorks() {
  return (
    <section id="get-started" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[12px] uppercase tracking-[0.08em] text-[#52525B] mb-4">
            Get started
          </span>
          <h2 className="text-4xl sm:text-[48px] font-extrabold tracking-[-0.02em] text-white mb-4">
            Up and running in <span className="text-[#F97316]">2 minutes</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl p-8 text-center hover:border-[#2A2A2A] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(249,115,22,0.15)] text-[#F97316] font-bold text-sm mb-5">
                {step.num}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
