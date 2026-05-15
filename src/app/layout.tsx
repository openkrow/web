import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OpenKrow - Your AI Desktop Companion",
  description:
    "Open-source AI agent that lives on your desktop. Helps with office tasks, research, study, and everyday productivity. The open-source Claude Cowork alternative.",
  keywords: ["AI agent", "desktop AI", "open source", "productivity", "Claude Cowork alternative"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "OpenKrow - Your AI Desktop Companion",
    description: "Open-source AI agent that lives on your desktop.",
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
      className={`${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
