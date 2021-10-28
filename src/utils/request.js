import axios from 'axios'

axios.defaults.timeout = 90000
axios.defaults.baseURL = 'http://localhost:3000'

axios.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证

const Myaxios = axios.create({
  baseURL: axios.defaults.baseURL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: axios.defaults.timeout
})
Myaxios.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})
Myaxios.interceptors.response.use(response => {
  // Do something before response is sent
  return response
}, error => {
  // Do something with response error
  return Promise.reject(error)
})
export default Myaxios
