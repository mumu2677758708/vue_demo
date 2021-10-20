import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      name: 'Index',
      path: '/',
      title: '首页',
      component: () => import('../views/Index.vue')
    }
  ]
})
export default router