"use client";

import { KrowLogo } from "@/components/KrowLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Download", href: "#download" },
    { label: "Get Started", href: "#get-started" },
  ],
  Resources: [
    { label: "Documentation", href: "https://github.com/openkrow/openkrow/wiki" },
    { label: "Releases", href: "https://github.com/openkrow/openkrow/releases" },
    { label: "Changelog", href: "https://github.com/openkrow/openkrow/blob/main/CHANGELOG.md" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/openkrow/openkrow" },
    { label: "Issues", href: "https://github.com/openkrow/openkrow/issues" },
    { label: "Discussions", href: "https://github.com/openkrow/openkrow/discussions" },
    { label: "MIT License", href: "https://github.com/openkrow/openkrow/blob/main/LICENSE" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <KrowLogo className="h-6 w-6" />
              <span className="text-base font-bold text-white">
                Open<span className="text-[#F97316]">Krow</span>
              </span>
            </a>
            <p className="text-sm text-[#52525B] leading-relaxed">
              Open-source AI agent that lives on your desktop. Free forever.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#52525B] hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E]">
          <p className="text-[12px] text-[#52525B]">
            &copy; {new Date().getFullYear()} OpenKrow Contributors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
