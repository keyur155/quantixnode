import type { Metadata } from "next";
import { Hero, PillGrid, TwoColumn } from "@/components/PageBlocks";
import { serviceCategories } from "@/lib/site-data";

const allServices = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.title })),
);

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((x) => x.slug === slug);
  return {
    title: service ? `${service.name} Services | QuantixNode` : "Service | QuantixNode",
    description: service
      ? `${service.name} consulting and engineering by QuantixNode.`
      : "QuantixNode services.",
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServices.find((x) => x.slug === slug);

  if (!service) {
    return <div className="mx-auto max-w-7xl px-6 py-12 text-slate-300">Service not found.</div>;
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
      <Hero
        eyebrow={service.category}
        title={service.name}
        description="Dedicated engagement model with discovery, architecture, implementation, QA, and measurable optimization cycles."
      />
      <PillGrid title="Technology Stack" items={["Next.js", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL", "Vector Databases"]} />
      <TwoColumn
        leftTitle="Benefits"
        leftBody="Lower operational risk, faster product delivery, and architecture that supports AI-native scale from launch through enterprise growth."
        rightTitle="Process"
        rightItems={["Discovery and Solution Blueprint", "Architecture and Implementation", "Testing and Reliability", "Launch and Optimization"]}
      />
      <TwoColumn
        leftTitle="FAQ"
        leftBody="Typical delivery timelines range from 4 to 16 weeks depending on complexity, existing systems, compliance needs, and team size."
        rightTitle="Next Step"
        rightItems={["Schedule consultation", "Review architecture options", "Get phased delivery roadmap"]}
      />
    </div>
  );
}

