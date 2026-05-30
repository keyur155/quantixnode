import { notFound } from "next/navigation";
import { completedProjects } from "@/lib/site-data";

export function generateStaticParams() {
  return completedProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = completedProjects.find((x) => x.slug === slug);

  if (!project) return notFound();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:px-8">
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-xs uppercase tracking-widest text-cyan-300">{project.sector}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{project.title}</h1>
        <p className="mt-3 text-slate-300">{project.summary}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">What We Achieved</h2>
        <ul className="mt-3 space-y-2 text-slate-300">
          {project.achievements.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">Project Statistics</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {project.stats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold text-white">Technology Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
