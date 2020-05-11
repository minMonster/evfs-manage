<template>
  <div class="alliance">
    <h2 class="content-title clear">
      链管理员管理
    </h2>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>链管理员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          
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
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>链管理员决议审批规则：1/3成员同时签批</div>
            <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
          </div>
          <div class="audit-item-btns">
            <div class="btn-inner">
              <button class="refuse-btn">拒绝</button>
              <button class="agree-btn">同意</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>链管理员列表</span>
        </div>
        <div>
          <Row>
            <Col span="6">
              <div class="condition-item">
                <span class="condition-label">管理员名称：</span>
                <Input type="text" v-model="form.name" placeholder="管理员名称"></Input>
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
                <Button style="width: 100px;" type="primary">查询</Button>
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
          <div><Input placeholder="请输入管理员名称" v-model="name" /></div>
          <div><Input placeholder="请输入管理员身份标志地址" v-model="address" /></div>
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
        title: "管理员名称",
        key: "name"
      },
      {
        title: "管理员身份标志地址",
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
        title: '申请人',
        width: 120,
        key: 'apply'
      },
      {
        title: '审核通过人',
        render(h,p) {
          return h('a', {}, '查看')
        }
      },
      {
        title: '操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              'margin-right': '10px'
            }
          }, '同意')
          var disagree = h('a', {}, '拒绝')
          var opts = [agree, disagree]
          return h('div', {}, opts)
        }
      }
    ]
    var data1 = [
      { name: '张建国',address: '008b0f...effbc', time: '--', apply: '张力',status: '添加审批中',type: '1' },
      { name: '李志伟',address: '008b0f...abbc3', time: '2020-1-5 10:33:02', status: '删除审批中', type: '1' },
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
      color: #6094FF;
      background: #fff;
      border: 1px solid #6094FF;
      padding: 0 8px;
      border-radius: 12px;
      box-shadow: 0;
      outline: none;
      cursor: pointer;
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