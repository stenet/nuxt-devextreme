import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            devextreme: ["devextreme-vue"]
          }
        }
      }
    },
    plugins: [{
      name: "no-treeshake",
      transform(_, id) {
        if (id.includes("integration/jquery")) {
          return { moduleSideEffects: "no-treeshake" };
        }
        if (id.includes("ui/")) {
          return { moduleSideEffects: "no-treeshake" };
        }
      }
    }]
  }
})
