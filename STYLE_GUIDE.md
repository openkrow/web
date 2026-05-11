# OpenKrow Design System & Style Guide

**Aesthetic Direction**: Obsidian Intelligence  
**Version**: 1.0  
**Last updated**: May 2026

---

## 1. Design Philosophy

The OpenKrow visual identity centers on "Obsidian Intelligence" — a refined, warm-dark aesthetic inspired by volcanic glass and a crow's amber eye. The dark theme feels like polished obsidian with ember accents; the light theme evokes aged parchment and ink. The overall tone is premium, understated, and quietly confident.

**Core principles:**
- **Warmth over coldness** — amber/gold accents on dark surfaces, never sterile blue-white
- **Texture and depth** — noise overlays, glass-blur cards, gradient glow borders
- **Typographic contrast** — bold geometric display font paired with clean sans-serif body text
- **Problem-first storytelling** — the customer is the hero, not the product

---

## 2. Typography

| Role | Font | CSS Variable | Weights | Usage |
|------|------|-------------|---------|-------|
| **Display** | Syne | `--font-syne` | 400–800 | Headings, logo, CTA buttons, stat values |
| **Body** | Geist Sans | `--font-geist-sans` | default | Body text, descriptions, paragraphs |
| **Mono** | JetBrains Mono | `--font-jetbrains-mono` | 400, 500 | Code, labels, section tags, terminal demo |

### Usage Rules
- Body text uses `font-body` (Geist Sans) as the default on `<body>`.
- Headings use `.font-display` (Syne) — bold, geometric, tightly tracked.
- Labels and tags use `.font-mono` (JetBrains Mono) at small sizes with uppercase + wide tracking.
- Section sub-labels: `font-mono text-[11px] uppercase tracking-[0.25em]`

### Type Scale
- Hero headline: `text-3xl sm:text-4xl md:text-5xl`, `font-extrabold`, `tracking-[-0.03em]`, `leading-[1.05]`
- Section headlines: `text-3xl sm:text-4xl`, `font-bold`, `tracking-[-0.03em]`
- Card titles: `text-base` or `text-lg`, `font-semibold`
- Body text: `text-base` or `text-sm`, `leading-relaxed`
- Labels: `text-[11px]–text-[13px]`

---

## 3. Color System

### Dark Theme (Default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-obsidian` | `#08080C` | Page background |
| `--color-obsidian-100` | `#0E0E14` | Alternate section background |
| `--color-obsidian-200` | `#15151F` | Elevated surfaces |
| `--color-obsidian-300` | `#1C1C2A` | Card backgrounds |
| `--color-obsidian-400` | `#2A2A3D` | Borders, scrollbar |
| `--color-obsidian-500` | `#3D3D55` | Muted text, secondary labels |
| `--color-ember` | `#E5A411` | Primary accent (light theme) |
| `--color-ember-light` | `#F0BE4A` | Primary accent (dark theme, brighter) |
| `--color-ember-glow` | `#E5A41133` | Text-shadow and box-shadow glow |
| `--color-ember-subtle` | `#E5A41118` | Very faint ember tint |

**Dark theme text colors:**
- Primary: `#C8C2B6` (warm gray)
- Muted: `--color-obsidian-500` / `#3D3D55`
- Faint: `--color-obsidian-500`

### Light Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-parchment` | `#F5F0E8` | Page background |
| `--color-parchment-100` | `#EDE7DB` | Alternate section background |
| `--color-parchment-200` | `#E0D8C8` | Borders, surfaces |
| `--color-parchment-300` | `#D4C9B4` | Heavier borders |
| `--color-ink` | `#1A1712` | Primary text |
| `--color-ink-muted` | `#5C5549` | Secondary text |
| `--color-ink-faint` | `#8A8274` | Tertiary / labels |

### Ghost Palette (shared)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ghost` | `#ffffff08` | Dark card backgrounds |
| `--color-ghost-hover` | `#ffffff0D` | Dark hover states |
| `--color-ghost-border` | `#ffffff10` | Dark borders |
| `--color-ghost-border-light` | `#1A17120C` | Light borders |

---

## 4. Component Patterns

### Glass Card (`.glass-card`)
The primary container component. Frosted glass effect with backdrop blur.

- **Light**: `background: #ffffff60`, `border: 1px solid var(--color-ghost-border-light)`, `backdrop-filter: blur(20px)`
- **Dark**: `background: var(--color-ghost)`, `border: 1px solid var(--color-ghost-border)`
- **Hover**: border brightens, `translateY(-2px)` lift

