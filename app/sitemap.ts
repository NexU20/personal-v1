import type { MetadataRoute } from "next";
import { blogs } from "./data/blogs";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: absoluteUrl("/blogs"),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const blogRoutes = blogs.map((blog) => ({
    url: absoluteUrl(`/blogs/${blog.slug}`),
    lastModified: new Date(blog.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
