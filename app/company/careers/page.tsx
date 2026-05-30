import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function CareersPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Careers" title="Build category-defining systems with an AI-first engineering team." description="We are hiring product engineers, AI engineers, and cloud specialists who thrive in high-ownership environments." />
      <TwoColumn leftTitle="Why Join" leftBody="Work on meaningful enterprise and startup programs with modern tooling and strong mentorship." rightTitle="Open Tracks" rightItems={["AI Engineer", "Full-Stack Engineer", "Cloud and DevOps Engineer", "Product Designer"]} />
    </div>
  );
}

