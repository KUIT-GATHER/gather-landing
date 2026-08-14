import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { volunteerTypes } from "@/data/volunteer-test";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/volunteer-type", priority: 0.8 },
    ...volunteerTypes.map((type) => ({
      path: `/volunteer-type/result/${type}`,
      priority: 0.6,
    })),
  ];

  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.landingUrl).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
