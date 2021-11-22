import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import store from './store'
import { ScrollFixed } from './utils/directive'
// import './styles/app.scss'
import Vant from 'vant';
import 'vant/lib/index.css';
import filters from './filters/index.js'
Vue.use(Vant);
for(let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  ScrollFixed.unlock('app')
  next()
})

new Vue({
  mounted() {
    // console.log(this.$root, 'root')
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
