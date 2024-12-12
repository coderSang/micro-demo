import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list/index.vue')
    }
  ]
})
export default router
