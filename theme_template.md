---
name: Verdant Sol
colors:
  surface: '#f8faf6'
  surface-dim: '#d8dbd7'
  surface-bright: '#f8faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f0'
  surface-container: '#eceeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e1e3df'
  on-surface: '#191c1a'
  on-surface-variant: '#434840'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ed'
  outline: '#73796f'
  outline-variant: '#c3c8bd'
  surface-tint: '#496642'
  primary: '#425f3c'
  on-primary: '#ffffff'
  primary-container: '#5a7853'
  on-primary-container: '#ddffd1'
  inverse-primary: '#afd0a4'
  secondary: '#596056'
  on-secondary: '#ffffff'
  secondary-container: '#dde5d8'
  on-secondary-container: '#5f665c'
  tertiary: '#923d36'
  on-tertiary: '#ffffff'
  tertiary-container: '#b0554c'
  on-tertiary-container: '#fff3f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caecbf'
  primary-fixed-dim: '#afd0a4'
  on-primary-fixed: '#062105'
  on-primary-fixed-variant: '#314e2c'
  secondary-fixed: '#dde5d8'
  secondary-fixed-dim: '#c1c9bc'
  on-secondary-fixed: '#161d16'
  on-secondary-fixed-variant: '#41493f'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#400203'
  on-tertiary-fixed-variant: '#7b2d27'
  background: '#f8faf6'
  on-background: '#191c1a'
  surface-variant: '#e1e3df'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  numeric-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  numeric-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1.25rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system expresses a serene, biophilic ethos merged with high-end modern financial technology. Rejecting the clinical coldness of traditional fintech and neon-heavy Web3 aesthetics, it draws inspiration from organic moss gradients, tranquil botanical reserves, and tactile stone artifacts. 

The aesthetic is characterized by:
- **Organic Modernism & Tactile Calm:** Calming sage and deep slate moss surfaces that transition fluidly into crisp, elevated white paper cards.
- **Pill Geometry:** Ubiquitous use of capsules, full-radius segmented toggles, and floating dock bars that provide an ergonomic, touch-first feel.
- **Refined Weight Contrast:** Ultra-bold modern sans-serif typography set against minimalist line iconography and understated subheadings.
- **High-End Physicality:** Matte dark obsidian elements (such as debit cards and popover data pills) grounded by nature-inspired micro-interactions and delicate warm coral accents.

## Colors

The palette revolves around mineral and botanical greens supported by deep slate obsidian and warm organic whites.

- **Primary (`#5A7853` / Muted Moss):** Serves as the signature hue. Used for primary interactive highlights, active toggle fills, financial trend strokes, and vibrant organic gradients (flowing from `#7E9F76` through `#5A7853` down to deep slate `#394835`).
- **Secondary (`#1B221A` / Deep Obsidian Moss):** A near-black, earthy charcoal used for heavy display headlines, floating dock navigation backgrounds, matte card elements, and chart data tooltips.
- **Tertiary (`#E07A70` / Blossom Coral):** An organic floral accent drawn from alpine meadow blooms, reserved strictly for notifications, cautionary alerts, downward financial trends, and delicate visual badges.
- **Neutral (`#F4F6F2` / Warm Limestone):** A soft, chalky off-white background base that prevents glare and provides natural organic warmth beneath pure white card layers (`#FFFFFF`).

On screen canvas backgrounds, utilize vertical linear gradients starting from `#75966D` down into `#43553E` for featured marketing screens and top-level portfolio visualizers. In standard transaction layouts, use `#F4F6F2` canvas with pure `#FFFFFF` rounded containers.

## Typography

Typography relies entirely on **Plus Jakarta Sans**, exploiting its wide proportion, deep apertures, and friendly geometric clarity.

- **Display & Large Numerics:** Display titles and major portfolio amounts feature bold tracking (`-0.03em`) and heavy weights (`700` or `800`) to evoke authority and modern poise. In large currency displays, decimal fractions drop to a slightly lower opacity (`70%`) or lighter weight to reduce cognitive density.
- **Section Headings:** Clean and punchy with zero adornment. Headings are concise, setting clear visual anchors above white content cards.
- **Labels & Captions:** Small category titles (e.g., "Clothes and Shoes", "Next-Gen Finance") stay restrained at 11–13px with medium/semi-bold weights and subtle positive tracking to maintain high legibility even against tinted sage backgrounds.

## Layout & Spacing

The layout is built around a mobile-first, edge-cushioned structure that expands naturally into multi-column dashboard arrangements on larger viewports.

