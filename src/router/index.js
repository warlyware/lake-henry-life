import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
