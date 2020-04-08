import axios from 'axios'
export function register(data) {
  axios.post('/ac/api/auth/register', data)
}
