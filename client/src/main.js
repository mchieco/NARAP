import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.component('apexchart', VueApexCharts);
Vue.use(VModal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
