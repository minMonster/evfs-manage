<template>
  <div>
    <div class="clear chain-baseinfo">
      <h2 class="content-title">{{title}}
      </h2>
      <Row class="chain-header-content">
        <Col span="8">
        <div>企业名称：从法科技</div>
        </Col>
        <Col span="10">
        <div>企业身份标识：00740f...ccbb1</div>
        </Col>
      </Row>
    </div>
    <div class="padding bg-white">
      <div class="section-title clear">
        <span>隶属节点服务器</span>
        <Button style="float: right;" @click="addModal = true" type="primary">连接节点服务器</Button>
      </div>
      <div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
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
        <Modal
          v-model="addModal"
          title="连接节点服务器"
          @on-ok="ok"
          @on-cancel="cancel">
          <div class="add-modal-body">
            <div><p Style="margin-bottom:10px;">节点服务器连接地址：</p><Input placeholder="请输入管理员名称" v-model="nodeAddress" /></div>
          </div>
          <div slot="footer">
            <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >连接</Button>
            <Button style="width:80px;" type="primary" class='clearBtn' @click="cancel" >取消</Button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '数据存管域ID',
        key: 'admin_address'
      },
      {
        title: '数据存管域ID',
        key: 'admin_address'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          let status = row.status || ''
          let opt1 = h('a', {
            style: {
              'margin-right': '10px'
            },
            on: {
              click () {
                let query = that.$route.query
                that.$router.push({
                  name: 'nodedetail',
                  query: {
                    ...query,
                    status,
                    mainActive: 'node',
                    activeIndex: 3
                  }
                })
              }
            }
          }, '详情')
          let opt2 = h('a', {

          }, '断开链接')
          let opts = [opt1, opt2]
          return h('div', {}, opts)
        }
      }
    ]
    return {
      title: '节点服务器管理',
      listLoading: false,
      columns,
      oldList: [],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      addModal: false,
      addLoading: false,
      nodeAddress: ''
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
      api.pbqml({
        'node_server_id': 'nodeserver1'
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
        this.rule = res.rule
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    ok () {

    },
    cancel () {

    },
    pageChange (val) {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
