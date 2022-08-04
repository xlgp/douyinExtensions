import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { chromeExtension } from "vite-plugin-chrome-extension";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: "src/manifest.json"
    }
  },
  plugins: [vue(), chromeExtension(),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    resolvers: [ElementPlusResolver()],
    imports: [
      'vue'
    ],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ]
})
