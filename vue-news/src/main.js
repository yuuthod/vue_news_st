import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js'

Vue.config.productionTip = false

import "@/assets/css/reset.css"
import "@/assets/css/common.css"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')