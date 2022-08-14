import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import My from '../views/Index/My.vue'
import Home from '../views/Index/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/my',
        name: 'my',
        component: My,
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
