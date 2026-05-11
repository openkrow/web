"use client";

import { KrowLogo } from "@/components/KrowLogo";

export function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-dark-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <KrowLogo className="h-6 w-6" />
            <span className="text-lg font-bold tracking-tight">
              Open<span className="gradient-text">Krow</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-light-text-muted dark:text-dark-text-muted">
            <a href="https://github.com/openkrow/openkrow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://github.com/openkrow/openkrow/releases" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Releases
            </a>
            <a href="https://github.com/openkrow/openkrow/issues" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Issues
            </a>
            <a href="https://github.com/openkrow/openkrow/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              MIT License
            </a>
          </div>

          <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
            &copy; {new Date().getFullYear()} OpenKrow. Open source, always.
          </p>
        </div>
      </div>
    </footer>
  );
}
