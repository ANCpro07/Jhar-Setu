---
name: Civic Horizon
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4944'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6f7974'
  outline-variant: '#bfc9c2'
  surface-tint: '#226a53'
  primary: '#004331'
  on-primary: '#ffffff'
  primary-container: '#0d5c46'
  on-primary-container: '#8cd2b6'
  inverse-primary: '#8ed5b9'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#00423d'
  on-tertiary: '#ffffff'
  tertiary-container: '#005b55'
  on-tertiary-container: '#7dd2c9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aaf1d4'
  primary-fixed-dim: '#8ed5b9'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#00513d'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#9cf2e8'
  tertiary-fixed-dim: '#80d5cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  max-content-width: 1280px
---

## Brand & Style

This design system delivers an institutional yet distinctly human civic interface for Jharkhand's collaborative innovation portal. It balances the statutory dignity of government service delivery with the agility and clarity required by academic institutions (HEIs), industry partners, and grassroots rural citizens. 

The aesthetic philosophy centers on **Civic Humanism**: an approachable modernism grounded in heavy structural clarity, spacious layouts, high-contrast readability, and respectful minimalism. The interface avoids bureaucratic clutter, dense text walls, and hyper-technological novelty. Instead, it utilizes clear information hierarchy, tactile affordances, deliberate step-based progression, and explicit signposting to engender trust, equity, and ease of resolution.

## Colors

The palette establishes credibility through rooted natural tones while retaining rigorous WCAG AAA compliance across interactive contexts.

- **Primary (`#0D5C46`)**: Deep Civic Emerald Teal. Represents public trust, sustainability, and administrative stability. Applied to primary navigational bars, core action buttons, active navigational states, and high-level headings.
- **Secondary (`#D97706`)**: Warm Saffron / Amber. Used deliberately for progress indicators, attention milestones, status alerts, callouts, and secondary focal triggers. Ensures high visibility without evoking alarm.
- **Tertiary (`#0F766E`)**: Forest Teal. Serves as a supporting interactive layer, accent boundary, and hover state for primary elements.
- **Neutral Core (`#0F172A`)**: Deep Slate. Used for primary typography, authoritative borders, and grounded iconography.
- **Surface Canvas (`#F8FAFC` to `#FFFFFF`)**: Crisp, light slate foundations paired with pristine white elevated surfaces to maximize legibility and visual separation.
- **Borders & Rules (`#E2E8F0` / `#CBD5E1`)**: Subtle structural dividers ensuring modular containment without visual noise.

## Typography

Typography prioritizes extreme legibility, humane geometry, and resilient optical clarity at all display scales. 

- **Typeface**: **Plus Jakarta Sans** serves as the singular typeface across headings, body content, and functional labels. Its generous x-height, wide apertures, and structured geometric curves prevent visual degradation across lower-density screens commonly utilized in non-urban administrative centres.
- **Rhythm & Hierarchy**: Every type level features proportional line-heights exceeding 1.4x for body text to reduce cognitive strain during intensive application reviews or grievance filings.
- **Bilingual & Multilingual Preparedness**: Font scale choices and structural container heights explicitly account for script expansions (such as Devanagari alongside English) to avoid vertical clipping or awkward reflows.

## Layout & Spacing

The layout model is governed by an 8pt base grid applied to a strict 12-column responsive fluid grid framework, capped at a maximum width of `1280px` for optimal reading spans.

- **Desktop (1024px and above)**: 12-column grid, `1.5rem` (24px) gutters, `2rem` (32px) outer margins. Sidebars for administrative navigation and timeline overviews lock to 3 or 4 columns, granting primary task flows the remaining 8 or 9 columns.
- **Tablet (768px - 1023px)**: 8-column grid, `1rem` (16px) gutters, `1.5rem` (24px) margins. Complex multi-column tables transition to contextual cards with horizontal scroll safeguards.
- **Mobile (Below 768px)**: 4-column grid, `1rem` (16px) gutters and margins. Form sequences collapse into single-column vertical flows with persistent, thumb-friendly bottom-anchored actions.

