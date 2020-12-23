import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vue-router
import router from './router'

// vuex
import store from './store'

// BootstrapVue

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
