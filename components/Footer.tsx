"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, Github, Linkedin, Mail, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const expertiseLinks = [
  "Modern Web Platforms",
  "Mobile Applications",
  "AI Automation Systems",
  "Cloud Infrastructure",
  "Startup MVP Engineering",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/quantixnode", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/company/quantixnode", icon: Linkedin },
  { label: "X", href: "https://x.com/quantixnode", icon: Twitter },
  { label: "Email", href: "mailto:hello@quantixnode.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020512]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="pointer-events-none absolute -top-36 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-indigo-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-sky-400/15 blur-[120px]" />

      {Array.from({ length: 8 }).map((_, index) => (
        <motion.span
          key={index}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-300/70"
          style={{
            left: `${8 + index * 12}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-8"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="pointer-events-none absolute -left-10 top-2 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
              <Link href="/" className="group mb-5 inline-flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 6, scale: 1.06 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-indigo-400/25"
                >
                  <BrainCircuit className="h-5 w-5 text-cyan-200" />
                </motion.span>
                <span className="text-2xl font-semibold tracking-tight text-white">
                  Quantix<span className="text-cyan-300">Node</span>
                </span>
              </Link>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-cyan-300/90">
                AI-Native Engineering Studio
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-slate-300">
                Modern software systems engineered for scalable web platforms, mobile experiences, cloud infrastructure, and AI-native products.
              </p>
              <motion.div
                aria-hidden
                className="mt-5 h-px w-32 bg-gradient-to-r from-cyan-300/80 via-indigo-300/80 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-200"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-300 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Expertise</h3>
              <ul className="space-y-3">
                {expertiseLinks.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-500/5 px-3 py-1 text-xs tracking-wide text-cyan-100 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Contact</h3>
              <div className="rounded-2xl border border-indigo-300/20 bg-indigo-500/5 p-4 backdrop-blur-lg">
                <a
                  href="mailto:hello@quantixnode.com"
                  className="inline-block text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
                >
                  hello@quantixnode.com
                </a>
                <p className="mt-2 text-sm text-slate-300">Ahmedabad, Gujarat, India</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  Available globally for startup, SaaS, and enterprise collaborations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.08, y: -2 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 backdrop-blur-md">
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            animate={{ x: ["-40%", "40%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs text-slate-300">(c) 2026 QuantixNode. All rights reserved.</p>
            <p className="text-xs text-slate-400">
              Designed for modern AI-native and cloud-scale digital products.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

