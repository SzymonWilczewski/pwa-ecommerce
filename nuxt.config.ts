import { resolve } from "path";
import path from "path";
import fs from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    manifest: {
      name: "Aplikacja PWA",
      short_name: "Aplikacja",
      theme_color: "#4DBA87",
      useWebmanifestExtension: false,
      icons: [
        {
          src: "/pwa.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa_large.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost+2-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost+2.pem")),
    },
  },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: true,
      Merriweather: true,
    },
  },
});
