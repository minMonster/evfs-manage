<template>
  <div class="data-manager">
    <div class="content-title"><span>区块链联盟委员会管理</span></div>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>联盟委员决议审批规则</span>
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
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>联盟委员决议审批规则：1/3联盟委员同时签批</div>
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
          <span>联盟委员会成员</span>
        </div>
        <div>
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
  data () {
    var that = this
    var columns1 = [
      {
        title: '委员名称',
        key: 'name'
      },
      {
        title: '委员身份标识',
        key: 'address'
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        width: 150,
        title: '状态',
        key: 'status'
      },
      {
        width: 120,
        title: '申请人',
        key: 'applicant'
      },
      {
        width: 130,
        title: '审核通过人',
        render (h, p) {
          return h('a', {}, '查看')
        }
      },
      {
        title: '操作',
        render (h, p) {
          var agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                var index = p.index
              }
            }
          }, '同意')
          var refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                var index = p.index
              }
            }
          }, '拒绝')
          return h('div', {
            'class': 'opt-btns'
          }, [
            agree, refuse
          ])
        }
      }
    ]
    var data1 = [
      { name: '金桥信息', address: '008b0f...effbc', applicant: '张力', time: '--', status: '添加审核中', type: '1' },
      { name: '泛融科技', address: '008b0f...abbc3', applicant: '张力', time: '2020-1-5 10:33:02', status: '删除审核中', type: '1' }
    ]
    return {
      acceptLimit: '2/3',
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
    pageChange (page) {
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
