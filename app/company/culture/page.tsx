import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function CulturePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Culture" title="A culture of craftsmanship, curiosity, and outcome ownership." description="We combine consulting empathy with engineering rigor to build systems people trust." />
      <TwoColumn leftTitle="How We Work" leftBody="Small cross-functional pods, fast feedback loops, and architecture-first decisions." rightTitle="Principles" rightItems={["Customer obsession", "Technical depth", "Transparent communication", "Continuous learning"]} />
    </div>
  );
}

