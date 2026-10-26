import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://landcontrol.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (p) => !p.includes('/thanks') })],
  redirects: {
    '/housebuilders': '/professionals/housebuilders/',
    '/landowners': '/professionals/landowners/',
    '/conveyancers': '/professionals/conveyancers/',
    '/analysts': '/professionals/lenders/',
    '/professionals/developers': '/professionals/housebuilders/',
  },
});
