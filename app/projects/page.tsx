import Link from "next/link";
import { completedProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-8">
      <h1 className="text-3xl font-semibold text-white">Completed Projects</h1>
      <p className="mt-2 text-slate-300">Recent implementations and measurable outcomes delivered by QuantixNode.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {completedProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/40">
            <p className="text-xs uppercase tracking-wider text-cyan-300">{project.sector}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
