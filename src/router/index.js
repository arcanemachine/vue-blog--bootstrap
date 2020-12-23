import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/',
    name: 'postList',
    component: () => import('../views/PostList.vue')
  },
  {
    path: '/posts/:postId/',
    name: 'postDetail',
    component: () => import('../views/PostDetail.vue'),
    props: true
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/_404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
