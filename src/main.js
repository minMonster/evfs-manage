import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ViewUI from 'view-design';
import VueClipboard from 'vue-clipboard2'
import http from '@/http'
import cookie from 'js-cookie'
import JsonViewer from 'vue-json-viewer';

Vue.prototype.$cookie = cookie
Vue.use(VueClipboard)
Vue.use(JsonViewer)

// import style
import '@/css/index.less';

import './utils/test.js'

Vue.use(ViewUI);

Vue.config.productionTip = false



Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
