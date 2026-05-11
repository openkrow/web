"use client";

const steps = [
  {
    step: "01",
    title: "Download & Install",
    description: "Grab the installer for your OS. OpenKrow runs natively on macOS, Windows, and Linux.",
  },
  {
    step: "02",
    title: "Connect Your AI Provider",
    description: "Bring your own API key from OpenAI, Anthropic, or any compatible provider. Your keys stay local.",
  },
  {
    step: "03",
    title: "Start Working Together",
    description: "Ask Krow to help with tasks using natural language. It reads files, writes documents, browses the web, and more.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-light-surface-2 dark:bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get started in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-light-text-muted dark:text-dark-text-muted text-lg">
            No complex setup. No cloud accounts. Just download and go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+60px)] w-[calc(100%-120px)] h-px bg-gradient-to-r from-primary/40 to-accent/40" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
