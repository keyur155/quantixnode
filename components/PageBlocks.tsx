import Link from "next/link";

export function Hero({ eyebrow, title, description, ctaHref = "/contact", ctaLabel = "Talk to QuantixNode" }: { eyebrow: string; title: string; description: string; ctaHref?: string; ctaLabel?: string; }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,.18),transparent_45%)]" />
      <p className="relative z-10 text-xs font-semibold uppercase tracking-widest text-cyan-300">{eyebrow}</p>
      <h1 className="relative z-10 mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
      <p className="relative z-10 mt-4 max-w-3xl text-slate-300">{description}</p>
      <Link href={ctaHref} className="relative z-10 mt-8 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white">
        {ctaLabel}
      </Link>
    </section>
  );
}

export function TwoColumn({ leftTitle, leftBody, rightTitle, rightItems }: { leftTitle: string; leftBody: string; rightTitle: string; rightItems: string[]; }) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">{leftTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">{leftBody}</p>
      </article>
      <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">{rightTitle}</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {rightItems.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function PillGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

