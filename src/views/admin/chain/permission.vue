<template>
  <div class="node-admission">
    <div class="chain-adminstrator-in">
      <h2 class="content-title clear">
        链权限管理
        <Button type="primary" style="float: right;">待审核事项</Button>
      </h2>
      <div class="clear chain-baseinfo">
        <Row>
          <Col span="8">
          <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
          </Col>
          <Col>
          <div>链实例创建时间：2020-1-5 12:00:00</div>
          </Col>
        </Row>
      </div>
      <div class="split-line"></div>
      <div>
        <div style="margin-bottom: 20px;">
          <span style="color: rgba(95, 145, 177, 1);">链管理员决议审批规则：</span>
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
          <span>链管理员列表：</span>
          <div class="fr">
            <button @click="addModal = true" class="add-mem"><Icon type="md-add-circle" />添加</button>
          </div>
        </div>
        <div>
          <Row>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员名称：</span>
              <Input type="text" placeholder="管理员名称"></Input>
            </div>
            </Col>
            <Col span="8">
            <div class="condition-item">
              <span class="condition-label">管理员身份标识：</span>
              <Input type="text" placeholder="管理员身份标识"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">状态：</span>
              <Select value="0">
                <Option value="0">全部</Option>
                <Option value="1">已添加</Option>
                <Option value="2">已删除</Option>
                <Option value="3">添加审核中</Option>
                <Option value="4">删除审核中</Option>
              </Select>
            </div>
            </Col>
            <Col span="4">
            <div class="condition-item">
              <Button style="width: 80px;" type="primary">查询</Button>
            </div>
            </Col>
          </Row>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
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
        title: '添加时间',
        key: 'time',
        render (h, p) {
          let row = p.row
          if (!row.join_time) {
            return h('span', '--')
          } else {
            return h('span', that.$moment.unix(row.join_time / 1000).format('YYYY-MM-DD HH:mm:ss'))
          }
        }
      },
      {
        title: '状态',
        key: 'status'
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
      address: '',
      pageno: 1,
      total: 100
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
    },
    pageChange (num) {
      this.pageno = num
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
  .add-modal-body {
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
  .condition-item {
    display: flex;
    padding: 10px 10px 20px 0;
    position: relative;
    .condition-label {
      float: left;
      vertical-align: middle;
      line-height: 32px;
    }
    .ivu-input-wrapper {
      width: 50%;
    }
    .ivu-select {
      width: 60%;
    }
  }
  .adminstrator-mem {
    padding: 30px 0 0 0;
    color: #273D52;
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
