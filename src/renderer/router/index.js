import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/views/login').default,
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/views/home')
    }
  ]
})

