/*
  *doc
  *  使用流程
  *  1、main.js 注册组件
  *     import { registryQrCodeAuthDialog } from '@/components/qrCodeAuthDialog'
  *     Vue.use(registryQrCodeAuthDialog)
  *  2、页面中直接使用
  *     this.$qrCodeAuthDialog.show({url: '**', func: 'login_manager'}, ()=>{成功}, ()=>{失败})
  *params
  *  @options {object} 配置
  *    >url {string} 接口地址 ｜ 必填
  *    >func {string} 功能类型，登录为 login_manager ｜ 必填
  *    >data {object} 所需其他参数类型
  *      >ts {number} 时间戳，默认参数无需传递
  *  @successCallBack {callBack(callBack, result)} 成功回掉
  *    > callBack {func} 调用关闭弹窗
  *    > result {object} 返回值
  *  @errorCallBack {callBack} 失败回掉
*/
import vue from 'vue'
import UI from './index.vue'
const SetQrCodeAuthDialog = vue.extend(UI)
class QrCodeAuthDialog {
  constructor () {
    this.toastDom = null
    this.polling = null
    this.num = 3
    this.successCallBack = null
    this.errorCallBack = null
  }
  async openPolling () {
    if (this.polling) {
      clearTimeout(this.polling)
    }
    if (!this.toastDom.dialogVisible) {
      return
    }
    let result = await this.mockAPi().then(() => {
      return true
    }).catch(() => {
      return false
    })
    if (result) {
      if (this.successCallBack) {
        this.successCallBack(() => {
          this.toastDom.hide()
        }, { address: 'asds' })
      }
    } else {
      this.closePolling()
      this.polling = setTimeout(() => {
        this.openPolling()
      }, 3000)
    }
  }
  mockAPi () {
    return new Promise((resolve, reject) => {
      if (this.num === 0) {
        resolve()
      } else {
        setTimeout(() => {
          this.num--
          reject(new Error(''))
        }, 1000)
      }
    })
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
  show (options, successCallBack, errorCallBack) {
    this.num = 3
    if (Object.prototype.toString.call(options) !== '[object Object]') {
      throw new Error('options 必须是一个 Object,且必填')
    } else {
      if (!options.url) {
        throw new Error('options.url 必须是一个 String,且必填')
      }
      if (!options.func) {
        throw new Error('options.func 必须是一个 String,且必填')
      }
      if (!options.data) {
        options.data = {}
      }
    }
    this.toastDom.show()
    this.toastDom.qrCodeUrl = JSON.stringify({
      url: options.url,
      fun: options.fun,
      data: { ...options.data, ts: new Date().getTime() }
    })
    this.openPolling()
    this.successCallBack = successCallBack
    this.errorCallBack = errorCallBack
  }
}

// 注册为全局组件的函数
export function registryQrCodeAuthDialog () {
  vue.prototype.$qrCodeAuthDialog = new QrCodeAuthDialog()
  vue.prototype.$qrCodeAuthDialog.init()
}
