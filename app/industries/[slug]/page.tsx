import { Hero, PillGrid, TwoColumn } from "@/components/PageBlocks";
import { industries } from "@/lib/site-data";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((x) => x.slug === slug);
  if (!industry) return <div className="mx-auto max-w-7xl px-6 py-12 text-slate-300">Industry not found.</div>;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow="Industry"
        title={`${industry.name} Solutions`}
        description="Outcome-driven consulting and engineering tailored to sector constraints, compliance, and growth objectives."
      />
      <TwoColumn leftTitle="Industry Challenges" leftBody="Legacy systems, fragmented data, compliance pressure, and speed-to-market expectations create execution bottlenecks." rightTitle="Technology Solutions" rightItems={["AI automation layers", "Cloud-native platforms", "Data pipelines and observability", "Secure product modernization"]} />
      <TwoColumn leftTitle="Case Studies" leftBody="Reference implementations include workflow automation, analytics modernization, and self-service product platforms." rightTitle="Recommended Architecture" rightItems={["Event-driven services", "API gateway and BFF", "Data lakehouse and RAG indexing", "CI/CD with policy controls"]} />
      <PillGrid title="Technology Stack" items={["Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "Kubernetes"]} />
      <TwoColumn leftTitle="Business Benefits" leftBody="Reduced operating cost, faster release cycles, and measurable customer experience gains across digital channels." rightTitle="CTA" rightItems={["Book an industry workshop", "Get architecture assessment", "Launch a pilot program"]} />
    </div>
  );
}

