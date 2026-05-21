"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-glass bg-bg-darker pt-20 pb-10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-900 to-cyan-900 border border-indigo-500/30 flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5 text-accent" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Quantix<span className="text-accent">Node</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              Accelerating digital transformation with next-generation AI solutions, high-performance web platforms, and automated cloud systems.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/quantixnode"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-border-glass flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/quantixnode"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-border-glass flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@quantixnode.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-border-glass flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2.5 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">QuantixNode</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="text-text-muted hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack Links */}
          <div className="md:col-span-2.5 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Technology</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Next.js
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-white transition-colors flex items-center gap-1 group"
                >
                  React 19
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Tailwind CSS v4
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://framer.com/motion"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Framer Motion
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Inquiries</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="text-text-muted">
                Email:{" "}
                <a href="mailto:contact@quantixnode.com" className="text-accent hover:underline">
                  contact@quantixnode.com
                </a>
              </li>
              <li className="text-text-muted">Domain: quantixnode.com</li>
              <li className="text-text-muted">HQ: San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-[1px] bg-border-glass w-full mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} QuantixNode. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
