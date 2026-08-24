---
name: tailwind-component
description: Guides the creation and styling of UI components in maadan.dev using Tailwind CSS v4, custom theme design tokens, font definitions, and dark-mode glassmorphism patterns.
license: MIT
compatibility:
  product: maadan-portfolio
  runtime: independent-browsing-agent
---

# Skill: Tailwind CSS v4 Component Styling — maadan.dev

## Tailwind CSS v4 Setup

- **No `tailwind.config.ts`**: All theme configurations and design tokens are declared directly in `src/index.css` under `@theme {}`.
- **Never generate a `tailwind.config.js/ts` file**.

## Color Tokens

| Token | Class Name | Usage |
| :--- | :--- | :--- |
| `#050505` | `bg-background` | Page background |
| `#111111` | `bg-surface` | Card / panel base surface |
| `#1a1a1a` | `bg-surface-hover` / `hover:bg-surface-hover` | Hover states on interactive cards |
| `#27272a` | `border-border` | Subtle structural borders |
| `#fafafa` | `text-text-primary` | Primary headings, titles, prominent text |
| `#a1a1aa` | `text-text-secondary` | Body copy, subtitles, secondary metadata |
| `#3b82f6` | `text-accent`, `bg-accent` | Primary blue accent color |
| `rgba(59,130,246,0.15)` | `bg-accent/15` | Accent glows and highlights |

## Typography & Font Utilities

| Font Family | Utility Class | Typical Usage |
| :--- | :--- | :--- |
| **Inter** | `font-sans` | Body copy, general UI labels |
| **Outfit** | `font-display` | Card headings, section titles |
| **Geist Mono** | `font-mono` | Code snippets, terminal UI, timestamps |
| **Bebas Neue** | `font-bebas` | Large display titles, section numerals |
| **Barlow** | `font-barlow` | Subheadings, editorial copy |
| **Barlow Condensed** | `font-barlow-condensed` | HUD labels, badge tags, status tickers |

## Surface & Glassmorphism Utilities

- **Glass panel**: Use `glass-panel` or `bg-surface/80 backdrop-blur-md border border-border` for floating cards, navigation overlays, and drawers.
- **Radial spotlight effect**: Use inline CSS variables `--mouse-x` and `--mouse-y` with radial gradients for interactive card spotlights.

## Animation Utilities

- `animate-fade-in`: Fade in element over 1s.
- `animate-slide-up`: Slide up with cubic bezier easing `cubic-bezier(0.16, 1, 0.3, 1)`.

## Print Media Rules

- When building components for the `/resume` route, always consider print styles.
- Add `.no-print` to interactive-only widgets (terminals, floating buttons, custom cursors).
- Use Tailwind responsive prefixes (`md:`, `lg:`) instead of static breakpoints.