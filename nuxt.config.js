export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Cuong - Luxury',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src:'~/plugins/vue-notification.js', ssr:false}
  ],

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources'
  ],

  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    
  ],

  fontawesome: {
    icons: {
      solid: ['faHome', 'faAlignLeft', 'faClone', 'faShoePrints', 'faBook', 'faAngleRight'],
      // solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/auth'
  ],

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  auth: {
    redirect: {
      callback: '/product' //sau khi login s??? chuy???n h?????ng v??? ????y
    },
    strategies: {
      local: {
        endpoints: {
          // c??c ???????ng d???n ?????n API
          // propertyName: k???t qu??? t??? API tr??? v???, nh??? xem k???t qu??? ????? ?????t key cho ????ng
          login: { url: '/auth/login', method: 'post', propertyName: 'meta.token' },

          register: { url: '/auth/register', method: 'post', propertyName: 'meta.token' },
          // sau khi login, s??? t??? ?????ng ch???y c??i API n??y n???a ????? l???y d??? li???u user
          user: { url: '/auth/user', method: 'get', propertyName: 'data' },
          logout: false
        }
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:8000/api/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //d??ng c??i n??y ????? s??? d???ng middleware x??c th???c ng?????i d??ng cho m???i route, t????ng t??? middleware trong Laravel
  // router: {
  //   middleware: ['auth']
  // },
}
