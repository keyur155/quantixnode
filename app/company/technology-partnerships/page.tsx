import { Hero, PillGrid, TwoColumn } from "@/components/PageBlocks";
import { technologyPartners } from "@/lib/site-data";

export default function TechnologyPartnershipsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Technology Partnerships" title="Partner ecosystem aligned to enterprise reliability and AI innovation." description="QuantixNode collaborates with platform leaders across cloud, AI, and infrastructure." />
      <PillGrid title="Cloud Partners" items={technologyPartners.cloud} />
      <PillGrid title="AI Partners" items={technologyPartners.ai} />
      <PillGrid title="Infrastructure Partners" items={technologyPartners.infrastructure} />
      <TwoColumn leftTitle="Technology Ecosystem" leftBody="Our partner ecosystem ensures proven integrations, architectural support, and rapid deployment patterns." rightTitle="Value" rightItems={["Certified implementation patterns", "Accelerated delivery", "Lower integration risk"]} />
    </div>
  );
}

