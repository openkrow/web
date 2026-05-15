import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OpenKrow - Your AI Desktop Companion",
  description:
    "OpenKrow is a free, open-source AI desktop agent. Draft reports, research topics, summarize documents, or automate tasks — all locally and privately.",
  keywords: ["AI agent", "desktop AI", "open source", "productivity", "Claude Cowork alternative", "AI desktop companion"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "OpenKrow - Your AI Desktop Companion",
    description: "Free, open-source AI desktop agent. Works locally, stays private.",
    url: "https://openkrow.github.io/web/",
    siteName: "OpenKrow",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
