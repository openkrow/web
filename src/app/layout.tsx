import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenKrow - Your AI Desktop Companion",
  description:
    "Open-source AI agent that lives on your desktop. Helps with office tasks, research, study, and everyday productivity. The open-source Claude Cowork alternative.",
  keywords: ["AI agent", "desktop AI", "open source", "productivity", "Claude Cowork alternative"],
  openGraph: {
    title: "OpenKrow - Your AI Desktop Companion",
    description: "Open-source AI agent that lives on your desktop.",
    url: "https://openkrow.github.io/openkrow/",
    siteName: "OpenKrow",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
