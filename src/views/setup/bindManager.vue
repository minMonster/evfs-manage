<template>
  <div class="bind-manager">
    <input type="hidden" id="signResult">
    <div class="bind-inner">
      <div class="bind-body" v-if="!success">
        <h3>绑定首位服务器管理员</h3>
        <Row>
          <!-- <Col>
          <div>授权流程确认码：{{serverTag}}</div>
          </Col> -->
          <Col>
          <div class="condition-item">
            <span class="condition-label">初始管理员名称：</span>
            <input class="condition-int" type="text"  v-model="paramStr" placeholder="请输入初始管理员名称" />
          </div>
          </Col>
          <!-- <div  v-show="popup">
                    <div id="qrcode"></div>
                    <div class="over"></div>
                  </div> -->
        </Row>
        <p>请通过身份签名安全插件，用需要绑定的管理员身份完成签名确认。</p>
        <Button type="primary" :loading="loading" long @click="bind">绑定</Button>
        <!-- <div class="download-extension">身份签名安全插件请从此链接下载安装：<a href="">http://wwww.dfdfd.com</a></div> -->
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
import * as sApi from './setupapi'
export default {
  data () {
    return {
      success: false,
      loading: false,
      timer: null,
      serverTag: '',
      paramStr: ''
    }
  },
  destroyed () {
    // this.closeTimer()
  },
  created () {
    // this.serverTag = new Date().getTime()
  },
  methods: {

    bind () {
      sessionStorage.clear()
      if (!this.paramStr) {
        this.$Message.error('请输入管理员名称')
        return
      }
      let ts = new Date().getTime()
      let data = {
        'ts': ts,
        'sign': ts + ';' + this.paramStr.trim()
      }
      // 绑定管理员名称
      this.$qrCodeAuthDialog.show(
        {
          url: 'man/pbsna.do',
          data,
          // 这里要写一个闭包函数 返回 需要的 api
          setIntervalFunc: () => sApi.pbgna({}),
          func: 'setup_node_admin'
        },
        (resPromise) => {
          // resPromise 轮询的结果 在此处处理业务逻辑
          return resPromise.then(res => {
            if (res && res.retCode === 1) {
              // name,address, 地址名称都有了
              // 把address存储在sessionStorage中
              sessionStorage.setItem('setup_admin_address', res.address)
              sessionStorage.setItem('setup_admin_name', res.name)
              // this.$Message.success('绑定成功')
               this.success = true
              return true
            } else {
              return false
            }
          }).catch(() => {
            // this.loading = false
            return false
          })
        }
      )
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
