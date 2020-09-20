<template>
  <div class="create-field opt-rule">
    <div class="opt-rule-inner">
      <h3>创建新的文件存储域</h3>
      <h4>节点域内文件操作规则设置</h4>
      <div class="info-supervision">
        <div>
          <div style="padding: 30px 0 10px 0;">信息监管</div>
          <span>允许信息监管：</span>
          <Tooltip
            placement="top"
            max-width="600"
            style="margin-right: 10px;"
            transfer
            content="域管理员有权将节点域中的文件进行冻结和解冻。文件一旦冻结，外部系统将无法查到文件的任何信息，包括文件元数据，文件本体，一切文件相关操作行为。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
          <RadioGroup class="supervision" v-model="supervision">
            <Radio label="1">允许</Radio>
            <Radio label="2">禁止（默认）</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="anonymous">
        <div class="anonymous-title">
          <div style="padding: 30px 0 10px 0;">文件权限控制</div>
          <span>允许文件删除：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content="* 在“允许文件删除”选择“允许”时，保存在当前文件存储域中的文件可以被删除，但必须通过多人审批确认后才可从链上删除，不再保留任何文件副本，但文件的链上元数据和操作行为不会删除。* 在“允许文件删除”选择“禁止”时，保存在当前文件存储域中的文件无法被删除。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
          <RadioGroup class="approval" v-model="permission">
            <Radio label="1">允许</Radio>
            <Radio label="2">禁止（默认）</Radio>
          </RadioGroup>
        </div>
        <div class="anonymous-title">
          <span>允许任何人域内保存文件：</span>
          <!-- <Tooltip
            placement="top"
            max-width="600"
            transfer
            content="* 如果允许匿名调用访问，则任何前置节点无需授权，均可与链建立访问通道，向链上提交或访问链上数据，除了在黑名单中的前置节点。 * 如果禁止匿名调用访问，则只有白名单中的前置节点才可与链建立访问通道，向链上提交或访问链上数据。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip> -->
          <RadioGroup class="approval" v-model="permission">
            <Radio label="1">允许</Radio>
            <Radio label="2">禁止（默认）</Radio>
          </RadioGroup>
        </div>
        <div class="list">
          <div class="clear">
            <span>域内保存文件用户【黑名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
            <div class="fr">
              <button class="add-ent"><Icon type="md-add-circle" />添加</button>
            </div>
          </div>
          <div class="list-table">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </div>
        <div class="list">
          <div class="clear">
            <span>域内保存文件用户【白名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“禁止”时，允许特定的前置节点与链建立访问通道，只有被允许的前置节点才可以向链上提交或访问链上数据。'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
            <div class="fr">
              <button class="add-ent"><Icon type="md-add-circle" />添加</button>
            </div>
          </div>
          <div class="list-table">
            <Table :columns="columns2" :data="data2"></Table>
          </div>
          <div class="next-step">
            <Button long type="primary" size="large" @click="next('2')">下一步</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="join-chain-in approval" v-if="step == '2'">
      <div class="wait-img">
        <img src="~@/assets/setup/waitting.png" alt="">
      </div>
      <h3>链实例创建中，请耐心等待...</h3>
      <div class="time-info" style="margin:30px 0;">
        <div class="start-time">开始时间：2020-1-1 12:00:00</div>
        <div class="approval-time">创建耗时：22分钟15秒</div>
      </div>
      <div class="join-bottom-btns">
        <Button long class="create-file" type="primary">绑定链实例运行许可证</Button>
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '3'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>链实例创建成功！</h3>
      <div class="hash-info">链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd <button @click="copyPubKey" class="copy-hash">复制</button></div>
      <div class="time-info">
        <div class="start-time">开始时间：2020-1-1 12:00:00</div>
        <div class="approval-time">结束时间：2020-1-1 12:00:00</div>
      </div>
      <div class="join-bottom-btns">
        <Button long class="create-file" @click="bind" type="primary">绑定链实例运行许可证</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let columns1 = [
      {
        title: '用户姓名',
        key: 'name'
      },
      {
        title: '用户份标识公钥',
        key: 'prikey'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', '删除')
        }
      }
    ]
    let columns2 = [
      {
        title: '用户姓名',
        key: 'name'
      },
      {
        title: '用户份标识公钥',
        key: 'prikey'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', '删除')
        }
      }
    ]
    let data1 = [
      { name: '银行', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…' }
    ]
    let data2 = [
      { name: '银行', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…' }
    ]
    return {
      supervision: '2',
      permission: '2',
      columns1,
      columns2,
      data1,
      data2,
      step: '1'
    }
  },
  watch: {
    step (n, o) {
      console.log(n, o)
      let that = this
      if (n == 2) {
        setTimeout(() => {
          that.step = '3'
        }, 3000)
      }
    }
  },
  methods: {
    next () {
      this.$emit('next', 'step6.4')
    },
    copyPubKey () {
      let pubKey = this.pubKey
      let that = this
      this.$copyText(pubKey).then(function (e) {
        that.shareModal = false
        that.$Message.success('复制成功')
      }, function (e) {
        that.shareModal = false
        that.$Message.error('复制失败')
      })
    },
    bind () {
      this.$emit('next', 'step5')
    }
  }
}
</script>

<style lang="less" scoped>
.opt-rule-inner {
  & > h3 {
    font-size: 24px;
  }
}
.anonymous-title {
  padding-bottom: 20px;
  .ivu-tooltip {
    margin-right: 10px;
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
    }
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
.list {
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
.list-table {
  padding-top: 20px;
  padding-bottom: 20px;
}
.next-step {
  width: 400px;
  padding: 40px 0 0 0;
  margin-bottom: 10px;
}
.confirm-note {
  color:rgba(162,162,162,1);
  line-height: 1.5em;
}
.copy-hash{
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
</style>
