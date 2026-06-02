import type { MetadataRoute } from "next";
import { editorials } from "@/content/editorials";
import { events } from "@/content/events";
import { models } from "@/content/models";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/models", "/editorials", "/events", "/about", "/join", "/collaborate", "/contact"];
  const dynamicRoutes = [
    ...models.map((model) => `/models/${model.slug}`),
    ...editorials.map((editorial) => `/editorials/${editorial.slug}`),
    ...events.map((event) => `/events/${event.slug}`)
  ];

  return [...routes, ...dynamicRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date()
  }));
}
