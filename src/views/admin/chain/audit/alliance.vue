<template>
  <div class="alliance">
    <div>
      <div class="padding bg-white" v-if="rule" style="margin-bottom: 20px;">
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
        <RadioGroup class="approval" v-model="rule">
          <Row>
            <Col span="6">
            <Radio label="0">任意一个联盟委员签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="100">1/3联盟委员同时签批</Radio>
            </Col>
          </Row>
          <Row>
            <Col span="6">
            <Radio label="200">2/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="300">所有联盟委员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content" v-if="old_rule">
            <P>变更前：</P>
            <div>联盟委员决议审批规则：{{ruleJson[old_rule]}}</div>
            <div>申请人： {{applicant_name}}<span>审核通过人： <a href="javascript:;">查看</a></span></div>
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
          <Table :columns="columns" :loading="listLoading" :data="list"></Table>
        </div>
        <div class="page">
          <div class="page-inner">
            <Page
              show-sizer
              :total="page.total"
              :current="page.current"
              @on-change="pageChange"
              @on-page-size-change="sizeChange"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../api'
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
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
        key: 'join_time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '申请人',
        key: 'applicant_name'
      },
      {
        title: '审核通过人',
        render (h, p) {
          let row = p.row
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
          let agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
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
    let ruleJson = {
      '0': '任意一个联盟委员签批',
      '100': '1/3联盟委员同时签批',
      '200': '2/3联盟委员同时签批',
      '300': '所有联盟委员同时签批'
    }
    return {
      ruleJson,
      rule: '',
      old_rule: '',
      applicant_name: '',
      listLoading: false,
      columns,
      oldList: [
        // {
        //   'member_id': 1,
        //   'member_address': '1',
        //   'main_committeegroup_group_id': '1',
        //   'join_time': 1598345923000,
        //   'member_name': '名称'
        // }
      ],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
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
      api.pbqrc({
        reviewType: 'chaincommittee',
        'menu': 'chain_committee_rule', // 身份角色：审批人员类型[chaincommittee 联盟委员会,chaingroup 链管理员,storage 数据存管域,biz 业务域]
        'address': sessionStorage.getItem('fbs_address')
      }).then(res => {
        if (res.rows) {
          let data = res.rows[0]
          this.rule = data.role || ''
          this.old_rule = data.old_rule || ''
        } else {
          this.rule = false
        }
      })
      this.listLoading = true
      api.pbqrc({
        'menu': 'chaincommittee',
        reviewType: 'chain_manager',
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
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
    getList () {
      this.list = this.oldList.slice((this.page.current - 1) * this.page.size, this.page.size * this.page.current)
    },
    sizeChange (size) {
      this.page.current = 1
      this.page.size = size
      this.getList()
    },
    // 分页
    pageChange (page) {
      this.page.current = page
      this.getList()
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
      box-shadow: none;
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
