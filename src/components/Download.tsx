"use client";

export function Download() {
  return (
    <section id="download" className="border-b border-dashed border-[#cecec9]">
      <div className="grid-background">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4">
              Download
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
              Get OpenKrow
            </p>
            <p className="text-[#475569]">
              Available on macOS, Windows, and Linux. Free forever.
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e9e9e4] max-w-3xl mx-auto">
            {[
              { platform: "macOS", icon: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" },
              { platform: "Windows", icon: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" },
              { platform: "Linux", icon: "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.585.047 1.042-.245 1.282-.645.24-.4.286-.94-.023-1.522-.309-.583-.697-.863-1.017-1.121-.32-.26-.56-.45-.607-.788-.034-.24.04-.46.112-.634.176-.29.355-.492.53-.685.175-.193.358-.373.527-.64.066-.09.148-.18.23-.279.118-.137.235-.279.3-.424.086-.188.07-.36-.023-.521a.78.78 0 00-.16-.18l.023-.028" },
            ].map((item) => (
              <a
                key={item.platform}
                href="https://github.com/openkrow/openkrow/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 text-center hover:bg-[#fafafa] transition-colors group"
              >
                <div className="text-[#475569] group-hover:text-[#fb923c] transition-colors mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="font-semibold text-[#0F172A]">{item.platform}</div>
                <div className="text-xs text-[#94A3B8] mt-1">Download</div>
              </a>
            ))}
          </div>

          {/* Source link */}
          <div className="mt-10 text-center">
            <a
              href="https://github.com/openkrow/openkrow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94A3B8] hover:text-[#fb923c] transition-colors"
            >
              Or build from source on GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
