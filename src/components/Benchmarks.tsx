"use client";

const comparisons = [
  { task: "Marketing", without: "10 hrs/week", with: "1 hr/week" },
  { task: "Legal docs", without: "$2,000+", with: "$0" },
  { task: "Bookkeeping", without: "5 hrs/week", with: "30 min" },
  { task: "Dev support", without: "Constant context-switching", with: "Async agent" },
  { task: "Email & ops", without: "3 hrs/day", with: "15 min review" },
];

export function Benchmarks() {
  return (
    <section className="border-b border-dashed border-[#cecec9]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
            Before & After
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            What changes when you have a team
          </p>
          <p className="text-[#475569] max-w-lg mx-auto">
            Solo founders spend 70% of their time on work that isn&apos;t the product. OpenKrow gives that time back.
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-px bg-[#e9e9e4] mb-px">
            <div className="bg-white px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#94A3B8]">Task</div>
            <div className="bg-white px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#94A3B8] text-center">Solo</div>
            <div className="bg-white px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#fb923c] text-center">With OpenKrow</div>
          </div>
          {/* Rows */}
          <div className="grid grid-cols-1 gap-px bg-[#e9e9e4]">
            {comparisons.map((row) => (
              <div key={row.task} className="grid grid-cols-3 gap-px">
                <div className="bg-white px-5 py-4 text-sm font-medium text-[#0F172A]">{row.task}</div>
                <div className="bg-white px-5 py-4 text-sm text-[#94A3B8] text-center line-through decoration-[#e9e9e4]">{row.without}</div>
                <div className="bg-white px-5 py-4 text-sm font-medium text-[#0F172A] text-center">{row.with}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stat */}
        <div className="mt-12 text-center">
          <p className="text-4xl font-bold text-[#0F172A]">25+ hrs<span className="text-[#fb923c]">/week</span></p>
          <p className="text-sm text-[#475569] mt-2">saved on average — time you can spend building your product</p>
        </div>
      </div>
    </section>
  );
}
