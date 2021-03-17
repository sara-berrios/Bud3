import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Buy from "../views/Buy.vue";
import Wish from "../views/Wish.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buy",
    name: "Buy",
    component: Buy,
  },
  {
    path: "/wish",
    name: "Wish",
    component: Wish,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
