import { MetadataRoute } from 'next';

const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://karavanhub.com',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://karavanhub.com/ai-solutions',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://karavanhub.com/it-solutions',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://karavanhub.com/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://karavanhub.com/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://karavanhub.com/case-studies',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://karavanhub.com/insights',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://karavanhub.com/insights/auto-reply-automation',
      lastModified: '2026-02-03T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
