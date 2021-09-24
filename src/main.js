import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";
import store from "./store";
import router from "./router";
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");


import "./assets/css/bootstrap.min.css";
import "./assets/js/jquery.js";
import "./assets/css/font-awesome.min.css";
import "./assets/css/home/animate.css";
import "./assets/css/home/animate.min.css";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

