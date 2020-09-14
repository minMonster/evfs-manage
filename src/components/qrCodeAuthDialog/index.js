/*
  * @doc
  *  使用流程
  *  1、main.js 注册组件
  *     import { registryQrCodeAuthDialog } from '@/components/qrCodeAuthDialog'
  *     Vue.use(registryQrCodeAuthDialog)
  *  2、页面中直接使用
  *     this.$qrCodeAuthDialog.show({url: '**', func: 'login_manager'}, ()=>{成功}, ()=>{失败})
  * @params
  *  @options {object} 配置
  *    >url {string} 接口地址 ｜ 必填
  *    >func {string} 功能类型，登录为 login_manager ｜ 必填
  *    >setIntervalFunc {function} 需要轮询的 api ｜ 必填
  *    >data {object} 所需其他参数类型
  *      >ts {number} 时间戳，默认参数无需传递
  *  @userCallBack {callBack(resultFunc)} 轮询回掉
  *    > resultFunc {Promise Object} 返回 api 轮询 promise 对象，
  *      > return {boolean} 值为 false 关闭弹窗，接受到 true 继续轮训
  * @demo 登陆
  *  let smid = new Date().getTime()
  *  this.$qrCodeAuthDialog.show(
  *    {
  *      url: 'pblin.do',
  *      data: { ts: smid },
  *      setIntervalFunc: () => cApi.pbrus({}, { params: { smid } }), func: 'login_manager'
  *    },
  *    (resPromise) => {
  *      return resPromise.then(res => {
  *         if (res.data.loginStatus === 'success') {
  *           sessionStorage.setItem('fbs_address', res.data.address)
  *           // 必须返回 Boolean 值
  *           return true
  *         }
  *         return false
  *      }).catch(err => {
  *        console.log(err)
  *        return false
  *    })
  *  })
*/

import vue from 'vue'
import UI from './index.vue'
const SetQrCodeAuthDialog = vue.extend(UI)
class QrCodeAuthDialog {
  constructor () {
    this.toastDom = null
    this.polling = null
    this.setIntervalFunc = null
    this.userCallBack = null
  }
  async openPolling () {
    if (this.polling) {
      clearTimeout(this.polling)
    }
    if (!this.toastDom.dialogVisible) {
      return
    }
    let resultFunc = this.setIntervalFunc()
    let result = await this.userCallBack(resultFunc)
    if (result) {
      this.toastDom.hide()
    } else {
      this.closePolling()
      this.polling = setTimeout(() => {
        this.openPolling()
      }, 3000)
    }
  }
  closePolling () {
    clearTimeout(this.polling)
    this.polling = null
  }
  init () {
    let that = this
    const toastDom = new SetQrCodeAuthDialog({
      el: document.createElement('div'),
      data () {
        return {
          qrCodeUrl: '',
          dialogVisible: false
        }
      },
      watch: {
        dialogVisible (e) {
          if (!e) {
            that.closePolling()
          }
        }
      },
      methods: {
        hide () {
          this.dialogVisible = false
        },
        show () {
          this.dialogVisible = true
        }
      }
    })
    this.toastDom = toastDom
    document.body.appendChild(this.toastDom.$el)
  }
  hide () {
    this.toastDom.dialogVisible = false
  }
  show (options, userCallBack) {
    if (Object.prototype.toString.call(options) !== '[object Object]') {
      throw new Error('options 必须是一个 Object,且必填')
    } else {
      if (!options.url) {
        throw new Error('options.url 必须是一个 String,且必填')
      }
      if (!options.func) {
        throw new Error('options.func 必须是一个 String,且必填')
      }
      if (Object.prototype.toString.call(options.setIntervalFunc) !== '[object Function]') {
        throw new Error('options.setIntervalFunc 必须是一个 Function,且必填')
      }
      if (!options.data) {
        options.data = {}
      }
    }
    if (Object.prototype.toString.call(userCallBack) !== '[object Function]') {
      throw new Error('userCallBack 必须是一个 Function,且必填')
    }
    this.toastDom.show()
    this.toastDom.qrCodeUrl = JSON.stringify({
      url: process.env.VUE_APP_FBS_HOST + process.env.VUE_APP_BASE_API + options.url,
      func: options.func,
      data: { ...options.data }
    })
    this.setIntervalFunc = options.setIntervalFunc
    this.userCallBack = userCallBack
    setTimeout(() => {
      this.openPolling()
    }, 3000)
  }
}

// 注册为全局组件的函数
export function registryQrCodeAuthDialog () {
  vue.prototype.$qrCodeAuthDialog = new QrCodeAuthDialog()
  vue.prototype.$qrCodeAuthDialog.init()
}
