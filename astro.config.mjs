// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiinto.com',
  base: '/',
  output: 'static', // Optimizado para Vercel

  // Optimización de build para SEO y performance
  build: {
    inlineStylesheets: 'auto', // Inline CSS crítico
    assets: '_astro', // Carpeta para assets
  },

  // Compresión y optimización
  compressHTML: true,

  // Prefetch automático para navegación más rápida
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: false
  },

  // Configuración de imagen optimizada
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  // Configuración de Vite para mejor performance
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});
