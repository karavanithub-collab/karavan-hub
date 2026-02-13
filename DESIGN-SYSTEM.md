# KaravanHub Design System

> Single source of truth for all page implementations.
> Wireframe CSS is canonical. Every value below is verified against the homepage wireframe.

---

## 1. Colors

### Primary Palette

| Token | Hex | CSS Variable | Tailwind Class | Usage |
|-------|-----|-------------|----------------|-------|
| Primary | `#2563EB` | `--primary` | `text-primary` / `bg-primary` | Buttons, links, accents |
| Primary Dark | `#1D4ED8` | `--primary-dark` | `text-primary-dark` | Hover states |
| Primary Deeper | `#1E3A8A` | `--primary-deeper` | `text-primary-deeper` | Dark emphasis |
| Primary Light | `#EFF6FF` | `--primary-light` | `bg-primary-light` | Light backgrounds, hover fills |

### Accent Colors

| Token | Hex | CSS Variable | Tailwind Class | Usage |
|-------|-----|-------------|----------------|-------|
| Accent Cyan | `#22D3EE` | `--accent-cyan` | `text-accent-cyan` | Nav CTA, hero accents |
| Accent Purple | `#8B5CF6` | `--accent-purple` | `text-accent-purple` | Glow effects, decorative |

### Text Colors

| Token | Hex | CSS Variable | Tailwind Class | Usage |
|-------|-----|-------------|----------------|-------|
| Text Dark | `#1A1A2E` | `--text-dark` | `text-text-dark` | Headings, primary text |
| Text Body | `#4A4A68` | `--text-body` | `text-text-body` | Body paragraphs |
| Text Muted | `#6B7280` | `--text-muted` | `text-text-muted` | Subtitles, captions |

### Background & Border

| Token | Hex | CSS Variable | Tailwind Class |
|-------|-----|-------------|----------------|
| BG Light | `#F9FAFB` | `--bg-light` | `bg-bg-light` |
| Border Light | `#E5E7EB` | `--border-light` | `border-border-light` |

### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Success | `#10B981` | Positive states |
| Error | `#EF4444` | Error states |

### Ocean Gradient (Dark Sections)

| Token | Hex | Usage |
|-------|-----|-------|
| Ocean Darkest | `#000022` | Footer/Trust top |
| Ocean Dark | `#000035` | Footer/Trust mid |
| Ocean Mid | `#001242` | Footer/Trust bottom |

Footer gradient: `bg-gradient-to-b from-ocean-darkest via-ocean-dark to-ocean-mid`

---

## 2. Typography

### Font Families

| Role | Font | CSS Variable | Tailwind Class | Loaded Weights |
|------|------|-------------|----------------|----------------|
| Headlines | Space Grotesk | `--font-headline` | `font-headline` | 400, 500, 600, 700 |
| Body | DM Sans | `--font-body` | `font-body` | 400, 500, 600, 700 |
| Code/Mono | JetBrains Mono | `--font-mono` | `font-mono` | 400, 500 |
| Editorial | Playfair Display | `--font-serif` | `font-serif italic` | 400, 500, 600, 700 |

### Font Assignments by Element

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height | Tracking |
|---------|------|--------|----------------|---------------|-------------|----------|
| **Hero H1** | Space Grotesk | 700 | `clamp(48px, 7vw, 80px)` | auto | 1.05 | -1.5px |
| **Section H2** | Space Grotesk | 500 | 42px | 26px (sm: 32px) | 1.2 | -0.5px |
| **Card H3** | Space Grotesk | 600 | 24px (`text-2xl`) | same | 1.3 | -0.25px |
| **Body text** | DM Sans | 400 | 16px | same | 1.7 | normal |
| **Body large** | DM Sans | 400 | 17px | same | 1.75 | normal |
| **Nav links** | DM Sans | 600 | 15px | 28px (mobile) | normal | normal |
| **Buttons** | Space Grotesk | 600 | 15px | same | normal | normal |
| **Captions** | DM Sans | 500 | 14px | same | normal | normal |
| **ASCII art** | JetBrains Mono | 400 | varies | varies | 1.15 | normal |
| **Trust H2** | Space Grotesk | 500 | 42px | 26px (sm: 32px) | 1.2 | -0.5px |

