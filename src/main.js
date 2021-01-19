import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import './utils/validate'
import Alert from './components/modules/alert'
// import axios from 'axios'
// 创建alert插件
Vue.use(Alert)

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'http://baidu.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
