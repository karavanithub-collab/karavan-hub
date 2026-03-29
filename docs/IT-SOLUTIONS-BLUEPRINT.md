# IT Solutions Page Blueprint

> Reference document for building new Karavan IT HUB pages.
> The AI Solutions page (and all future pages) should follow these exact patterns.

---

## 1. Page Architecture

### File Structure

```
src/app/{page-name}/
  page.tsx              # Server Component (NO 'use client')

src/components/{page-name}/
  AccordionWrapper.tsx  # Client Component wrapper ('use client')

src/components/ui/
  Accordion.tsx         # Reusable accordion (client component)
```

### Server/Client Split

- **page.tsx** is always a Server Component. Export `metadata` object directly.
- Interactive elements (accordions, animations with state) go in a separate Client Component wrapper imported by the page.
- Event handlers (`onClick`, `onMouseEnter`) cannot exist in Server Components. Use Tailwind hover/focus utilities instead.

### Section Order (IT Solutions Pattern)

1. Hero (full viewport, dark gradient)
2. Trust/Stats Strip (light gradient)
3. Content Section 1 (white, image left)
4. Content Section 2 (white, image right)
5. Content Section 3 (white, image left)
6. Content Section 4 (white, image right)
7. Technology Stack (dark gradient, full bleed)
8. Final CTA (light gradient)

Each content section contains:
- Two-column grid (`lg:grid-cols-2`)
- Sticky image on one side
- Heading + subtitle + accordion on the other side

---

## 2. Color System

### CSS Custom Properties (globals.css)

```css
--primary: #2563EB;
--primary-dark: #1D4ED8;
--primary-deeper: #1E3A8A;
--primary-light: #EFF6FF;

--accent-cyan: #22D3EE;
--accent-purple: #8B5CF6;

--text-dark: #1A1A2E;
--text-body: #4A4A68;
--text-muted: #6B7280;

--bg-white: #FFFFFF;
--bg-light: #F9FAFB;
--border-light: #E5E7EB;

--success: #10B981;
--error: #EF4444;
```

### Background Gradients

| Section | Gradient |
|---|---|
| Hero | `from-[#0f172a] via-[#1e3a8a] to-[#2563eb]` (diagonal) |
| Tech Stack | `linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e3a8a 60%, #2563eb 100%)` |
| Trust Strip | `linear-gradient(180deg, #f8fafc 0%, #f0f7ff 50%, #f8fafc 100%)` |
| Final CTA | `linear-gradient(180deg, #f0f9ff, #e0f2fe)` |
| Content Sections | `bg-white border-t border-gray-200` |

### Glow Orbs (Hero & Dark Sections)

Three animated gradient orbs create ambient depth:
- Blue: `from-[#3b82f6]` (8s pulse, no delay)
- Cyan: `from-[#22d3ee]` (8s pulse, -4s delay)
- Purple: `from-[#8b5cf6]` (8s pulse, -8s delay)

All use `bg-gradient-radial` with opacity 0.4-0.6, blurred via `blur-3xl`.

---

## 3. Typography

### Font Stack

| Purpose | Font | Variable | Weights |
|---|---|---|---|
| Headlines | Space Grotesk | `--font-headline` | 400, 500, 600, 700 |
| Body | DM Sans | `--font-body` | 400, 500, 600, 700 |
| Code/Mono | JetBrains Mono | `--font-mono` | 400, 500 |
| Serif (Blog) | Playfair Display | `--font-serif` | 400, 500, 600, 700 |

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Hero H1 | `clamp(48px, 7vw, 80px)` | bold | 1.05 | -1.5px |
| Section H2 | `clamp(28px, 4vw, 42px)` | 500 | 1.15 | -0.5px |
| Subtitle | 17px-19px | 600 | 1.6-1.75 | -- |
| Body | 15px-16px | 400-500 | 1.6-1.7 | -- |
| Accordion H4 | 17px | 600 | 1.4 | -0.2px |
| Stat number | 26px-32px | bold | 1 | -1px |
| Stat label | 11px-12px | 500 | -- | 0.5px (uppercase) |
| Tech tags | 13px-14px | 500 | -- | -- |
| CTA button | 15px | 600 | 1 | 0.5px (uppercase) |

