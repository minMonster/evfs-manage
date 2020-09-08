import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router/index.js'
import store from '../store/'
import { Loading } from 'element-ui'
let loading = null
const service = axios.create({
  timeout: requestTimeout, //设置超时
  transformRequest: [function (data, headers) {
    if (data) {
      var cons = data.constructor
      if (cons == FormData) {
        return data
      } else {
        return JSON.stringify(data)
      }
    }
  }],
})

// request interceptor 拦截器
service.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/vnd.sd.v2+json'
  // console.log(config)
  config.params = {
    ...config.params,
    // 混入 多语言
    // lang: store.getters.language,
    lang: 'cn', // 暂时先用中文，多语言添加 注释
    saas_app_id: store.getters.saas_app_id
  }
  // console.log(config.params.notLoding)
  if (!config.params.notLoading) {
    loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  delete config.params.notLoding
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    // console.log(response)
    const data = response.data
    const code = data.code
    if (response.status !== 200) {
      return Promise.reject(response.data)
    }
    if (loading) loading.close()
    if (code === 401 || code === 403) {
      Cookies.remove()
      router.push({
        path: '/login',
        query: {
          redirect: encodeURIComponent(window.location.pathname + window.location.search)
        }
      })
    } else if (code === 404) {
      router.push({
        path: '/notFound'
      })
    } else if (code !== 0) {
      // @params config.isExistCode
      // @doc 处理 服务端 特殊返回格式
      // @default false
      if (!response.config.isExistCode) {
        // Toast({
        //   message: data.msg,
        //   icon: 'clear'
        // })
        return Promise.reject(response.data)
      }
    } else if (code === 0) {
      return Promise.resolve(response.data)
    }
    return response.data
  }
)
export default service
