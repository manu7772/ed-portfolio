import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://manu7772.github.io',
  base: 'ed-portfolio',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
