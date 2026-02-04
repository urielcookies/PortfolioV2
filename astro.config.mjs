import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://urielcookies.github.io',
  base: '/PortfolioV2/',
  integrations: [tailwind(), react()],
});
