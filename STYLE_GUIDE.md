# OpenKrow Design System & Style Guide

**Aesthetic Direction**: Forged Precision  
**Version**: 2.0  
**Last updated**: May 2026

---

## 1. Design Philosophy

The OpenKrow visual identity centers on "Forged Precision" — a brutalist, technical aesthetic inspired by developer tooling and engineering documentation. Light theme with sharp edges, grid textures, and warm orange accents. The overall tone is functional, confident, and no-nonsense.

**Core principles:**
- **Sharp over soft** — no border-radius, dashed dividers, brutalist cards
- **Light with dark inversions** — white base with dark section breaks for contrast
- **Technical typography** — geometric sans + monospace labels, no decorative fonts
- **Interactive texture** — animated dot patterns that respond to cursor proximity
- **Desktop-native storytelling** — position as a desktop app, never a CLI tool or chatbot
- **Substance over flash** — content-first, whitespace-driven, no gratuitous animation

---

## 2. Typography

| Role | Font | CSS Variable | Weights | Usage |
|------|------|-------------|---------|-------|
| **Body / Headings** | Space Grotesk | `--font-space-grotesk` | 300–700 | All headings, body text, paragraphs |
| **Mono / Labels** | Space Mono | `--font-space-mono` | 400, 700 | Section tags, badges, stat labels |
| **Code** | JetBrains Mono | `--font-jetbrains-mono` | 400, 500 | Code snippets, app mockup content |

### Usage Rules
- Body text uses `font-body` (Space Grotesk) as the default on `<body>`.
- Headings use Space Grotesk bold — geometric, clean, tightly tracked.
- Section labels use `font-mono` (Space Mono) at small sizes with uppercase + wide tracking.
- Section sub-labels: `font-mono text-xs uppercase tracking-wider text-[#fb923c]`

### Type Scale
- Hero headline: `text-4xl sm:text-5xl lg:text-6xl`, `font-bold`, `tracking-tight`, `leading-[1.1]`
- Section headings: `text-3xl sm:text-4xl`, `font-bold`
- Feature titles: `text-2xl`, `font-bold`
- Body text: `text-base` or `text-lg`, `leading-relaxed`
- Labels: `text-xs`, `font-mono`, `uppercase`, `tracking-wider`

---

## 3. Color System

### Light Theme (Default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#FAFAFA` | Window chrome, subtle surfaces |
| `--color-border` | `#E5E5E5` | Solid borders |
| `--color-border-dashed` | `#cecec9` | Dashed section dividers |
| `--color-grid-line` | `#e9e9e4` | Grid background lines |
| `--color-text` | `#0F172A` | Headings, primary text |
| `--color-text-secondary` | `#475569` | Body text, descriptions |
| `--color-text-tertiary` | `#94A3B8` | Muted text, placeholders, timestamps |
| `--color-accent` | `#fb923c` | Brand orange — links, glows, highlights |
| `--color-accent-hover` | `#f97316` | Orange hover state (deeper) |

### Dark Sections (Inverted)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | `#0A0A0A` | Dark section bg (OpenSource, Footer) |
| `--color-dark-700` | `#111111` | Dark card bg |
| `--color-dark-500` | `#1A1A1A` | Dark elevated surface |
| `--color-dark-400` | `#222222` | Dark hover surface |

Dark section text: `#FFFFFF` for headings, `#94A3B8` for body, `#666` for muted.

### Semantic Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Success / Green | `#28c840` | Checkmarks, completion states, "Done" |
| Window Red | `#ff5f57` | macOS close dot |
| Window Yellow | `#ffbd2e` | macOS minimize dot |
| Window Green | `#28c840` | macOS maximize dot |

---

## 4. Component Patterns

### Section Header
The standard section opening. Mono label above a bold heading.
```
font-mono text-xs uppercase tracking-wider text-[#fb923c] mb-4  → label
text-3xl sm:text-4xl font-bold text-[#0F172A]                   → heading
```

### Desktop App Window Mockup
The primary demo container. Mimics a native macOS window — **never** a terminal.
```
bg-white border border-[#e9e9e4] rounded-none overflow-hidden shadow-2xl
├── Chrome: bg-[#fafafa] border-b border-[#e9e9e4] px-4 py-3
│   ├── Dot: w-3 h-3 rounded-full bg-[#ff5f57]
│   ├── Dot: w-3 h-3 rounded-full bg-[#ffbd2e]
│   ├── Dot: w-3 h-3 rounded-full bg-[#28c840]
│   └── Label: font-mono text-xs text-[#94A3B8]
└── Body: p-5 (chat messages, task steps, etc.)
```

