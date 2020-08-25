require('dotenv').config();
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script:[
      {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"},
      {src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"},
      {src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js"}
    ]
  },
  /*
  ** Global CSS
  */
//  styleResources: {
//   css: [
//     // './assets/scss/main.scss',
//     '~/assets/scss/main.scss'
//   ],
//  },
 css: [
  // './assets/scss/main.scss',
  '@/assets/scss/main.scss'
],

  

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/vform',
     '~components/_global'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/router',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth'

  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/me', method: 'get', propertyName: false }
        },
        rewriteRedirects:false
        //  tokenRequired: true,
        //  tokenType: 'bearer',
        // // globalToken: true,
        //  autoFetchUser: true,
        //  watchLoggedIn:true
      }
    },
    
  },


 axios: {
   baseUrl: process.env.API_URL
 },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
