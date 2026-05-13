import type { NextConfig } from "next";

const blogOrigin = (
  process.env.BLOG_APP_ORIGIN ?? "http://127.0.0.1:1234"
).replace(/\/$/, "");

const blogRewritePaths = [
  "/blog",
  "/blog/:path*",
  "/_astro/:path*",
  "/_image",
  "/_image/:path*",
  "/static/:path*",
  "/fonts/:path*",
  "/authors",
  "/authors/:path*",
  "/tags",
  "/tags/:path*",
  "/about",
  "/rss.xml",
  "/sitemap-index.xml",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon.svg",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
] as const;

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: blogRewritePaths.map((source) => ({
        source,
        destination: `${blogOrigin}${source}`,
      })),
      fallback: [],
    };
  },
};

export default nextConfig;
