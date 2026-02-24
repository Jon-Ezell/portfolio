# Portfolio — Claude Context

## About the Owner
**Jon Ezell** — Senior Product Designer specializing in AI-powered products, systems thinking, and consumer experience.
- Site: [ezell.guru](https://ezell.guru)
- Email: jon@ezell.guru

## Live Site Reference
The current live site at **ezell.guru** is the primary visual and content reference for this rebuild.

### Case Studies (live at these URLs)
| Route | Live URL |
|-------|----------|
| `/scoot` | ezell.guru/scoot |
| `/deep-journey` | ezell.guru/deep-journey |
| `/zephyr` | ezell.guru/zephyr |

The live site has significant animations: scroll-triggered reveals, physics-based movement, and immersive transitions. Reference it when unsure about feel or content.

---

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Design source**: Figma (MCP server for design tokens)

---

## Project Structure
```
/app
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page — assembles section components
  /scoot/page.tsx     # Scoot case study
  /deep-journey/page.tsx
  /zephyr/page.tsx

/components
  /layout
    Nav.tsx           # Fixed top nav
  /sections
    Hero.tsx          # Homepage hero
    WorkGrid.tsx      # Case study card grid
    About.tsx         # About section
  /ui                 # Reusable atoms (buttons, tags, etc.)
  /case-study         # Shared case study layout components
```

---

## Design System

> Extracted directly from the live site CSS (Webflow export). Source of truth.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` / `--background-light` | `#f8f3ec` | Page body background |
| `near-black` / `--near-black` | `#191919` | Dark section backgrounds, cards |
| `black` | `#000000` | Hero container, pure black sections |
| `orange` / `--orange-text` | `#e76e52` | Accent text, highlights, bold callouts |
| `gray` / `--light-grey` | `#8a8a8a` | Secondary text |
| `green` | `#29ea89` | Marquee / animated accent |
| `blue` | `#3166ed` | Marquee / animated accent |

In Tailwind: `bg-cream`, `bg-near-black`, `text-orange`, `text-gray`, etc.

Card/block backgrounds use alpha variants: `#191919cc` (80%), `#191919b3` (70%).

### Typography
Two typefaces, sourced from Webflow CDN (see `globals.css` `@font-face` rules):

| Family | Tailwind class | Usage |
|--------|---------------|-------|
| PP Neue Machina (wt 300/400/700) | `font-display` | Nav, body copy, UI text |
| MD Nichrome (wt 100–900 + italic) | `font-body` | Section headings, paragraphs |
| MD Nichrome Ultra | `font-ultra` | Hero display, giant numbers |
| MD Nichrome Dark | `font-dark` | Subheadings, labels |
| MD Nichrome Infra | `font-infra` | Hairline decorative |

**⚠️ Font licensing note:** These fonts are PP Neue Machina (Pangram Pangram) and MD Nichrome (Mass-Driver). Currently loaded from the Webflow CDN. Self-host in `/public/fonts/` before production and verify you have a license for non-Webflow deployment.

### Type Scale
| Token | Size | Usage |
|-------|------|-------|
| `text-nav` | 14px | Nav links (+ `tracking-nav: 0.5em`, uppercase) |
| `text-body` | 16px | Default body |
| `text-lg` | 18px | Body large |
| `text-xl` | 20px | Sub-body headings |
| `text-2xl` | 24px | Small section headings |
| `text-3xl` | 27px | Subheadings (MD Nichrome Dark) |
| `text-4xl` | 30px | Section headings |
| `text-label` | 44px | Section labels / `.display-3` |
| `text-d1` | 62px | Large display |
| `text-d2` | 94px | Extra-large display |
| `text-d3` | 100px | Hero section headings |
| `text-d4` | 120px | Maximum display size |

### Animation Patterns (Framer Motion)
- **Entrance**: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Scroll reveal**: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- **Easing**: `[0.16, 1, 0.3, 1]` (matches live site cubic-bezier `0.23, 1, 0.32, 1`)
- **Stagger**: `delay: i * 0.1` on grid items
- **Page transition**: Curtain `translateY` 800ms ease (black overlay slides up on load)
- **Custom cursor**: 20px white circle, `mix-blend-mode: difference`

### Layout
- Max container width: 1920px, padding: `5.625em` sides
- Nav: `height: 48px`, fixed, centered horizontally at `top: 5%`
- Nav pill: `background: #070707e3`, `border-radius: 7px`
- Cards: `background: #191919cc`, `border-radius: 10px`

---

## How to Work With This Codebase

### Making Copy Updates
Components are small and named by function. To update copy:
- **Hero headline/subhead** → `components/sections/Hero.tsx`
- **Nav links** → `components/layout/Nav.tsx`
- **Work grid descriptions** → `components/sections/WorkGrid.tsx` (the `projects` array)
- **About text** → `components/sections/About.tsx`
- **Case study content** → `app/[slug]/page.tsx`

### Adding New Sections
1. Create `components/sections/NewSection.tsx`
2. Import and add it to `app/page.tsx`

### Adding Case Study Content
Case study pages live at `app/[slug]/page.tsx`. Each one uses `Nav` from `components/layout/Nav.tsx`. Case study layout components (hero, media, text blocks) go in `components/case-study/`.

---

## Figma MCP
When the Figma MCP server is connected, use it to pull color tokens, spacing, and component designs directly. The Figma file has color variables defined — text styles and full components may need to be inferred from the live site.

---

## Deployment
- Hosted on Vercel, connected to this git repo
- `main` branch auto-deploys to production
