<template>
  <div class="join-chain">
    <div class="join-chain-in input-form" v-if="step == '1'">
      <h3>加入现有的链</h3>
      <div class="clear sub-title">
        <div class="fl">现有链的信息</div>
        <div class="fr" @click="getServerInfo">获得当前服务器信息</div>
      </div>
      <div class="join-form">
        <div class="form-item">
          <div class="label">链的访问地址</div>
          <Input placeholder="请输入要加入链实例的任意节点服务器访问地址" v-model="existsUrl" />
        </div>
        <div class="form-item">
          <div class="label">IP地址</div>
          <Input placeholder="请输入节点IP地址" v-model="ipUrl" />
        </div>
        <div class="form-item">
          <div class="label">Memory参数</div>
          <Input placeholder="请输入节点docker需要的memory地址" v-model="memory" />
        </div>
        <div class="form-item">
          <div class="label">服务器名称</div>
          <Input placeholder="请输入当前节点服务器名称" v-model="serverName" readonly />
        </div>
        <div class="form-item">
          <div class="label">服务器身份标识</div>
          <Input placeholder="请输入当前节点服务器的身份标识公钥" v-model="nodeAddress"  />
        </div>
        <div class="form-item">
          <div class="label">隶属企业名称</div>
          <Input placeholder="请输入当前节点服务器的所属企业名称" v-model="orgName" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业身份标识</div>
          <Input placeholder="请输入当前节点服务器的所属企业身份标识公钥" v-model="orgAddress" />
        </div>
        <Button class="join-btn" long type="primary" @click="apply">申请加入</Button>
      </div>
    </div>
    <div class="join-chain-in approval" v-if="step == '2'">
      <div class="wait-img">
        <img src="~@/assets/setup/waitting.png" alt="">
      </div>
      <h3>已经成功提交加入申请，等待审批…</h3>
      <div class="hash-info">链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
      <div class="time-info">
        <div class="start-time">开始时间：2020-1-1 12:00:00</div>
        <div class="approval-time">审批等待时间：22分钟15秒</div>
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '3'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>恭喜你，链实例已经加入成功！</h3>
      <div class="hash-info">链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
      <div class="time-info">
        <div class="start-time">加入申请提交时间：2020-1-1 12:00:00</div>
        <div class="approval-time">加入申请通过时间：2020-1-1 12:00:00</div>
      </div>
      <div class="join-bottom-btns">
        <Button long class="create-file" type="primary">创建新的文件存储域</Button>
        <Button long class="join-file" type="default">加入现有的文件存储域</Button>
      </div>
    </div>
  </div>
</template>

<script>
// import * as sApi from '../setupapi'