### Responsive Font Pattern

Always use arbitrary values with responsive prefixes (mobile-first):

```jsx
className="text-[26px] sm:text-[32px] md:text-[42px]"
```

Never use Tailwind's preset sizes (`text-xl`, `text-3xl`) for section headings. Always use exact pixel values from the wireframe.

---

## 3. Spacing

### Section Vertical Padding

| Breakpoint | Padding | Tailwind |
|------------|---------|----------|
| Mobile (base) | 60px | `py-[60px]` |
| Tablet (md) | 80px | `md:py-[80px]` |
| Desktop (lg) | 120px | `lg:py-[120px]` |

### Container

```css
.container-main {
  max-width: 1240px;
  margin: 0 auto;
  /* Responsive horizontal padding: */
  padding: 0 48px;           /* Desktop (lg+) = px-12 */
  padding: 0 32px;           /* Tablet (md-lg) = px-8 */
  padding: 0 24px;           /* Mobile (sm-md) = px-6 */
  padding: 0 20px;           /* Small mobile (<480px) = px-5 */
}
```

Use `container-main` class OR equivalent inline Tailwind:
```jsx
className="max-w-[1240px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12"
```

### Component Spacing

| Component | Gap/Margin | Tailwind |
|-----------|-----------|----------|
| Grid columns (desktop) | 64px | `lg:gap-[64px]` |
| Grid columns (tablet) | 40px | `md:gap-10` |
| Card internal padding | 28px-40px | `p-7 lg:p-10` |
| Between heading and text | 16px-24px | `mb-4` to `mb-6` |
| Between text and CTA | 32px | `mb-8` |

---

## 4. Layout

### Breakpoints (Mobile-First)

| Name | Width | Tailwind Prefix |
|------|-------|----------------|
| Base | 0px+ | (no prefix) |
| Small | 640px+ | `sm:` |
| Medium | 768px+ | `md:` |
| Large | 1024px+ | `lg:` |
| XL | 1280px+ | `xl:` |

**CRITICAL**: Always write mobile-first. Base styles = mobile. Add prefixes for larger screens.

```jsx
// CORRECT (mobile-first, ascending)
className="px-6 sm:px-8 lg:px-12"

// WRONG (desktop-first, descending)
className="px-12 md:px-8 sm:px-6"
```

### Grid Patterns

**2-column service cards:**
```jsx
className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[64px]"
```

**2-column CTA (image + form):**
```jsx
className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
```

**4-column footer:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10 lg:gap-[64px]"
```

---

## 5. Components

### Primary Button (Blue)

```jsx
<a className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg font-headline text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 shadow-lg">
```

### Nav CTA Button (Cyan)

```jsx
<Link className="bg-accent-cyan text-slate-900 px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-0.5"
  style={{ boxShadow: '0 4px 20px rgba(34, 211, 238, 0.3)' }}>
```

### Service Card

```jsx
<div className="bg-white rounded-[16px] p-7 lg:p-10 border border-[var(--border-light)] shadow-card">
  <h3 className="font-headline text-2xl font-semibold text-[var(--text-dark)] mb-3">
    {title}
    <span className="block text-sm font-medium text-[var(--text-muted)] mt-1">{subtitle}</span>
  </h3>
  <p className="text-[16px] text-[var(--text-body)] mb-6 leading-[1.7]">{description}</p>
