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
      // {
      //   title: '状态',
      //   key: 'status',
      //   width: 110
      // },
      {
        title: '操作',
        width: 180,
        render (h, p) {
          // let index = p.index
          let row = p.row || {}
          let type = row.type
          let opt1 = h('a', {
            on: {
              click () {
                that.$Modal.confirm({
                  title: '提示',
                  content: '确定断开链接么？'
                })
              }
            }
          }, '断开联接')
          let opt2 = h('a', {
            on: {
              click () {
                // let index = p.index
                // let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                let { showDataSubmenu } = that.$route.query
                sessionStorage.setItem('fbs_biz_id', row.biz_id)
                let formatBiz = {
                  ...row,
                  biz_id_format: that.formatId(row.biz_id),
                  main_storage_storage_id_format: that.formatId(row.main_storage_storage_id),
                  join_time_format: row.join_time ? that.$moment.unix(row.join_time / 1000).format('YYYY-MM-DD HH:mm:ss') : '--'
                }
                sessionStorage.setItem('fbs_biz', JSON.stringify(formatBiz))
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
          let opt3 = h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, '删除')
          let opts = [opt1]
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
    formatId (id) {
      if (!id) {
        return '--'
      }
      let stringlength = id.length
      let fistStr = id.substring(0, 6)
      let lastStr = id.substring(stringlength - 6, stringlength)
      return fistStr + '.....' + lastStr
    },
    init () {
      this.listLoading = true
      api.pbqbl({
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
