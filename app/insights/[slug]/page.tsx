import { Hero, TwoColumn } from "@/components/PageBlocks";
import { insightsMenu } from "@/lib/site-data";

const reserved = new Set(["research", "engineering-blog", "case-studies"]);

export function generateStaticParams() {
  return insightsMenu
    .filter((item) => !reserved.has(item.slug))
    .map((item) => ({ slug: item.slug }));
}

export default async function InsightCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Insights Category" title={slug.replace(/-/g, " ")} description="Curated perspective pieces, implementation notes, and trend analysis from QuantixNode experts." />
      <TwoColumn leftTitle="What You Will Find" leftBody="Strategy-focused insights, architecture decisions, and applied engineering patterns for real-world delivery." rightTitle="Content Formats" rightItems={["Playbooks", "Benchmarks", "Framework comparisons", "Implementation guides"]} />
    </div>
  );
}

