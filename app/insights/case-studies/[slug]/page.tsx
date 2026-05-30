import { Hero, TwoColumn } from "@/components/PageBlocks";

const studies = ["ai-support-automation", "cloud-modernization-fintech", "omnichannel-retail-platform"];

export function generateStaticParams() {
  return studies.map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Client Case Study" title={slug.replace(/-/g, " ")} description="Business context, technical execution, and measurable impact from real delivery programs." />
      <TwoColumn leftTitle="Client Overview and Challenge" leftBody="The client needed to improve release velocity, increase reliability, and modernize architecture without business disruption." rightTitle="Solution and Architecture" rightItems={["Domain-driven service boundaries", "Observability-first deployment", "AI-assisted operational workflows", "CI/CD with quality gates"]} />
      <TwoColumn leftTitle="Results and Performance Metrics" leftBody="Release frequency increased, incident response improved, and infrastructure cost efficiency became measurable through unified telemetry." rightTitle="Lessons Learned" rightItems={["Start with architecture baseline", "Automate platform controls", "Align product and engineering KPIs", "Build for iterative scale"]} />
      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-300">Technology Stack: Next.js, Node.js, TypeScript, PostgreSQL, Redis, AWS, Kubernetes.</section>
    </div>
  );
}

