"use client";

export function KrowLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="OpenKrow"
      className={className}
    />
  );
}
