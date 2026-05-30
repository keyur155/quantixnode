"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/images/logo.png";
import {
  companyPages,
  industries,
  insightsMenu,
  primaryNav,
  serviceCategories,
} from "@/lib/site-data";

const mega = {
  Services: (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {serviceCategories.map((category) => (
        <div key={category.slug}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">{category.title}</p>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="text-sm text-slate-300 transition hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
  Industries: (
    <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
      {industries.map((item) => (
        <Link key={item.slug} href={`/industries/${item.slug}`} className="text-sm text-slate-300 transition hover:text-white">
          {item.name}
        </Link>
      ))}
    </div>
  ),
  Insights: (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {insightsMenu.map((item) => (
        <Link key={item.slug} href={item.slug === "research" ? "/insights/research" : item.slug === "engineering-blog" ? "/insights/engineering-blog" : item.slug === "case-studies" ? "/insights/case-studies" : `/insights/${item.slug}`} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white">
          {item.name}
        </Link>
      ))}
    </div>
  ),
  Company: (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {companyPages.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
          {item.name}
        </Link>
      ))}
    </div>
  ),
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03060f]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src={logo} alt="QuantixNode logo" className="h-12 w-auto" priority />
          {/* <span className="text-xl font-semibold tracking-tight text-white">
            Quantix<span className="text-cyan-300">Node</span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const hasMega = ["Services", "Industries", "Insights", "Company"].includes(item.label);
            return (
              <div
                key={item.href}
                onMouseEnter={() => hasMega && setOpenMega(item.label)}
                onMouseLeave={() => hasMega && setOpenMega(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition ${pathname === item.href ? "text-white" : "text-slate-300 hover:text-white"}`}
                >
                  {item.label}
                  {hasMega ? <ChevronDown className="h-4 w-4" /> : null}
                </Link>

                <AnimatePresence>
                  {openMega === item.label && hasMega ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 top-12 w-[min(92vw,960px)] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#050915]/90 p-6 shadow-2xl"
                    >
                      {mega[item.label as keyof typeof mega]}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white">
            Start a Project
          </Link>
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="lg:hidden">
          {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-white/10 bg-[#03060f] px-6 py-4 lg:hidden">
            <div className="space-y-3">
              {primaryNav.map((item) => {
                const hasMega = ["Services", "Industries", "Insights", "Company"].includes(item.label);
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => {
                        if (hasMega) setOpenMobileMega((v) => (v === item.label ? null : item.label));
                        else setMobileOpen(false);
                      }}
                      className="flex w-full items-center justify-between py-2 text-left text-white"
                    >
                      {hasMega ? item.label : <Link href={item.href}>{item.label}</Link>}
                      {hasMega ? <ChevronDown className="h-4 w-4" /> : null}
                    </button>
                    {hasMega && openMobileMega === item.label ? <div className="rounded-xl border border-white/10 bg-white/5 p-3">{mega[item.label as keyof typeof mega]}</div> : null}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

