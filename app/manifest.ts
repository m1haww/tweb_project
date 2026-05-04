import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pulsar — ASO/ASA Analytics",
    short_name: "Pulsar",
    description: "Apple Search Ads + RevenueCat analytics platform",
    start_url: "/",
    display: "standalone",
    background_color: "#05070D",
    theme_color: "#5196CE",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  }
}
