<template>
  <div class="chain-adminstrator">
    <div class="chain-adminstrator-in">
      <h3>创建新的链实例</h3>
      <h4>链管理员设置</h4>
      <div>
        <div style="margin-bottom: 20px;">
          <span>链管理员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要链管理员审批的事务，通过决议的签批规则。* “任意一个成员签批”：链管理员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3成员同时签批”：只有链管理员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3成员同时签批”：只有链管理员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有成员同时签批”： 只有链管理员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
        </div>
        <div>
          <RadioGroup class="approval" v-model="acceptLimit">
            <Radio label="0">任意一个成员签批</Radio>
            <Radio label="1/3">1/3成员同时签批</Radio>
            <Radio label="2/3">2/3成员同时签批</Radio>
            <Radio label="3/3">所有成员同时签批</Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <div class="adminstrator-mem clear">
          <span>联盟委员会成员：</span>
          <div class="fr">
            <button @click="addModal = true" class="add-mem"><Icon type="md-add-circle" />添加</button>
          </div>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="next-step">
        <Button size="large" long type="primary" @click="next">下一步</Button>
      </div>
    </div>
    <Modal
      v-model="addModal"
      title="添加链管理员"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input placeholder="请输入链管理员名称" v-model="name" /></div>
        <div><Input placeholder="请输入链管理员身份标识公钥" v-model="address" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '管理员名称',
        key: 'name'
      },
      {
        title: '管理员身份标识公钥',
        key: 'address'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, '删除')
        }
      }
    ]
    let data1 = [

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
      let acceptLimit = this.acceptLimit
      let data = this.data1
      let name = []
      let address = []
      if (data.length) {
        data.forEach((item, index) => {
          name.push(item.name)
          address.push(item.address)
        })
      }
      let param = {
        name, address, acceptLimit
      }
      this.$http.post('/fbs/man/pbsai.do', param).then(res => {
        res = res.data
        if (res.retCode == '1') {
          this.$emit('next', 'step4.4')
        }
      }).catch(err => {
        // this.$Message.error('')
      }).then(() => {

      })
    },
    ok () {
      let name = this.name.trim()
      let address = this.address.trim()
      if (!name) {
        this.$Message.error('请输入委员名称')
        return
      }
      if (!address) {
        this.$Message.error('请输入委员身份地址')
        return
      }
      let data = {
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
  .chain-adminstrator-in {
    h3 {
      font-size: 24px;
    }
    h4 {
      color: #16CEF1;
      padding: 18px 0;
    }
  }
  .adminstrator-mem {
    padding: 30px 0;
  }
  .next-step {
    width: 500px;
    margin: 30px 0;
  }
  .add-mem {
    background: transparent;
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
</style>
