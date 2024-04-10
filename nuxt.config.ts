import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: true,
      Merriweather: true,
    },
  },
});