### Text Colors by Context

- Dark backgrounds: `text-white`, `text-white/75` (body), `text-white/60` (secondary)
- Light backgrounds: `var(--text-dark)` (headings), `var(--text-body)` (body), `var(--text-muted)` (secondary)
- Accent: `var(--primary)` (stat numbers, links)
- Check marks: `#22c55e` (green)

---

## 4. Layout & Spacing

### Container

```
max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10
```

Some sections use `max-w-[1200px]` or `lg:px-12`. Be consistent within a page.

### Section Padding (Vertical)

| Section Type | Padding |
|---|---|
| Standard content | `py-[40px] md:py-[56px] lg:py-[80px]` |
| Hero | `pt-[90px] md:pt-[100px] pb-[60px] md:pb-[80px]` + `min-h-[100vh]` |
| Tech stack | `py-[60px] md:py-[80px] lg:py-[120px]` |
| Final CTA | `py-[60px] md:py-[80px] lg:py-[100px]` |
| Trust strip | `py-10 md:py-12` |

### Grid System

```
Two-column content:
  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start

Tech stack cards:
  grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6

Stats grid:
  grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8
```

### Border Radius

| Element | Radius |
|---|---|
| Images | `rounded-2xl` (16px) |
| Cards | `rounded-[24px]` (24px) |
| Buttons | `rounded-lg` (8px) |
| Tech tags | `rounded-full` |
| Accordion highlight | 12px |

---

## 5. Component Patterns

### Accordion

**Structure:**
```tsx
// AccordionWrapper.tsx ('use client')
'use client';
import Accordion from '@/components/ui/Accordion';

export default function AccordionWrapper({ items, type }) {
  return <Accordion items={items} type={type} />;
}

// Usage in page.tsx (Server Component)
<AccordionWrapper items={softwareItems} type="software" />
```

**Accordion Types:** `'software' | 'webdesign' | 'analytics' | 'transform'`

Each type generates CSS class names: `{type}-accordion`, `{type}-accordion-item`, etc.

**Accessibility (required):**
- `aria-expanded` on trigger button
- `aria-controls` linking button to panel
- `role="region"` on panel
- `aria-labelledby` linking panel back to button
- `aria-hidden` on collapsed panels
- Default open: index 0 (first item)

**Animation:**
- Body: `max-height` transition, `0.35s cubic-bezier(0.4, 0, 0.2, 1)`
- Icon: `rotate(180deg)` on open, `transition-transform duration-300`
- Last item gets `.accordion-highlight` with gradient background

### Check List Items

```tsx
<ul className="list-none p-0 pb-5 m-0">
  <li className="flex items-start gap-2.5 text-[15px] text-[var(--text-body)] leading-[1.6] mb-2.5 last:mb-0">
    <Check className="flex-shrink-0 w-[18px] h-[18px] text-[#22c55e] mt-0.5" size={18} />
    <span>Benefit text here</span>
  </li>
</ul>
```

### CTA Buttons

**Primary (on light backgrounds):**
```tsx
<Link
  href="/contact"
  className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
  style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)' }}
>
  Button Text
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</Link>
```

**Hero (on dark backgrounds):**
```tsx
<Link
  href="/contact"
  className="inline-flex items-center gap-2.5 bg-white text-[#1e3a8a] px-9 py-[18px] rounded-lg text-[15px] font-semibold leading-none uppercase tracking-[0.5px] no-underline transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5"
  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}
>
```

### Image Component

