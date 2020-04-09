import axios from 'axios'
import { Notify } from 'vant'
axios.interceptors.response.use(
  function (response) {
    // 2xx
    console.log('response', response)
    return response.data
  },
  function (error) {
    // 非 2xx
    if (error.response.data) {
      return Notify({ type: 'danger', message: error.response.data.msg })
    } else return Notify({ type: 'danger', message: '网络错误' })
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
