<template>
  <div class="node-admission">
    <h2 class="content-title clear">
      运行证许可管理
    </h2>
    <!--    <div class="padding bg-white mb20">-->
    <!--      <div style="margin-bottom: 0px;color: #273D52;">-->
    <!--        <b>链内节点运行许可信息</b>-->
    <!--      </div>-->
    <!--      <div class="info-item">-->
    <!--        <Row>-->
    <!--          <Col span="8">-->
    <!--          节点运行许可最大数量：<span>50</span>-->
    <!--          </Col>-->
    <!--          <Col span="8">-->
    <!--          已发放节点许可数量：<span>50</span>-->
    <!--          </Col>-->
    <!--          <Col span="8">-->
    <!--          未发放节点许可数量：<span>50</span>-->
    <!--          </Col>-->
    <!--        </Row>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="padding bg-white mb20">-->
    <!--      <div class="section-title"><span>链内文件存储容量许可分布信息</span></div>-->
    <!--      <div>-->
    <!--        <Table :columns="columns1" :data="data1" />-->
    <!--      </div>-->
    <!--      <div class="page">-->
    <!--        <div class="page-inner">-->
    <!--          <Page :total="100" />-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
        <b>链内文件存储容量许可信息</b>
      </div>
      <div class="info-item">
        <Row>
          <Col span="8">
          文件存储最大许可容量：<span>100TB</span>
          </Col>
          <Col span="8">
          已发放文件存储许可容量：<span>50TB</span>
          </Col>
          <Col span="8">
          未发文件存储许可容量：<span>50TB</span>
          </Col>
        </Row>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div class="section-title"><span>运行许可证分布信息</span></div>
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
  </div>
</template>

<script>
import * as api from '../api'

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
      // {
      //   title: '节点运行许可数量',
      //   key: 'numbers'
      // },
      {
        title: '现有许可存储容量',
        key: 'capacity_license'
      },
      {
        title: '申请新增存储容量',
        key: 'applay_capacity_license'
      },
      {
        title: '申请状态',
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
              'margin-right': '10px'
            }
          }, '同意')
          let disagree = h('a', {}, '拒绝')
          let opts = [agree, disagree]
          return h('div', {}, opts)
        }
      }
    ]
    return {
      addModal: false,
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
      },
      switch1: '0'
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
        reviewType: 'chain_license',
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
    ok () {},
    // 查看
    adds (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + '',
        oktext: '关闭'
      })
    },
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
