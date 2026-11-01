# Primelink Australia — Website

Marketing and quote-request website for Primelink Australia, an international supplier of HVAC and refrigeration spare parts for industrial and hazardous-area sites (oil and gas, mining, power, hydrogen, defence, telecoms, data centres and manufacturing).

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). The output is a fully static site, so you can host it anywhere (Cloudflare Pages, Netlify, Vercel, GitHub Pages or any web server).

## Quick start

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into ./dist
npm run preview   # preview the production build
```

Requires Node.js 22 or later.

## Before launch: confirm company details

All company data is in **`src/config/site.ts`**. Every value marked `CONFIRM` is a placeholder:

| Setting | What to set |
| --- | --- |
| `legalName`, `abn` | Registered company name and ABN (ABN hides when empty) |
| `url` | Live domain. Also update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` |
| `contact.*` | Sales, general and careers emails, phone, street address, hours, LinkedIn, WhatsApp. Empty values are hidden |
| `quoteResponse` | The quote response time you promise (default: "one business day") |
| `certifications` | Certificates you hold (for example `ISO 9001:2015`). Badges show only when this list has entries |
| `platforms` | Equipment makes listed on the home page |

SEO keywords are in `src/config/keywords.ts` (site-wide list). Pages add their own terms through the `keywords` prop on `Base.astro`. The terms are generic industry phrases; no competitor brand names are used.

Also check:

- `src/data/regions.ts` – map origin (move to head office city) and the regions you ship to.
- `src/pages/about.astro` – company story.
- `src/pages/privacy.astro` and `src/pages/terms.astro` – these are **draft templates**. Have them reviewed before launch.

## Forms (quote request and contact)

By default, the forms open the visitor's email app with the request filled in. To receive submissions directly (with file attachments), connect a form service:

1. Create a form endpoint with a provider such as [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) or [Basin](https://usebasin.com), or your own Cloudflare Worker.
2. Set the environment variable `PUBLIC_FORM_ENDPOINT` to the endpoint URL in your hosting settings.
3. Rebuild. The forms then post `multipart/form-data` to that URL and show a success message.

## Editing content

| Content | File |
| --- | --- |
| Product families and typical parts | `src/data/products.ts` |
| Industries (grouped: energy and resources, infrastructure and industry) | `src/data/industries.ts` |
| Equipment types and applications | `src/data/equipment.ts` |
| Services | `src/data/services.ts` |
| Insights articles | `src/content/insights/*.md` (add a new `.md` file to publish an article) |
| Navigation | `src/config/site.ts` (`nav`) |

Product, industry, service and article pages are generated from these files automatically.

## Project structure

```
src/
  components/   Header (mega menu), Footer, RFQ ticket, world map, cards, CTA band
  config/       site.ts – company details and settings
  content/      insights articles (Markdown)
  data/         products, industries, services, map regions
  layouts/      Base.astro – SEO meta, Open Graph, JSON-LD
  pages/        all routes
  scripts/      shared form handler
  styles/       global.css – design tokens and type scale
public/         favicon, Open Graph image, robots.txt
```

## Design system

- **Type:** Archivo (variable width). Headings use the wide cut; body uses normal width.
- **Colours:** ink `#0C1E2B`, fog `#EDF1F3`, steel `#5E6E7A`, signal orange `#FF5A1F` (actions only), air blue `#8FC7E8` (map and data on dark).
- **Primary buttons** use ink text on signal orange, like safety signage, for strong contrast.
- Tokens live in `src/styles/global.css` under `@theme`.

## Deploy on Cloudflare Pages

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and choose this repository.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Add `PUBLIC_FORM_ENDPOINT` under environment variables if you use a form service.
4. Add your custom domain.

## Built-in features

- 44 pages: home, product catalogue with part search, 8 product family pages, 12 industry pages, 6 service pages, quality, about, global reach, insights, careers, quote request, contact, privacy, terms, 404
- Multi-line quote form with prefill from `?part=` and `?category=`, document requirements and attachments
- Mega menu on desktop, accessible drawer menu on mobile
- Dotted world map generated at build time (no external requests)
- XML sitemap, robots.txt, canonical URLs, Open Graph, Organization, Breadcrumb and Article structured data
- Keyboard focus styles, skip link, reduced-motion support
- No tracking or third-party scripts

## Credits

Structure and patterns informed by open-source Astro templates [AstroWind](https://github.com/onwidget/astrowind) and [ScrewFast](https://github.com/mearashadowfax/ScrewFast) (both MIT), and by industrial vendor sites such as Vaisala and Airthings. Icons: [Tabler Icons](https://tabler.io/icons) (MIT). Map: [dotted-map](https://github.com/NTag/dotted-map) (MIT).
