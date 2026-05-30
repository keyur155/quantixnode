import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function AboutCompanyPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="About QuantixNode" title="Engineering future-ready digital products with AI and cloud-native architecture." description="We help organizations move from idea to scalable execution through consulting, design, engineering, and modernization programs." />
      <TwoColumn leftTitle="Mission" leftBody="Deliver high-trust, high-impact digital systems that accelerate business outcomes." rightTitle="Operating Model" rightItems={["Consulting-led discovery", "Architecture-first implementation", "Continuous optimization"]} />
    </div>
  );
}

