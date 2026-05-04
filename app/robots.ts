import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pulsar.io"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/settings/", "/account", "/campaigns/", "/reports/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
