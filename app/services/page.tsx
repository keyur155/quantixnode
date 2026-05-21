"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Monitor,
  Cloud,
  Zap,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const detailedServices = [
  {
    icon: Brain,
    title: "AI Solutions",
    tagline: "Cognitive Layer Engineering",
    description: "We deploy custom generative AI pipelines integrated into production workflows. We specialize in reducing inference latency and maximizing generation accuracy.",
    features: [
      "Custom LLM fine-tuning & integration",
      "Retrieval-Augmented Generation (RAG) indices",
      "Smart autonomous AI agents",
      "Semantic vector search database setup",
    ],
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    tagline: "Scalable Multi-Tenant Platforms",
    description: "We build modern software-as-a-service dashboards that scale flawlessly under heavy user concurrency and high transactions.",
    features: [
      "Secure multi-tenant database partitioning",
      "Stripe recurring billing & seat management",
      "OAuth, SSO, and hardware MFA systems",
      "Real-time WebSocket notifications & syncing",
    ],
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Monitor,
    title: "Web Applications",
    tagline: "Peak Performance Frontend Suites",
    description: "Harnessing modern systems like Next.js 15+ to construct lightning-fast web suites with exceptional SEO indexing capabilities.",
    features: [
      "Next.js App Router hybrid architectures",
      "Core Web Vitals LCP optimized to <1.5s",
      "Semantic HTML & rich JSON-LD structure",
      "Progressive Web Apps (PWA) with offline states",
    ],
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Secure & Resilient Server Operations",
    description: "We automate high-availability cluster deployments utilizing zero-trust network policies and automated infrastructure-as-code scripts.",
    features: [
      "Kubernetes & Docker cluster orchestration",
      "Terraform & CloudFormation scripting",
      "Serverless functions & edge deployment modules",
      "24/7 automated uptime & anomaly monitoring",
    ],
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    tagline: "Frictionless Workflow Optimization",
    description: "We design specialized scripts, webhooks, and daemon workers to automate manual business processes and data syncing pipelines.",
    features: [
      "Robotic Process Automation (RPA) integrations",
      "Webhooks & custom API connectors",
      "Autonomous backup & database migrations",
      "CRON & task queue structures",
    ],
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Sparkles,
    title: "UI/UX Engineering",
    tagline: "Vibrant & Captivating Micro-Interactions",
    description: "Designing interface visuals that delight users instantly. We build state-of-the-art interactive layouts complete with fluid motion styles.",
    features: [
      "Fluid scroll-reveals & spring mechanics",
      "Consistent responsive grid designs",
      "Harmonious custom-tailored dark palettes",
      "Strict WCAG 2.1 accessibility adherence",
    ],
    glow: "rgba(99, 102, 241, 0.15)",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-28 pb-20 pt-10">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-accent shadow-lg"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Capability Index</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Elite Solutions Built to <br />
            <span className="gradient-text">Dominate Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-base sm:text-lg leading-relaxed"
          >
            From low-latency database architectures to high-fidelity AI agents, we construct the robust core technology systems that propel digital enterprise.
          </motion.p>
        </div>
      </section>

      {/* ================= DETAILED SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailedServices.map((svc, idx) => (
            <motion.div
              key={svc.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 md:p-10 flex flex-col gap-6 relative group h-full"
            >
              {/* Soft Ambient Radial Light */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${svc.glow}, transparent 50%)`,
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-950 to-bg-darker border border-indigo-500/20 flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:scale-105 transition-all duration-300">
                  <svc.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/5 px-3 py-1 rounded-full border border-cyan-400/10 uppercase tracking-widest">
                  {svc.tagline}
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <h2 className="text-2xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">
                  {svc.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Bullet Features with Checks */}
              <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-6 border-t border-white/5">
                {svc.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-text-muted hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ARCHITECTURE CTAS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="glass-panel rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center gap-6 border border-indigo-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Need a Specialized Tech Integration?
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed">
            Our principal engineering consultants are ready to diagnose, review, and architect custom structures fitted specifically to your operations.
          </p>

          <Link
            href="/contact"
            className="px-8 py-3.5 bg-gradient-to-r from-primary-light to-accent text-white font-bold rounded-full hover:opacity-90 shadow-lg shadow-accent/15 flex items-center justify-center gap-2 group transition-all"
          >
            Book Architecture Briefing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