export default {
  data () {
    return {
      step: '1',
      serverName: '',
      nodeAddress: '', // 服务器身份标识
      orgAddress: '', // 企业身份标识
      orgName: '', // 企业名称
      existsUrl: '', // 访问地址
      ipUrl: '', // 节点的ip地址（docker安装到哪里）
      memory: '' // docker启动的memory
    }
  },
  watch: {
    step (n, o) {
      console.log(n, o)
      let that = this
      if (n === 2) {
        setTimeout(() => {
          that.step = '3'
        }, 3000)
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 申请加入
    apply () {
      // 判断链的访问地址
      if (!this.existsUrl) {
        this.$Message.error('请输入链的访问地址')
        return
      }
      if (!this.ipUrl) {
        this.$Message.error('请输入节点ip地址')
        return
      }
      if (!this.memory) {
        this.$Message.error('请输入docker的memory参数')
        return
      }
      // 判断服务器名称
      if (!this.serverName) {
        this.$Message.error('请输入服务器名称')
        return
      }
      // 判断服务器身份标识
      if (!this.serverAddress) {
        this.$Message.error('请输入服务器身份标识')
        return
      }
      // 判断隶属企业名称
      if (!this.orgName) {
        this.$Message.error('请输入企业名称')
        return
      }
      // 判断隶属企业身份标识    
      if (!this.orgAddress) {
        this.$Message.error('请输入企业身份标识')
        return
      }
      let data = {
        existsNodeUrl: this.existsNodeUrl,
        ip: this.ipUrl,
        memory: this.memory
      }
      // sApi.pbjec({
      //   data
      // }).then(res => {
      //   console.log(res)
      //   if (res && res.retCode === 1) {
      //     this.step = 2
      //   }
      // }).catch(err => {
      //   console.log('加入现有链异常：',err)
      // })
    },
    // apply () {
    //   let orgName = this.orgName
    //   let existsUrl = this.existsUrl
    //   if (!existsUrl) {
    //     this.$Message.error('请输入链访问地址')
    //     return
    //   }
    //   if (!orgName) {
    //     this.$Message.error('请输入企业名称')
    //     return
    //   }
    //   let data = {
    //     orgName, existsUrl
    //   }
    //   this.$http.post('/fbs/man/pbspo.do', data).then(res => {
    //     res = res.data
    //     if (res.retCode == 1) {
    //       this.step = 2
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   }).then(() => {

    //   })
    // },
    getServerInfo () {
      // 读取服务器身份标识
      // key = org.brewchain.account.coinbase.pubkey
      // 读取企业身份标识
      // key = org.brewchain.account.org.pubkey
      // POST /fbs/man/pbgpo.do
      // 查询企业信息，查询服务器信息
      // sApi.pbgni({}).then(res => {
      //   if (res && res.retCode === 1) {
      //     this.serverName = res.nodeName
      //     this.serverAddress = res.nodeAddress
      //   }
      // }).catch(err => {

      // })
      // sApi.pbgno({}).then(res => {
      //     if (res && res.retCode === 1) {
      //       this.orgName = res.orgName
      //       this.orgAddress = res.orgAddress
      //     }
      // }).catch(err => {

      // })
    },
    init () {
      this.initServerName()
    },
    initServerName () {
      let serverName = this.$cookie.get('serverName')
      this.serverName = serverName
    },
    // 创建--这个是 点击申请之后显示的东西
    create () {
      let needApprove = this.approval === 'on'
      let orgName = this.orgName
      let data = {
        orgName: '',
        needApprove
      }
      if (!orgName) {
        this.$Message.error('请输入企业名称')
        return
      }
      this.$http.post('/fbs/man/pbscn.do', data).then(res => {
        res = res.data
        if (res.retCode === '1') {
          this.next()
        }
      })
    }

  }
}
</script>

<style lang="less">
  .join-chain-in {
    h3 {
      color: #262626;
      font-size: 24px;
    }
    &.input-form {
      width: 520px;
    }
    .sub-title {
      padding: 20px 0;
      .fl {
        color: #16CEF1;
        font-weight: 500;
      }
      .fr {
        line-height: 24px;
        font-size: 12px;
        cursor: pointer;
        padding: 0 10px;
        color: #6094FF;
        border: 1px solid #6094FF;
        border-radius: 20px;
      }
    }
    .join-form {
      .form-item {
        .label {
          line-height: 1.8;
        }
        padding-bottom: 16px;
      }
    }
    .join-btn {
      margin-top: 24px;
    }
  }
  .approval {
    text-align: center;
    .wait-img {
      img {
        display: block;
        width: 60px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .hash-info {
      font-weight: 500;
      background: #F5FFFC;
      border-radius: 4px;
      border: 1px dashed #17BEDE;
      color: #224284;
      line-height: 24px;
      padding: 0 10px;
      margin: 35px auto;
    }
    .time-info {
      color: #777777;
      line-height: 22px;
      width: 260px;
      margin: 0 auto;
      text-align: left;
    }
  }
  .join-success {
    text-align: center;
    .success-img {
      img {
        display: block;
        width: 60px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .hash-info {
      font-weight: 500;
      background: #F5FFFC;
      border-radius: 4px;
      border: 1px dashed #17BEDE;
      color: #224284;
      line-height: 24px;
      padding: 0 10px;
      margin: 35px auto;
    }
    .time-info {
      color: #777777;
      line-height: 22px;
    }
    .join-bottom-btns {
      width: 240px;
      margin: 30px auto;
      button {
        margin-bottom: 20px;
      }
    }
  }
</style>
