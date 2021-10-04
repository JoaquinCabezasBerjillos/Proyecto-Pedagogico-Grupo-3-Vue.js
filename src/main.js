import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";
import store from "./store";
import router from "./router";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");


//import de componente servicios
import "./assets/css/bootstrap.min.css";


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
