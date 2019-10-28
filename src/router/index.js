import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/user',
    name: 'user',
    // eslint-disable-next-line no-use-before-define
    beforeEnter: checkValidUser,
    component: () => import(/* webpackChunkName: "user" */ '../views/About.vue'),
  },
];
/**
 * @description Pings the server to make sure the user's session is valid.
 * @param {import('vue-router').Route} to
 * @param {import('vue-router').Route} from
 * @param {*} next
 */
// eslint-disable-next-line no-unused-vars
function checkValidUser(to, from, next) {
  console.info(`%cChecking if user is valid for ${to.path}`, 'font-size:15px;color:blue;');
  axios
    .get('/user', { params: { type: 'isalive' } })
    .then(() => {
      // user is alive
      console.info(`%cUser was valid for ${to.path}`, 'font-size:15px;color:blue;');
      next();
    })
    .catch(() => {
      // redirect user to whatever page if invalid.
      console.info(`%cUser was invalid for ${to.path}`, 'font-size:15px;color:blue;');
      next({ name: 'home' });
    });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
