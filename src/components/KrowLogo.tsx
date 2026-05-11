"use client";

import { useTheme } from "@/components/ThemeProvider";

export function KrowLogo({ className = "h-8 w-8" }: { className?: string }) {
  const { theme } = useTheme();
  const fill = theme === "dark" ? "#E2E8F0" : "#1E293B";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crow silhouette */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="url(#logo-gradient)"
        opacity="0.1"
      />
      <path
        d="M20 44L20 20L26 20L26 30L36 20L44 20L32 32L44 44L36 44L26 34L26 44Z"
        fill={fill}
      />
      <path
        d="M44 18C44 18 48 14 52 16C50 20 46 22 44 22V18Z"
        fill="url(#logo-gradient)"
      />
      <circle cx="48" cy="16" r="1.5" fill={fill} />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#6C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
