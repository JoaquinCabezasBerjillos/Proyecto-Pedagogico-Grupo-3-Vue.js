import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";

import Dashboard from "../layout/Dashboard.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Bienvenida from "../views/Bienvenida.vue";
import Historial from "../views/Historial.vue";
import Reset from "../views/Reset.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,

    children: [
      {
        path: "/bienvenida",
        name: "Bienvenida",
        component: Bienvenida,
      },
      {
        path: "/historial",
        name: "Historial",
        component: Historial,
      },
    ],
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
