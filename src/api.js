import axios from 'axios'
import { Notify } from 'vant'
import router from './router'
axios.defaults.baseURL = process.env.VUE_APP_BASEURL
axios.interceptors.response.use(
  function (response) {
    // 2xx
    console.log('response', response)
    return response.data
  },
  function (error) {
    // 非 2xx
    console.log('error', error.response)
    if (error.response.status === 401) {
      router.push({ name: 'SignIn' })
      Notify({ type: 'danger', message: '未登录' })
    } else if (error.response.data) {
      Notify({ type: 'danger', message: error.response.data.msg })
    } else Notify({ type: 'danger', message: '网络错误' })
    return Promise.reject(error)
  }
)
if (localStorage.token) {
  axios.defaults.headers.common.Authorization = localStorage.token
}
export function setToken(token) {
  axios.defaults.headers.common.Authorization = token
  localStorage.token = token
}
export function register(data) {
  return axios.post('/ac/api/auth/register', data)
}

export function login(data) {
  return axios.post('/ac/api/auth/login', data)
}

export function getTurnipList(params) {
  return axios.get('/ac/api/transaction/turnip', { params })
}

export function createTransaction(data) {
  return axios.post('/ac/api/transaction/turnip', data)
}

export function getTurnipDetail(id) {
  return axios.get('/ac/api/transaction/turnip/' + id)
}

export function getAvatarList() {
  return axios.get('/ac/api/user/avatar')
}

export function getMyInfo() {
  return axios.get('/ac/api/user/myInfo')
}

export function patchMyInfo(data) {
  return axios.patch('/ac/api/user/myInfo', data)
}

export function getUserInfo(id) {
  return axios.get('/ac/api/user/' + id)
}

export function getMyList(params) {
  return axios.get('/ac/api/transaction/turnip/myList', { params })
}

export function getCurrentTransaction() {
  return axios.get('/ac/api/transaction/turnip/myTransaction')
}

export function nextTransaction(id) {
  return axios.patch('/ac/api/transaction/turnip/nextTransaction/' + id)
}

export function sendCaptcha(email) {
  return axios.post('/ac/api/auth/sendCaptcha', { email })
}
