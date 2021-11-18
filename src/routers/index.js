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
    },
    {
      name: 'StickyFooter',
      path: '/stickyFooter',
      title: '粘性footer',
      component: () => import('../views/StickyFooter.vue')
    },
    {
      name: 'TitleClamp',
      path: '/titleClamp',
      title: '文本超出不定行',
      component: () => import('../views/css/TitleClamp.vue')
    },
    {
      name: 'transact_big',
      path: '/transact/big',
      title: '订单已受理',
      component: () => import('../views/TransactBig.vue')
    },
    {
      name: 'nextTick',
      path: '/nextTick',
      title: 'DOM异步更新',
      component: () => import('../views/NextTick.vue')
    },
    {
      name: 'bus',
      path: '/bus',
      title: 'bus',
      component: () => import('../views/Bus.vue')
    },
    {
      name: 'turnPages',
      path: '/turn_pages',
      title: '翻页时钟',
      component: () => import('../views/css/TurnPages.vue')
    },
     {
       name: 'typing',
       path: '/typing',
       title: '打字效果',
       component: () => import('../views/css/Typing.vue')
     },
    {
      name: 'demo',
      path: '/demo',
      title: 'demo',
      component: () => import('../views/Demo.vue')
    }
  ]
})
export default router