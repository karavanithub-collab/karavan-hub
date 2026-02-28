import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://karavanhub.com',
      lastModified: '2025-02-27',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://karavanhub.com/ai-solutions',
      lastModified: '2025-02-27',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://karavanhub.com/it-solutions',
      lastModified: '2025-02-27',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://karavanhub.com/about',
      lastModified: '2025-02-27',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://karavanhub.com/contact',
      lastModified: '2025-02-27',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://karavanhub.com/case-studies',
      lastModified: '2025-02-27',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://karavanhub.com/insights',
      lastModified: '2025-02-27',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://karavanhub.com/insights/auto-reply-automation',
      lastModified: '2025-02-10',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
