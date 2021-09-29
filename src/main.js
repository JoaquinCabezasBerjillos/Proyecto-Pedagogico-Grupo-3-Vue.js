import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";
import store from "./store";
import router from "./router";
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

//import plantilla dashboard. Ver con Joaquin
import "./assets/css/portal.css";
import "./assets/js/app.js" ;
import "./assets/plugins/fontawesome/js/all.min.js";
import "./assets/plugins/popper.min.js";
import "./assets/plugins/bootstrap/js/bootstrap.min.js"; 


//import de componente servicios
import "./assets/css/bootstrap.min.css";


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

