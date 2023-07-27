import {
  fileURLToPath, URL 
} from 'url'
import legacy from '@vitejs/plugin-legacy'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2015']
  },
  plugins: [ 
    vue(),
    legacy({
      targets: [
        'defaults',
        'not dead'
      ],
      modernPolyfills: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  }
})