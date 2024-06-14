import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://rizkyrafi.id',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
  },
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});
