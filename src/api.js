import axios from 'axios'
import { Notify } from 'vant'
axios.interceptors.response.use(
  function(response) {
    // 2xx
    console.log('response', response)
    return response
  },
  function(error) {
    // 非 2xx
    if (error.response.data) {
      return Notify({ type: 'danger', message: error.response.data.msg })
    } else return Notify({ type: 'danger', message: '网络错误' })
  }
)
export function register(data) {
  axios.post('/ac/api/auth/register', data)
}
