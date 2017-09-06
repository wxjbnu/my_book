import Vue from 'vue'
import Router from 'vue-router'
import addArt from '@/view/addArt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'add',
      component: addArt
    }
  ]
})
