// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project repo -> served at https://GaneshIyer1008.github.io/portfolio/
// `site` + `base` must match the GitHub Pages URL. Everything that builds a
// URL by hand should go through src/lib/base.ts -> withBase().
export default defineConfig({
  site: 'https://GaneshIyer1008.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
