<template>
  <div class="data-storage">
    <chain-header title="数据存管域管理" />
    <div class="bg-white padding">
      <div class="section-title clear">
        <span>数据存管域列表</span>
        <div class="fr float-right" style="margin-top: -5px;">
          <!-- <Button type="primary">创建新域</Button> -->
          <Button type="primary" @click="addModal = true" style="margin-left: 24px;">连接现有域</Button>
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
        title="连接数据存管域"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><p style="margin-bottom:15px;">数据存管域唯一标识：</p><Input placeholder="请输入委员名称" v-model="address" /></div>
        </div>
        <div slot="footer">
          <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >连接</Button>
          <Button  style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
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
        title: '数据存管域名称',
        key: 'storage_name',
        width: 140
      },
      {
        title: '数据存管域唯一标识',
        key: 'storage_id'
      },
      {
        title: '创建时间',
        key: 'join_time'
      },
      {
        title: '最大许可存储容量',
        key: 'capacity_license'
      },
      {
        title: '操作',
        render (h, p) {
          // let index = p.index
          let row = p.row || {}
          let type = row.type
          let opt1 = h('a', {
            on: {
              click () {
                // that.data1.splice(index,1)
              }
            }
          }, '断开连接')
          let opt2 = h('a', {
            on: {
              click () {
                // let index = p.index
                // let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                let { showBusinessSubmenu } = that.$route.query
                sessionStorage.setItem('fbs_storage_id', row.storage_id)
                that.$router.push({
                  path: 'data-detail',
                  query: {
                    showDataSubmenu: '1',
                    showBusinessSubmenu,
                    mainActive: 'data',
                    activeIndex: '1',
                    subActive: 'data-detail'
                  }
                })
              }
            }
          }, '详情')
          let opt3 = h('a', {
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '删除')
          let opts = [opt1, opt2]
          switch (type) {
          case '1':
            opts.push(opt2)
            break
          case '2':
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
    return {
      listLoading: false,
      columns,
      oldList: [],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      addLoading: false,
      addModal: false,
      name: '',
      address: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.listLoading = true
      api.pbqss({
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
    destoryed () {
      this.closeTimer()
    },
    closeTimer () {
      if (this.timer) {
        clearInterval(this.timer)
        // let signResult = document.getElementById('signResult')
        // signResult = ''
      }
    },
    confirmAdd () {

    },
    ok () {
      // // let timestamp = Date.now()
      // // let signStr = this.timestamp + ''
      // // sign(signStr)
      // this.timer = setInterval(() => {
      //   let signResult = document.getElementById('signResult')
      //   let signature = signResult.value
      //   if (signature && !signature.match(/^(doing)|(fail)|(refuse)$/)) {
      //     this.closeTimer()
      //     console.log(signature)
      //     this._add()
      //   }
      //   if (signature === 'fail') {
      //     console.log('签名失败')
      //     this.closeTimer()
      //     // this.$toast('签名失败')
      //   }
      //   if (signature === 'refuse') {
      //     console.log('拒绝签名')
      //     this.closeTimer()
      //     // this.$toast('签名失败')
      //   }
      // }, 100)
      // let name = this.name.trim()
      // this.addLoading = true
      // let data = {
      //   name
      // }
      // this.$http.post('', data).then(res => {
      //   res = res.data
      // }).catch(() => {
      //
      // }).then(res => {
      //   this.cancel()
      // })
    },
    cancel () {
      this.name = ''
      this.address = ''
      this.addModal = false
      this.addLoading = false
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
   .add-modal-body {
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
</style>
