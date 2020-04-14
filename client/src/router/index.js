import Vue from 'vue';
import VueRouter from 'vue-router';
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

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
    component: About,
  },
  {
    path: '/alumnimentor',
    name: 'Alumni',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/alumni.vue'),
  },
  {
    path: '/livedata',
    name: 'liveData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LiveData.vue'),
  },
  {
    path: '/affiliates',
    name: 'affiliates',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Affiliates.vue'),
  },
  {
    path: '/our-research',
    name: 'our-research',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Research.vue'),
  },
  {
    path: '/research-associates',
    name: 'research-associates',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResearchAssociates.vue'),
  },
  {
    path: '/support',
    name: 'support',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Support.vue'),
  },
  {
    path: '/theprogram',
    name: 'theprogram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheProgram.vue'),
  },
  {
    path: '/ourteam',
    name: 'ourteam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurTeam.vue'),
  },
  {
    path: '/alumniassoc',
    name: 'alumniassoc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AlumniAssoc.vue'),
  },
  {
    path: '/alumninow',
    name: 'alumninow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AlumniNow.vue'),
  },
  {
    path: '/NARAPMagazine',
    name: 'NARAPMagazine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NARAPMagazine.vue'),
  },
  {
    path: '/NARAPInTheNews',
    name: 'NARAPInTheNews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NARAPInTheNews.vue'),
  },
  {
    path: '/NARAPWishList',
    name: 'NARAPWishList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NARAPWishList.vue'),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
