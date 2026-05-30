import Link from "next/link";
import { Hero } from "@/components/PageBlocks";
import { companyPages } from "@/lib/site-data";

export default function CompanyPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero eyebrow="Company" title="A trusted technology partner for AI-first transformation." description="QuantixNode combines consulting depth, engineering quality, and research-led execution for startups and enterprises." />
      <section className="grid gap-4 md:grid-cols-2">
        {companyPages.map((page) => (
          <Link key={page.href} href={page.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 transition hover:border-cyan-400/40">
            {page.name}
          </Link>
        ))}
      </section>
    </div>
  );
}

