import { Hero, TwoColumn } from "@/components/PageBlocks";

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Contact" title="Let us architect your next AI-first platform." description="Share your business goals and technical context. We will respond with a proposed engagement approach." />
      <TwoColumn leftTitle="Email" leftBody="hello@quantixnode.com" rightTitle="Headquarters" rightItems={["Ahmedabad, Gujarat, India", "Global delivery model", "Consulting and engineering engagements"]} />
    </div>
  );
}

