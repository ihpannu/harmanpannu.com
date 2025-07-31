import { siteConfig } from "@/config/site"
import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Washington State Real Estate Expert`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6b6b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/harman-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/harman-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "finance", "real estate"],
    lang: "en-US",
    orientation: "portrait-primary",
    scope: "/",
    id: "harmanpannu-real-estate",
  }
}
