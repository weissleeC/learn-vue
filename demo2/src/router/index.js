import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Login from "../views/Login.vue";
import From from "../views/From.vue";
import Eui from "../views/Eui.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/from",
    name: "From",
    component: From,
  },
  {
    path: "/eui",
    name: "Eui",
    component: Eui,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login") {
    if (localStorage.getItem("username")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
