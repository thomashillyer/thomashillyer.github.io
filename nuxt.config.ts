export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', // https://github.com/nuxt/devtools
  '@nuxt/devtools', '@nuxt/image'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/hillyer_trans_favicon.png' }],
      script: [
        { src: "assets/js/anim_extensions.js', }
      ],
    },
  },
  runtimeConfig: {
    public: {
      FORMSPREE_URL: 'https://formspree.io/f/mrgwzaon',
    },
  },
  image: {
    domains: [
      'images.unsplash.com'
    ],
    alias: {
      unsplash: 'https://images.unsplash.com'
    }
  },
  css: [
    { src: 'assets/css/style_extensions.css', lang: 'css' }
  ],
  build: {
    extractCSS: true
  }
})
