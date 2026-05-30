import Link from "next/link";
import { Hero, PillGrid } from "@/components/PageBlocks";
import { engineeringBlogCategories } from "@/lib/site-data";

const posts = [
  { slug: "designing-multi-agent-ai-workflows", title: "Designing Multi-Agent AI Workflows", category: "Artificial Intelligence" },
  { slug: "nextjs-enterprise-architecture-patterns", title: "Next.js Enterprise Architecture Patterns", category: "Next.js" },
  { slug: "production-grade-typescript-services", title: "Production-Grade TypeScript Services", category: "TypeScript" },
];

export default function EngineeringBlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Engineering Blog" title="Modern engineering insights from the QuantixNode delivery team." description="In-depth articles with architecture decisions, code examples, and practical implementation frameworks." />
      <PillGrid title="Categories" items={engineeringBlogCategories} />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/insights/engineering-blog/${post.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40">
            <p className="text-xs uppercase tracking-wider text-cyan-300">{post.category}</p>
            <h3 className="mt-2 font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300">Author details, reading time, table of contents, and related articles included.</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

