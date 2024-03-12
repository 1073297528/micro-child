import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'one'
      }
    },
    {
      path: '/childPath/one',
      name: 'one',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/childPath/two',
      name: 'two',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
