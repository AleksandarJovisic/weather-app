import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

import VueCountryCode from "vue-country-code-select";

Vue.use(VueCountryCode);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
