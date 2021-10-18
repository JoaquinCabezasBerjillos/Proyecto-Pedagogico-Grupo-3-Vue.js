import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";
import store from "./store";
import router from "./router";
import axiosConfig from "./config/axiosConfig"

window.apiCliente = axiosConfig;
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");