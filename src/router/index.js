import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import TurnipList from '../views/TurnipList.vue'
import CreateTransaction from '../views/CreateTransaction.vue'
import MyInfo from '../views/MyInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/turnipList',
    name: 'TurnipList',
    component: TurnipList,
  },
  {
    path: '/createTransaction',
    name: 'CreateTransaction',
    component: CreateTransaction,
  },
  {
    path: '/myInfo',
    name: 'MyInfo',
    component: MyInfo,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
