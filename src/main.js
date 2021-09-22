import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js")

import "./assets/ProductosCss/style.css";
import "./assets/ProductosCss/bootstrap.css";
import "./assets/ProductosCss/bootstrap.min.css";
import "./assets/ProductosCss/prettyPhoto.css";

import "./assets/ProductosJs/bootstrap.js";
import "./assets/ProductosJs/main.js";

createApp(App).use(router).use(store).mount('#app')
