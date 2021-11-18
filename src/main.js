import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Fragment from 'vue-fragment'
import store from './store';
import router from './router'

// Using this plugin to allow making of rootless component like Fragment in React (used in Note.vue)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
