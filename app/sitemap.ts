import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pulsar.io"

  const routes = [
    "",
    "/about",
    "/aso-asa",
    "/platform",
    "/data-sources",
    "/pricing",
    "/contact",
    "/docs",
    "/login",
    "/register",
    "/forgot-password",
    "/privacy",
    "/terms",
  ]

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }))
}