### Ember Border (`.ember-border`)
Gradient border glow that appears on hover. Uses `::after` pseudo-element with CSS `mask-composite: exclude` trick to create a border-only gradient overlay.

- Gradient: `linear-gradient(135deg, ember 0%, transparent 50%, ember 100%)`
- Hidden by default (`opacity: 0`), fades in on hover (`opacity: 0.5`)
- Applied alongside `.glass-card` on interactive cards

### Accent Text (`.ember-text`)
- Light theme: `--color-ember` (#E5A411)
- Dark theme: `--color-ember-light` (#F0BE4A)

### Accent Glow (`.ember-glow`)
Text-shadow glow effect using `--color-ember-glow`. More prominent in dark theme with dual-layer shadow.

### Section Divider (`.section-divide`)
1px horizontal line with gradient fade on both ends. Uses `ghost-border` colors.

---

## 5. Backgrounds & Textures

### Noise Texture Overlay
Applied via `body::before`. Uses an inline SVG with `feTurbulence` filter (fractal noise). Fixed position, covers viewport, `pointer-events: none`.

- Light theme: `opacity: 0.022`
- Dark theme: `opacity: 0.035`

Adds subtle analog grain to prevent flat digital appearance.

### Grid Pattern (Hero section)
CSS `linear-gradient` grid lines at 80px intervals. Very faint (`opacity: 0.025–0.035`). Creates a subtle technical/data feel behind the hero content.

### Atmospheric Glows
Large blurred circles (`blur-[150px]`) with faint ember tint (`bg-ember/[0.03]–[0.05]`). Positioned behind hero and download sections to create depth.

### Vertical Accent Lines
1px wide gradient lines (from transparent → ember/15 → transparent) positioned at edges of sections. Decorative, adds subtle structure.

---

## 6. Animations

| Class | Keyframe | Duration | Easing | Usage |
|-------|----------|----------|--------|-------|
| `.animate-reveal` | `reveal-up` | 0.9s | cubic-bezier(0.16, 1, 0.3, 1) | Page entry — slide up + scale + blur fade |
| `.animate-fade` | `fade-in` | 1.2s | ease | Simple opacity fade |
| `.animate-float` | `float` | 6s | ease-in-out, infinite | Gentle vertical hover |
| `.animate-cursor` | `typing-cursor` | 1s | ease-in-out, infinite | Blinking terminal cursor |
| `.animate-shimmer` | `shimmer` | 3s | ease-in-out, infinite | Gradient shimmer sweep |

### Additional Keyframes (used inline)
| Keyframe | Usage |
|----------|-------|
| `line-scan` | Horizontal scan line across terminal card (8s, linear, infinite) |
| `orbit` | Orbital rotation path (unused, available) |
| `pulse-glow` | Opacity pulse between 0.4–0.8 |

### Stagger Delays
Classes `.delay-1` through `.delay-15` provide animation delays from 0.1s to 1.5s. Used on hero elements for sequential reveal on page load.

---

## 7. Spacing System

| Context | Value | Tailwind |
|---------|-------|----------|
| Section vertical padding | 80px / 112px | `py-20 sm:py-28` |
| Max content width | 1152px | `max-w-6xl` |
| Horizontal page padding | 20px / 32px | `px-5 sm:px-8` |
| Card internal padding | 24px / 32px | `p-6 sm:p-8` |
| Card grid gap | 16px | `gap-4` |
| Card stack gap | 16px | `space-y-4` |
| Section header margin-bottom | 64px | `mb-16` |
| Header height | 64px / 72px | `h-16 sm:h-18` |

---

## 8. Border Radius

| Element | Value | Tailwind |
|---------|-------|----------|
| Cards | 16px | `rounded-2xl` |
| Primary buttons | full pill | `rounded-full` |
| Secondary buttons | full pill | `rounded-full` |
| Icon containers | 12px | `rounded-xl` |
| Large containers | 24px | `rounded-3xl` |
| Status dots | full | `rounded-full` |

The aesthetic leans into soft, rounded shapes — pill buttons, generous card radius.

---

## 9. Buttons

### Primary CTA
```
font-display font-semibold text-sm tracking-wide
bg-ember text-obsidian
rounded-full
shadow-[0_0_30px_rgba(229,164,17,0.15)]
hover:bg-ember-light hover:shadow-[0_0_50px_rgba(229,164,17,0.25)]
```

### Secondary / Ghost
```
text-sm font-medium
border border-ghost-border-light dark:border-ghost-border
rounded-full
text-ink-muted dark:text-obsidian-500
hover:text-ink dark:hover:text-[#C8C2B6]
hover:border-ember/30
```

### Solid Dark (OpenSource section)
```
bg-ink dark:bg-[#C8C2B6]
text-parchment dark:text-obsidian
font-display text-sm font-semibold
rounded-full
```

---

## 10. Dark / Light Theme

The theme toggle switches the `dark` class on `<html>`. Managed by `ThemeProvider.tsx` with localStorage persistence and system preference detection.

All theme-aware styles use Tailwind's `dark:` variant via `@custom-variant dark (&:where(.dark, .dark *))`.

| Aspect | Dark | Light |
|--------|------|-------|
| Mood | Polished obsidian, night intelligence | Aged parchment, ink on paper |
| Background | `#08080C` (near-black) | `#F5F0E8` (warm cream) |
| Accent | Amber/gold `#F0BE4A` | Amber/gold `#E5A411` |
| Primary text | `#C8C2B6` (warm gray) | `#1A1712` (dark brown-black) |
| Card bg | `rgba(255,255,255,0.03)` + blur | `rgba(255,255,255,0.38)` + blur |
| Noise texture | 3.5% opacity | 2.2% opacity |
| Ember glow | Dual-layer text-shadow | Single-layer text-shadow |
| Hover lift | Yes (`translateY(-2px)`) | Yes (`translateY(-2px)`) |

---

## 11. Logo (KrowLogo)

SVG at 48x48 viewBox. Elements:
- Rounded rectangle frame (`rx="12"`, `fillOpacity="0.06"`)
- Geometric "K" letterform (bold, angular)
- "Crow's eye" — amber circle at top-right (`fill="#E5A411"`) with faint glow ring (`fillOpacity="0.2"`)

The logo inherits `currentColor` for the K shape and uses fixed amber for the eye dot.

---

## 12. Content Strategy

Based on Andy Raskin's strategic narrative framework:
1. **Hook** — Start with the problem, not the product ("Stop switching between 10 tabs")
2. **Stakes** — The customer is the hero, not OpenKrow
3. **New Way** — Position as a desktop companion, not a chatbot
4. **Proof** — Real scenarios with persona/context/ask/result pattern
5. **Trust** — Open source, MIT license, auditable code, local data
6. **Action** — Free download, no sign-up required

### Section Pattern
```
<span class="font-mono text-[11px] uppercase tracking-[0.25em]">Label</span>
<h2 class="font-display text-3xl sm:text-4xl font-bold">
  Plain text. <span class="ember-text">Highlighted.</span>
</h2>
<p>Supporting description.</p>
```

---

## 13. File Structure

```
src/
  app/
    globals.css       — Design tokens, utilities, animations
    layout.tsx        — Root layout (Syne + Geist Sans + JetBrains Mono)
    page.tsx          — Page composition
  components/
    ThemeProvider.tsx  — Dark/light toggle with localStorage + system pref
    KrowLogo.tsx      — SVG logo (K + amber eye)
    Header.tsx        — Fixed nav, theme toggle, mobile menu
    Hero.tsx          — Problem-first headline, terminal demo, trust signals
    UseCases.tsx      — 3 scenario cards (Office Worker, Researcher, Developer)
    Features.tsx      — 2x3 feature grid with icon + title + description
    HowItWorks.tsx    — 3-step horizontal flow (Download, API key, Ask)
    OpenSource.tsx    — Trust section with source link + 2x2 metric grid
    Download.tsx      — Platform cards (macOS, Windows, Linux) → GitHub Releases
    Footer.tsx        — Logo, links, copyright
```

---

## 14. Technical Notes

- **Framework**: Next.js 16.2.6 with Turbopack
- **CSS**: Tailwind v4 with `@theme inline {}` for CSS variables (no `tailwind.config.js`)
- **Deployment**: Static export (`output: "export"`) to GitHub Pages via Actions
- **basePath**: `/web` in production only (checked via `NODE_ENV`)
- **Images**: `unoptimized: true` (required for static export)
- **Theme variant**: `@custom-variant dark (&:where(.dark, .dark *))` — Tailwind v4 syntax
