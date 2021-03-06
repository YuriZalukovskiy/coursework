import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import axios from 'axios'

Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
