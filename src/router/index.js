import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import AdminLayout from "../layout/Admin.vue";

import Consulta from "../views/Consulta.vue";
import Productos from "../views/Productos.vue";
import Pedidos from "../views/Pedidos.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Reset from "../views/Reset.vue";
import Mascotas from "../views/Mascotas.vue";
import Clientes from "../views/Clientes.vue";

import Perfil from "../views/Perfil.vue";
import NotFound from "../views/NotFound.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    // ruta protegida
    path: "/admin",
    name: "AdminLayout",
    component: AdminLayout,
    meta: { requiresAuth: true},

    children: [
      {
        path: "/consulta",
        name: "Consulta",
        component: Consulta,
        meta: { requiresAuth: true },
      },
        {
          path: "/consulta",
          name: "Consulta/:id",
          component: Consulta,
          meta: { requiresAuth: true },
        },

        {
          path: "/mascotas",
          name: "Mascotas",
          component: Mascotas,
          meta: { requiresAuth: true},
        },
     
        { path: "/clientes",
          name: "Clientes",
          component: Clientes,
          meta: { requiresAuth: true},
        }, 

        {
          path: "/productos",
          name: "Productos",
          component:Productos,
          meta: { requiresAuth: true},
        },
        {
          path: "/pedidos",
          name: "Pedidos",
          component:Pedidos,
          meta: { requiresAuth: true},
        },
        {
          path: "/perfil",
          name: "Perfil",
          component:Perfil,
          meta: { requiresAuth: true},
        },    
      ]
  }, 

     {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Interceptores de las rutas
router.beforeEach((to, from, next) => {
  const loggedIn = !localStorage.getItem('user') || !localStorage.getItem('token')

  if (to.matched.some(record => record.meta.requiresAuth) && loggedIn) {
    next('/login')
  }
  next()
})

export default router;
