import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'lregister',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import('./views/Botnav.vue'),
      children:[
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'car',
          name: 'car',
          component: () => import('./views/Car.vue'),
          meta: { 
            requireAuth:true,
           }
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('./views/My.vue'),
          meta: { 
            requireAuth:true,
           }
        },
      ]
    }
  ]
})