```tsx
<Image
  src="/images/software-dev.jpg"
  alt="Descriptive alt text for accessibility"
  width={800}
  height={700}
  priority          // Only for first above-fold image
  className="w-full h-auto object-cover rounded-2xl"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

- Wrap in `<div className="lg:sticky lg:top-24">` for desktop scroll behavior
- Only the first image gets `priority`
- `sizes` attribute is required for responsive srcset generation

### Tech Stack Tags

```tsx
<span className="inline-flex items-center gap-2.5 py-3.5 px-5 bg-white/[0.08] border border-white/[0.12] rounded-full text-[13px] md:text-[14px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 hover:-translate-y-0.5">
  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-[18px] h-[18px]" />
  React
</span>
```

Touch target minimum: `py-3.5` ensures 48px+ height for mobile accessibility.

---

## 6. SEO Metadata Template

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Karavan IT HUB',
  description: 'Max 155 chars. Include primary keyword naturally.',
  keywords: 'primary keyword, secondary keyword, location keyword',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://karavanhub.com/{page-slug}',
  },
  openGraph: {
    type: 'website',
    title: 'Page Title | Karavan IT HUB',
    description: 'Same or shorter than meta description.',
    url: 'https://karavanhub.com/{page-slug}',
    siteName: 'Karavan IT HUB',
    locale: 'en_CA',
    images: [
      {
        url: 'https://karavanhub.com/images/og-{page-slug}.jpg',
        width: 1200,
        height: 630,
        alt: 'Descriptive alt text',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | Karavan IT HUB',
    description: 'Same as OG description.',
    images: ['https://karavanhub.com/images/twitter-{page-slug}.jpg'],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Niagara, Ontario',
    'geo.position': '43.0896;-79.0849',
    ICBM: '43.0896, -79.0849',
  },
};
```

**Rules:**
- `canonical` goes under `alternates`, never at the top level
- Always include `locale: 'en_CA'`
- Geo tags are required for GEO optimization
- OG image dimensions: 1200x630

---

## 7. JSON-LD Schema Patterns

Every service page needs these 5 schemas:

### 7.1 Service Schema

```tsx
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Name',
  description: 'Service description.',
  provider: {
    '@type': 'Organization',
    name: 'Karavan IT HUB',
    url: 'https://karavanhub.com',
    logo: 'https://karavanhub.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  },
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'State', name: 'Ontario' },
    { '@type': 'City', name: 'Niagara' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sub-service Name',
          description: 'Sub-service description.',
        },
      },
    ],
  },
};
```

### 7.2 FAQPage Schema

```tsx
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Question text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer text.',
      },
    },
  ],
};
```

Populate from accordion items. Each accordion item = one FAQ entry.

### 7.3 BreadcrumbList Schema

```tsx
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://karavanhub.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Page Name',
      item: 'https://karavanhub.com/{page-slug}',
    },
  ],
};
```

### 7.4 HowTo Schema

```tsx
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Karavan IT HUB Delivers [Service]',
  description: 'Process description.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Step Name',
      text: 'Step description.',
      position: 1,
    },
  ],
};
```

Use 4 steps matching the process flow.

### 7.5 Speakable Schema (AEO)

```tsx
const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Title',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#heading-1', '#heading-2', '#heading-3', '#heading-4'],
  },
  url: 'https://karavanhub.com/{page-slug}',
};
```

Point `cssSelector` at the main section heading IDs.

### Rendering Pattern

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>
```

Place all schema scripts at the top of the returned JSX, before visible content.

---

## 8. Accessibility Requirements

### ARIA Attributes (Required)

| Element | Attributes |
|---|---|
| Sections | `id`, `aria-label` or `aria-labelledby` |
| Accordion trigger | `role="button"`, `aria-expanded`, `aria-controls` |
| Accordion panel | `role="region"`, `aria-labelledby`, `aria-hidden` |
| Images | Descriptive `alt` text (never empty for content images) |
| Links | Meaningful text or `aria-label` for icon-only links |
| External links | `target="_blank" rel="noopener noreferrer"` |

### Keyboard Navigation

Focus-visible styles are defined globally:
```css
a:focus-visible,
button:focus-visible,
[role="button"]:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets

