import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CartView from "@/views/CartView.vue";
import HelpView from "@/views/HelpView.vue";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/aboutus",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/help",
    name: "HelpView",
    component: HelpView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
