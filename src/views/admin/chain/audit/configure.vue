<template>
  <div class="chain-configure">
    <h2 class="content-title clear">节点网络准入许可管理</h2>
    <div class="split-line"></div>
    <div class="encryption-wrapper padding bg-white" style="margin-bottom: 20px;">
      <div>
        <div class="league-mem">
          <span>准入节点服务器列表：</span>
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
</template>

<script>
import * as api from '../api'

export default {
  data () {
    let that = this
    let columns = [
      {
        title: '隶属企业名称',
        key: 'name'
      },
      {
        title: '服务器身份标识',
        key: 'address'
      },
      {
        title: '节点类型',
        key: 'node_type'
      },
      {
        title: '数据存管域名称',
        key: 'storage_name'
      },
      {
        title: '添加时间',
        key: 'join_time',
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
        key: 'user_status',
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.user_status) {
          case '1':
            label = '待审批'
            break
          case '2':
            label = '已同意'
            break
          case '3':
            label = '审核拒绝'
            break
          }
          return h('span', label)
        }
      },
      {
        title: '申请人',
        key: 'applicant_name'
      },
      {
        title: '已审核人',
        key: 'name'
      },
      {
        title: '操作',
        key: 'name'
      },
      {
        title: '审核结果',
        key: 'user_status',
        'width': 100,
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.user_status) {
          case '1':
            label = '待审批'
            break
          case '2':
            label = '已同意'
            break
          case '3':
            label = '审核拒绝'
            break
          }
          return h('span', label)
        }
      }
    ]
    return {
      columns,
      listLoading: false,
      oldList: [],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
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
      this.listLoading = true
      api.pbqrc({
        'menu': 'chaincommittee',
        reviewType: 'chain_node',
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        if (res.rows) {
          this.oldList = res.rows
          this.page.total = this.oldList.length
          this.getList()
        }
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
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
  .encryption-item {
    padding-top: 10px;
  }
  .encryption-wrapper {

  }
</style>
