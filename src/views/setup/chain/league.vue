<template>
  <div class="chain-league">
    <div class="chain-league-in">
      <h3>创建新的链实例</h3>
      <h4>区块链联盟委员会信息设置</h4>
      <div>
        <div style="margin-bottom: 20px;">
          <span>联盟委员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要联盟委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
        </div>
        <div>
          <RadioGroup class="approval" v-model="acceptLimit">
            <Radio label="0">任意一个联盟委员签批</Radio>
            <Radio label="1/3">1/3联盟委员同时签批</Radio>
            <Radio label="2/3">2/3联盟委员同时签批</Radio>
            <Radio label="3/3">所有联盟委员同时签批</Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <div class="league-mem">
          <span>联盟委员会成员：</span>
          <button class="fr" @click="addModal = true"><Icon type="md-add-circle" />添加</button>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="next-step">
        <Button size="large" long type="primary" @click="next">下一步</Button>
      </div>
    </div>
    <Modal
      v-model="addModal"
      title="添加联盟委员会成员"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input placeholder="请输入委员名称" v-model="name" /></div>
        <div><Input placeholder="请输入委员身份标志地址" v-model="address" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    var that = this
    var columns1 = [
      {
        title: '委员名称',
        key: 'name'
      },
      {
        title: '委员身份标志地址',
        key: 'address'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', {
            on: {
              click () {
                var index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, '删除')
        }
      }
    ]
    var data1 = [

    ]
    return {
      acceptLimit: '0',
      columns1,
      data1,
      addModal: false,
      name: '',
      address: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    next () {
      this.confirm()
      // this.$emit('next', 'step4.3')
    },
    confirm () {
      var acceptLimit = this.acceptLimit
      var data = this.data1
      var name = []
      var address = []
      if (data.length) {
        data.forEach((item, index) => {
          name.push(item.name)
          address.push(item.address)
        })
      }
      var param = {
        name, address, acceptLimit
      }
      this.$http.post('/fbs/man/pbsci.do', param).then(res => {
        res = res.data
        if (res.retCode == '1') {
          this.$emit('next', 'step4.3')
        }
      }).catch(err => {
        // this.$Message.error('')
      }).then(() => {

      })
    },
    ok () {
      var name = this.name.trim()
      var address = this.address.trim()
      if (!name) {
        this.$Message.error('请输入委员名称')
        return
      }
      if (!address) {
        this.$Message.error('请输入委员身份地址')
        return
      }
      var data = {
        name,
        address
      }
      this.data1.push(data)
      this.name = ''
      this.address = ''
    },
    cancel () {
      this.name = ''
      this.address = ''
    }
  }
}
</script>

<style lang="less">
  .chain-league-in {
    h3 {
      font-size: 24px;
    }
    h4 {
      color: #16CEF1;
      padding: 18px 0;
    }
  }
  .league-mem {
    padding: 30px 0;
    .fr {
      color: #6094FF;
      background: #fff;
      border: 1px solid #6094FF;
      padding: 0 8px;
      border-radius: 12px;
      box-shadow: none;
      outline: none;
      cursor: pointer;
    }
  }
  .next-step {
    width: 500px;
    margin: 30px 0;
  }
  .add-modal-body {
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
</style>
