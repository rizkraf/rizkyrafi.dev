// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
