import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import BuyList from '../views/BuyList.vue'
import SaleList from '../views/SaleList.vue'
import CreateTransaction from '../views/CreateTransaction.vue'
import MyInfo from '../views/MyInfo.vue'
import MyList from '../views/MyList.vue'
import GoodsExchange from '../views/GoodsExchange.vue'
import TransactionDetail from '../views/TransactionDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/BuyList' },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/BuyList',
    name: 'BuyList',
    component: BuyList
  },
  {
    path: '/SaleList',
    name: 'SaleList',
    component: SaleList
  },
  {
    path: '/createTransaction',
    name: 'CreateTransaction',
    component: CreateTransaction
  },
  {
    path: '/myInfo',
    name: 'MyInfo',
    component: MyInfo
  },
  {
    path: '/myList',
    name: 'MyList',
    component: MyList
  },
  {
    path: '/transactionDetail',
    name: 'TransactionDetail',
    component: TransactionDetail
  },
  {
    path: '/goodsExchange',
    name: 'GoodsExchange',
    component: GoodsExchange
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
