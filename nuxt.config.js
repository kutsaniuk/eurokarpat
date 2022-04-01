export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  base: '/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "ЄВРОКАРПАТСЬКА ІНІЦІАТИВА",
    title: "ГРОМАДСЬКА ОРГАНІЗАЦІЯ 'ЄВРОКАРПАТСЬКА ІНІЦІАТИВА'",
    htmlAttrs: {
      lang: "uk"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
  },

  generate: {
    dir: 'dist'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "primary",
    height: "5px",
    continuous: true,
    duration: 3000
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-US.js'
          },
          {
            code: 'uk',
            file: 'uk-UA.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'uk',
        strategy: 'no_prefix'
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    https: true,
    progress: true,
    retry: true,
    proxy: false,
    baseURL: 'https://api.eurocarpathian.com/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints: {
          login: false,
          logout: false,
          user: false
        }
      }
    },
    redirect: {
      login: '/login',
      logout: false,
      callback: false,
      home: false
    }
  },

  target: 'static'
};
