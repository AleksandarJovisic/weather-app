import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PollutionDetails from '../components/PollutionDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pollution-details',
    name: 'PollutionDetails',
    component: PollutionDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
