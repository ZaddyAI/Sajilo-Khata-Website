Here is the complete Sajilo Khata design system based on the landing page you liked, including the color palette, typography, gradients, shadows, spacing, border radii, components, and design guidelines. You can use these values to build a consistent website in React, Next.js, Tailwind CSS, or plain CSS.

# 1. Color palette

Primary brand colors

Vibrant Bright Emerald

\#129671

Primary brand, buttons, navigation

Deep Emerald Accent

\#0E7D5E

Hero emphasis, footer, dark cards

Warm Ivory

\#F8F7F2

Main website background

Mint Green

\#D8F3E8

Badges, icon backgrounds

Ink Black

\#202923

Headings and primary text

Muted Teal Gray

\#607873

Secondary text and descriptions

Supporting colors

#### White

\#FFFFFF

#### Pale Mint

\#E7F4EE

#### Coral

\#E97968

#### Success

\#16866B

#### Warning

\#F5C66A

#### Border

\#E8E9E2

## 2. Gradient system

Use gradients sparingly, mainly on the dashboard preview, primary buttons, and decorative illustrations.

Primary emerald gradient

\#0E7D5E → #129671 → #0B664E

Soft background gradient

\#F8F7F2 → #F0F5ED → #E7F4EE

Mint accent gradient

\#D8F3E8 → #AEE3D0

## 3. Typography

Use Inter throughout the English interface. Pair it with Noto Sans Devanagari if you support Nepali-language content.

HERO HEADLINE · 64 PX

# Your money,

# understood.

700–800

SECTION HEADING · 40 PX

# Money management, made simple.

BODY TEXT · 17–18 PX

Automatically organize your income and expenses using supported bank SMS messages.

BUTTON · 15–16 PX

Get the app

Font resources:

- [Inter — Google Fonts](https://fonts.google.com/specimen/Inter)
- [Noto Sans Devanagari — Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+Devanagari)

## 4. Layout and spacing

| Property                      | Recommended value |
| ----------------------------- | ----------------- |
| Maximum content width         | `1370px`          |
| Main horizontal padding       | `5.5vw`           |
| Hero section vertical padding | `72px–96px`       |
| Section spacing               | `100px–128px`     |
| Feature grid gap              | `32px`            |
| Dashboard card padding        | `24px`            |
| Small component gap           | `8px`             |
| Standard component gap        | `16px`            |
| Large component gap           | `24px`            |
| Mobile horizontal padding     | `20px–24px`       |
| Desktop header height         | `88px`            |
| Mobile header height          | `72px`            |

Use a 12-column desktop grid, with the hero text occupying roughly 40% and the dashboard preview 60%. Stack them vertically on mobile, placing the headline and calls to action first.

## 5. Border radius, borders and shadows

Small components

8–12px · Inputs, badges, small icon containers

Cards

16–20px · Feature cards, transaction panels

Hero dashboard

24px · Large dashboard and promotional panels

Recommended CSS shadows:

```
:root {
  --shadow-card:
    0 4px 16px rgba(25, 55, 40, 0.05);

  --shadow-dashboard:
    0 24px 64px rgba(25, 55, 40, 0.14);

  --shadow-button:
    0 5px 16px rgba(20, 92, 69, 0.18);

  --border-default: 1px solid #E8E9E2;
}
```

## 6. Component design

PRIMARY BUTTON

Get the app →

Forest green fill, white text, pill radius, subtle shadow.

SECONDARY BUTTON

See how it works ↗

Transparent fill, mint-green border, green text.

FEATURE CARD

## Automatic tracking

Your supported bank SMS alerts become organized transactions, with less manual effort.

## 7. Complete website theme tokens

Copy this CSS into your project as the starting point for a reusable design system.

```

:root {
  /* Brand */
  --color-primary: #145C45;
  --color-primary-dark: #0D4738;
  --color-primary-deep: #08634D;
  --color-primary-light: #D8F3E8;
  --color-primary-soft: #E7F4EE;

  /* Surfaces */
  --color-background: #F8F7F2;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F0F5ED;
  --color-border: #E8E9E2;

  /* Typography */
  --color-text: #202923;
  --color-text-secondary: #607873;
  --color-text-inverse: #FFFFFF;

  /* Finance status */
  --color-income: #16866B;
  --color-expense: #E97968;
  --color-warning: #F5C66A;

  /* Gradients */
  --gradient-brand: linear-gradient(
    135deg, #08634D 0%, #145C45 55%, #0D4738 100%
  );

  --gradient-background: linear-gradient(
    135deg, #F8F7F2 0%, #F0F5ED 55%, #E7F4EE 100%
  );

  /* Typography */
  --font-sans: "Inter", sans-serif;
  --font-nepali: "Noto Sans Devanagari", sans-serif;
  --font-size-body: 17px;
  --font-size-small: 14px;
  --font-size-hero: clamp(42px, 5vw, 72px);
  --line-height-body: 1.65;
  --line-height-heading: 1.08;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Shape */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-card: 20px;
  --radius-dashboard: 24px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-card: 0 4px 16px rgba(25, 55, 40, 0.05);
  --shadow-dashboard: 0 24px 64px rgba(25, 55, 40, 0.14);
  --shadow-button: 0 5px 16px rgba(20, 92, 69, 0.18);

  /* Layout */
  --container-width: 1370px;
  --page-gutter: 5.5vw;
  --section-spacing: 112px;
}

```

## 8. Website sections and visual rules

| Section           | Design treatment                                          |
| ----------------- | --------------------------------------------------------- |
| Navbar            | Ivory background, dark logo, minimal links, green CTA     |
| Hero              | Two-column layout, large headline, dashboard preview      |
| Dashboard preview | White panels, deep-green balance card, mint status panel  |
| Features          | Three-column grid, mint icon backgrounds, minimal borders |
| How it works      | Three clear steps with simple illustrations               |
| Privacy           | Soft mint background, concise and transparent messaging   |
| FAQ               | Minimal accordion cards and clear typography              |
| Footer            | Deep forest-green background, ivory text, muted links     |

Important: Treat the generated image as a visual reference, not a source of verified product behavior. For example, only advertise supported banks, actual SMS-processing behavior, and real privacy protections that your app implements.

For additional design references, explore [Inter](https://fonts.google.com/specimen/Inter), [Material Design 3](https://m3.material.io/styles/color/overview), and [Tailwind CSS](https://tailwindcss.com/docs/theme), which provide guidance for typography, accessible color systems, and reusable theme tokens.