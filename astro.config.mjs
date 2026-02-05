import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://urielcookies.github.io',
  base: '/PortfolioV2',
  output: 'static',
  integrations: [tailwind(), react()],
});
