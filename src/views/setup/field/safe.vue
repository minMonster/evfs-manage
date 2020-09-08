<template>
  <div class="create-field field-safe">
    <div class="filed-safe-inner">
      <h3>创建新的文件存储域</h3>
      <h4>外部系统访问安全设置</h4>
      <div class="anonymous">
        <div style="padding: 20px 0 10px 0;">文件存储域调用访问许可</div>
        <div class="anonymous-title">
          <span>文件存储域匿名调用访问：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content=" * 如果允许匿名调用访问，则任何前置节点无需授权，均可与当前文件存储域建立访问通道，向文件存储域中提交文件或访问文件存储域中文件，除了在黑名单中的前置节。* 如果禁止匿名调用访问，则只有白名单中的前置节点才可与当前文件存储域建立访问通道，向文件存储域中提交文件或访问文件存储域中文件。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
          <RadioGroup class="approval" v-model="permission">
            <Radio label="1">允许</Radio>
            <Radio label="2">禁止</Radio>
          </RadioGroup>
        </div>
        <div class="list">
          <div class="clear">
            <span>全链调用访问【黑名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“允许”时，禁止特定的前置节点与文件存储域建立访问通道，被禁止的前置节点无法向文件存储域内提交文件或访问域内文件。'>
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
            <span>全链调用访问【白名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“禁止”时，允许特定的前置节点与当前文件存储域建立访问通道，只有被允许的前置节点才可以向文件存储域提交文件或访问域内文件。'>
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
            <Button long type="primary" size="large" @click="next">下一步</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var columns1 = [
      {
        title: '前置节点名称',
        key: 'name'
      },
      {
        title: '前置节点身份标识公钥',
        key: 'prikey'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', '删除')
        }
      }
    ]
    var columns2 = [
      {
        title: '前置节点名称',
        key: 'name'
      },
      {
        title: '前置节点身份标识公钥',
        key: 'prikey'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', '删除')
        }
      }
    ]
    var data1 = [
      { name: '银行营业系统', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…' }
    ]
    var data2 = [
      { name: '银行营业系统', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…' }
    ]
    return {
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
      this.$emit('next', 'step6.5')
    },
    copyPubKey () {
      let pubKey = this.pubKey
      var that = this
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
.permission-in {
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
    box-shadow: 0;
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
  box-shadow: 0;
  color:rgba(158,158,158,1);
}
</style>
