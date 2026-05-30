"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Building2, CheckCircle2, Cloud, Monitor, Rocket, Sparkles } from "lucide-react";
import { Hero } from "@/components/PageBlocks";
import { completedProjects } from "@/lib/site-data";

const whoWeServe = [
  {
    title: "Startups",
    icon: Rocket,
    description: "Launch MVPs, validate ideas, and scale products quickly with modern engineering teams.",
    highlights: ["MVP Development", "Product Discovery", "Startup Scaling"],
  },
  {
    title: "Enterprise Teams",
    icon: Building2,
    description: "Secure, scalable, and high-performance systems for enterprise transformation.",
    highlights: ["Enterprise Platforms", "Security & Compliance", "Cloud Modernization"],
  },
  {
    title: "SaaS Platforms",
    icon: Monitor,
    description: "Build subscription-based products, dashboards, and cloud-native software platforms.",
    highlights: ["Multi-Tenant Architecture", "SaaS Engineering", "Platform Scaling"],
  },
  {
    title: "AI-Driven Businesses",
    icon: Brain,
    description: "Develop intelligent systems powered by AI agents, automation, RAG, and machine learning.",
    highlights: ["AI Agents", "RAG Systems", "Workflow Automation"],
  },
];

const whoWeServeMetrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Core Technologies" },
  { value: "AI-First", label: "Engineering Approach" },
  { value: "Global", label: "Remote Delivery" },
];

