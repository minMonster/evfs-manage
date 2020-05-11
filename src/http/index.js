import axios from 'axios'
import Vue from 'vue'
import cookies from "js-cookie";
import { requestTimeout } from '../utils/const';
import router from '../router';
import { Message } from 'view-design'

var inst = axios.create({
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
inst.interceptors.request.use(function (config,ss) { 
  let address = window.localStorage.getItem('money-address')
  let publickey = window.localStorage.getItem('money-publickey')
  if (address) {
    // 添加headers
    config.headers.address = address
  }
  if (publickey) {
    config.headers.publickey = publickey
  }
  return config;
}, function (err) {
  return Promise.reject(err);
})

function removeValue() {
  var uploadFile = document.getElementById('uploadFileResult')
  var authFile = document.getElementById('authFileResult')
  var customResult = document.getElementById('customResult')
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
inst.interceptors.response.use(function (res) { 
  //  清空签名的值
  removeValue()
  return res
},function(err){
  Message.error('服务请求错误')
  removeValue()
  return Promise.reject(err);
}) 
export default inst;