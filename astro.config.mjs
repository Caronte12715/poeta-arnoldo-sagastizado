import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://Caronte12715.github.io',
  base: '/poeta-arnoldo-sagastizado',
  integrations: [vue(), tailwind()]
});
