import Vue from 'vue'
import Router from 'vue-router'
import addArt from '@/view/addArt'
import addwx from '@/view/addwx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'add',
      component: addArt
    },
    {
      path: '/addwx',
      name: 'addwx',
      component: addwx
    },
    { path: '/', redirect: '/addwx' }
  ]
})
