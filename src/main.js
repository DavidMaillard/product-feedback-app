import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line import/extensions
import '@/misc/register-service-worker'
// eslint-disable-next-line import/extensions
import '@/misc/handle-network-status'
// eslint-disable-next-line import/extensions
import '@/firebase/init'
// eslint-disable-next-line import/extensions
import '@/firebase/authentication'
// eslint-disable-next-line import/extensions
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
