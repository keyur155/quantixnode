import Link from "next/link";
import { Hero } from "@/components/PageBlocks";
import { insightsMenu } from "@/lib/site-data";

export default function InsightsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow="Insights"
        title="Research-backed engineering intelligence for AI-first product teams."
        description="Knowledge hub covering original research, engineering guides, case studies, and architecture deep dives."
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {insightsMenu.map((item) => {
          const href = item.slug === "research" ? "/insights/research" : item.slug === "engineering-blog" ? "/insights/engineering-blog" : item.slug === "case-studies" ? "/insights/case-studies" : `/insights/${item.slug}`;
          return (
            <Link key={item.slug} href={href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200 transition hover:border-cyan-400/40">
              {item.name}
            </Link>
          );
        })}
      </section>
    </div>
  );
}

