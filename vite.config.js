import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  // base: '/pcc-library/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }, // Proxy setting for api connection
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
