<template>
  <div class="set-server">
    <div class="set-body">
      <h3>节点服务器名称设置</h3>
      <div class="set-form">
        <div class="set-form-item">
          <Input long size="large" maxlength="20" placeholder="请输入节点服务器名称" v-model="serverName"/>
        </div>
        <div class="set-from-item">
          <Button size="large" type="primary" :loading="loading" long @click="next">下一步</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as sApi from './setupapi'
export default {
  data () {
    return {
      serverName: '',
      loading: false
    }
  },
  methods: {
    next () {
      this.set()
    },
    init () {

    },
    set () {
      // let key = 'org.brewchain.account.name'
      let value = this.serverName.trim()
      if (!value) {
        this.$Message.error('请输入服务器名称')
        return
      }
      // let timestamp = Date.now()
      // let data = {
      //   key, value, timestamp
      // }
      this.loading = true
      sApi.pbsnn({
        'name': value
      }).then(res => {
        if (res.retCode === 1) {
          this.$Message.success('设置成功')
          this.$cookie.set('serverName', value)
          this.$emit('next', 'step2')
        }
      }).catch(() => {

      }).then(() => {
        this.loading = false
      })
      // this.$http.post('/fbs/man/pbspo.do', data).then(res => {
      //   res = res.data
      //   if (res.retCode == 1) {
      //     this.$Message.success('设置成功')
      //     this.$cookie.set('serverName', value)
      //     this.$emit('next', 'step2')
      //   }
      // }).catch(err => {

      // }).then(() => {
      //   this.loading = false
      // })
    }
  },
  created: function () {
    sApi.pbgnn({}).then(res => {
      if (res && res.retCode === 1) {
        this.serverName = res.name
      } else {
        console.log(res.retMsg)
        this.$Message.error('查询失败')
      }
    }).catch(err => {
      console.log(err)
    }).then(() => {
      this.loading = false
    })
    // this.$http.post('/fbs/man/pbgpo.do', { 'key': 'org.brewchain.account.name' }).then(res => {
    //   res = res.data
    //   if (res.retCode == 1) {
    //     let pubKey = cwv.genPubkey()
    //     let data = {
    //       seed: '',
    //       pubKey
    //     }
    //     this.$http.post('/fbs/man/pbgnc.do', data).then(resGnc => {
    //     }).catch(err => {
    //       console.log(err)
    //     }).then(() => {

    //     })
    //     this.serverName = res.value
    //   }
    // }).catch(err => {

    // }).then(() => {
    //   this.loading = false
    // })
  }
}
</script>
<style lang="less" scoped>
  .set-body {
    h3 {
      font-size: 24px;
      text-align: center;
      color: #262626;
      margin-bottom: 70px;
    }
  }
  .set-form {
    width: 500px;
    margin: 0 auto;
    .set-form-item {
      margin-bottom: 30px;
    }
  }
</style>
