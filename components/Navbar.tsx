"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-darker/60 backdrop-blur-md border-b border-border-glass py-4 shadow-lg shadow-primary/5"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-900 to-cyan-900 border border-indigo-500/30 group-hover:border-accent/80 transition-colors duration-300 shadow-lg shadow-indigo-500/10">
              <Cpu className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Quantix<span className="text-accent">Node</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white"
                  style={{ color: isActive ? "#ffffff" : "#94a3b8" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-accent/20 border border-indigo-500/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent rounded-full transition-all duration-300 group-hover:opacity-90" />
              <div className="relative px-6 py-2.5 rounded-full bg-bg-darker text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center gap-1.5">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-text-muted hover:text-white hover:bg-white/5 border border-transparent hover:border-border-glass transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-bg-darker/80 backdrop-blur-md z-40 md:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-bg-dark border-l border-border-glass p-8 z-50 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-900 to-cyan-900 border border-indigo-500/30 flex items-center justify-center">
                      <Cpu className="w-4.5 h-4.5 text-accent" />
                    </div>
                    <span className="text-lg font-bold text-white">QuantixNode</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 border border-border-glass"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-primary/30 to-accent/20 border border-accent/20 text-white"
                              : "text-text-muted hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <div className="h-[1px] bg-border-glass w-full" />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-light to-accent text-white py-3.5 rounded-xl font-bold hover:opacity-90 shadow-lg shadow-accent/15 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
