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
    },
    {
      name: 'Mine',
      path: '/mine',
      title: '我的',
      component: () => import('../views/Mine.vue')
    },
    {
      name: 'Evaluation',
      path: '/evaluation',
      title: '风险测评',
      component: () => import('../views/Evaluation.vue')
    }
  ]
})
export default router