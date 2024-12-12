import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/page-1'
    },
    {
      path: '/page-1',
      name: 'page-1',
      component: () => import('@/views/page1/index.vue')
    },
    {
      path: '/page-2',
      name: 'page-2',
      component: () => import('@/views/page2/index.vue')
    }
  ]
})
export default router