</div>
```

### Form Fields

```jsx
<input className="w-full px-4 py-3.5 rounded-lg border border-[var(--border-light)] bg-[var(--bg-light)] text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] font-body focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200" />
```

### FAQ Accordion

See `globals.css` — accordion classes: `.software-accordion`, `.webdesign-accordion`, etc.
Key specs: header padding 22px 0, h4 at 17px/600, body text at 15px/1.7, list items with blue check bullets.

---

## 6. Shadows

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| Card | `0 12px 24px rgba(37, 99, 235, 0.12)` | `shadow-card` |
| Nav (scrolled) | `0 2px 20px rgba(0, 0, 0, 0.08)` | `shadow-nav` |
| Dropdown | `0 12px 40px rgba(0, 0, 0, 0.12)` | `shadow-dropdown` |
| Button | `0 4px 20px rgba(37, 99, 235, 0.3)` | `shadow-btn` |
| CTA form | `0 24px 64px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)` | inline style |

---

## 7. Gradients

### Hero Background

```
linear-gradient(180deg, #000022 0%, #000035 40%, #001242 100%)
```

### Hero Accent Text

```
background: linear-gradient(135deg, #22D3EE, #8B5CF6)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

### Light Section Background

```
bg-gradient-to-b from-[var(--bg-light)] to-white
```

### Ocean Gradient (Footer/Trust)

```
bg-gradient-to-b from-ocean-darkest via-ocean-dark to-ocean-mid
```

---

## 8. Animations & Transitions

### Standard Transition

```
transition-all duration-300
```

### Button Hover

```
hover:-translate-y-0.5 transition-all duration-300
```

### Dropdown

```
opacity-0 invisible -translate-y-2 transition-all duration-250
→ group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
```

### Float Animation

```css
animation: float 6s ease-in-out infinite;
/* 0%: translateY(0) → 25%: translateY(-10px) → 50%: translateY(-20px) → 75%: translateY(-10px) */
```

### Fade In Up

```css
animation: fadeInUp 0.6s ease-out forwards;
/* from: opacity 0, translateY(20px) → to: opacity 1, translateY(0) */
```

---

## 9. ASCII Art Glow Classes

12 glow utility classes for Trust section ASCII art. Applied in `globals.css`:

| Class | Color Family | Intensity |
|-------|-------------|-----------|
| `.glow-c1` | Cyan (#22D3EE) | Bright |
| `.glow-c2` | Cyan (#67E8F9) | Medium |
| `.glow-c3` | Cyan (#A5F3FC) | Soft |
| `.glow-p1` | Purple (#8B5CF6) | Bright |
| `.glow-p2` | Purple (#A78BFA) | Medium |
| `.glow-p3` | Purple (#C4B5FD) | Soft |
| `.glow-b1` | Blue (#2563EB) | Bright |
| `.glow-b2` | Blue (#3B82F6) | Medium |
| `.glow-b3` | Blue (#60A5FA) | Soft |
| `.glow-g1` | Green (#22C55E) | Bright |
| `.glow-g2` | Green (#4ADE80) | Medium |
| `.glow-g3` | Green (#86EFAC) | Soft |

---

## 10. Cyberpunk Visual Containers

Used for service page hero visuals. Key classes:

- `.visual-container` — dark gradient bg, 24px radius, cyan border glow, grid overlay
- `.visual-container-purple` — purple variant
- `.circuit-overlay` — SVG circuit pattern
- `.scanline-overlay` — CRT scanline effect
- `.edge-glow` — inset border glow
- `.corner-accent` — 60px corner bracket markers
- `.holo-label` — floating holographic data labels
- `.depth-glow` — blurred color orbs for depth
- `.hotspot` — glowing 6px accent dots

---

## 11. Responsive Checklist for New Pages

When building any new page, follow this checklist:

### Pre-Build

- [ ] Check if a wireframe HTML exists for this page
- [ ] Identify which breakpoints the wireframe uses (`@media` queries)
- [ ] Map wireframe CSS values to Tailwind arbitrary notation

### Typography

- [ ] All headings use `font-headline` (Space Grotesk)
- [ ] All body text inherits `font-body` (DM Sans) from body element
- [ ] All code/mono text uses `font-mono` (JetBrains Mono)
- [ ] Font sizes use exact pixel values: `text-[15px]`, `text-[17px]`, etc.
- [ ] Line heights use exact values: `leading-[1.2]`, `leading-[1.7]`
- [ ] Letter spacing uses exact values: `tracking-[-0.5px]`

### Layout

- [ ] Section uses `container-main` or equivalent max-w/mx-auto/px
- [ ] Section vertical padding: `py-[60px] md:py-[80px] lg:py-[120px]`
- [ ] Grid uses `grid-cols-1` as base, adding columns at breakpoints
- [ ] Mobile-first: base styles = mobile, prefixes = larger screens

### Colors

- [ ] Headings: `text-[var(--text-dark)]` or `text-text-dark`
- [ ] Body text: `text-[var(--text-body)]` or `text-text-body`
- [ ] Muted text: `text-[var(--text-muted)]` or `text-text-muted`
- [ ] Borders: `border-[var(--border-light)]` or `border-border-light`
- [ ] Never use generic Tailwind grays — always use our design tokens

### Components

- [ ] Buttons use `font-headline text-[15px] font-semibold`
- [ ] Cards use `rounded-[16px]` border radius
- [ ] Form inputs use `rounded-lg` with focus ring
- [ ] Links use `transition-colors duration-300`

### Accessibility

- [ ] Semantic HTML tags (`section`, `article`, `nav`, `aside`)
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Alt text on all images
- [ ] `aria-label` on interactive elements without visible text
- [ ] Focus states on all interactive elements
- [ ] `prefers-reduced-motion` respected (already global)
- [ ] `prefers-contrast: high` respected (already global)

---

## 12. File Structure

```
src/
├── app/
│   ├── globals.css          ← Global styles, glow effects, visual containers
│   ├── layout.tsx           ← Font loading, metadata, Navbar + Footer wrapping
│   └── page.tsx             ← Homepage
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       ← Shared navigation (fixed, scrolled state)
│   │   └── Footer.tsx       ← Shared footer
│   └── sections/
│       └── HomeFAQ.tsx      ← FAQ accordion component
public/
├── images/                  ← All static images (jpg, webp, svg)
tailwind.config.ts           ← All design tokens, shadows, animations
```

### Shared Components (Automatic)

The Navbar and Footer are rendered in `layout.tsx` — they wrap ALL pages automatically. No need to include them in individual page files.

---

## 13. Page Build Workflow

1. **Get wireframe HTML** → Open in browser, inspect every CSS value
2. **Map CSS to Tailwind** → Use arbitrary notation for exact values
3. **Build mobile-first** → Start with base (mobile), add sm/md/lg prefixes
4. **Use design tokens** → Never hardcode colors, use CSS variables or Tailwind tokens
5. **Verify against wireframe** → Compare pixel-by-pixel at each breakpoint
6. **Push to GitHub** → Auto-deploys to Vercel
7. **Verify on Vercel** → Check live site at all breakpoints
8. **Audit** → Run a section-by-section audit against wireframe values

---

## 14. Key Rules

1. **Wireframe CSS is the source of truth** — never approximate
2. **Use arbitrary Tailwind values** — `text-[15px]` not `text-sm`
3. **Mobile-first always** — base = mobile, add prefixes for larger
4. **Space Grotesk for all headings** — `font-headline` class required
5. **DM Sans for body** — inherited from `<body>`, no class needed
6. **48px container padding on desktop** — descends to 20px on small mobile
7. **16px card border-radius** — `rounded-[16px]` or `rounded-card`
8. **120px section padding on desktop** — `lg:py-[120px]`
9. **Every shadow has a Tailwind token** — `shadow-card`, `shadow-nav`, etc.
10. **Transitions are 300ms** — `duration-300` unless wireframe says otherwise