### Chat Message (inside app mockup)
- **User**: `w-7 h-7 bg-[#f1f5f9]` avatar + `bg-[#f8fafc] border border-[#e9e9e4]` bubble
- **Agent**: `w-7 h-7 bg-[#fb923c]/10 text-[#fb923c]` avatar + task step list

### Feature Row (alternating layout)
12-column grid. Text in `col-span-5`, mockup in `col-span-7`. Alternate `order` per row.

### Badges
Dashed border with heartbeat animation:
```
px-3 py-1 text-xs font-mono border border-dashed border-[#fb923c]/30 text-[#fb923c] rounded-none animate-heartbeat
```

### Stat Grid (dark sections)
`gap-px bg-[#333]` creates 1px dividers between cells. Each cell: `bg-[#0A0A0A] p-8 text-center`.

---

## 5. Backgrounds & Textures

### Static Grid (CSS)
For sections needing a subtle technical texture without interactivity:
```css
.grid-background {
  background-image:
    linear-gradient(to right, #e9e9e4 1px, transparent 1px),
    linear-gradient(to bottom, #e9e9e4 1px, transparent 1px);
  background-size: 40px 40px;
}
```
Dark variant uses `rgba(255,255,255,0.05)`.

### Interactive Dot Pattern (Canvas)
Used on Hero and Download via the `<DotPattern>` component. Properties:

| Prop | Value | Description |
|------|-------|-------------|
| `dotSize` | 2 | Dot diameter in px |
| `gap` | 28 | Space between dots |
| `baseColor` | `#d4d4d4` | Resting dot color |
| `glowColor` | `#fb923c` | Mouse proximity glow color |
| `proximity` | 120–140 | Highlight radius in px |
| `glowIntensity` | 1–1.2 | Glow brightness multiplier |
| `waveSpeed` | 0.3–0.5 | Ambient wave animation speed |

Behavior:
- Dots pulse in opacity/size via a sine wave (ambient)
- On mouse proximity: color interpolates to orange, size scales up, radial glow appears
- Uses smoothstep easing for natural falloff
- Canvas resizes via `ResizeObserver`
- Mouse events bound to container (works through content layers)

---

## 6. Animations

