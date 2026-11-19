// Single source of truth for company details used across pages, SEO tags and JSON-LD.
// TODO before launch: confirm domain, legal name and address (used on /privacy and /terms).
export const SITE = {
  name: 'Catalyst',
  brand: 'Catalyst API',
  url: 'https://catalyst-api.com', // the production domain, as named in the legal pages
  // where this build is served (astro.config `site`): used for absolute links such as og:image and canonical
  siteUrl: (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') || 'https://catalyst-api.com',
  email: 'consult@catalyst-api.com',
  legalName: '[Company legal name]',
  address: '[Registered address]',
  locale: 'en',
  defaultDescription:
    'Catalyst builds custom operations software for small manufacturers and studios: one system for orders, materials, production and delivery, shaped around how your team already works.',
  // Optional: a Formspree/Basin/Web3Forms-style endpoint that accepts JSON POSTs.
  // Set PUBLIC_FORM_ENDPOINT in .env; without it the form falls back to opening an email.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
};

export const NAV = [
  { href: '/how-we-work/', label: 'How we work' },
];
