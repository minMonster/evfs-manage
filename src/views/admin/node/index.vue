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
        <Table :columns="columns1" :data="data1"></Table>
        <div class="page">
          <div class="page-inner">
            <Page :total="total" @on-change="pageChange"/>
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
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: '服务器身份标识',
        key: 'hash'
      },
      {
        title: '节点类型',
        key: 'type'
      },
      {
        title: '链实例ID',
        key: 'chainid'
      },
      {
        title: '数据存管域名称',
        key: 'storagename'
      },
      {
        title: '数据存管域ID',
        key: 'storageid'
      },
      {
        title: '操作',
        render(h,p) {
          let row = p.row || {}
          let status = row.status || ''
          var opt1 = h('a', {
            style: {
              'margin-right': '10px'
            },
            on: {
              click() {
                var query = that.$route.query
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
          },'详情')
          var opt2 = h('a', {

          },'断开链接')
          var opts = [opt1, opt2]
          return h('div', {}, opts)
        }
      }
    ]
    var data1 = [
      {hash: '00630e...cabc3', type: '主节点', chainid: '00740f...aaba8', storagename: '从法存管域', storageid: '00740f...facb7', status: '3'},
      {hash: '00630e...cacc2', type: '资源节点', chainid: '00740f...aaba8', storagename: '从法存管域', storageid: '00740f...facb7', status: '4'},
      {hash: '00630e...fafc1', type: '主节点', chainid: '00740f...aaba8', storagename: '--', storageid: '--', status: '2'},
      {hash: '00630e...bbac5', type: '--', chainid: '--', storagename: '--', storageid: '--', status: '1'},
    ]
    return {
      title: '节点服务器管理',
      columns1,
      data1,
      total: 78,
      addModal:false,
      addLoading:false,
      nodeAddress:""
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
    pageChange(val) {

    }
  }
}
</script>

<style lang="less" scoped>

</style>