import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Suggestions from '@/views/Suggestions.vue'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Suggestions,
      meta: {
        authNotRequired: true
      }
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
