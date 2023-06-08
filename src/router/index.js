import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/info',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
