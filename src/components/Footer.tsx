"use client";

import { KrowLogo } from "@/components/KrowLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-ghost-border-light dark:border-ghost-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <KrowLogo className="h-5 w-5 text-ink dark:text-[#C8C2B6] group-hover:text-ember transition-colors duration-300" />
            <span className="font-display text-sm font-bold tracking-tight text-ink dark:text-[#C8C2B6]">
              Open<span className="ember-text">Krow</span>
            </span>
          </a>

          <div className="flex items-center gap-5 sm:gap-6">
            {[
              { label: "GitHub", href: "https://github.com/openkrow/openkrow" },
              { label: "Releases", href: "https://github.com/openkrow/openkrow/releases" },
              { label: "Issues", href: "https://github.com/openkrow/openkrow/issues" },
              { label: "MIT License", href: "https://github.com/openkrow/openkrow/blob/main/LICENSE" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-ink-faint dark:text-obsidian-500 hover:text-ember dark:hover:text-ember-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[12px] text-ink-faint dark:text-obsidian-500">
            &copy; {new Date().getFullYear()} OpenKrow Contributors
          </p>
        </div>
      </div>
    </footer>
  );
}
