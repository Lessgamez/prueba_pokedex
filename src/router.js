import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Favorites from "@/pages/Favorites.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Favorites",
      name: "Favorites",
      component: Favorites
    }
  ]
});