Minimum 48px height on all interactive elements. Tech tags use `py-3.5` (14px padding) + text height to exceed 48px.

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  --text-dark: #000000;
  --text-body: #333333;
  --bg-white: #ffffff;
  --border-light: #000000;
}
```

---

## 9. Responsive Breakpoints

### Tailwind Breakpoints Used

| Breakpoint | Width | Common Changes |
|---|---|---|
| Base (mobile) | < 640px | Single column, smaller text, `px-5` |
| `sm` | 640px | Slightly larger text, `px-6` |
| `md` | 768px | Two-column stats, medium spacing, `px-8` |
| `lg` | 1024px | Two-column content, sticky images, full spacing, `px-10` |

### Mobile-First Patterns

```
Text sizing:    text-[32px] sm:text-[40px] md:text-[48px]
Padding:        px-5 sm:px-6 md:px-8 lg:px-10
Grid:           grid-cols-1 lg:grid-cols-2
Visibility:     hidden lg:flex (desktop-only elements)
Image order:    order-last (push image below text on mobile)
```

### Image Responsive Sizing

```tsx
sizes="(max-width: 1024px) 100vw, 50vw"
```

Full width on mobile/tablet, half width on desktop (two-column layout).

---

## 10. Brand Voice Guidelines

### Humanizer Prompt Rules

These rules govern ALL copywriting on the site:

1. **No em dashes.** Use periods or commas instead.
2. **Avoid these words:** delve, leverage, tapestry, landscape, robust, comprehensive, multifaceted, facilitate, paradigm, synergy, utilize, streamline, cutting-edge, spearhead, pivotal
3. **Lists use 2 or 4 items.** Never 3 items.
4. **Plain language.** Write at a Grade 8 reading level.
5. **Short sentences.** Average 15 words per sentence.
6. **Active voice.** Subject does the action.
7. **Contractions are OK.** "You'll" instead of "You will".
8. **No corporate jargon.** Say "tools" not "solutions ecosystem".
9. **Second person.** Address the reader as "you" and "your".
10. **Be specific.** Use real numbers, real examples, real outcomes.

### Tone

- Authentic and warm
- Helpful without being salesy
- Empathetic to small business struggles
- Confident but not arrogant
- Technical when needed, plain when possible

### Section Heading Style

- Direct and benefit-focused
- Use "you/your" language where possible
- Avoid generic headings like "Our Services" or "What We Do"
- Good: "Software That Fits How You Already Work"
- Bad: "Our Comprehensive Software Solutions"

---

## 11. File Structure Reference

```
karavan-hub/
  docs/
    IT-SOLUTIONS-BLUEPRINT.md    # This file
  public/
    images/
      software-dev.jpg           # 166KB, blue isometric tech
      web-design.jpg             # 182KB, dark teal wireframe
      data-analytics.jpg         # 178KB, orange dashboard
      digital-transformation.jpg # 175KB, purple circuit board
  src/
    app/
      globals.css                # Custom properties, animations, utilities
      layout.tsx                 # Root layout, fonts, base metadata
      robots.ts                  # Crawl rules
      sitemap.ts                 # Dynamic sitemap
      it-solutions/
        page.tsx                 # IT Solutions page (Server Component)
      ai-solutions/
        page.tsx                 # AI Solutions page (to be built)
    components/
      it-solutions/
        AccordionWrapper.tsx     # Client wrapper for accordion
      ui/
        Accordion.tsx            # Reusable accordion component
  .eslintrc.json                 # ESLint config (no-unescaped-entities off)
  .gitignore
  next.config.js                 # Image domains, webpack config
  tailwind.config.ts             # Extended theme, custom colors/fonts
  tsconfig.json
