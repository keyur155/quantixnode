import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function LeadershipPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Leadership" title="Cross-functional leadership in architecture, product engineering, and AI delivery." description="Our leadership team blends enterprise systems expertise with startup speed and hands-on execution." />
      <TwoColumn leftTitle="Leadership Focus" leftBody="Technology strategy, architecture governance, and execution quality across client programs." rightTitle="Advisory Strength" rightItems={["CTO advisory", "Platform modernization", "AI adoption strategy"]} />
    </div>
  );
}

