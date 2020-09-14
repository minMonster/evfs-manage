<template>
  <div class="business">
    <chain-header title="业务域管理" />
    <div class="bg-white padding">
      <div class="section-title clear">
        <span>业务域列表</span>
        <div class="fr float-right" style="margin-top: -5px;">
          <!-- <Button type="primary">创建业务域</Button> -->
          <Button type="primary" @click="addModal = true " style="margin-left: 24px;">连接业务域</Button>
        </div>
      </div>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
      <Modal
        v-model="addModal"
        title="连接业务域"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><p style="margin-bottom:15px;">业务域唯一标识：</p><Input placeholder="请输入要连接的链实例中的业务域唯一标识" v-model="businame" /></div>
        </div>
        <div slot="footer">
          <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >连接</Button>
          <Button style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
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
        title: '业务域名称',
        key: 'name',
        width: 130
      },
      {
        title: '业务域唯一标识',
        width: 150,
        key: 'id'
      },
      {
        title: '隶属数据存管域名称',
        key: 'storagename'
      },
      {
        title: '隶属数据存管域ID',
        key: 'storageid'
      },
      {
        title: '创建时间',
        width: 160,
        key: 'time'
      },
      {
        title: '状态',
        key: 'status',
        width: 110
      },
      {
        title: '操作',
        width: 180,
        render (h, p) {
          // var index = p.index
          var row = p.row || {}
          var type = row.type
          var opt1 = h('a', {
            on: {
              click () {
                that.$Modal.confirm({
                  title: '提示',
                  content: '确定断开链接么？'
                })
              }
            }
          }, '断开联接')
          var opt2 = h('a', {
            on: {
              click () {
                // var index = p.index
                // let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                let { showDataSubmenu } = that.$route.query
                that.$router.push({
                  name: 'business-detail',
                  query: {
                    mainActive: 'business',
                    activeIndex: '2',
                    subActive: 'business-detail',
                    showDataSubmenu,
                    showBusinessSubmenu: '1'
                  }
                })
              }
            }
          }, '详情')
          var opt3 = h('a', {
            on: {
              click () {
                var index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, '删除')
          var opts = [opt1]
          switch (type) {
          case '1':
            opts.push(opt2)
            break
          case '2':
            opts.push(opt2)
            break
          case '4':
            opts.push(opt2)
            opts.push(opt3)
            break
          default:
            break
          }
          return h('div', {
            'class': 'opt-btns'
          }, opts)
        }

      }
    ]
    var data1 = [
      { name: '司法业务域', id: '00740f...ffbc3', storagename: '从法存管域', storageid: '00740f...facb7', time: '2020-1-5 10:21:32', status: '运行', type: '2' },
      { name: '金融共享业务', id: '00740f...bcaa1', storagename: '从法存管域', storageid: '00740f...facb7', time: '2020-1-5 14:01:05', status: '停运', type: '4' },
      { name: '蜂巢公证业务', id: '00740f...bcb18', storagename: '泛融存管域', storageid: '00740f...bdca2', time: '2020-1-5 17:34:57', status: '删除审核中', type: '3' },
      { name: '泛融存证业务', id: '00740f...eecfe', storagename: '泛融存管域', storageid: '00740f...bdca2', time: '2020-1-5 15:10:22', status: '创建审核中', type: '1' }
    ]
    return {
      columns1,
      data1,
      total: 103,
      addModal: false,
      addLoading: false,
      businame: ''
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
      this.initList()
    },
    // 查询业务域列表
    initList () {
      setTimeout(() => {
        this.$http.post('/cmw/pbqbl.do').then(res => {
          console.log(res)
          if (res.retCode === '1') {
            this.$Message.success('查询成功')
          } else {
            if (res.retMsg) {
              this.$Message.error(res.retMsg)
            }
          }
        }).catch(() => {

        })
      })
    },
    ok () {

    },
    cancel () {

    },
    pageChange (value) {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
