import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Routes from '../src/router/index'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

import VueCountryCode from "vue-country-code-select";

Vue.use(VueCountryCode);

Vue.use(VueRouter);

new Vue({
  router: Routes,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
