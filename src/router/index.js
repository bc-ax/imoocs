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
    name: 'Login',
    component: Login
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