- **Mobile (< 768px):** Strict 4-column fluid layout with an outer canvas margin of `1.25rem` (`margin`) and `1rem` column gutters (`gutter`). Vertical stacking dominates, relying on high card radius and grouped modules.
- **Tablet (768px - 1024px):** 8-column layout with `2rem` screen margins. Metric modules and category expense grids reflow into 2-column or 3-column sibling configurations.
- **Desktop (> 1024px):** 12-column layout maxing out at `1200px` centered width. The organic gradient card acts as the primary left visualizer panel, while data tables and breakdown metrics populate rightward grid tracks.
- **Rhythm:** Spacing follows an intentional 4px/8px modular scale. Card inner padding defaults to `1.25rem` (`20px`), while tightly related element pairs (such as category icons and labels) maintain strict `0.5rem` (`space-sm`) gaps.

## Elevation & Depth

Visual hierarchy does not use aggressive drop shadows or sharp dark drop borders. Depth is achieved via **tonal elevation layers**, **translucent sage backdrops**, and **soft ambient diffusion**.

- **Level 0 (Base Canvas):** Either a soft limestone surface (`#F4F6F2`) or a rich botanical gradient spanning from `#75966D` to `#43553E`.
- **Level 1 (Paper Cards & Tiles):** Pure white `#FFFFFF` cards resting on the neutral canvas. Elevated with ultra-diffuse ambient shadows: `box-shadow: 0 4px 20px -2px rgba(40, 52, 38, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)`.
- **Level 2 (Floating Pills & Translucent Containers):** Used for toggles and status indicators over green backgrounds. Uses a frosted glass effect: `background: rgba(255, 255, 255, 0.18)`, `backdrop-filter: blur(12px)`, with a subtle inner light boundary: `border: 1px solid rgba(255, 255, 255, 0.25)`.
- **Level 3 (Interactive Tooltips & Floating Dock):** Dark obsidian surfaces (`#1B221A` / `#121612`) floating above content. Employs deeper ambient diffusion: `box-shadow: 0 12px 32px -4px rgba(18, 22, 18, 0.24)`.

## Shapes

The system is defined by a **Pill-shaped (Level 3)** geometry that feels ergonomic, thumb-friendly, and naturally eroded like river stones.

- **Micro Elements & Toggles:** Pills and capsules use full circular radius (`9999px` / `rounded-full`). This applies to segmented controls, data point bubbles, status chips, and button handles.
- **Cards & Content Blocks:** Primary modular cards utilize `1.75rem` to `2rem` (`rounded-xl` to `rounded-2xl`) corner radii, preserving smooth, generous sweeps.
- **Top Sheets & Surface Panels:** When bottom sheets or cards rest on canvas boundaries, their top corners carry extra generous curves (`2rem` - `2.5rem`) to maintain friendly contours.

## Components

### Buttons & Interactive Pills
- **Primary Pill Action:** Pill-shaped (`rounded-full`), white background (`#FFFFFF`) with deep obsidian text (`#1B221A`) on green backdrops, or solid deep obsidian (`#1B221A`) with white text on neutral cards. Minimum touch height of 52px. Includes an optional circular icon container offset at the right edge.
- **Translucent Segmented Pill Toggles:** Segmented expense/income toggles utilize a frosted pill track (`rgba(255, 255, 255, 0.15)`). The active segment snaps into place with a crisp white pill fill (`#FFFFFF`) and dark text, while inactive segments maintain white semi-opaque text (`rgba(255, 255, 255, 0.75)`).

### Cards & Modular Grids
- **Standard Metric Card:** Pure white background, `1.5rem` radius, containing a minimal category line icon in a soft slate ring, label in `body-sm` neutral grey, and currency amount set in `numeric-card` bold styling.
- **Hero Green Gradient Card:** Full-bleed or edge-padded card with continuous organic moss gradient. Hosts hero currency totals, time indicators, and trend badges directly on the green surface.

### Floating Dock Navigation
- An elevated, pill-shaped island (`rounded-full`) anchored to the bottom center of the viewport.
- Colored in deep slate obsidian (`#121612`) or solid white (`#FFFFFF`) depending on the context.
- Hosts 4–5 icon targets. The active item is encased in a high-contrast circular pebble shape (e.g. active black circle on white dock, or active white circle on dark dock).

### Data Visualization & Trend Indicators
- **Smooth Area Charts:** Continuous cubic bezier stroke in soft bone white or light mint (`#D9E8D6`, 2.5px thickness). The fill is a subtle downward gradient fading from `rgba(255, 255, 255, 0.25)` to `rgba(255, 255, 255, 0.0)`.
- **Active Data Tooltip:** Floating obsidian pill (`#1B221A`) containing bold metric value, active period, and a green or coral trend pill tag (`2.46%`). Connected to the active data node with a crisp circular dot.
- **Trend Tags:** Pill capsule with light green or coral translucent wash (`rgba(255, 255, 255, 0.2)` or `rgba(224, 122, 112, 0.15)`), featuring an upward or downward arrow and micro percentage label.

### Lists & Activity Feeds
- Flat list rows separated by generous vertical padding (`0.875rem`) rather than hard divider lines.
- Left-aligned icon pebble or rounded merchant avatar, followed by title and category label; right-aligned bold monetary value and timestamp.