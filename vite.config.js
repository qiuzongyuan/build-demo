import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue()
  ],
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js')
    },
    rollupOptions: {
      input: [resolve(__dirname, 'src/index.js')],
      output: [
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          sourcemap: true
        },
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true
        }
      ]
    }
  }
})
