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
  title: "OpenKrow — 5 AI Agents for Solo Founders",
  description:
    "The all-in-one AI team for 1-person startups. Marketing, Dev, Legal, Finance, and Operations agents — all in one desktop app. Free and open source.",
  keywords: ["AI agent", "solo founder", "1-person startup", "open source", "solopreneur", "AI team", "startup tools", "indie hacker"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "OpenKrow — 5 AI Agents for Solo Founders",
    description: "Stop doing 5 jobs at once. OpenKrow gives solo founders an AI marketing, dev, legal, finance, and ops team — in one free desktop app.",
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
