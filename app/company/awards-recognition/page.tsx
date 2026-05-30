import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function AwardsRecognitionPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Awards and Recognition" title="Proof of execution quality across engineering, innovation, and research." description="Recognition roadmap for certifications, technical achievements, publications, and community impact." />
      <TwoColumn leftTitle="Recognition Areas" leftBody="Industry certifications, technology achievements, innovation awards, and research publications." rightTitle="Community and Events" rightItems={["Conference participation", "Open-source contributions", "Developer community talks", "Technical mentorship"]} />
    </div>
  );
}