| Class | Effect | Duration | Easing |
|-------|--------|----------|--------|
| `.animate-fade-in-up` | Fade in + slide up 20px | 600ms | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-heartbeat` | Scale pulse 1→1.05→1 | 6s | ease-in-out, infinite |
| `.animate-marquee` | Horizontal scroll loop | 30s | linear, infinite |
| `.animate-cursor` | Blinking cursor | 1s | ease-in-out, infinite |
| `.token-animate` | Typewriter token reveal | 300ms | ease |

### Stagger Delays
Classes `.delay-0` through `.delay-5` (100ms increments) for sequential reveals.

### ScrollReveal
Uses `IntersectionObserver` (threshold 0.1) to trigger `.animate-fade-in-up` when an element enters the viewport. One-shot — does not reverse.

---

## 7. Spacing System

| Context | Value | Tailwind |
|---------|-------|----------|
| Max content width | 1200px | `max-w-[1200px]` |
| Horizontal padding | 24px | `px-6` |
| Section vertical padding | 80px | `py-20` |
| Hero vertical padding | 80–112px | `py-20 lg:py-28` |
| Grid gap (feature rows) | 32px | `gap-8` or `gap-12` |
| Section header margin-bottom | 64px | `mb-16` |
| Header height | 64px | `h-16` |
| Feature spacing | 80px | `space-y-20` |

---

## 8. Border Radius

| Element | Value | Tailwind |
|---------|-------|----------|
| Cards | 0 | `rounded-none` |
| Buttons | 0 | `rounded-none` |
| Badges | 0 | `rounded-none` |
| Install command blocks | 0 | `rounded-none` |
| macOS dots | full | `rounded-full` |

**The aesthetic is fully brutalist — no border-radius on any container or interactive element.** Only circular elements (dots, avatars) use `rounded-full`.

---

## 9. Buttons & CTAs

### Primary (Download)
```
bg-[#0F172A] text-white px-6 py-3 font-medium text-sm
hover:bg-[#1e293b] transition-colors
```

### Link / Secondary
```
text-[#fb923c] hover:text-[#f97316] font-medium text-sm
inline-flex items-center gap-2
+ arrow SVG icon
```

### Bordered (dark sections)
```
border border-[#333] text-white px-6 py-3 text-sm font-medium
hover:border-[#fb923c] hover:text-[#fb923c] transition-all
```

---

## 10. Borders & Dividers

- **Section dividers**: Dashed, using `border-b border-dashed border-[#cecec9]`
- **Card borders**: Solid 1px `border-[#e9e9e4]`
- **Dark section card borders**: `border-[#333]`
- **Gap-based dividers**: `gap-px bg-[#e9e9e4]` on grid creates 1px solid lines between cells
- **Mobile menu separator**: `border-t border-dashed border-[#cecec9]`

All section boundaries use **dashed** borders. No solid horizontal rules.

---

## 11. Iconography

- No icon library — all icons are inline SVGs
- GitHub, Discord, X (Twitter) social icons in the header and footer
- Arrow icons for CTAs: right arrow (`M17 8l4 4m0 0l-4 4m4-4H3`) or download arrow
- Checkmarks for task completion: `&#10003;` character in `text-[#28c840]`
- Platform icons (macOS, Windows, Linux) as SVG paths in Download section
- Heart icon for "Trusted by" with `.animate-heartbeat`

---

## 12. Content Strategy

OpenKrow is a **desktop app** — a local AI companion. Content must reflect this:

1. **Never show terminal/CLI** as the primary interface. Use desktop app window mockups.
2. **Chat-style demos** — show user message → agent task steps → result
3. **Privacy-first messaging** — "local", "private", "no cloud", "your machine"
4. **Persona**: helpful, efficient, non-intrusive. Lives on your desktop, not in your browser.
5. **Use cases**: office work (reports, emails), research (summaries, citations), file management
6. **Trust signals**: open source, MIT license, no telemetry, BYO API key

### Section Hierarchy
```
Announcement Banner → Header → Hero (DotPattern) → Trusted By (marquee)
→ Features (Why OpenKrow? — 4 alternating rows) → Benchmarks (bar chart)
→ Open Source (dark, stats grid) → Download (DotPattern, platform cards) → Footer (dark)
```

---

## 13. File Structure

```
src/
  lib/
    utils.ts            — cn() helper for classnames
  app/
    globals.css         — Design tokens, grid backgrounds, animations
    layout.tsx          — Root layout (Space Grotesk + Space Mono + JetBrains Mono)
    page.tsx            — Page composition with ScrollReveal
  components/
    DotPattern.tsx      — Interactive canvas dot background (wave + mouse glow)
    Header.tsx          — Sticky nav, logo, links, GitHub/Discord icons, mobile menu
    Hero.tsx            — 2-col hero: headline + app window mockup, DotPattern bg
    TrustedBy.tsx       — Marquee scroll of user personas
    Features.tsx        — 4 alternating feature rows (text + app mockup)
    Benchmarks.tsx      — Bar chart comparison section
    OpenSource.tsx      — Dark section: stats grid, Discord CTA, GitHub link
    Download.tsx        — Platform cards (macOS/Win/Linux), DotPattern bg
    Footer.tsx          — Dark bg, 3-col links, social icons, copyright
```

---

## 14. Technical Notes

- **Framework**: Next.js 16.2.6 with Turbopack
- **React**: 19.2.4
- **CSS**: Tailwind v4 with `@import "tailwindcss"` + `@theme inline {}` for design tokens
- **No component library**: All UI hand-built with Tailwind utilities + inline SVGs
- **Canvas animations**: `requestAnimationFrame` loop with `ResizeObserver` for responsive sizing
- **Deployment**: Static export to GitHub Pages via Actions
- **basePath**: `/web` in production (checked via `NODE_ENV`)
- **Images**: `unoptimized: true` (required for static export)
- **No dark/light toggle**: Light is default. Dark used only for specific sections (OpenSource, Footer).

---

## 15. Desktop App UI Guidelines

When building the actual OpenKrow desktop application, follow these visual rules:

| Aspect | Guideline |
|--------|-----------|
| Window chrome | Native macOS/Windows/Linux title bar — no custom chrome |
| Layout | Single-column chat interface with sidebar for history |
| Input | Bottom-anchored text input with placeholder "Ask OpenKrow anything..." |
| Messages | User bubble (light gray bg) + Agent steps (checkmark list) |
| Agent avatar | Orange-tinted square with "K" |
| Status indicators | Green checkmarks for completed steps |
| File references | Inline code-style pill: `bg-[#f8fafc] border border-[#e9e9e4] text-xs` |
| Accent color | `#fb923c` orange for agent identity, links, progress |
| Typography | Space Grotesk for UI, JetBrains Mono for file paths and code |
| Borders | Sharp corners (0 radius) on all cards, inputs, buttons |
| Transitions | Subtle — 150ms color/opacity transitions only, no bounces or springs |
| Empty state | Centered prompt suggestions in muted text |
| Loading | Blinking cursor (`.animate-cursor`) or pulsing orange dot |
