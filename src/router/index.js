import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import NotFoundView from '@/views/NotFoundView'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFoundView',
      component: NotFoundView
    }
  ]
})

// router.beforeEach((to, from, next) => {})

export default router
