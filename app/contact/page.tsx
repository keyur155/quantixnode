"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Solutions",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const result = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "Unable to submit form right now.");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit form right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-accent shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Let&apos;s Engineer Your <br />
            <span className="gradient-text">Next Breakthrough</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-base sm:text-lg leading-relaxed"
          >
            Submit your infrastructure requirements or system parameters. Our architectural team will review and reply within 12 business hours.
          </motion.p>
        </div>
      </section>

      {/* ================= FORM & INFO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-8 flex flex-col gap-8 h-full justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 to-transparent pointer-events-none" />

              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-white">Direct Channels</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Bypass the online transmission form and reach out directly through traditional nodes or encrypted systems.
                </p>

                <div className="flex flex-col gap-5 mt-4">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover/item:border-accent/40 group-hover/item:bg-white/10 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Secure Email
                      </p>
                      <a
                        href="mailto:hello@quantixnode.com"
                        className="text-sm font-bold text-white hover:text-accent transition-colors"
                      >
                        hello@quantixnode.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover/item:border-accent/40 group-hover/item:bg-white/10 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Headquarters
                      </p>
                      <p className="text-sm font-bold text-white">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Link Grid */}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/5 mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  DEVELOPER NODES
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/quantixnode"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm text-text-muted hover:text-white hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-4.5 h-4.5" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/company/quantixnode"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm text-text-muted hover:text-white hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="w-4.5 h-4.5" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 h-full justify-between"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Thorne"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/60 placeholder:text-zinc-600 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/60 placeholder:text-zinc-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-xs font-bold text-text-muted uppercase">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/60 transition-all [&_option]:bg-bg-darker [&_option]:text-white"
                        >
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="SaaS Development">SaaS Development</option>
                          <option value="Web Applications">Web Applications</option>
                          <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                          <option value="Automation Systems">Automation Systems</option>
                          <option value="UI/UX Engineering">UI/UX Engineering</option>
                          <option value="Other">Other Integration</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-xs font-bold text-text-muted uppercase">
                          Subject (Optional)
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="System Consultation"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/60 placeholder:text-zinc-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase">
                        Project Brief / Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your system workload, deadline parameters, or specialized database objectives..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/60 placeholder:text-zinc-600 resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-4 bg-gradient-to-r from-primary-light to-accent disabled:from-primary/40 disabled:to-accent/30 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-accent/15 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Processing Transmission...
                        </>
                      ) : (
                        <>
                          Transmit Parameters
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    {submitError ? (
                      <p className="text-sm text-red-300 -mt-2">{submitError}</p>
                    ) : null}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-receipt"
                    className="flex flex-col items-center justify-center text-center gap-6 h-full py-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/5">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-sm">
                      <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Secure connection established. Your project parameters have been uploaded successfully. A principal engineer will reply shortly.
                      </p>
                    </div>

                    <div className="w-full max-w-sm rounded-2xl bg-white/2 border border-white/5 p-4 text-left font-mono text-xs text-text-muted flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-1.5 text-white font-semibold mb-1 pb-1 border-b border-white/5">
                        <Cpu className="w-4 h-4 text-accent" /> SYSTEM_TICKET_RECEIPT
                      </div>
                      <p>
                        <span className="text-indigo-400">STATUS:</span> QUEUED_FOR_REVIEW
                      </p>
                      <p>
                        <span className="text-indigo-400">ENGINEER:</span> PRINCIPAL_ALLOCATED
                      </p>
                      <p>
                        <span className="text-indigo-400">EXPECTED:</span> &lt; 12_HOURS
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({
                          name: "",
                          email: "",
                          service: "AI Solutions",
                          subject: "",
                          message: "",
                        });
                        setIsSubmitted(false);
                      }}
                      className="text-xs font-semibold text-accent hover:underline mt-4"
                    >
                      Transmit another ticket
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
