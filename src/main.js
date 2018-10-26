// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/mainRoutes'

// Material
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import './css/theme.styl'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#283593',
    secondary: '#ef5350',
    accent: '#ef5350',
    error: '#B00020',
    info: '#80D8FF',
    success: '#00E676',
    warning: '#F4FF81'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
