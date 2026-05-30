import { MetadataRoute } from "next";
import { completedProjects, industries, insightsMenu, researchReports, serviceCategories } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quantixnode.com";
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/insights",
    "/insights/research",
    "/insights/engineering-blog",
    "/insights/case-studies",
    "/company",
    "/company/about",
    "/company/leadership",
    "/company/technology-partnerships",
    "/company/awards-recognition",
    "/company/careers",
    "/company/culture",
    "/projects",
    "/resources",
    "/contact",
  ];

  const serviceRoutes = serviceCategories.flatMap((category) =>
    category.items.map((item) => `/services/${item.slug}`),
  );
  const industryRoutes = industries.map((item) => `/industries/${item.slug}`);
  const insightRoutes = insightsMenu
    .map((item) => item.slug)
    .filter((slug) => !["research", "engineering-blog", "case-studies"].includes(slug))
    .map((slug) => `/insights/${slug}`);
  const researchRoutes = researchReports.map((report) => `/insights/research/${report.slug}`);
  const projectRoutes = completedProjects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...insightRoutes, ...researchRoutes, ...projectRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

