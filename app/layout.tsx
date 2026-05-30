import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuantixNode | AI-First Technology Consulting and Engineering",
  description:
    "QuantixNode is a trusted partner for startups, enterprises, SaaS companies, and AI-driven businesses across consulting, engineering, and research.",
  metadataBase: new URL("https://quantixnode.com"),
  keywords: [
    "AI consulting",
    "technology partner",
    "enterprise engineering",
    "Next.js development",
    "cloud architecture",
    "product engineering",
  ],
  openGraph: {
    title: "QuantixNode | AI-First Consulting and Engineering",
    description: "Premium consulting and engineering across AI, cloud, SaaS, and enterprise modernization.",
    url: "https://quantixnode.com",
    siteName: "QuantixNode",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#03060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="relative flex min-h-full max-w-full flex-col overflow-x-hidden bg-bg-darker text-slate-100 selection:bg-accent/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 z-0 grid-overlay" />
        <Navbar />
        <main className="relative z-10 flex w-full max-w-full flex-1 flex-col overflow-x-hidden pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

