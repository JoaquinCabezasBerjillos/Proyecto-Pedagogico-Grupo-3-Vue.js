<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Dashboard from "../layout/Dashboard.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   { path: "/",
    name: "Dashboard",
     component: Dashboard },
   {
     path: "/login",
     name: "Login",
     component: Login,
   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
=======
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
>>>>>>> cdc6c3458274d01a9795ae6e7b4bf14f0298b396
