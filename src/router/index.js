import Vue from 'vue';
import VueRouter from 'vue-router';
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.component('vue-navigation-bar', VueNavigationBar);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/aboutus',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
