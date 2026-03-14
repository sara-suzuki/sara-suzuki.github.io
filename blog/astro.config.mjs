import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sara-suzuki.github.io',
  base: '/blog',
  output: 'static',
  trailingSlash: 'always',
});
