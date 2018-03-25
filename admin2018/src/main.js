// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

import vueResource from 'vue-resource'

import AV from 'leancloud-storage'

Vue.config.productionTip = false

// console.log(AV);
const appId = 'jFtDXpFm5xdq4ibPYIOTDkAi-gzGzoHsz'
const appKey = 'LprdSt2PENxvkdrjqeErNIv6'
AV.init({ appId, appKey })
window.AV = AV

Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
