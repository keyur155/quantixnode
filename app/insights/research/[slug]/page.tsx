import { Hero, TwoColumn } from "@/components/PageBlocks";
import { researchReports } from "@/lib/site-data";

export function generateStaticParams() {
  return researchReports.map((report) => ({ slug: report.slug }));
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = researchReports.find((r) => r.slug === slug);
  if (!report) return <div className="mx-auto max-w-7xl px-6 py-12 text-slate-300">Research article not found.</div>;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Research Publication" title={report.title} description="Evidence-driven publication designed for engineering leaders and executive stakeholders." ctaLabel="Download PDF" />
      <TwoColumn leftTitle="Executive Summary" leftBody="This report evaluates architecture patterns, model quality, cost-to-performance ratios, and operational maturity across production AI deployments." rightTitle="Research Objectives" rightItems={["Benchmark implementation approaches", "Measure quality and latency", "Quantify infrastructure cost", "Define adoption playbooks"]} />
      <TwoColumn leftTitle="Methodology" leftBody="We combine architecture reviews, benchmarking runs, and stakeholder interviews to identify repeatable implementation patterns." rightTitle="Key Findings" rightItems={["AI agents require strict orchestration", "RAG quality hinges on retrieval discipline", "Cloud cost is manageable with governance", "Cross-functional operating models outperform siloed execution"]} />
      <TwoColumn leftTitle="Technical Analysis" leftBody="The analysis compares deployment topologies, inference routing, vector index design, observability controls, and resiliency posture." rightTitle="Recommendations" rightItems={["Adopt phased rollout", "Define quality SLAs", "Instrument end-to-end telemetry", "Create AI operating governance"]} />
    </div>
  );
}