## Elevation & Depth

This system avoids heavy, artificial, or high-blur drop shadows. Depth is achieved primarily through **tonal surface layering** combined with crisp structural outlines, supplemented by very subtle, warm-tinted ambient shadows.

- **Surface Layer 0 (Canvas)**: `#F8FAFC`. The foundational backdrop for all page areas.
- **Surface Layer 1 (Base Cards & Modules)**: `#FFFFFF` encased in a crisp border (`1px solid #E2E8F0`). Flat elevation; distinction is achieved by chromatic contrast against the canvas.
- **Surface Layer 2 (Raised Controls & Dropdowns)**: `#FFFFFF` with a `1px solid #CBD5E1` border and an ambient shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Surface Layer 3 (Modals, Overlays & Drawers)**: `#FFFFFF` resting over a `rgba(15, 23, 42, 0.45)` slate scrim with a defined elevation: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.

## Shapes

The interface embraces a **Soft (Level 1)** corner philosophy. The default base radius is `0.25rem` (4px), scaling to `0.5rem` (8px) on cards and panels (`rounded-lg`), and `0.75rem` (12px) on prominent modal windows and floating containers (`rounded-xl`).

Status badges, pill indicators, and step counter nodes employ fully rounded circular geometry (`9999px`) to create clear geometric contrast against structural form containers and data tables.

## Components

### Buttons
- **Primary Action**: Solid deep emerald (`#0D5C46`) background, crisp white typography, `0.25rem` corner radius, `0.75rem 1.5rem` padding. Hover: `#0F766E`. Active: `#094333`. Focus ring: 3px solid `#D97706` offset by 2px.
- **Secondary Action**: Transparent background with a `1.5px solid #0D5C46` border and `#0D5C46` text. Hover: `#0D5C46` at 5% opacity.
- **Tertiary / Utility**: Ghost button with `#0F172A` text, expanding padding on hover with `#F1F5F9` background.

### Status Indicators & Badges
- Strict color-pair logic utilizing high-contrast, tint-grounded containers:
  - **In Progress / Under Review**: Background `#FEF3C7`, text `#92400E`, border `#FCD34D`.
  - **Resolved / Approved**: Background `#ECFDF5`, text `#065F46`, border `#A7F3D0`.
  - **Escalated / Action Required**: Background `#FEF2F2`, text `#991B1B`, border `#FECACA`.
  - **Submitted / Pending Allocation**: Background `#F0FDFA`, text `#115E59`, border `#99F6E4`.

### Stepped Progress Indicators (Resolution Pipeline)
- Horizontal step bars (desktop) collapsing to vertical accordions (mobile).
- **Completed Nodes**: Solid `#0D5C46` circle with white checkmark icon.
- **Current Active Node**: Saffron amber ring (`#D97706`) with a centered `#D97706` core and bold label.
- **Upcoming Nodes**: `#E2E8F0` circle with neutral slate numeral (`#64748B`).

### Form Inputs & Selectors
- Background: `#FFFFFF`. Border: `1.5px solid #CBD5E1`. Internal padding: `0.75rem 1rem`. Radius: `0.25rem`.
- **Focus State**: `1.5px solid #0D5C46` with a soft teal outer glow (`rgba(13, 92, 70, 0.15)`).
- **Labels**: Always persistent above inputs (never floating placeholder-only) to assist cognitive retention and screen readers. Required indicators marked in `#D97706`.

### Cards & Innovation Tiles
- Clean white surfaces with `1px solid #E2E8F0` boundary. Internal padding: `1.5rem`.
- Header area includes category tag (e.g., "HEI Research Challenge", "Rural Water Grievance", "CSR Funding Window"), right-aligned date/status, and clear anchor titles leading to detailed dossier views.