import { Hero, TwoColumn } from "@/components/PageBlocks";

const posts = [
  "designing-multi-agent-ai-workflows",
  "nextjs-enterprise-architecture-patterns",
  "production-grade-typescript-services",
];

export function generateStaticParams() {
  return posts.map((slug) => ({ slug }));
}

export default async function EngineeringBlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Engineering Blog" title={slug.replace(/-/g, " ")} description="Author profile, reading time, hero media, and code-backed narrative for engineering teams." ctaLabel="Join Newsletter" />
      <TwoColumn leftTitle="Table of Contents" leftBody="1) Context 2) Solution Design 3) Implementation 4) Testing 5) Production Learnings." rightTitle="Article Highlights" rightItems={["Hero image", "Author information", "Reading time", "Code examples", "Related articles"]} />
      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">Article Content</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">This template is ready for markdown/CMS-driven content and preserves a premium editorial layout optimized for long-form technical writing.</p>
      </section>
    </div>
  );
}

