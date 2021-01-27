import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '../views/Orders.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import(/* webpackChunkName: "timeline" */ '../views/Timeline.vue')
  },
  {
    path: '/order-confirmation',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "order-confirmation" */ '../views/OrderConfirmation.vue')
  },
  {
    path: '/manage-users',
    name: 'ManageUsers',
    component: () => import(/* webpackChunkName: "manage-users" */ '../views/Users.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
