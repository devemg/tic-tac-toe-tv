import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-runtime'],
      },
    }),
    legacy({
      targets: ['safari >= 12'], // Tizen 5.5 compatibility
      modernPolyfills: [
        'es.array.iterator',
        'es.promise',
        'es.object.assign',
        'es.promise.finally'
      ],
      renderLegacyChunks: true, // Critical for require() fix
    }),
  ],
  build: {
    target: 'es2015',
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@models': '/src/models',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@router': '/src/router',
      '@utils': '/src/utils',
      '@data': '/src/data',
      '@store': '/src/store',
      '@hooks': '/src/hooks',
    },
  },
})