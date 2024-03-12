import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/child-base/',
  server: {
    host: true,
    port: 4321
    // headers: {
    //   'Access-Control-Allow-Origin': '*' //记得配置跨域
    // }
  }
})
