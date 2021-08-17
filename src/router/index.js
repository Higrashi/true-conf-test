import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Red from "../views/Red.vue"
import Yellow from '../views/Yellow.vue'
import Green from '../views/Green.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/red",
    name: 'red',
    component: Home
  },
  {
    path: "/yellow",
    name: "yellow",
    component: Home
  },
  {
    path: "/green",
    name: "green",
    component: Home
   }
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
