import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';

const iconSubset = fileURLToPath(
  new URL('./src/vendor/openai-icons-subset.js', import.meta.url),
);

export default defineConfig({
  site: 'https://axial.run',
  integrations: [react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    server: {
      allowedHosts: ['zenith.local'],
    },
    resolve: {
      alias: {
        '@openai/apps-sdk-ui/components/Icon': iconSubset,
      },
    },
  },

  adapter: cloudflare(),
});