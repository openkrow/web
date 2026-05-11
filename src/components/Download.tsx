"use client";

const platforms = [
  {
    name: "macOS",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    versions: "macOS 12+",
    architectures: "Apple Silicon & Intel",
    href: "https://github.com/openkrow/openkrow/releases",
  },
  {
    name: "Windows",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    versions: "Windows 10+",
    architectures: "x64 & ARM64",
    href: "https://github.com/openkrow/openkrow/releases",
  },
  {
    name: "Linux",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.723-.467 2.395-1.07.672-.6 1.225-1.23 1.93-1.536.663-.284 1.156-.934 1.35-1.467.196-.533.126-1-.036-1.267a.38.38 0 00-.127-.146c.135-.842-.07-1.482-.33-2.108l-.006-.011c-.39-.936-1.35-2.165-2.103-3.534-.117-.199-.24-.467-.36-.867-.12-.4-.246-.88-.35-1.467-.2-1.2-.22-2.567.316-3.734.285-.618.5-1.244.672-1.913.172-.668.26-1.39.24-2.186-.02-.825-.09-1.58-.243-2.333-.154-.758-.347-1.477-.686-2.093C13.89.36 13.196.054 12.504 0zm-.218 1.106c.577.013 1.03.224 1.39.766.272.398.455 1.087.615 1.818.161.73.22 1.504.24 2.222.02.72-.05 1.372-.21 1.975-.16.603-.35 1.158-.61 1.72-.65 1.394-.68 2.968-.46 4.33.112.69.24 1.2.37 1.635.13.434.268.74.405.97.756 1.377 1.734 2.633 2.083 3.467.349.833.434 1.33.351 1.927-.085.594-.33 1.153-.728 1.7-.083.117-.16.234-.244.35-.07.1-.17.175-.288.176a.4.4 0 01-.18-.034c.06-.147.093-.317.09-.478-.003-.2-.072-.4-.19-.586a1.22 1.22 0 00-.497-.42c-.36-.166-.786-.23-1.204-.27-.42-.04-.834-.062-1.156-.145-.32-.082-.527-.222-.606-.498a.46.46 0 01-.014-.168c.008-.334.174-.616.442-.828.268-.213.615-.37.975-.5.36-.13.734-.233 1.047-.385.312-.152.55-.367.588-.7.025-.257-.06-.48-.24-.66a2.6 2.6 0 00-.62-.457c-.454-.267-.98-.435-1.468-.553a7.33 7.33 0 00-1.524-.195c-1.04-.037-1.93.188-2.656.607-.728.42-1.27.998-1.646 1.655a7.478 7.478 0 00-.765 1.858 11.67 11.67 0 00-.353 2.2c-.027.7.015 1.41.152 2.073.134.664.368 1.28.746 1.778.058.077.12.148.19.213a.88.88 0 01-.287.198 2.98 2.98 0 01-.487.158c-.346.082-.764.088-1.24-.012-.476-.1-.942-.36-1.262-.734-.32-.374-.46-.827-.377-1.294.09-.467.328-.85.56-1.229l.006-.007c.174-.28.312-.498.4-.752.09-.254.103-.504.03-.78-.094-.37-.324-.606-.553-.809a6.04 6.04 0 00-.61-.482c-.204-.153-.322-.302-.358-.462a.95.95 0 01.02-.458c.053-.2.162-.382.29-.532.255-.302.592-.51.85-.684.258-.175.437-.32.48-.506.028-.115.006-.22-.048-.347-.054-.128-.136-.264-.226-.395-.18-.263-.384-.494-.475-.74-.07-.19-.07-.4.073-.653.07-.12.18-.2.32-.24.14-.042.32-.05.52-.028.404.043.854.202 1.16.405a1.86 1.86 0 01.312.262c.113.124.2.224.32.27.12.047.24.027.4-.044a4.28 4.28 0 00.528-.303c.8-.5 1.398-1.18 1.74-1.908.342-.728.464-1.5.462-2.162v-.014l.002-.053c-.01-.282-.013-.53-.005-.75.018-.457.067-.74.132-.968.085-.3.196-.456.328-.553.13-.097.303-.14.512-.14z" />
      </svg>
    ),
    versions: "Ubuntu 20.04+, Fedora 36+",
    architectures: "x64 & ARM64",
    href: "https://github.com/openkrow/openkrow/releases",
  },
];

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-28 bg-light-surface-2 dark:bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Download{" "}
            <span className="gradient-text">OpenKrow</span>
          </h2>
          <p className="mx-auto max-w-2xl text-light-text-muted dark:text-dark-text-muted text-lg">
            Available for all major platforms. Free and open source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-bg hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-light-text-muted dark:text-dark-text-muted group-hover:text-primary transition-colors mb-4">
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-sm text-light-text-muted dark:text-dark-text-muted mb-1">{platform.versions}</p>
              <p className="text-xs text-light-text-muted dark:text-dark-text-muted mb-6">{platform.architectures}</p>
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </span>
            </a>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-light-text-muted dark:text-dark-text-muted">
          Or build from source:{" "}
          <code className="px-2 py-1 rounded-md bg-light-surface dark:bg-dark-surface-2 font-mono text-xs">
            git clone https://github.com/openkrow/openkrow && cd openkrow && make build
          </code>
        </p>
      </div>
    </section>
  );
}
