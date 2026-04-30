# Spacestation Website

A Next.js 15 duplicate of [spacestation.vc](https://www.spacestation.vc/) — identical content, design, and functionality.

## Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Montserrat (Google Fonts)
- **Language:** TypeScript
- **Deployment:** GitHub Pages (static export via `output: 'export'`)

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable UI components
- `data/` — Static data files (portfolio JSON, team data, etc.)

## Pages
| Route | Description |
|---|---|
| `/` | Homepage: Hero, Thesis, Portfolio carousel, Team, CTA |
| `/our-portfolio` | Full portfolio grid with type + industry filters |
| `/contact` | Dummy contact form (to be replaced with real form later) |
| `/privacy-policy` | Static legal page |
| `/terms-conditions` | Static legal page |

## Components
- `Navbar` — logo, nav links, contact CTA button
- `Footer` — links, social icons, copyright
- `HeroSection` — headline, subtext, CTA
- `ThesisSection` — investment philosophy + 4 belief cards
- `TeamSection` — grid of team member cards
- `PortfolioCarousel` — auto-scrolling logo carousel (homepage)
- `PortfolioGrid` — filterable card grid (portfolio page)
- `FilterControls` — type + industry filter buttons
- `ContactForm` — name, email, message fields
- `CTABanner` — reusable call-to-action block

## Data
- `data/portfolio.json` — 96 portfolio companies with name, logo URL, type, industry, website

## Design Reference
- **Colors:** White/light background, black text
- **Font:** Montserrat (all weights)
- **Images:** Logo/CDN URLs from `cdn.prod.website-files.com` (linked directly)
- **Layout:** Full-width sections, centered content, CSS grid

## GitHub Pages Notes
- `basePath` is set to `/Spacestation-Website` in `next.config.ts`
- Images must use `unoptimized: true`
- All internal links must work with the basePath prefix

## Code Review Guidelines
- Match the original site's design as closely as possible
- Keep components focused — one responsibility each
- Portfolio filtering should be client-side only (no server state needed)
- No unnecessary abstractions — this is a marketing site, keep it simple
- Tailwind utility classes preferred over custom CSS
