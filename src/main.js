import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setaxios from './setaxios'

setaxios()
Vue.config.productionTip = false

Vue.prototype.$http = axios

router.beforeEach((to, from ,next) => {
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requireAuth) {
    if(store.state.token) {
      next()
    } else {
      next({
        path:'/login',
        query:{redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
