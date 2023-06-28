export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/hillyer_trans_favicon.png' }],
    },
  },
  runtimeConfig: {
    public: {
      FORMSPREE_URL: 'https://formspree.io/f/mrgwzaon',
    },
  },
})
