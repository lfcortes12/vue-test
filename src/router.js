import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/Login.vue'
import SignUp from './components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  }, {
    path:'/user/logIn',
    name: 'logIn',
    component: LogIn
  }, {
    path:'/user/signUp',
    name: 'signUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router