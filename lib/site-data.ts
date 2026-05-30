export type ServiceCategory = {
  title: string;
  slug: string;
  items: { name: string; slug: string }[];
};

export type Industry = { name: string; slug: string };

export type CompletedProject = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  stack: string[];
  achievements: string[];
  stats: { label: string; value: string }[];
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "AI & Automation",
    slug: "ai-automation",
    items: [
      "AI Agents",
      "Custom AI Applications",
      "RAG Systems",
      "LangChain Solutions",
      "Workflow Automation",
      "AI Chatbots",
      "Vector Databases",
    ].map((name) => ({ name, slug: slugify(name) })),
  },
  {
    title: "Web Development",
    slug: "web-development",
    items: [
      "SaaS Development",
      "Enterprise Web Apps",
      "Next.js Applications",
      "MERN Development",
      "JAMstack Platforms",
      "Progressive Web Apps",
    ].map((name) => ({ name, slug: slugify(name) })),
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    items: [
      "Flutter Development",
      "React Native Development",
      "Android Apps",
      "iOS Apps",
      "Cross Platform Apps",
    ].map((name) => ({ name, slug: slugify(name) })),
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    items: [
      "AWS Infrastructure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Cloud Migration",
      "Monitoring & Observability",
    ].map((name) => ({ name, slug: slugify(name) })),
  },
  {
    title: "Startup Engineering",
    slug: "startup-engineering",
    items: [
      "MVP Development",
      "Product Discovery",
      "CTO as a Service",
      "Scaling Architecture",
      "Product Modernization",
    ].map((name) => ({ name, slug: slugify(name) })),
  },
];

export const industries: Industry[] = [
  "Healthcare",
  "FinTech",
  "E-commerce",
  "Travel & Hospitality",
  "Logistics",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Retail",
  "SaaS Platforms",
  "Media & Entertainment",
  "Insurance",
  "Automotive",
  "AI Startups",
].map((name) => ({ name, slug: slugify(name) }));

export const insightsMenu = [
  "Research",
  "Engineering Blog",
  "AI Insights",
  "Case Studies",
  "Technology Trends",
  "Product Engineering",
  "Startup Guides",
  "Architecture Deep Dives",
].map((name) => ({ name, slug: slugify(name) }));

export const researchReports = [
  "State of AI Agents 2026",
  "RAG Performance Benchmark Report",
  "Future of SaaS Architecture",
  "Cloud Cost Optimization Report",
  "Enterprise AI Adoption Report",
].map((title) => ({ title, slug: slugify(title) }));

export const engineeringBlogCategories = [
  "Artificial Intelligence",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Flutter",
  "Cloud Computing",
  "DevOps",
  "Startups",
  "Product Engineering",
];

export const companyPages = [
  { name: "About QuantixNode", href: "/company/about" },
  { name: "Leadership", href: "/company/leadership" },
  { name: "Technology Partnerships", href: "/company/technology-partnerships" },
  { name: "Awards & Recognition", href: "/company/awards-recognition" },
  { name: "Careers", href: "/company/careers" },
  { name: "Culture", href: "/company/culture" },
  { name: "Contact", href: "/contact" },
];

export const resources = [
  "Whitepapers",
  "Research Reports",
  "E-books",
  "Architecture Templates",
  "Developer Guides",
  "Best Practices",
].map((name) => ({ name, slug: slugify(name) }));

export const technologyPartners = {
  cloud: ["AWS", "Google Cloud", "Microsoft Azure"],
  ai: ["OpenAI", "Anthropic"],
  infrastructure: ["Supabase", "Vercel", "MongoDB"],
};

export const completedProjects: CompletedProject[] = [
  {
    slug: "fintech-risk-intelligence-platform",
    title: "FinTech Risk Intelligence Platform",
    sector: "FinTech",
    summary: "Built a real-time risk scoring platform with AI-driven anomaly detection and compliance-ready audit trails.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    achievements: [
      "Launched multi-tenant risk dashboards in under 14 weeks.",
      "Implemented real-time scoring pipeline for fraud signal detection.",
      "Added compliance event history with traceable decision logs.",
    ],
    stats: [
      { label: "Fraud Detection Accuracy", value: "+34%" },
      { label: "Manual Review Time", value: "-48%" },
      { label: "Platform Uptime", value: "99.95%" },
    ],
  },
  {
    slug: "healthcare-patient-engagement-suite",
    title: "Healthcare Patient Engagement Suite",
    sector: "Healthcare",
    summary: "Delivered an AI-assisted patient engagement suite with appointment automation and secure records workflows.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Azure", "OpenAI"],
    achievements: [
      "Reduced appointment no-show rates through smart reminder automation.",
      "Introduced secure clinician assistant for rapid case-note drafting.",
      "Integrated analytics for patient lifecycle and engagement health.",
    ],
    stats: [
      { label: "No-Show Reduction", value: "-27%" },
      { label: "Ops Time Saved", value: "31 hrs/week" },
      { label: "Patient Satisfaction", value: "+22%" },
    ],
  },
  {
    slug: "saas-growth-analytics-engine",
    title: "SaaS Growth Analytics Engine",
    sector: "SaaS Platforms",
    summary: "Engineered a unified growth intelligence product with behavioral analytics, activation tracking, and LTV insights.",
    stack: ["Next.js", "TypeScript", "Python", "BigQuery", "Vercel", "Supabase"],
    achievements: [
      "Unified product, billing, and CRM data into one analytics layer.",
      "Added predictive churn scoring and retention recommendation engine.",
      "Enabled executive dashboards with drill-down cohort analysis.",
    ],
    stats: [
      { label: "Activation Rate", value: "+19%" },
      { label: "Churn Reduction", value: "-16%" },
      { label: "Decision Latency", value: "< 2 min" },
    ],
  },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function unslug(value: string) {
  return value
    .split("-")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
}
