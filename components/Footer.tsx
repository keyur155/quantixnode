import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const social = [
  { label: "GitHub", href: "https://github.com/quantixnode", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/company/quantixnode", icon: Linkedin },
  { label: "X", href: "https://x.com/quantixnode", icon: Twitter },
  { label: "Email", href: "mailto:hello@quantixnode.com", icon: Mail },
];

const columns = {
  Company: [
    { label: "About QuantixNode", href: "/company/about" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Careers", href: "/company/careers" },
  ],
  Services: [
    { label: "AI & Automation", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "FinTech", href: "/industries/fintech" },
    { label: "SaaS Platforms", href: "/industries/saas-platforms" },
  ],
  Insights: [
    { label: "Research", href: "/insights/research" },
    { label: "Engineering Blog", href: "/insights/engineering-blog" },
    { label: "Case Studies", href: "/insights/case-studies" },
  ],
  Contact: [
    { label: "hello@quantixnode.com", href: "mailto:hello@quantixnode.com" },
    { label: "Ahmedabad, Gujarat, India", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02050d]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-5 md:px-8">
        {Object.entries(columns).map(([title, items]) => (
          <div key={title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-200">{title}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 pb-8 md:px-8">
        {social.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
            aria-label={label}
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 QuantixNode. All rights reserved.</p>
          <p>Building AI-native, cloud-scale, and future-ready digital products.</p>
        </div>
      </div>
    </footer>
  );
}

