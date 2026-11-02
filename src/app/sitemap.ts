import type { MetadataRoute } from "next";

const siteUrl = "https://coast-ai-automation.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/login", changeFrequency: "monthly", priority: 0.2 },
    { url: siteUrl + "/signup", changeFrequency: "monthly", priority: 0.3 }
  ];
}
