import VueRouter from "vue-router";
import store from "./store";
import http from "./http";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("./icon");

window.Vue = require("vue");
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
  "example-component",
  require("./components/ExampleComponent.vue")
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

http.defaults.headers.common["X-CSRF-TOKEN"] = window.token;
store.$http = http;

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", component: require("./views/KPT") }]
});

const app = new Vue({
  router,
  store,
  el: "#app"
});
