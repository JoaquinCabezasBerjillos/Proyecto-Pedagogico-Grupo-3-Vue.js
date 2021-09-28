import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Dashboardlayout from "../layout/Dashboard.vue";
import Dashboard from "../layout/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Reset from "../views/Reset.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/",
    name: "Dashboardlayout",
    component: Dashboardlayout,

    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
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
