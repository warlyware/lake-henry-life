import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Listings from '../pages/listings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listings',
    name: 'Listings',
    component: Listings
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: { name: 'Home' } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
