"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Cpu, Shield, Zap, Target } from "lucide-react";

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

const values = [
  {
    icon: Cpu,
    title: "AI-First Engineering",
    desc: "We embed cognitive layers directly into critical architectures, optimizing latency and ensuring high-fidelity outputs.",
  },
  {
    icon: Shield,
    title: "Hardened Security",
    desc: "From encrypted databases to strict cloud identity compliance, safety is integrated natively into every layer.",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    desc: "We build websites and backends that scale without degradation, aiming for 99+ Lighthouse performance scores.",
  },
  {
    icon: Target,
    title: "Client-Centric Execution",
    desc: "We maintain transparent milestones, code clarity, and robust support systems to deliver exactly what is promised.",
  },
];

const team = [
  {
    name: "Alex Thorne",
    role: "Co-Founder & Chief Architect",
    bio: "Ex-Vercel and Stripe principal engineer with a passion for high-throughput distributed systems.",
    avatar: "AT",
  },
  {
    name: "Elena Rostova",
    role: "Head of AI Research",
    bio: "Ph.D. in Computer Science specializing in retrieval-augmented models and semantic indexes.",
    avatar: "ER",
  },
  {
    name: "Marcus Vance",
    role: "VP of Product Engineering",
    bio: "12+ years directing secure SaaS integrations, multi-tenant auth layers, and automated cloud systems.",
    avatar: "MV",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-28 pb-20 pt-10">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-accent shadow-lg"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Our Identity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Pioneering the Future of <br />
            <span className="gradient-text">Intelligent Platforms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-base sm:text-lg leading-relaxed"
          >
            QuantixNode was founded by a team of elite software architects and AI researchers. We believe that modern companies deserve more than templated software. We construct custom-crafted, secure, and infinitely scalable digital foundations.
          </motion.p>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col gap-5 sticky top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-accent shadow-lg w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Core Beliefs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Principles That <br />
              <span className="gradient-text">Drive Our Innovation</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Every system we engineer, line of code we compile, and dashboard we deploy adheres strictly to a foundational philosophy.
            </p>
          </div>

          {/* Right Block: Core Values Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col gap-4 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-950 to-bg-darker border border-indigo-500/20 flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM/LEADERSHIP SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 shadow-lg">
            <Users className="w-3.5 h-3.5" /> Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            The Experts Behind <span className="gradient-text">QuantixNode</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            Meet the senior leadership guiding our technical direction and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col items-center text-center gap-6 group relative"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-900 to-cyan-900 border-2 border-indigo-500/30 flex items-center justify-center text-2xl font-extrabold text-white group-hover:border-accent group-hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/10">
                {member.avatar}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/5 px-3 py-0.5 rounded-full border border-cyan-400/10">
                  {member.role}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
