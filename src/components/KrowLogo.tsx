"use client";

export function KrowLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric crow eye */}
      <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.06" />
      <path
        d="M14 34V14h5v8.5l10-8.5h6.5L26 23l10 11h-6.5l-10-8.5V34z"
        fill="currentColor"
      />
      {/* Crow's eye - amber dot */}
      <circle cx="37" cy="13" r="3" fill="#E5A411" />
      <circle cx="37" cy="13" r="5" fill="#E5A411" fillOpacity="0.2" />
    </svg>
  );
}
