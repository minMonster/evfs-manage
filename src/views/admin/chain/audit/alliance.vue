<template>
  <div class="alliance">
    <div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <div style="margin-bottom: 20px;color: #273D52;">
          <span>联盟委员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要联盟委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
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
          </Row>
          <Row>
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
      <div class="padding bg-white">
        <div>
          <div class="league-mem">
            <span>联盟委员会成员操作明细：</span>
          </div>
          <Table :columns="columns1" :data="data1">
          </Table>
        </div>
        <div class="page">
          <div class="page-inner">
            <Page :total="total" @on-change="pageChange"/>
          </div>
        </div>
      </div>
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
        title: '委员身份标志地址',
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
        title: '申请人',
        key: 'applicant'
      },
      {
        title: '审核通过人',
        render (h, p) {
          var row = p.row
          return h('a', {
            on: {
              click () {
                that.adds(row)
              }
            }
          }, '查看')
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
      {
        name: '金桥信息',
        address: '00740f...feac3',
        time: '--',
        status: '添加审核中',
        applicant: '从法科技'
      },
      {
        name: '泛融信息',
        address: '00740f...afea5',
        time: '2020-1-1 12:04:43',
        status: '删除审核中',
        applicant: '从法科技'
      }
    ]
    return {
      acceptLimit: '2/3',
      name: '',
      address: '',
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
    // 查看
    adds (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + ' <br>time：' + obj.time + '',
        oktext: '关闭'
      })
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
    padding: 16px 0 10px 0;
    span {
      color: #273D52;
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
  .change-notice {
    border:1px dashed rgba(243,163,32,.6);
    border-radius: 2px;
    line-height: 1.8em;
    p {
      font-weight: 500;
      font-size: 16px;
      color: rgba(245, 166, 35, 1);
      margin-bottom: 4px;
    }
  }
</style>
