import { Hero, PillGrid } from "@/components/PageBlocks";
import { resources } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Resources" title="Actionable assets for technology leaders and product teams." description="Access whitepapers, reports, templates, and implementation guides from QuantixNode." />
      <PillGrid title="Resource Library" items={resources.map((x) => x.name)} />
    </div>
  );
}

