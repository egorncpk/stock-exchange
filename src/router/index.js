import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

/* Layout */
import Layout from '../views/layout/Layout'

export const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      { path: 'dashboard', props: true, component: _import('Dashboard/index'), name: 'dashboard', meta: { title: 'Панель управления', icon: '' }}
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'noredirect',
    children: [
      { path: 'charts', component: _import('chart/index'), name: 'Chart', meta: { title: 'Графики', icon: '' }}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
