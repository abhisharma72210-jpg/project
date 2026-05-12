import type { MetadataRoute } from 'next';
import { landingPages } from '@/data/landingPages';

const SITE_URL = 'https://abisek.site';

/**
 * Sitemap includes:
 *  - Home (top priority, weekly change)
 *  - All SEO landing pages (high priority, monthly change)
 *
 * Hidden pages are NOT linked from the homepage or navbar, but ARE listed
 * here so search engines can discover and crawl them. This is exactly the
 * pattern Google recommends for "orphan but indexable" SEO landing pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homepage: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  const landing: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [homepage, ...landing];
}
