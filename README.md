# Catalyst website

Static marketing site built with [Astro](https://astro.build) + React islands. Pages are pre-rendered to plain HTML (good for SEO); React is used only for the contact form.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve the built site
npx astro check   # type check
```

## Structure

| Path | What |
| --- | --- |
| `src/site.ts` | Company name, domain, email, legal details, nav — edit here first |
| `src/layouts/Base.astro` | `<head>`, header, footer for every page |
| `src/components/Seo.astro` | title, description, canonical, Open Graph, Twitter, JSON-LD |
| `src/lib/schema.ts` | JSON-LD builders (Organization, WebSite, BreadcrumbList, Service, FAQPage) |
| `src/components/ContactForm.tsx` | React form (validation, honeypot, endpoint or mailto fallback) |
| `src/data/content.ts` | Home page FAQ and "Your words" cards |
| `src/pages/industries/*.astro` | Product pages (`/industries/<slug>/`) — copy one to add a product |
| `src/data/products.ts` | List of products shown in the header's Industries menu and the footer — add an entry for a new product |
| `src/assets/screens/` | Product screenshots (optimised to WebP at build) |
| `public/` | robots.txt, favicons, default OG image |

Sitemap is generated at build (`/sitemap-index.xml`).

## Before launch

- [ ] Confirm the domain in `astro.config.mjs`, `src/site.ts` and `public/robots.txt`.
- [ ] Fill `legalName` and `address` in `src/site.ts`; have `/privacy/` and `/terms/` reviewed (they are templates with `[placeholders]`).
- [ ] Set `PUBLIC_FORM_ENDPOINT` (see `.env.example`) in the hosting provider, then send a test message.
- [ ] Replace "within weeks" in the home FAQ with a concrete number, if you have one.
- [ ] Review draft copy on `/industries/startupmode/` and `/how-we-work/` (marked with TODO where it states policy).
- [ ] Deploy (Vercel / Netlify / Cloudflare Pages: build `npm run build`, output `dist`), force HTTPS and one host (www or not).
- [ ] Add the site to Google Search Console and Bing Webmaster Tools, submit `sitemap-index.xml`.
- [ ] Add analytics (Plausible needs no cookie banner; GA4 does).
- [ ] Check Core Web Vitals with PageSpeed Insights after deploy.
