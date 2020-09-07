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
          <div class="label">服务器名称</div>
          <Input v-model="serverName" readonly placeholder="当前节点服务器名称" />
        </div>
        <div class="form-item">
          <div class="label">服务器身份标识</div>
          <Input placeholder="请输入当前节点服务器的身份标识公钥" readonly v-model="pubKey" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业名称</div>
          <Input maxlength="30" placeholder="请输入当前节点服务器的所属企业名称" v-model="orgName" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业身份标识</div>
          <Input placeholder="请输入当前节点服务器的所属企业身份标识公钥" readonly v-model="entPubkey" />
        </div>
      </div>
      <div class="split-line"></div>
      <div class="node-network">
        <div class="node-network-title">节点网络准入</div>
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
        <div class="node-list">
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
        <div class="node-list">
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
            <Button long type="primary" size="large" @click="createChain">下一步</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var columns1 = [
        {
          title: "隶属企业名称",
          key: "name"
        },
        {
          title: "隶属企业身份标识公钥",
          key: "prikey"
        },
        {
          title: "节点服务器身份标识公钥",
          key: "nodeprikey"
        },
        {
          title:'操作',
          render(h,p) {
            return h('a', '删除')
          }
        }
    ]
    var columns2 = [
        {
          title: "隶属企业名称",
          key: "name"
        },
        {
          title: "企业身份标识公钥",
          key: "prikey"
        },
        {
          title:'操作',
          render(h,p) {
            return h('a', '删除')
          }
        }
      ]
    var data1 = [
        {name: '中国工商银行', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…',nodeprikey: 'lksjljkfsljdflsjlfjsljflksjdflks…'}
      ]
    var data2 = [
        {name: '中国工商银行', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…'}
      ]
    return {
      approval: "off",
      serverName: '',
      pubKey: '',// 服务器身份标识
      entPubkey: '', //企业身份标识
      orgName: '', //企业名称
      columns1,
      columns2,
      data1,
      data2
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.initServerName()
    },
    initServerName() {
      var serverName = this.$cookie.get('serverName')
      this.serverName = serverName
    },
    next() {
      this.$emit('next','step4.2')
    },
    initPubkey() {
      let pubKey = cwv.genPubkey()
      let data = {
        seed: '',
        pubKey
      }
      this.$http.post('/fbs/man/pbgnc.do',data).then(res => {
        res = res.data
        this.pubKey = res.pubKey || ''
      }).catch( err => {
        console.log(err)
      }).then(() => {

      })
    },
    getServerInfo() {
      // 读取服务器身份标识
      // key = org.brewchain.account.coinbase.pubkey
      // 读取企业身份标识
      // key = org.brewchain.account.org.pubkey
      // POST /fbs/man/pbgpo.do
      // this.getEntbkey()
      // this.initPubkey()
    },
    getEntbkey() {
      let data = {
        key: 'org.brewchain.account.org.pubkey'
      }
      this.$http.post('/fbs/man/pbgpo.do',data).then(res => {
        res = res.data
        if (res.retCode == '1') {
          this.entPubkey =  res.value
        }
      }).catch(err => {
        console.log(err)
      }).then(() => [
        console.log('complete')
      ])
    },
    createChain() {
      let needApprove = this.approval == 'on' ? true : false
      var orgName = this.orgName
      let data = {
        orgName: orgName,
        needApprove
      }
      if (!orgName) {
        this.$Message.error('请输入企业名称')
        return
      }
      this.$http.post('/fbs/man/pbscn.do', data).then(res=> {
        res = res.data
        if (res.retCode == '1') {
          this.next()
        }
      })
    }

  },
  created: function  () {
      this.$http.post('/fbs/man/pbgpo.do', {'key': 'local.coinbase.address'}).then(res=> {
        res = res.data
        if (res.retCode == '1') {
          this.pubKey = res.value;
        }
      })
      this.$http.post('/fbs/man/pbgpo.do', {'key': 'org.brewchain.account.name'}).then(res=> {
        res = res.data
        if (res.retCode == '1') {
          this.serverName = res.value;
        }
      })
      this.$http.post('/fbs/man/pbgpo.do', {'key': 'org.brewchain.account.org.pubkey'}).then(res=> {
        res = res.data
        if (res.retCode == '1') {
          this.entPubkey = res.value;
        }
      })
    }
};
</script>

<style lang="less" scoped>
.new-in {
  & > h3 {
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
    box-shadow: 0;
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