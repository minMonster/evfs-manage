<template>
  <div class="node-admission">
    <h2 class="content-title clear">
      数据存管域内业务域授权管理
    </h2>
    <!-- <div class="padding bg-white mb20">
      <Row>
        <Col :span="6">
          <div>数据存管域创建审批：</div>
        </Col>
        <Col :span="10">
          <RadioGroup class="approval" v-model="switch1">
            <Radio label="on" style="margin-right: 30px;">开启</Radio>
            <Radio label="off">关闭</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>数据存管域创建审批：关闭</div>
          <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
        </div>
        <div class="audit-item-btns">
          <div class="btn-inner">
            <button class="refuse-btn">拒绝</button>
            <button class="agree-btn">同意</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 0px;color: #273D52;">
        <b>数据存管域列表</b>
      </div>
      <div>
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
    <!-- <div class="padding bg-white mb20">
      <div class="section-title"><span>创建许可企业列表</span></div>
      <div>
        <Table :columns="columns2" :data="data2" />
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="100" />
        </div>
      </div>
    </div> -->
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
        title: '数据存管域名称',
        key: 'name'
      },
      {
        title: '数据存管域唯一标识',
        key: 'address'
      },
      {
        title: '创建时间',
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
              'margin-right': '10px'
            }
          }, '同意')
          var disagree = h('a', {}, '拒绝')
          var opts = [agree, disagree]
          return h('div', {}, opts)
        }
      }
    ]
    return {
      columns,
      listLoading: false,
      list: [],
      oldList: [],
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
  watch: {},
  computed: {},
  methods: {
    init () {
      this.listLoading = true
      api.pbqrc({
        'menu': 'chaincommittee',
        reviewType: 'chain_storage',
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
    ok () {},
    cancel () {},
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
.info-item {
  margin-top: 30px;
  .ivu-col {
    span {
      color:rgba(24, 68, 176, 1);
      font-weight: 500;
    }
  }
}
.tip {
  margin: 4px 0 20px 0;
  color: rgba(162, 162, 162, 1);
  font-size: 12px;
}
.league-mem {
  padding: 14px 0;
  span {
    color: #273D52;
  }
  .fr {
    color: #6094ff;
    background: #fff;
    border: 1px solid #6094ff;
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
</style>
