"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Database,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle,
  Cpu,
  Monitor,
  Flame,
  Globe,
  ExternalLink,
  ChevronRight,
  BarChart,
} from "lucide-react";

// Fade-in animation variants for scroll-reveal
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Tech Stack Data
const techStack = [
  { name: "Next.js", icon: Cpu, color: "from-white to-gray-400" },
  { name: "React", icon: Globe, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", icon: Terminal, color: "from-blue-500 to-indigo-600" },
  { name: "Node.js", icon: Database, color: "from-green-400 to-emerald-600" },
  { name: "MongoDB", icon: Layers, color: "from-emerald-500 to-green-600" },
  { name: "Firebase", icon: Flame, color: "from-amber-400 to-orange-500" },
  { name: "Docker", icon: Cloud, color: "from-cyan-500 to-blue-600" },
  { name: "AWS", icon: Database, color: "from-orange-400 to-yellow-600" },
];

// Services Data
const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom Large Language Model (LLM) fine-tuning, retrieval-augmented generation (RAG), and smart agentic systems.",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Multi-tenant, highly scalable software-as-a-service platforms integrated with stripe, auth, and real-time streams.",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Ultra-fast Next.js web applications designed for maximum performance, seamless transitions, and flawless responsiveness.",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Hardened AWS/GCP deployments, container orchestration, Kubernetes, CI/CD automated pipelines, and edge compute.",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Robotic process automation, custom workflow integration, and database operations automated with secure LLMs.",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: Sparkles,
    title: "UI/UX Engineering",
    description: "World-class designs boasting custom layouts, interactive widgets, responsive flows, and smooth Framer Motion micro-effects.",
    glow: "rgba(99, 102, 241, 0.15)",
  },
];

// Featured Projects Data
const projects = [
  {
    title: "Aetherial AI Platform",
    category: "AI & LLM Ops",
    description: "A centralized dashboard for enterprise-grade generative AI orchestration, multi-model evaluation, and custom knowledge base ingestion.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Pinecone"],
    gradient: "from-indigo-600/20 via-purple-600/10 to-transparent",
    borderGlow: "group-hover:border-indigo-500/50",
    glowColor: "rgba(99, 102, 241, 0.2)",
    icon: Brain,
  },
  {
    title: "Nova Dashboard Suite",
    category: "Fintech SaaS",
    description: "High-throughput operational analytics panel processing millions of events per second with instant live chart refreshes.",
    tags: ["React 19", "TailwindCSS", "Supabase", "ChartJS"],
    gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.2)",
    icon: BarChart,
  },
  {
    title: "Sentinel SecOps Engine",
    category: "Cloud Security",
    description: "Autonomous cloud monitoring daemon that isolates cluster anomalies, checks security compliance, and generates AI post-mortems.",
    tags: ["Node.js", "Docker", "AWS Lambda", "Terraform"],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/50",
    glowColor: "rgba(59, 130, 246, 0.2)",
    icon: Shield,
  },
];

