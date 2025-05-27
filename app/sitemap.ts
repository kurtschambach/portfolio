import { allArticles } from "contentlayer/generated";

export default function sitemap() {
  const baseUrl = "https://a3chron.vercel.app";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const blogPosts = allArticles
    .filter((article) => article.published !== false)
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  // TODO: generate projects too
  const projects = ["next-js-auth-template", "portfolio", "userstyles"].map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }),
  );

  return [...staticPages, ...blogPosts, ...projects];
}
