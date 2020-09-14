import axios from 'axios'
import { requestTimeout } from '@/utils/const'
import { Message } from 'view-design'

const service = axios.create({
  timeout: requestTimeout, // 设置超时
  baseURL: process.env.VUE_APP_BASE_API,
  transformRequest: [(data, headers) => {
    if (data) {
      const cons = data.constructor
      if (cons === FormData) {
        return data
      } else {
        return JSON.stringify(data)
      }
    }
  }]
})
service.interceptors.request.use((config) => {
  config.headers['Accept'] = 'application/json;charset=UTF-8'
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  if (config.params && config.params.smid) {
    config.headers['smid'] = config.params.smid
  } else {
    config.headers['smid'] = new Date().getTime()
  }
  let fbs_address = sessionStorage.getItem('fbs_address')
  if (fbs_address) {
    config.headers['uaddr'] = fbs_address
  }
  config.params = {
    ...config.params
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

// function removeValue () {
//   let uploadFile = document.getElementById('uploadFileResult')
//   let authFile = document.getElementById('authFileResult')
//   let customResult = document.getElementById('customResult')
//   if (customResult) {
//     customResult.value = ''
//   }
//   if (authFile) {
//     authFile.value = ''
//   }
//   if (uploadFile) {
//     uploadFile.value = ''
//   }
// }

service.interceptors.response.use((response) => {
  //  清空签名的值
  const data = response.data
  const code = data.retCode
  if (response.status !== 200) {
    return Promise.reject(response.data)
  }
  if (code !== 1) {
    return Promise.reject(response.data)
  }
  return response.data
}, function (err) {
  Message.error('服务请求错误')
  return Promise.reject(err)
})
export default service
