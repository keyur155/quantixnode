import Link from "next/link";
import { Hero } from "@/components/PageBlocks";

const studies = [
  { slug: "ai-support-automation", title: "AI Support Automation for SaaS" },
  { slug: "cloud-modernization-fintech", title: "Cloud Modernization for FinTech" },
  { slug: "omnichannel-retail-platform", title: "Omnichannel Retail Platform" },
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Case Studies" title="Proven delivery outcomes across AI, product engineering, and cloud transformation." description="Detailed client stories with architecture rationale, performance metrics, and implementation lessons." />
      <section className="grid gap-4 md:grid-cols-3">
        {studies.map((study) => (
          <Link key={study.slug} href={`/insights/case-studies/${study.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:border-cyan-400/40">
            {study.title}
          </Link>
        ))}
      </section>
    </div>
  );
}

