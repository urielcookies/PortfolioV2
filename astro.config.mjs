import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://everscode.com',
  base: '/PortfolioV2/',
  integrations: [tailwind(), react()],
});