// Why Choose Us Features (Bento Grid)
const bentoFeatures = [
  {
    title: "High Performance",
    desc: "Next.js App Router static/dynamic hybrid strategies optimize LCP to under 1.2s and stabilize CLS to absolute 0.",
    size: "md:col-span-2",
    accent: "text-accent",
    visual: (
      <div className="relative w-full h-24 mt-4 bg-white/5 rounded-xl border border-white/10 overflow-hidden flex items-end px-4 py-2">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
        <div className="flex items-end gap-1 w-full h-12">
          {[40, 55, 35, 70, 85, 95, 100].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-cyan-600 to-accent rounded-t-sm"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            />
          ))}
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-accent flex items-center gap-1">
          <Zap className="w-3 h-3 animate-pulse" /> 99/100 LCP
        </div>
      </div>
    ),
  },
  {
    title: "AI-Driven Innovation",
    desc: "Deploying automated cognitive layers, semantic search indices, and smart system workflows designed dynamically.",
    size: "md:col-span-1",
    accent: "text-primary-light",
    visual: (
      <div className="relative w-full h-24 mt-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent" />
        <div className="relative">
          <Brain className="w-12 h-12 text-primary-light animate-pulse-slow" />
          <motion.div
            className="absolute -inset-1 rounded-full border border-indigo-500/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Secure Systems",
    desc: "Rigorous encryption standards, cloud policy configurations, identity guards, and autonomous penetration checks.",
    size: "md:col-span-1",
    accent: "text-blue-400",
    visual: (
      <div className="relative w-full h-24 mt-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
        <Shield className="w-10 h-10 text-blue-400" />
        <span className="absolute bottom-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          AES-256 SECURED
        </span>
      </div>
    ),
  },
  {
    title: "Modern Tech Stack",
    desc: "Harnessing the bleeding edge of software engineering to ensure infinite vertical scaling and simple updates.",
    size: "md:col-span-2",
    accent: "text-indigo-400",
    visual: (
      <div className="grid grid-cols-4 gap-2 mt-4 w-full">
        {["Next.js", "React", "TS", "AWS"].map((t, idx) => (
          <div
            key={t}
            className="bg-white/5 border border-white/10 rounded-lg p-2 text-center text-xs font-mono text-text-muted hover:border-indigo-500/40 hover:text-white transition-all"
          >
            {t}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "AI-Driven Scalable Architecture",
    desc: "Microservices design decoupling compute from cache layers, guaranteeing 99.99% uptime under high traffic volumes.",
    size: "md:col-span-3",
    accent: "text-accent",
    visual: (
      <div className="relative w-full h-28 mt-4 bg-white/5 rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-text-muted border-b border-white/5 pb-2">
          <span>Cluster: US-East-1</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Healthy
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {["Auth Engine", "AI RAG Core", "Cache Layer"].map((label) => (
            <div key={label} className="bg-bg-dark border border-white/5 rounded p-1.5">
              <p className="text-[10px] font-mono text-white truncate">{label}</p>
              <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-accent h-full w-[85%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

// Stats Data
const stats = [
  { val: "140+", label: "Projects Completed" },
  { val: "99.8%", label: "Client Satisfaction" },
  { val: "15+", label: "Technologies Mastered" },
  { val: "40+", label: "Cloud Systems Delivered" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-28 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 md:px-8 py-20">
        {/* Animated ambient blob specific to hero */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-accent w-fit mx-auto lg:mx-0 shadow-lg shadow-indigo-500/5 hover:border-indigo-500/40 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Next-Gen Enterprise Development</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.05]"
            >
              Building Intelligent <br />
              <span className="gradient-text">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-muted text-base sm:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              AI-powered software, highly scalable web platforms, custom automation systems, and modern developer-centric cloud solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-light to-accent text-white font-bold rounded-full hover:opacity-90 shadow-lg shadow-accent/15 flex items-center justify-center gap-2 group transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-accent/40 text-white font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all hover:bg-white/10"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Hero Right: Animated Constellation/Node Visual representation of "QuantixNode" */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative w-full aspect-square max-w-[400px] lg:max-w-none flex items-center justify-center"
            >
              {/* Spinning background circles */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />

              {/* Central Glowing Core */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-950 to-bg-darker border border-indigo-500/40 flex items-center justify-center shadow-2xl shadow-indigo-500/20 group hover:border-accent transition-all duration-300">
                <Cpu className="w-12 h-12 text-accent group-hover:rotate-90 transition-transform duration-700" />
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating nodes with connecting lines */}
              {[
                { top: "15%", left: "20%", delay: 0, icon: Brain },
                { top: "25%", left: "75%", delay: 1, icon: Cloud },
                { top: "70%", left: "15%", delay: 2, icon: Terminal },
                { top: "75%", left: "80%", delay: 3, icon: Database },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute z-10 w-12 h-12 rounded-xl bg-bg-dark border border-white/10 hover:border-accent/80 hover:bg-white/5 flex items-center justify-center cursor-pointer shadow-lg"
                  style={{ top: node.top, left: node.left }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: node.delay,
                    ease: "easeInOut",
                  }}
                >
                  <node.icon className="w-5 h-5 text-indigo-300 hover:text-accent transition-colors" />
                </motion.div>
              ))}

              {/* Interactive background grid elements */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-accent shadow-lg shadow-cyan-500/5">
            <Cpu className="w-3.5 h-3.5" /> Services Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Comprehensive <span className="gradient-text">Engineered Services</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Delivering cutting-edge solutions built for elite performance, secure deployment, and custom artificial intelligence capabilities.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={fadeInUp}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col gap-6 relative group"
            >
              {/* Service custom glowing highlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${svc.glow}, transparent 50%)`,
                }}
              />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-950 to-bg-darker border border-indigo-500/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
                <svc.icon className="w-6 h-6" />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{svc.description}</p>
              </div>

              <div className="relative z-10 mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE QUANTIXNODE (BENTO GRID) ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Key Features
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineered for <span className="gradient-text">Uncompromising Quality</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            We bypass generic templates to build hard-coded, enterprise-level digital platforms optimized to the absolute limit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-white/10 ${feat.size}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-300" />
              <div>
                <h3 className={`text-lg font-bold flex items-center gap-2 mb-2 ${feat.accent}`}>
                  <CheckCircle className="w-4 h-4" />
                  {feat.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{feat.desc}</p>
              </div>
              {feat.visual}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK SECTION ================= */}
      <section className="relative border-y border-border-glass py-16 bg-bg-darker/60 backdrop-blur-sm overflow-hidden">
        {/* Subtle grid elements background */}
        <div className="absolute inset-0 grid-overlay opacity-30 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <h3 className="text-center text-xs font-bold tracking-widest text-text-muted uppercase mb-10">
            OUR PREFERRED HIGH-PERFORMANCE TECH STACK
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center gap-3 group hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/30 transition-transform duration-300">
                  <tech.icon className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-semibold text-text-muted group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-accent shadow-lg">
            <Monitor className="w-3.5 h-3.5" /> Project Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Designed to <span className="gradient-text">Scale Universally</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Take a look at a selection of robust, live platforms designed, engineered, and shipped by QuantixNode.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col h-full group"
            >
              {/* Project Hero Visual Background */}
              <div className="relative h-48 bg-bg-dark border-b border-border-glass flex items-center justify-center overflow-hidden">
                {/* Radial Gradient specific to project */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-40`} />

                {/* Grid Overlay inside the box */}
                <div className="absolute inset-0 grid-overlay opacity-20" />

                {/* Simulated Graphic Visual */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-bg-darker border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <proj.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Absolute status tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-indigo-300">
                  {proj.category}
                </span>

                <span className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </span>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{proj.description}</p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-muted hover:border-accent/30 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden">
          {/* Subtle Background glows inside stats grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-2 items-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                >
                  <span className="cyan-gradient-text">{stat.val}</span>
                </motion.span>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-text-muted uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="glass-panel rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-indigo-500/20 shadow-2xl shadow-indigo-500/5">
          {/* Backdrop Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-cyan-900/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Let’s Build Something <br />
              <span className="gradient-text">Extraordinary.</span>
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Partner with QuantixNode to construct secure, lightning-fast digital assets integrated with custom AI tools. Let's schedule your architecture briefing.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary-light to-accent text-white font-bold rounded-full hover:opacity-90 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 hover:border-accent/40 text-white font-semibold rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
