import { KrowLogo } from "@/components/KrowLogo";

export default function LogoTest() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-16 p-12">
      <h1 className="text-2xl font-bold text-[#0F172A]">OpenKrow Logo</h1>

      {/* Large - for capture */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">256px — Primary</p>
        <div className="bg-white p-8">
          <KrowLogo className="w-64 h-64 text-[#0F172A]" />
        </div>
      </div>

      {/* Dark background variant */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">256px — On Dark</p>
        <div className="bg-[#0F172A] p-8">
          <KrowLogo className="w-64 h-64 text-white" />
        </div>
      </div>

      {/* Medium sizes */}
      <div className="flex items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-mono text-[#94A3B8]">128px</p>
          <KrowLogo className="w-32 h-32 text-[#0F172A]" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-mono text-[#94A3B8]">64px</p>
          <KrowLogo className="w-16 h-16 text-[#0F172A]" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-mono text-[#94A3B8]">32px</p>
          <KrowLogo className="w-8 h-8 text-[#0F172A]" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-mono text-[#94A3B8]">16px</p>
          <KrowLogo className="w-4 h-4 text-[#0F172A]" />
        </div>
      </div>

      {/* With wordmark */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">With Wordmark</p>
        <div className="flex items-center gap-4">
          <KrowLogo className="w-12 h-12 text-[#0F172A]" />
          <span className="text-3xl font-semibold text-[#0F172A]">
            Open<span className="text-[#fb923c]">Krow</span>
          </span>
        </div>
      </div>

      {/* Favicon preview */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">Favicon (dark bg)</p>
        <div className="bg-[#0F172A] w-16 h-16 flex items-center justify-center">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
            <rect x="8" y="8" width="12" height="8" fill="white"/>
            <rect x="8" y="20" width="12" height="8" fill="#fb923c"/>
            <rect x="8" y="32" width="12" height="8" fill="white"/>
            <path d="M20 12H28L36 24L28 36H20" stroke="white" strokeWidth="2"/>
            <path d="M36 24H42" stroke="#fb923c" strokeWidth="3"/>
            <rect x="28" y="20" width="12" height="8" fill="none" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
