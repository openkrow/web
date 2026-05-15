"use client";

const benchmarks = [
  { name: "Generic Chatbots", score: 35, color: "#AAA" },
  { name: "Browser Extensions", score: 48, color: "#AAA" },
  { name: "Cloud AI Agents", score: 62, color: "#AAA" },
  { name: "OpenKrow", score: 89, color: "#fb923c" },
];

export function Benchmarks() {
  return (
    <section className="border-b border-dashed border-[#cecec9]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
            Benchmarks
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            Built with Relentless Testing
          </p>
          <p className="text-[#475569] max-w-lg mx-auto">
            Each release runs through hundreds of evaluations across real-world tasks before it ships.
          </p>
        </div>

        {/* Bar chart */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-end justify-center gap-6 h-64 mb-8">
            {benchmarks.map((item) => (
              <div key={item.name} className="flex flex-col items-center flex-1">
                <span className="text-sm font-bold mb-2" style={{ color: item.color }}>
                  {item.score}%
                </span>
                <div
                  className="w-full rounded-none"
                  style={{
                    height: `${item.score * 2.2}px`,
                    backgroundColor: item.color,
                  }}
                />
                <span className="text-xs font-mono text-[#475569] mt-3 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
            Task Completion Rate (%)
          </p>
        </div>
      </div>
    </section>
  );
}
