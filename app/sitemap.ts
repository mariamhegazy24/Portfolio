import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url || "http://localhost:3000";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((p) => ({ url: `${base}/projects/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
