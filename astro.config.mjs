// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiinto.com',
  base: '/',
  output: 'static', // Optimizado para Vercel
});
