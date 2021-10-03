import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";
import store from "./store";
import router from "./router";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

//import plantilla dashboard.










createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
