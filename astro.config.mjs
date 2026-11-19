// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Address used for canonical links, the link-preview image (og:image), JSON-LD and the sitemap.
  // SITE_URL overrides it; Netlify sets URL on its builds, so a preview deploy points at itself and
  // chat apps can load the preview image. Falls back to the production domain.
  site: process.env.SITE_URL || process.env.URL || 'https://catalyst-api.com', // TODO: confirm production domain
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});
