import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import { ScrollFixed } from './utils/directive'
// import './styles/app.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(ScrollFixed, 'to')
  ScrollFixed.unlock('app')
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
