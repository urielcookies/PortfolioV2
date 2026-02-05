import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://everscode.com',
  output: 'static',
  integrations: [tailwind(), react()],
});
