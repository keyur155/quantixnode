import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantixNode | Intelligent Digital Experiences & AI Solutions",
  description: "QuantixNode builds premium AI-powered software, scalable SaaS platforms, automation systems, and state-of-the-art developer-centric cloud solutions.",
  metadataBase: new URL("https://quantixnode.com"),
  keywords: [
    "QuantixNode",
    "Futuristic AI Startup",
    "SaaS Development",
    "AI Automation Systems",
    "Cloud Infrastructure",
    "Next.js Developer Agency",
    "Web Application Engineering",
  ],
  authors: [{ name: "QuantixNode Team", url: "https://quantixnode.com" }],
  openGraph: {
    title: "QuantixNode | Building Intelligent Digital Experiences",
    description: "AI-powered software, scalable web platforms, automation systems, and modern cloud solutions.",
    url: "https://quantixnode.com",
    siteName: "QuantixNode",
    images: [
      {
        url: "/og-image.png", // We will mock this or provide a beautiful visual template
        width: 1200,
        height: 630,
        alt: "QuantixNode AI Startup Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantixNode | Building Intelligent Digital Experiences",
    description: "AI-powered software, scalable web platforms, automation systems, and modern cloud solutions.",
    creator: "@quantixnode",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg-darker text-slate-100 selection:bg-accent/30 selection:text-white relative">
        {/* Core Tech Mesh Grid Overlay */}
        <div className="fixed inset-0 grid-overlay z-0 pointer-events-none" />

        {/* Dynamic Glow Shapes (Pure CSS Glows to optimize LCP performance) */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-glow z-0 pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-glow z-0 pointer-events-none" style={{ animationDelay: "-3s" }} />
        <div className="fixed top-[40%] right-[15%] w-[350px] h-[350px] bg-indigo-900/15 rounded-full blur-[90px] animate-pulse-slow z-0 pointer-events-none" />

        {/* Global sticky Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col relative z-10 pt-[88px]">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
