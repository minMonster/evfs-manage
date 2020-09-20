<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div class='login'>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
import * as cApi from '@/http/api.js'

export default {
  name: 'login',
  components: {},
  data: function () {
    return {}
  },
  created () {},
  methods: {
    login () {
      let smid = new Date().getTime()
      this.$qrCodeAuthDialog.show(
        {
          url: 'cmw/pblin.do',
          data: { ts: smid },
          func: 'login_manager',
          // 这里要写一个闭包函数 返回 需要的 api
          setIntervalFunc: () => cApi.pbrus({}, { params: { smid } })
        },
        (resPromise) => {
          // 必须返回 Boolean 值
          // resPromise 轮询的结果 在此处处理业务逻辑
          return resPromise.then(res => {
            console.log(res, res.loginStatus === 'success')
            if (res.loginStatus === 'success') {
              sessionStorage.setItem('fbs_address', res.address)
              this.$Message.success('登录成功')
              this.$router.push('/')
              return true
            }
            return false
          }).catch(() => {
            return false
          })
        })
    }
  }
}
</script>

<style lang='less' type='text/less'>
    .login {
    }
</style>
