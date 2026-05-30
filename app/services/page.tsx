import Link from "next/link";
import { Hero } from "@/components/PageBlocks";
import { serviceCategories } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow="Services"
        title="AI engineering, product development, and cloud consulting designed for business velocity."
        description="Each capability has a dedicated landing page covering technology stack, process, benefits, FAQ, and next steps."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {serviceCategories.map((category) => (
          <article key={category.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-sm text-slate-300 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

