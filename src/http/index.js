import axios from 'axios'
import { requestTimeout } from '@/utils/const'
import { Message } from 'view-design'

const service = axios.create({
  timeout: requestTimeout, // 设置超时
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
  let address = window.localStorage.getItem('money-address')
  let publickey = window.localStorage.getItem('money-publickey')
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  // 添加headers
  if (address) { config.headers['address'] = address }
  config.params = {
    ...config.params
  }
  if (publickey) {
    config.headers.publickey = publickey
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

function removeValue () {
  let uploadFile = document.getElementById('uploadFileResult')
  let authFile = document.getElementById('authFileResult')
  let customResult = document.getElementById('customResult')
  if (customResult) {
    customResult.value = ''
  }
  if (authFile) {
    authFile.value = ''
  }
  if (uploadFile) {
    uploadFile.value = ''
  }
}

service.interceptors.response.use((res) => {
  //  清空签名的值
  removeValue()
  return res
}, function (err) {
  Message.error('服务请求错误')
  removeValue()
  return Promise.reject(err)
})
export default service
