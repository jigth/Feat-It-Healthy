// https://nuxt.com/docs/api/configuration/nuxt-config
const assetsDir = "src/shared/assets";

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // FB_API_KEY: process.env.FB_API_KEY, // NOTE: Not being used for now, would be ideal to use it
    public: {
      backendMicroservice: process.env.NUXT_PUBLIC_BACKEND_MICROSERVICE,
      FB_API_KEY: process.env.NUXT_PUBLIC_FB_API_KEY,
    }
  },

  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true,
        Roboto: true,
      }
    }]
  ],

  // Keep some dirs under src, but the rest of them are in their default location
  dir: {
    pages: "src/pages",
    plugins: "src/shared/plugins",
    layouts: "src/shared/layouts",
    middleware: "src/shared/middleware",
    assets: `${assetsDir}`,
  },

  // Load SASS module
  css: [`@/${assetsDir}/scss/global.scss`],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/${assetsDir}/scss/_vars.scss" as *;`,
        }
      }
    }
  },

  compatibilityDate: "2024-08-01",
})