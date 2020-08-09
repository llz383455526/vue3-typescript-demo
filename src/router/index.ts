import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home as any
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import(/* webpackChunkName: "setup" */ '../views/Setup.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import(/* webpackChunkName: "ref" */ '../views/Ref.vue')
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "reactive" */ '../views/Reactive.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Watch.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot" */ '../views/Slot.vue')
  },
  {
    path: '/vmodel',
    name: 'Vmodel',
    component: () => import(/* webpackChunkName: "vmodel" */ '../views/Vmodel.vue')
  },
  {
    path: '/globalApi',
    name: 'globalApi',
    component: () => import(/* webpackChunkName: "globalApi" */ '../views/GlobalApi.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import(/* webpackChunkName: "filter" */ '../views/Filter.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
