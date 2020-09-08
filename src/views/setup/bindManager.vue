<template>
  <div class="bind-manager">
    <input type="hidden" id="signResult">
    <div class="bind-inner">
      <div class="bind-body" v-if="!success">
        <h3>绑定首位服务器管理员</h3>
        <Row>
          <Col>
          <div>授权流程确认码：{{serverName}}</div>
          </Col>
          <Col>
          <div class="condition-item">
            <span class="condition-label">初始管理员名称：</span>
            <input class="condition-int" type="text"  v-model="paramStr" placeholder="请输入要加入链实例的企业的完整名称"></input>
          </div>
          </Col>
          <!-- <div  v-show="popup">
                    <div id="qrcode"></div>
                    <div class="over"></div>
                  </div> -->
        </Row>
        <p>请通过身份签名安全插件，用需要绑定的管理员身份完成签名确认。</p>
        <Button type="primary" :loading="loading" long @click="bind">绑定</Button>
        <div class="download-extension">身份签名安全插件请从此链接下载安装：<a href="">http://wwww.dfdfd.com</a></div>
      </div>
      <div class="bind-body bind-success" v-if="success">
        <img src="~@/assets/setup/success.png" alt="">
        <h3>节点服务器首位管理员绑定成功！</h3>
        <Button type="primary" long @click="next">企业隶属关系绑定</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      success: false,
      loading: false,
      timer: null,
      serverName: '',
      paramStr: ''
    }
  },
  destroyed () {
    this.closeTimer()
  },
  methods: {
    closeTimer () {
      if (this.timer) {
        clearInterval(this.timer)
        var signResult = document.getElementById('signResult')
        signResult = ''
      }
    },
    bind () {
      var key = 'local.node.admin.address'
      var value = localStorage.getItem('money-address')
      var timestamp = Date.now()
      var str = key + value + timestamp
      sign(str)
      this.timer = setInterval(() => {
        var signResult = document.getElementById('signResult')
        var signature = signResult.value
        if (signature && !signature.match(/^(doing)|(fail)|(refuse)$/)) {
          this.closeTimer()
          console.log(signature)
          var data = {
            key, value, timestamp, signature
          }
          this._bind(data)
        }
        if (signature == 'fail') {
          console.log('签名失败')
          this.closeTimer()
          // this.$toast('签名失败')
        }
        if (signature == 'refuse') {
          console.log('拒绝签名')
          this.closeTimer()
          // this.$toast('签名失败')
        }
      }, 100)
    },
    _bind (data) {
      this.loading = true
      this.$http.post('/fbs/man/pbsps.do', data).then(res => {
        res = res.data
        if (res.retCode == 1) {
          this.$Message.success('绑定成功')
          this.success = true
        } else {
          if (res.retMsg) {
            this.$Message.error(res.retMsg)
          }
        }
      }).catch(err => {
        console.log(err)
      }).then(() => {
        this.loading = false
      })
    },
    next () {
      this.$emit('next', 'step3')
    }
  }
}
</script>

<style lang="less">
  .bind-manager {
    .bind-body {
      width: 500px;
      text-align: center;
      margin: 0 auto;
      h3 {
        font-size: 24px;
        padding-bottom: 20px;
        color: #262626;
      }
      p {
        padding: 20px 0 50px 0;
        color: #635E5E;
      }
      .download-extension {
        color: #635E5E;
        margin-top: 30px;
        a {
          color: #198FFF;
        }
      }
    }
    .bind-success {
      & > img {
        width: 100px;
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 20px;
      }
    }
  }
</style>
