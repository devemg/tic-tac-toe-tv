import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import pkg from './package.json'

export default defineConfig(({ mode })=>({
  base: mode === 'web-prod' ? '/tic-tac-toe-tv/' : '',
  define: {
    APP_VERSION: JSON.stringify(pkg.version),
  },
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
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@models': '/src/models',
      '@context': '/src/context',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@analytics': '/src/analytics',
    },
  },
}))