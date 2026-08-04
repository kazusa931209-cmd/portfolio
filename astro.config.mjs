import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kazusa-tsubota.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
