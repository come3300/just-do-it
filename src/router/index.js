import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ToDo from '../views/ToDo.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/signup',
  name: 'signup',
  component: SignUp
  },
  {
    path: '/Todo',
    name: 'ToDo',
    component: ToDo
  },
  {
  path: '/home',
  name: 'Home',
  component: Home
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router