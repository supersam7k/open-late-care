import { MetadataRoute } from "next";
import { cities } from "@/lib/cityListings";

export const dynamic = "force-static";

const BASE_URL = "https://urgentcarenearme24.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...cities.map((city) => ({
      url: `${BASE_URL}/${city.slug}/urgent-care-open-now/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
