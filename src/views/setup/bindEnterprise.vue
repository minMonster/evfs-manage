<template>
  <div class="bind-enterprise">
    <div class="bind-inner">
      <div class="bind-body" v-if="!success">
        <h3>节点服务器签署企业隶属关系</h3>
        <div class="server-info">
          <input type="hidden" id="signResult">
          <p>服务器名称： {{serverName}}</p>
          <div>服务器身份标识：{{serverAddress}} <button @click="copyServerAddress">复制</button></div><!--@click=copyPubKey-->
          <div>隶属企业名称： <input class="condition-int" type="text"  v-model="orgName" placeholder="隶属企业名称" /></div><!-- TODO 隶属企业名称 -->
        </div>
        <p class="sign-note">请通过身份签名安全插件，用服务器所属企业身份标识完成签名确认。</p>
        <Button type="primary" size="large" class="bind-enterprise-btn" long @click="bind">隶属关系绑定</Button>
        <div class="bind-note">
          <p>*请在身份签名安全插件中绑定企业身份标识私钥</p>
          <!-- <p class="download-extension">身份签名安全插件请从此链接下载安装：<a href="">http://wwww.dfdfd.com</a></p> -->
        </div>
      </div>
      <div class="bind-body bind-success" v-if="success">
        <img src="~@/assets/setup/success.png" alt="">
        <h3>节点服务器企业隶属关系绑定成功！</h3>
        <div class="chain-btn">
          <button class="join-chain-btn" @click="join">加入现有的链</button>
          <button class="create-chain-btn" @click="create">创建新的链</button>
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
      key: 'org.brewchain.account.org.pubkey',
      success: false,
      serverName: '',
      serverAddress: '--',
      orgName: '',
      timer: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initServerInfo()
    },
    initServerInfo () {
      sApi.pbgni({
      }).then(res => {
        if (res && res.retCode === 1) {
          this.serverName = res.nodeName
          this.serverAddress = res.nodeAddress
          sessionStorage.setItem('setup_node_address', this.serverAddress)
          sessionStorage.setItem('setup_org_name', this.serverName)
        }else{
          this.$Message.error(res.retMsg)
        }
      }).catch(err => {
        this.$Message.error('服务器名称地址查询失败')
        return
      }).then(() => {

      })
      
      // let serverName = this.$cookie.get('serverName')
      // if (!serverName) {
      //   // 调用接口获取下服务器名称
      // }
      // this.serverName = serverName
    },
    bind () {
      if (!this.orgName) {
        this.$Message.error('请输入企业名称')
        return
      }
      let ts = new Date().getTime()
      let data = {
        'sign': ts + ';' + this.orgName,
        'ts': ts
      }
      this.$qrCodeAuthDialog.show(
        {
          url: 'man/pbsno.do',
          data,
          // 这里要写一个闭包函数 返回 需要的 api
          setIntervalFunc: () => sApi.pbgno({}),
          func: 'setup_node_org'
        },
        (resPromise) => {
          // resPromise 轮询的结果 在此处处理业务逻辑
          return resPromise.then(res => {
            if (res && res.retCode === 1) {
              // name,address, 地址名称都有了
              // 把address存储在sessionStorage中
              sessionStorage.setItem('setup_org_address', res.orgAddress)
              sessionStorage.setItem('setup_org_name', res.orgName)
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
      // // 绑定
      // // let timestamp = Date.now()
      // // let str = this.key + this.pubKey + timestamp
      // // sign(str)
      // this.timer = setInterval(() => {
      //   let signResult = document.getElementById('signResult')
      //   let signature = signResult.value
      //   if (signature && !signature.match(/^(doing)|(fail)|(refuse)$/)) {
      //     this.closeTimer()
      //     console.log(signature)
      //     this._bind()
      //   }
      //   if (signature === 'fail') {
      //     console.log('签名失败')
      //     this.closeTimer()
      //     // this.$toast('签名失败')
      //   }
      //   if (signature === 'refuse') {
      //     console.log('拒绝签名')
      //     this.closeTimer()
      //     // this.$toast('签名失败')
      //   }
      // }, 100)
    },
    _bind () {
      // let timestamp = Date.now()
      // let key = this.key
      // let value = this.pubKey
      // let str = key + value + timestamp
      // let signature = cwv.ecHexSign(str)
      // let data = {
      //   key, value, timestamp, signature
      // }
      // this.$http.post('/fbs/man/pbsps.do', data).then(res => {
      //   res = res.data
      //   console.log(res)
      //   if (res.retCode === '1') {
      //     this.success = true
      //   }
      // }).catch(() => {

      // }).then(() => {
      //   console.log(arguments)
      // })
    },
    copyServerAddress () {
      let serverAddress = this.serverAddress
      let that = this
      this.$copyText(serverAddress).then(function (e) {
        that.shareModal = false
        that.$Message.success('复制成功')
      }, function (e) {
        that.shareModal = false
        that.$Message.error('复制失败')
      })
    },
    next () {
      this.$emit('next', 'step4')
    },
    join () {
      this.$emit('next', 'step4-joinchain')
    },
    create () {
      this.$emit('next', 'step4.1')
    },
    destroyed () {
    }
  }
}
</script>

<style lang="less">
  .bind-enterprise {
    .bind-body {
      width: 700px;
      text-align: center;
      margin: 0 auto;
      h3 {
        font-size: 24px;
        padding-bottom: 20px;
        color: #262626;
      }
      .server-info {
        padding: 10px 30px;
        text-align: left;
        background:rgba(23,190,222,0.04);
        border-radius:4px;
        border:1px dashed rgba(23,190,222,1);
        color: #224284;
        font-weight: 500;
        line-height: 2em;
        margin: 20px 0 40px 0;
        div {
          word-break: break-all;
        }
        button {
          border-color: #AFB3B6;
          cursor: pointer;
          border-radius: 3px;
          padding: 0 10px;
          height:20px;
          line-height: 20px;
          font-size:12px;
          outline: none;
          box-shadow: none;
          color:rgba(158,158,158,1);
        }
      }
      .bind-note {
        line-height: 2em;
      }
      .bind-enterprise-btn {
        width: 60%;
        margin: 20px auto 40px auto;
      }
      .download-extension {
        color: #635E5E;
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
        margin-bottom: 30px;
      }
      .chain-btn {
        button {
          display: block;
          width:276px;
          height:40px;
          background:rgba(53,107,219,1);
          color: #fff;
          border-radius:4px;
          border: 0;
          outline: none;
          box-shadow: none;
          margin: 0 auto;
          margin-bottom: 22px;
          cursor: pointer;
        }
        .create-chain-btn {
          background: #ECEDED;
          color: #262626;
        }
      }
    }
  }
</style>
