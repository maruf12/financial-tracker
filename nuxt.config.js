export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'financial-tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    // '@nuxtjs/firebase'
    [
      '@nuxtjs/firebase', {
        config: {
          apiKey: "AIzaSyAELwPlAlShNdMDXg4-dUGbkmBsoRNlWmI",
          authDomain: "financial-tracker-d38eb.firebaseapp.com",
          projectId: "financial-tracker-d38eb",
          storageBucket: "financial-tracker-d38eb.appspot.com",
          messagingSenderId: "73386805709",
          appId: "1:73386805709:web:135dc681a3418a58345c84",
          measurementId: "G-0L3B6RRQQB"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false // default
          }
        }
      }
    ]
  ],

  // firebase: {
    // options
    // config: {
    //   apiKey: "AIzaSyAELwPlAlShNdMDXg4-dUGbkmBsoRNlWmI",
    //   authDomain: "financial-tracker-d38eb.firebaseapp.com",
    //   projectId: "financial-tracker-d38eb",
    //   storageBucket: "financial-tracker-d38eb.appspot.com",
    //   messagingSenderId: "73386805709",
    //   appId: "1:73386805709:web:135dc681a3418a58345c84",
    //   measurementId: "G-0L3B6RRQQB"
    // },
    // services: {
    //   auth: {
    //     persistence: 'local', // default
    //     initialize: {
    //       onAuthStateChangedAction: 'onAuthStateChangedAction',
    //       subscribeManually: false
    //     },
    //     ssr: false // default
    //   }
    // }
  // },

  googleFonts: {
    families: {
      Poppins: [100, 600, 800],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [600, 800],
        ital: [100, 600]
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
