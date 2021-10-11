import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import AdminLayout from "../layout/Admin.vue";
import Consulta from "../views/Consulta.vue";
import Productos from "../views/Productos.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Reset from "../views/Reset.vue";
import Mascotas from "../views/Mascotas.vue";
import Clientes from "../views/Clientes.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/admin",
    name: "AdminLayout",
    component: AdminLayout,

    children: [  
           
      
        {
          path: "/consulta",
          name: "Consulta",
          component: Consulta,
        },

        {
          path: "/mascotas",
          name: "Mascotas",
          component: Mascotas,
        },
     
          path: "/clientes",
          name: "Clientes",
          component: Clientes,
        }, 

        {
          path: "/productos",
          name: "Productos",
          component:Productos,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
