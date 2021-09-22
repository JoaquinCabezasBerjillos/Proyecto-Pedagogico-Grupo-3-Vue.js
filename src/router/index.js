import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../layout/Home.vue'
import Productos from '../views/Productos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Productos',
        component: Productos,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
