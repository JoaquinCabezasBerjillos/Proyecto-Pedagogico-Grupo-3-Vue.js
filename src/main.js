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

//  jQuery (necessary for Bootstrap's JavaScript plugins)
// <script src="js/jquery.js"></script>
//  Include all compiled plugins (below), or include individual files as needed
// <script src="js/bootstrap.min.js"></script>
// <script src="js/wow.min.js"></script>
// <script>
// wow = new WOW(
//  {
//
// }	)
// .init();
// </script>

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

