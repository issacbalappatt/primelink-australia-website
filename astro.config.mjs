import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Change `site` to the live domain before launch. It is used for the sitemap,
// canonical URLs and Open Graph tags.
export default defineConfig({
  site: 'https://www.primelinkaustralia.com.au',
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    icon({
      include: { tabler: ['*'] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
