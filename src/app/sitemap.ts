import { MetadataRoute } from 'next';

const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.karavanhub.com',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.karavanhub.com/ai-solutions',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.karavanhub.com/it-solutions',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.karavanhub.com/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.karavanhub.com/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.karavanhub.com/case-studies',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.karavanhub.com/insights',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.karavanhub.com/insights/auto-reply-automation',
      lastModified: '2026-02-03T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.karavanhub.com/ai-agents',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.karavanhub.com/rag-systems',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.karavanhub.com/custom-chatbots',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];
}
