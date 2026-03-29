export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-data';

const routes = ['/', '/about/', '/menu/', '/private-dining/', '/contact/'];
const lastModified = new Date('2026-03-29T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === '/' ? siteConfig.url : `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
