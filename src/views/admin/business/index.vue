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
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    // {
    //   "biz_id": "1",    // 业务域唯一标识（业务域id）
    //   "main_storage_storage_id": "1", // 隶属数据存管域ID
    //   "main_storage_storage_name":aa"", //隶属数据存管域名称
    //   "biz_name": "业务域名称",			// 业务域名称
    //   "rule": 300,
    //   "information": "枚举暂缺",
    //   "file_permission": "枚举暂缺",
    //   "join_time": 1599704154000				//创建时间
    // }
    let columns = [
      {
        title: '业务域名称',
        key: 'biz_name',
        width: 130
      },
      {
        title: '业务域唯一标识',
        width: 150,
        key: 'biz_id'
      },
      {
        title: '隶属数据存管域名称',
        key: 'main_storage_storage_name'
      },
      {
        title: '隶属数据存管域ID',
        key: 'main_storage_storage_id'
      },
      {
        title: '创建时间',
        width: 160,
        key: 'join_time'
      },
      // {
      //   title: '状态',
      //   key: 'status',
      //   width: 110
      // },
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
                sessionStorage.setItem('fbs_biz_id', row.biz_id)
                that.$router.push({
                  name: 'business-detail',
                  query: {
                    // biz_id: row.biz_id,
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
          }, [opt2])
        }

      }
    ]
    return {
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
      this.listLoading = true
      api.pbqbl({
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

</style>
