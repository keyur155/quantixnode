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
  Smartphone,
  Bot,
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

const featuredTech = [
  {
    name: "Scalable Web Architecture",
    icon: Cpu,
    description: "Modern frontend and backend systems optimized for performance, SEO, scalability, and cloud deployment.",
    inlineTech: "Next.js • React • Node.js • TypeScript",
    miniLabels: ["SSR", "SEO", "Edge Runtime", "JAMstack"],
    colSpan: "md:col-span-6 lg:col-span-5",
    glow: "from-cyan-500/30 via-indigo-500/20 to-transparent",
  },
  {
    name: "Mobile Product Engineering",
    icon: Smartphone,
    description: "Cross-platform mobile experiences with real-time sync, offline-first systems, and scalable app infrastructure.",
    inlineTech: "Flutter • React Native • Firebase • Supabase",
    miniLabels: ["Realtime", "Offline-first", "Push", "Cross-platform"],
    colSpan: "md:col-span-6 lg:col-span-3",
    glow: "from-blue-500/30 via-cyan-500/20 to-transparent",
  },
  {
    name: "AI Automation Ecosystem",
    icon: Bot,
    description: "AI-native infrastructure powered by intelligent workflows, retrieval systems, automation layers, and scalable inference.",
    inlineTech: "OpenAI • LangChain • Vector DB • RAG",
    miniLabels: ["Agents", "Automation", "Embeddings", "Vector Search"],
    colSpan: "md:col-span-12 lg:col-span-4",
    glow: "from-indigo-500/30 via-violet-500/20 to-transparent",
  },
];

const floatingTech = [
  { name: "React", icon: Globe },
  { name: "Next.js", icon: Cpu },
  { name: "Node.js", icon: Database },
  { name: "TypeScript", icon: Terminal },
  { name: "MongoDB", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Zap },
  { name: "Docker", icon: Cloud },
  { name: "Kubernetes", icon: Shield },
  { name: "Firebase", icon: Flame },
  { name: "AWS", icon: Cloud },
  { name: "GraphQL", icon: ChevronRight },
  { name: "OpenAI", icon: Sparkles },
  { name: "LangChain", icon: Brain },
  { name: "Flutter", icon: Smartphone },
  { name: "React Native", icon: Smartphone },
  { name: "Supabase", icon: Database },
  { name: "Vercel", icon: Monitor },
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
    desc: "AI-first, cloud-native, and full-stack technologies crafted for scalable modern platforms.",
    size: "md:col-span-2",
    accent: "text-indigo-400",
    visual: (
      <div className="mt-4 w-full space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { label: "MERN Stack", stack: "MongoDB • Express • React • Node.js" },
            { label: "MEAN Stack", stack: "MongoDB • Express • Angular • Node.js" },
            { label: "JAMstack", stack: "Next.js • Nuxt • Astro • Headless CMS" },
            { label: "AI Native", stack: "OpenAI • LangChain • Vector DB • RAG" },
          ].map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] transition-all"
            >
              <p className="text-[10px] font-semibold tracking-[0.08em] uppercase text-cyan-300">
                {group.label}
              </p>
              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                {group.stack}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "TypeScript",
            "Python",
            "Go",
            "NestJS",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "GraphQL",
            "Docker",
            "Kubernetes",
            "AWS",
            "GCP",
            "Azure",
            "Terraform",
            "Vercel",
            "Supabase",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-300 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2">
          <p className="text-[10px] sm:text-xs font-mono text-emerald-300">
            Startup-ready delivery: MVP to scale with product, growth, and AI ops.
          </p>
        </div>
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
  const handleSpotlightMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -5;
    const ry = ((x / rect.width) - 0.5) * 5;
    element.style.setProperty("--mx", `${x}px`);
    element.style.setProperty("--my", `${y}px`);
    element.style.setProperty("--rx", `${rx}deg`);
    element.style.setProperty("--ry", `${ry}deg`);
  };

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
      <section className="relative border-y border-border-glass py-16 bg-bg-darker/75 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-35"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-30 z-0 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-14 left-10 w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-pulse pointer-events-none" />
        <div className="absolute top-24 right-16 w-1 h-1 rounded-full bg-indigo-300/60 animate-pulse pointer-events-none" />
        <div className="absolute bottom-14 left-1/3 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.2em] text-text-muted uppercase">
              HIGH-PERFORMANCE TECHNOLOGY ECOSYSTEM
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              Built With Modern Scalable Technologies
            </h3>
            <p className="text-sm sm:text-base text-slate-300/90 max-w-3xl mx-auto mt-3">
              AI-first, cloud-native, and full-stack technologies powering secure and scalable digital platforms.
            </p>
            <div className="h-px w-40 mx-auto mt-5 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {featuredTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                onMouseMove={handleSpotlightMove}
                className={`group relative ${tech.colSpan} rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 overflow-hidden hover:border-cyan-400/50 transition-all duration-300`}
                style={{
                  boxShadow: "0 10px 30px rgba(10, 20, 60, 0.35)",
                  transform: "perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${tech.glow}`} />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(220px circle at var(--mx) var(--my), rgba(34,211,238,0.15), rgba(99,102,241,0.08) 40%, transparent 70%)",
                  }}
                />
                <motion.div
                  className="absolute -inset-y-10 -left-16 w-24 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: [-120, 420] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-bg-dark/80 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-105 transition-transform">
                    <tech.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300/80 border border-cyan-400/30 px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h4 className="relative z-10 mt-4 text-lg font-semibold text-white">{tech.name}</h4>
                <p className="relative z-10 mt-2 text-sm text-slate-300 leading-relaxed">{tech.description}</p>
                <p className="relative z-10 mt-3 text-xs text-cyan-200/90 font-medium">{tech.inlineTech}</p>
                <div className="relative z-10 mt-3 flex flex-wrap gap-1.5">
                  {tech.miniLabels.map((mini) => (
                    <span
                      key={mini}
                      className="text-[10px] px-2 py-1 rounded-md border border-white/10 bg-bg-dark/60 text-slate-300"
                    >
                      {mini}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 relative overflow-hidden">
            <div className="absolute -top-8 right-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Runtime / Infra / AI Modules
            </div>
            <div className="flex flex-wrap gap-2.5 items-start">
              {floatingTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.18 + i * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`group relative inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] ${i % 5 === 0 ? "px-4 py-2.5 text-sm" : i % 3 === 0 ? "px-3.5 py-2 text-xs" : "px-3 py-1.5 text-xs"} text-slate-300 hover:text-white hover:border-indigo-400/50 transition-all duration-300 ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                  style={{ marginTop: `${(i % 4) * 4}px` }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent transition-opacity" />
                  <tech.icon className="w-3.5 h-3.5 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                  <span className="relative z-10">{tech.name}</span>
                </motion.div>
              ))}
            </div>
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
              Partner with QuantixNode to construct secure, lightning-fast digital assets integrated with custom AI tools. Let&apos;s schedule your architecture briefing.
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
