import Link from "next/link";
import { Hero } from "@/components/PageBlocks";
import { industries } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow="Industries"
        title="Industry-specialized digital transformation for regulated and high-growth sectors."
        description="Explore vertical pages with business challenges, architecture recommendations, and implementation blueprints."
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-200 transition hover:border-cyan-400/40">
            {industry.name}
          </Link>
        ))}
      </section>
    </div>
  );
}