const capabilities = [
  {
    title: "AI & Automation",
    href: "/services",
    icon: Brain,
    badge: "AI-Native",
    description:
      "Build intelligent systems powered by AI agents, RAG architectures, vector databases, and workflow automation.",
    chips: ["OpenAI", "LangChain", "Vector DB", "RAG", "Automation"],
    outcomes: ["Process Automation", "AI Assistants", "Knowledge Retrieval"],
  },
  {
    title: "Web & Product Engineering",
    href: "/services",
    icon: Monitor,
    badge: "Core Capability",
    description:
      "Develop scalable SaaS products, enterprise platforms, and modern web applications.",
    chips: ["Next.js", "React", "Node.js", "TypeScript"],
    outcomes: ["SaaS Platforms", "Enterprise Apps", "Multi-Tenant Systems"],
  },
  {
    title: "Cloud & DevOps Modernization",
    href: "/services",
    icon: Cloud,
    badge: "Enterprise Ready",
    description:
      "Modernize infrastructure with cloud-native architectures, automation, observability, and reliability engineering.",
    chips: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    outcomes: ["Faster Deployments", "High Availability", "Infrastructure Automation"],
  },
  {
    title: "Industry Solutions",
    href: "/industries",
    icon: Building2,
    badge: "Industry Focused",
    description:
      "Technology solutions tailored to industry-specific challenges, compliance requirements, and growth goals.",
    chips: ["FinTech", "Healthcare", "Retail", "Logistics", "SaaS"],
    outcomes: ["Industry Compliance", "Faster Time-to-Market", "Scalable Growth"],
  },
];

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07 } }),
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow="Premium Technology Consulting"
        title="QuantixNode builds AI-first products, cloud systems, and enterprise-grade digital platforms."
        description="We partner with startups, enterprises, and SaaS companies to ship production-ready systems with measurable business outcomes."
        ctaLabel="Start Your Transformation"
      />

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050814] p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-[130px]" />

        <div className="relative z-10">
          <motion.p variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Who We Serve
          </motion.p>
          <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={1} className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Engineering Solutions for Every Growth Stage
          </motion.h2>
          <motion.p variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={2} className="mt-3 max-w-4xl text-sm leading-6 text-slate-300 md:text-base">
            From ambitious startups to enterprise organizations, we build scalable digital products, cloud-native
            platforms, and AI-powered systems tailored to business goals.
          </motion.p>
        </div>

        <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-5">
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,.25),transparent_35%)]" />
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#040711]">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-cyan-200/70"
                  style={{ left: `${8 + (i * 7) % 86}%`, top: `${10 + (i * 9) % 78}%` }}
                  animate={{ y: [0, -10, 0], opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 2.8 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                />
              ))}
              <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_6px_rgba(34,211,238,0.35)]" />
              <div className="absolute left-1/3 top-1/2 h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_18px_6px_rgba(59,130,246,0.35)]" />
              <div className="absolute right-10 top-14 h-3 w-3 rounded-full bg-indigo-300 shadow-[0_0_18px_6px_rgba(99,102,241,0.35)]" />
              <div className="absolute bottom-12 right-1/4 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_6px_rgba(16,185,129,0.35)]" />
              <div className="absolute left-10 top-12 h-px w-28 bg-gradient-to-r from-cyan-300 to-transparent" />
              <div className="absolute left-[35%] top-[52%] h-px w-24 bg-gradient-to-r from-blue-300 to-transparent" />
              <div className="absolute right-16 top-[18%] h-px w-20 bg-gradient-to-r from-indigo-300 to-transparent" />
              <div className="absolute bottom-14 left-[38%] h-px w-20 bg-gradient-to-r from-emerald-300 to-transparent" />
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {whoWeServe.map((item, idx) => (
              <motion.article
                key={item.title}
                variants={rise}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx + 1}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-xl transition"
              >
                <div className="mb-4 inline-flex rounded-xl border border-cyan-400/25 bg-cyan-500/10 p-2.5 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)] transition group-hover:scale-105">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0.6, y: 0 }}
                      whileHover={{ opacity: 1, y: -1 }}
                      transition={{ duration: 0.2, delay: tagIdx * 0.03 }}
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeServeMetrics.map((metric, idx) => (
            <motion.article
              key={metric.label}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx + 2}
              className="rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] p-4 shadow-[0_0_22px_rgba(34,211,238,0.12)]"
            >
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">{metric.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050814] p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-indigo-500/15 blur-[120px]" />

        <motion.p variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Capabilities
        </motion.p>
        <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={1} className="relative z-10 mt-3 text-3xl font-semibold text-white md:text-4xl">
          Technology & Engineering Expertise
        </motion.h2>
        <motion.p variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={2} className="relative z-10 mt-3 max-w-4xl text-sm leading-6 text-slate-300 md:text-base">
          AI-native, cloud-scale, and product-focused engineering capabilities designed to help businesses innovate,
          scale, and automate.
        </motion.p>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <motion.div key={cap.title} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={idx + 1}>
              <Link
                href={cap.href}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,.18),transparent_38%)]" />
                <div className="pointer-events-none absolute -left-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.2)] transition group-hover:scale-105">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-100">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="relative z-10 mt-4 text-xl font-semibold text-white">{cap.title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-300">{cap.description}</p>

                <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                  {cap.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-xs text-slate-200 transition group-hover:border-cyan-400/35 group-hover:text-white">
                      {chip}
                    </span>
                  ))}
                </div>

                <ul className="relative z-10 mt-4 space-y-1.5">
                  {cap.outcomes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Explore Capability <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <motion.article variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={0} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Delivery Model</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Structured execution from discovery to scale</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>1. Product and architecture discovery workshops</li>
            <li>2. Solution blueprint with technical roadmap</li>
            <li>3. Agile engineering sprints with QA gates</li>
            <li>4. Launch, observability, and optimization cycles</li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Execution Flow</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-cyan-200">
              <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">Discover</span>
              <span>→</span>
              <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">Design</span>
              <span>→</span>
              <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">Build</span>
              <span>→</span>
              <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">Scale</span>
            </div>
            <div className="relative mt-4 h-24 rounded-lg border border-white/10 bg-[#050a14] p-3">
              <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-cyan-300" />
              <div className="absolute left-1/3 top-8 h-2 w-2 rounded-full bg-blue-300" />
              <div className="absolute right-1/3 top-4 h-2 w-2 rounded-full bg-indigo-300" />
              <div className="absolute right-6 bottom-5 h-2 w-2 rounded-full bg-emerald-300" />
              <div className="absolute left-5 top-5 h-px w-24 bg-cyan-400/60" />
              <div className="absolute left-1/3 top-8 h-px w-20 bg-blue-400/60" />
              <div className="absolute right-1/3 top-4 h-px w-16 bg-indigo-400/60" />
            </div>
          </div>
        </motion.article>

        <motion.article variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={1} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Thought Leadership</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Beyond delivery: research and engineering intelligence</h3>
          <p className="mt-3 text-sm text-slate-300">
            QuantixNode combines consulting, implementation, and original research to help teams make confident
            architecture decisions across AI, cloud, and product engineering.
          </p>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Research Coverage</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-200">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">AI Agents</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">RAG Benchmarks</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">SaaS Architecture</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">Cloud Cost</div>
            </div>
          </div>
          <Link href="/insights/research" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            View Research Center <Sparkles className="h-4 w-4" />
          </Link>
        </motion.article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Recent Completed Projects</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Delivery outcomes with measurable business impact</h3>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-cyan-300">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {completedProjects.map((project, idx) => (
            <motion.div key={project.slug} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={idx}>
              <Link href={`/projects/${project.slug}`} className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40">
                <p className="text-xs uppercase tracking-wider text-cyan-300">{project.sector}</p>
                <h4 className="mt-2 text-base font-semibold text-white">{project.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.02] p-2">
                      <p className="text-sm font-semibold text-white">{stat.value}</p>
                      <p className="text-[10px] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
