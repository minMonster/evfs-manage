<template>
  <div class="alliance">
    <chain-header title="链联盟委员会管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>联盟委员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要联盟委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <Button type="primary" style="float: right;">修改</Button>
        </div>
        <RadioGroup class="approval" v-model="acceptLimit">
          <Row>
            <Col span="6">
              <Radio label="0">任意一个联盟委员签批</Radio>
            </Col>
            <Col span="6">
              <Radio label="1/3">1/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
              <Radio label="2/3">2/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
              <Radio label="3/3">所有联盟委员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>联盟委员会成员</span>
          <Button type="primary" @click="addModal = true" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <Col span="6">
              <div class="condition-item">
                <span class="condition-label">委员名称：</span>
                <Input type="text" v-model="form.name" placeholder="委员名称"></Input>
              </div>
            </Col>
            <Col span="6">
              <div class="condition-item">
                <span class="condition-label">委员身份标识：</span>
                <Input type="text" v-model="form.address" placeholder="委员身份标识"></Input>
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
                <Button style="width: 80px;" type="primary">查询</Button>
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
        title="添加联盟委员会成员"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入委员名称" v-model="name" /></div>
          <div><Input placeholder="请输入委员身份标志地址" v-model="address" /></div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "委员名称",
        key: "name"
      },
      {
        title: "委员身份标志地址",
        key: "address"
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
        title:'操作',
        width: 100,
        render(h,p) {
          var row = p.row
          console.log(row)
          var label = row.type == '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click() {
                var index = p.index
                that.data1.splice(index,1)
              }
            }
          }, label)
        }
      }
    ]
    var data1 = [
      { name: '金桥信息',address: '00630eslj9876sljflk...fafc1', time: '2020-1-1 12:00:00', status: '添加审核中' },
      { name: '泛融信息',address: '00630eslj9876sljflk...afea5', time: '2020-1-1 12:00:00', status: '删除审核中' },
      { name: '从法科技',address: '00630eslj9876sljflk...fafc1', time: '2020-1-1 12:00:00', status: '已添加', type: '2' },
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
        address: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init() {

    },
    ok() {

    },
    cancel() {

    },
    pageChange(page) {
      console.log(page)
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
    .fr {
      // color: #6094FF;
      // background: #fff;
      // border: 1px solid #6094FF;
      // padding: 0 8px;
      // border-radius: 12px;
      // box-shadow: 0;
      // outline: none;
      // cursor: pointer;
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
</style>