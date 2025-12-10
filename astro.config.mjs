// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://nguiom.github.io/test.github.io',
  base: '\Los4Automaticos',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs()
  ]
});
