import Axios from 'axios'
import Loading from './loading'
import Qs from 'qs'

const baseURL = process.env.BASE_URL
const serviceConfig = {
  timeout: 60 * 1000
}
if (baseURL) {
  serviceConfig.baseURL = baseURL
  // serviceConfig.baseURL = 'http://10.170.34.134:3000/mock/104'
}
const AxiosService = Axios.create(serviceConfig)
AxiosService.$loading = new Loading('loading', 'loading...')

// 请求拦截
AxiosService.interceptors.request.use(config => {
  AxiosService.$loading.show()
  var params = {}
  var data = {}
  var dataString = false

  if(config.method === 'get') {
    params = config.params
  }
  if(config.method === 'post') {
    config.headers.Accept = 'application/json'
    config.headers['Content-Tyep'] = 'application/x-www-form-urlencoded'
    data = config.data.data
    dataString = true
  }
  if(config.method === 'put') {
    config.method = 'post'
    config.headers.Accept = 'application/json'
    config.headers['Content-Tyep'] = 'application/json'
    params = config.data.params
    data = config.data.data
  }
  config.params = params
  config.data = dataString ? Qs.stringify(data) : data
  // 指定用于取消请求的 cancel token
  const $source = Axios.CancelToken.source();
  config.cancelToken = $source.token
  return config

},error => {
  return Promise.reject(error)
})

// 响应拦截
AxiosService.interceptors.response.use(response => {
   AxiosService.$loading.hide()
  const data = response.data
  const status = response.status
  if(status === 200) {
    return data ? data : true
  }
}, error => {
   AxiosService.$loading.hide()
  //  请求已经发出， 但是服务器响应返回的状态吗不在2xx的范围内,可根据状态码返回对应的提示信息
  return Promise.reject(error)
})

export default AxiosService