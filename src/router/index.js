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
