// import Vue from 'vue'
// import Router from 'vue-router'
// import Login from '../views/Login.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Forget from '../views/Forget.vue'
import Reg from '../views/Reg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    beforeEnter: (to, from, next) => {
      // to 要去的页面地址
      // from 原来的页面地址
      // 防止reg页面没有sid
      if (from.name === 'login') {
        next()
      } else {
        next('/login')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
