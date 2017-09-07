// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import AV from 'leancloud-storage'

window.AV = AV
Vue.config.productionTip = false
Vue.use(VueQuillEditor)

const appId = 'jFtDXpFm5xdq4ibPYIOTDkAi-gzGzoHsz'
const appKey = 'LprdSt2PENxvkdrjqeErNIv6'
AV.init({ appId, appKey })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
