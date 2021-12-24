import { createRouter, createWebHistory } from 'vue-router'

const Hello = () => import('@/views/Hello.vue')

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
