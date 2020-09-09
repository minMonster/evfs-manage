import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ViewUI from 'view-design'
import VueClipboard from 'vue-clipboard2'
import http from '@/http'
import cookie from 'js-cookie'
import JsonViewer from 'vue-json-viewer'
import { registryQrCodeAuthDialog } from '@/components/qrCodeAuthDialog'

// import style
import '@/css/index.less'

import './utils/test.js'

Vue.prototype.$cookie = cookie
Vue.use(VueClipboard)
Vue.use(JsonViewer)

Vue.use(ViewUI)
Vue.use(registryQrCodeAuthDialog)

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
