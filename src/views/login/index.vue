<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div class='login'>
    <Button type="primary" @click="login">登陆</Button>
  </div>
</template>

<script>

export default {
  name: 'login',
  components: {},
  data: function () {
    return {}
  },
  created () {},
  methods: {
    login () {
      this.$qrCodeAuthDialog.show({ url: '123', func: '123' }, (callBack, res) => {
        console.log(res)
        callBack()
      })
    }
  }
}
</script>

<style lang='less' type='text/less'>
    .login {
    }
</style>
