"use client";

// ThemeProvider is no longer needed - dark mode only
// Kept as a passthrough for compatibility
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useTheme() {
  return { theme: "dark" as const, toggleTheme: () => {} };
}
