<template>
  <div class="new-chain">
    <div class="new-in">
      <h3>创建新的链实例</h3>
      <div class="create-form">
        <div class="clear current-node">
          <div class="fl">当前节点服务器加入节点网络</div>
          <!-- <div class="fr" @click="getServerInfo">获得当前服务器信息</div> -->
        </div>
        <div class="form-item">
          <div class="label">IP</div>
          <Input v-model="ip" placeholder="请输入链IP地址" />
        </div>
        <div class="form-item">
          <div class="label">Memory存储</div>
          <Input v-model="memory" placeholder="请输入链memory参数" />
        </div>
        <div class="form-item">
          <div class="label">服务器名称</div>
          <Input v-model="serverName" readonly placeholder="当前节点服务器名称" />
        </div>
        <div class="form-item">
          <div class="label">服务器身份标识</div>
          <Input placeholder="请输入当前节点服务器的身份标识公钥" readonly v-model="serverAddress" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业名称</div>
          <Input maxlength="30" placeholder="请输入当前节点服务器的所属企业名称" readonly v-model="orgName" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业身份标识</div>
          <Input placeholder="请输入当前节点服务器的所属企业身份标识公钥" readonly v-model="orgAddress" />
        </div>
      </div>
      <div class="split-line"></div>
      <!-- <div class="node-network">
        <div class="node-network-title">节点网络准入</div> -->
      <!-- <div class="node-netword-approval">
          <span>节点网络准入审批：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content="* 开启节点服务器网络准入审批，任何节点服务器都需要节点网络审批人审批通过后才能加入当前链实例的节点网络。*关闭节点服务器网络准入审批，则凡是在节点网络准入企业名单中企业的节点服务器将会自动批准加入节点网络。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
          <RadioGroup class="approval" v-model="approval">
            <Radio label="on">开启</Radio>
            <Radio label="off">关闭（默认）</Radio>
          </RadioGroup>
        </div> -->
      <!-- <div class="node-list">
          <div>
            <span>准入节点服务器列表：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在"节点网络准入审批"选择"开启"时，准入节点服务器列表中的节点服务器才可以加入链的节点网络'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
          </div>
          <div class="node-list-table">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </div>
        <div class="node-list"> -->
      <!-- <div class="clear">
            <span>节点网络准入企业名单：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在"节点网络准入审批"选择"关闭"时，凡是隶属于节点网络准入企业名单中的节点服务器均可自动加入链的节点网络。'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
            <div class="fr">
              <button class="add-ent"><Icon type="md-add-circle" />添加</button>
            </div>
          </div>
          <div class="node-list-table">
            <Table :columns="columns2" :data="data2"></Table>
          </div> -->
      <div class="next-step">
        <Button long type="primary" size="large" @click="networkset">下一步</Button>
      </div>
    </div>
  </div>
  <!-- </div>-->
  <!-- </div> -->
</template>

<script>
  import * as sApi from '../setupapi'
  export default {
    data() {
      return {
        tagCreateChain: true,
        // approval: 'off',
        serverName: '',
        serverAddress: '', // 服务器身份标识
        orgAddress: '', // 企业身份标识
        orgName: '', // 企业名称
        memory: '', // docker的memory参数
        ip: '' // ip地址和端口
        // columns1,
        // columns2,
        // data1,
        // data2
      }
    },
    mounted() {},
    methods: {
      init() {
        this.initServerInfo()
        this.initOrgInfo()
      },
      initServerInfo() {
        this.tagCreateChain = true
        sApi.pbgni({}).then(res => {
          if (res.retCode === 1) {
            this.serverName = res.nodeName
            this.serverAddress = res.nodeAddress
            sessionStorage.setItem('setup_node_name', res.nodeName)
            sessionStorage.setItem('setup_node_address', res.nodeAddress)
          }
        }).catch(err => {

        }).then(() => {
          this.tagCreateChain = false
        })
      },
      initOrgInfo() {
        this.tagCreateChain = true
        sApi.pbgno({}).then(res => {
          if (res.retCode === 1) {
            this.orgAddress = res.orgAddress
            this.orgName = res.orgName
          }
        }).catch(err => {

        }).then(() => {
          this.createChain = false
        })
      },
      // next() {
      //   this.$emit('next', 'step4.2')
      // },

      networkset() {
        // let needApprove = this.approval == 'on'
        if (!this.ip) {
          this.$Message.error('请输入ip地址')
          return
        }
        // if(!this.checkUrl(this.ip)){
        //   this.$Message.error('ip地址格式错误')
        //   return
        // }
        if (!this.memory) {
          this.$Message.error('请输入memory')
          return
        }
        sessionStorage.setItem('setup_ip', this.ip)
        sessionStorage.setItem('setup_memory', this.memory)
        this.$emit('next', 'step4.2')
        // this.next()
        // sApi.pbsnc({
        //   ip: this.ip,
        //   memory: this.memory
        // }).then(res => {
        //   if (res && res.retCode === 1){
        //      this.next()
        //   }
        // }).catch(err => {

        // }).then(() => {

        // })
      },
      checkUrl(url) {
        if (url != "") {
          var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
          if (!reg.test(url)) {
            return false
          }
          return true
        }
      }

    },
    created() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .new-in {
    &>h3 {
      font-size: 24px;
    }

    .split-line {
      height: 1px;
      border-bottom: 1px dashed #d9d4d4;
      padding: 15px 0;
    }
  }

  .create-form {
    width: 400px;

    .current-node {
      padding: 18px 0 30px 0;

      .fl {
        color: #16cef1;
        font-weight: 500;
      }

      .fr {
        color: #6094ff;
        padding: 0 10px;
        border: 1px solid #6094ff;
        line-height: 20px;
        border-radius: 10px;
        cursor: pointer;
      }
    }

    .form-item {
      .label {
        line-height: 1.8em;
      }

      padding-bottom: 18px;
    }
  }

  .node-network {
    padding-top: 35px;

    .node-network-title {
      color: #16cef1;
      font-size: 18px;
      font-weight: 500;
    }

    .approval {
      margin-left: 20px;
      padding: 10px 0;
    }
  }

  .node-list {
    .add-ent {
      height: 26px;
      padding: 0 10px;
      outline: none;
      box-shadow: none;
      cursor: pointer;
      text-align: center;
      color: #6094FF;
      border-radius: 12px;
      border: 1px solid #6094FF;
    }
  }

  .node-list-table {
    padding-top: 20px;
    padding-bottom: 40px;
  }

  .next-step {
    width: 60%;
    padding: 40px 0;
  }
</style>