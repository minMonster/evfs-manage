<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div class='login'>
    <!--    <Button type="primary" @click="login">登录</Button>-->
    <div class="header-title">欢迎登录</div>
    <p class="header-info">请使用“数字身份管理”APP扫描二维码，进行登录身份确认</p>
    <div class="qrcode" v-if="qrCodeUrl">
      <vue-qr-code :margin="0" v-if="qrCodeUrl" class="qrCodeAuthDialog-picture" id="picture"
                   :value="qrCodeUrl"></vue-qr-code>
    </div>
    <div class="info">
      <p>没有“数字身份管理”APP？</p>
      <p>* “数字身份管理” App，请访问此链接下载安装：<a href="https://www.coolaw.com/cfchain/eID" target="_blank">https://www.coolaw.com/cfchain/eID</a></p>
      <p>* 请在“数字身份管理” App中进行数字身份创建和管理。</p>
    </div>
    <img src="" alt="" style="position:absolute;top: 0;left: 0;width: 443px;height: 492px;opacity: 0.04;background: #388af7;" class="b-g-img1">
    <img src="" alt="" style="position:absolute;bottom: 0;right: 0;width: 502px;height: 447px;opacity: 0.04;background: #388af7;" class="b-g-img5">
    <img src="" alt="" style="position:absolute;top: 206px;right: 471px;width: 84px;height: 65px;opacity: 0.04;background: red;" class="b-g-img2">
    <img src="" alt="" style="position:absolute;bottom: 129px;left: 158px;width: 84px;height: 65px;opacity: 0.04;background: red;" class="b-g-img3">
    <img src="" alt="" style="position:absolute;bottom: 149px;right: 273px;width: 84px;height: 65px;opacity: 0.04;background: red;" class="b-g-img4">
  </div>
</template>

<script>
import VueQrCode from 'vue-qrcode'

import * as cApi from '@/http/api.js'

export default {
  name: 'login',
  components: { VueQrCode },
  data: function () {
    return {
      qrCodeUrl: '',
      fbsInterval: null
    }
  },
  created () {
    let smid = new Date().getTime()
    this.qrCodeUrl = JSON.stringify({
      url: process.env.VUE_APP_FBS_HOST + process.env.VUE_APP_BASE_API + 'cmw/pblin.do',
      func: 'login_manager',
      data: { ts: smid }
    })
    if (this.fbsInterval) {
      clearInterval(this.fbsInterval)
    }
    this.fbsInterval = setInterval(() => {
      cApi.pbrus({}, { params: { smid } }).then(res => {
        if (res.loginStatus === 'success') {
          sessionStorage.setItem('fbs_address', res.address)
          this.$Message.success('登录成功')
          this.$router.push('/')
          clearInterval(this.fbsInterval)
        }
      })
    }, 3000)
  },
  methods: {
  }
}
</script>

<style lang='less' type='text/less'>
    .login {
      height: 900px;
      overflow: hidden;
      background-color: #f5f6f9;
      box-sizing: content-box;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;

      .header-title {
        width: 120px;
        height: 42px;
        font-size: 30px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #2c2c2c;
        line-height: 42px;
        margin-top: 186px;
      }
      .header-info {
        margin-top: 18px;
        width: 420px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #2c2c2c;
        line-height: 22px;
      }
      .qrcode {
        margin-top: 28px;
        width: 226px;
        min-height: 226px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        border-radius: 8px;
        margin-bottom: 78px;
        .qrCodeAuthDialog-picture {
          width: 189px;
          height: 189px;
        }
      }
      .info {
        p {
          line-height: 25px;
        }
        p:first-child {
          width: 169px;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #000000;
          line-height: 20px;
          margin-bottom: 16px;
        }
      }
    }
</style>
