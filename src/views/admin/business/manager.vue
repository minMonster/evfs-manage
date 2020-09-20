<template>
  <div class="data-manager">
    <business-header title="业务域管理员管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>业务域管理员决议审批规则</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <Button type="primary" style="float: right;">修改</Button>
        </div>
        <RadioGroup class="approval" v-model="acceptLimit">
          <Row>
            <Col span="6">
            <Radio label="0">任意一个成员签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="1/3">1/3成员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="2/3">2/3成员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="3/3">所有成员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>业务域管理员列表</span>
          <Button @click="addModal = true" type="primary" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员姓名：</span>
              <Input type="text" v-model="form.name" placeholder="管理员姓名"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员身份标识：</span>
              <Input type="text" v-model="form.address" placeholder="管理员身份标识"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">状态：</span>
              <Select v-model="form.status">
                <Option value="0">全部</Option>
                <Option value="1">已添加</Option>
                <Option value="2">已删除</Option>
                <Option value="3">添加审核中</Option>
                <Option value="4">删除审核中</Option>
              </Select>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <Button style="width: 80px;" @click="search" type="primary">查询</Button>
            </div>
            </Col>
          </Row>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
        <div class="page">
          <div class="page-inner">
            <Page :total="total" @on-change="pageChange"/>
          </div>
        </div>
      </div>
      <Modal
        v-model="addModal"
        title="添加管理"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入管理员姓名" v-model="name" /></div>
          <div><Input placeholder="请输入管理员身份标志地址" v-model="address" /></div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '管理员姓名',
        key: 'name'
      },
      {
        title: '管理员身份标志地址',
        key: 'address'
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          let row = p.row
          let label = ''
          if (row.status == '1') {
            label = '撤销'
          }
          if (row.status == '2') {
            label = '删除'
          }
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, label)
        }
      }
    ]
    let data1 = [
      { name: '郭志', address: '008b0f...effbc', time: '--', status: '添加审核中', type: '1' },
      { name: '吴载舟', address: '008b0f...abbc3', time: '2020-1-5 10:33:02', status: '删除审核中', type: '1' },
      { name: '张力', address: '008b0f...acfe5', time: '2020-1-5 19:41:11', status: '已添加', type: '2' }
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      data1,
      total: 100,
      form: {
        name: '',
        address: '',
        status: ''
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {

    },
    ok () {

    },
    cancel () {

    },
    search () {},
    pageChange (page) {

    }
  }
}
</script>

<style lang="less" scoped>
  .approval {
    display: block;
    & > div {
      padding: 6px 0;
    }
  }
  .league-mem {
    padding: 16px 0 20px 0;
    span {
      color: #273D52;
      font-weight: 600;
    }
    // .fr {
    //   color: #6094FF;
    //   background: #fff;
    //   border: 1px solid #6094FF;
    //   padding: 0 8px;
    //   border-radius: 12px;
    //   box-shadow: none;
    //   outline: none;
    //   cursor: pointer;
    // }
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
</style>
