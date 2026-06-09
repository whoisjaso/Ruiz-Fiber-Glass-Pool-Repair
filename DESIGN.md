# Design

## System Overview

Ruiz Fiberglass Pool Repair uses a direct local-contractor visual system based on work-truck graphics: bold black lettering, Texas red phone emphasis, clean white surfaces, concrete gray texture, and pool-blue water accents. The page should look practical, readable, and repair-focused.

## Color Palette

```css
:root {
  --jet-black: #111111;
  --texas-red: #C8102E;
  --clean-white: #FFFFFF;
  --soft-white: #F7F7F7;
  --concrete-gray: #D9D9D9;
  --dark-gray: #2E2E2E;
  --pool-blue: #1E88C8;
  --water-blue: #47BFEA;
}
```

## Typography

- Display and service labels: Oswald-style condensed bold stack, using `Oswald`, `Arial Narrow`, `Impact`, and system sans fallbacks.
- Body, forms, and support copy: Barlow/Montserrat-style sans stack, using `Barlow`, `Montserrat`, `Segoe UI`, and system sans fallbacks.
- Headings should be bold and compact, with no negative letter spacing.
- Body copy should stay easy to scan on mobile.

## Layout

- Single-page lead-generation structure.
- Sticky desktop header and mobile sticky action bar.
- Wide hero with large logo-style lockup, service promise, contact strip, and obvious CTAs.
- Service cards use black header bars, red numbered badges, white bodies, and pool-blue visual areas.
- Service menu uses HTML rows with dotted leader lines.
- Process steps stack cleanly on mobile and connect horizontally on desktop.
- Contact and estimate form sections should be high contrast and easy to complete.

## Components

- Buttons: solid red primary, solid black secondary, white outline on dark panels.
- Cards: 1px borders, 8px radius maximum, no heavy shadows.
- Form controls: visible labels, 8px radius, high contrast borders, large tap targets.
- Badges: red or black contractor labels, used sparingly.
- Visual assets: SVG logo, Texas mark, pool-outline motif, water texture, concrete texture, crack-line and repair diagrams.

## Motion

- Gentle reveal on major sections using IntersectionObserver.
- No motion-gated content. Everything remains visible without JavaScript.
- Respect `prefers-reduced-motion: reduce`.

## Content Voice

Plain, local, and specific. Use direct service nouns and verbs: repair cracks, inspect leaks, replace skimmers, refinish surfaces, install overlays, request an estimate. Do not overstate reviews or use luxury language.