```

---

## 12. Implementation Checklist

When building a new page (e.g., AI Solutions), complete every item:

### Setup
- [ ] Create `src/app/{page-name}/page.tsx` as Server Component
- [ ] Create `src/components/{page-name}/AccordionWrapper.tsx` as Client Component
- [ ] Add page images to `public/images/`

### Metadata & SEO
- [ ] Export `metadata` with title, description, keywords
- [ ] Add `canonical` under `alternates` (not top-level)
- [ ] Add OpenGraph with 1200x630 image
- [ ] Add Twitter card
- [ ] Add geo meta tags (CA-ON, Niagara coordinates)
- [ ] Add `robots: 'index, follow, max-image-preview:large, max-snippet:-1'`

### JSON-LD Schemas
- [ ] Service schema with provider, areaServed, offerCatalog
- [ ] FAQPage schema from accordion Q&A content
- [ ] BreadcrumbList schema (Home > Page Name)
- [ ] HowTo schema (4-step process)
- [ ] Speakable schema pointing to section heading IDs

### Accessibility
- [ ] All sections have `id` and `aria-label`/`aria-labelledby`
- [ ] All accordion items have full ARIA attributes
- [ ] All images have descriptive `alt` text
- [ ] All interactive elements meet 48px touch target
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Focus-visible styles apply (inherited from globals.css)

### Responsive
- [ ] Test at 375px (mobile), 768px (tablet), 1024px+ (desktop)
- [ ] Images use `sizes` attribute
- [ ] Typography uses `clamp()` for hero, responsive classes elsewhere
- [ ] Grid collapses to single column on mobile
- [ ] Touch targets verified on mobile

### Brand Voice
- [ ] No em dashes in any copy
- [ ] No banned words (delve, leverage, tapestry, etc.)
- [ ] Lists use 2 or 4 items, never 3
- [ ] Headings are benefit-focused and use "you/your"
- [ ] Copy is Grade 8 reading level

### Build
- [ ] `npm run build` passes with no errors
- [ ] All static pages generate successfully
- [ ] No TypeScript errors
- [ ] No ESLint warnings in your files

---

## Animations Reference

### Keyframes (globals.css)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
  25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
  50% { transform: translateY(-20px) translateX(-5px); opacity: 0.4; }
  75% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
}
```

### Keyframes (tailwind.config.ts)

```
ambientPulse: 8s ease-in-out infinite (opacity 0.4-0.6, scale 1-1.03)
float: 6s ease-in-out infinite (translateY 0 to -10px)
fadeInUp: 0.6s ease-out forwards (opacity 0->1, translateY 20px->0)
```

### Staggered Delays

Use `animationDelay` (not CSS custom property `--delay`) for TypeScript compatibility:
```tsx
style={{ animationDelay: '0s' } as React.CSSProperties}
style={{ animationDelay: '-4s' } as React.CSSProperties}
style={{ animationDelay: '-8s' } as React.CSSProperties}
```

### Box Shadows

```
Button: 0 4px 20px rgba(37, 99, 235, 0.3)
Button hover: 0 6px 24px rgba(37, 99, 235, 0.4)
Card: 0 12px 24px rgba(37, 99, 235, 0.12)
Hero button: 0 8px 32px rgba(0, 0, 0, 0.2)
Visual (images): 0 25px 50px -12px rgba(0, 0, 0, 0.4)
```

---

## Common Pitfalls

1. **`canonical` placement**: Must be under `alternates: { canonical: '...' }`, not at the metadata root. TypeScript will error.
2. **Curly braces in JSX**: Literal `{` and `}` in text must be wrapped: `{'{ text }'}`.
3. **CSS custom properties in inline styles**: Use `animationDelay` instead of `'--delay'`. Cast with `as React.CSSProperties` if needed.
4. **Event handlers in Server Components**: Use Tailwind `hover:` / `focus:` utilities instead of `onMouseEnter`/`onMouseLeave`.
5. **Unescaped quotes in JSX**: Apostrophes in text content may trigger ESLint. Rule is disabled in `.eslintrc.json` but avoid where possible.
6. **Image domains**: Any external image source must be added to `next.config.js` `remotePatterns`.
