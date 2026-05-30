"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  service: "AI & Automation",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to submit form.");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit form.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050814] p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-7xl">Let us architect your next AI-first platform.</h1>
          <p className="mt-5 text-lg text-slate-300">Share your business goals and technical context. We will respond with a proposed engagement approach.</p>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 text-base font-semibold text-white shadow-[0_0_22px_rgba(34,211,238,0.25)] transition hover:scale-[1.02]"
          >
            Talk to QuantixNode
          </button>
        </div>
      </section>

      <AnimatePresence>
        {showForm ? (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-white">Project Contact Form</h2>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                Close
              </button>
            </div>

            <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Full Name *</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-[#060a15] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-[#060a15] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm text-slate-300">Service Needed *</label>
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-[#060a15] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                >
                  <option>AI & Automation</option>
                  <option>Web & Product Engineering</option>
                  <option>Cloud & DevOps Modernization</option>
                  <option>Industry Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">Subject</label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-[#060a15] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Project Details *</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-[#060a15] px-4 py-3 text-white outline-none focus:border-cyan-400/50"
                />
              </div>

              <div className="md:col-span-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit & Send"}
                </button>
                {success ? <p className="text-sm text-emerald-300">Submitted successfully. We will contact you soon.</p> : null}
                {error ? <p className="text-sm text-red-300">{error}</p> : null}
              </div>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-4xl font-bold text-white">Email</h3>
          <p className="mt-5 text-3xl text-slate-300">hello@quantixnode.com</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-4xl font-bold text-white">Headquarters</h3>
          <ul className="mt-4 space-y-2 text-3xl text-slate-300">
            <li>Ahmedabad, Gujarat, India</li>
            <li>Global delivery model</li>
            <li>Consulting and engineering engagements</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
