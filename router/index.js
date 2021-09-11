import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import Login from "../src/views/Login.vue";
import Register from "../src/views/Register.vue";
import Settings from "../src/views/Settings.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
