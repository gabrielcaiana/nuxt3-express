import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    { path: "/server-api", handler: "~/server-middleware/index.ts" },
  ],
})
