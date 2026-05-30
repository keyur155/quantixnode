import Link from "next/link";
import { Hero, TwoColumn } from "@/components/PageBlocks";
import { researchReports } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Research Center" title="Original research from QuantixNode on AI, architecture, and cloud performance." description="Long-form research publications with methodology, findings, and implementation recommendations." />
      <TwoColumn leftTitle="Research Standards" leftBody="Every publication includes Executive Summary, Objectives, Methodology, Key Findings, Technical Analysis, and Recommendations." rightTitle="Download Assets" rightItems={["PDF report", "Charts and visualizations", "Technical appendix", "Related research"]} />
      <section className="grid gap-4 md:grid-cols-2">
        {researchReports.map((report) => (
          <Link key={report.slug} href={`/insights/research/${report.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white transition hover:border-cyan-400/40">
            <h3 className="font-semibold">{report.title}</h3>
            <p className="mt-2 text-sm text-slate-300">Read full analysis and download PDF.</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

