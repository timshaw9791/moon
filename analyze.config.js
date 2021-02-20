import analyze from 'rollup-plugin-analyzer'
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    analyze()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'moon'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})