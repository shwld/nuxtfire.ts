require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/styles/app.sass',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {
    middleware: 'authenticated',
  },
  vendor: [
    'vuex', 'firebase',
  ],
  plugins: [
    '~/plugins/firebase.ts',
    '~/plugins/authenticate.ts',
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    '@nuxtjs/font-awesome',
    ['bootstrap-vue/nuxt', { css: false }],
    ['@nuxtjs/google-tag-manager', { id: process.env.GOOGLE_TAG_MANAGER_ID }],
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      })
      // if (ctx.dev && ctx.isClient) {}
    }
  }
}
