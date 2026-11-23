import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH is set only for the GitHub Pages test build (see .github/workflows/pages.yml).
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.justwardrobes.com.au',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
