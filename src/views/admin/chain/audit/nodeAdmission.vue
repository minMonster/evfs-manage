<template>
  <div class="chain-configure">
    <h2 class="content-title clear">节点网络准入许可管理</h2>
    <div class="split-line"></div>
    <div class="encryption-wrapper padding bg-white" style="margin-bottom: 20px;">
      <div style="overflow: auto">
        <div style="margin-bottom: 20px;color: #273D52;">
          <span>
            准入节点服务器列表：
          </span>
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
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '隶属企业名称',
        key: 'name',
        'width': 150
      },
      {
        title: '服务器身份标识',
        key: 'address',
        'width': 150
      },
      {
        title: '节点类型',
        key: 'node_type',
        'width': 100
      },
      {
        title: '数据存管域名称',
        key: 'storage_name',
        'width': 100
      },
      {
        title: '添加时间',
        key: 'join_time',
        'width': 200,
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
        key: 'status',
        width: 100,
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.status) {
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
        key: 'applicant_name',
        'width': 100
      },
      {
        title: '审核通过人',
        'width': 100,
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.$QueryApprovedDialog.show(row)
              }
            }
          }, '查看')
        }
      },
      {
        title: '操作',
        width: 120,
        render (h, p) {
          let row = p.row
          if (row.status !== '1') {
            return h('span', '--')
          }
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
                that.agree(row)
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                that.refuse(row)
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
      },
      {
        title: '审核结果',
        key: 'user_status',
        width: 100,
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
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
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
    async agree (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'ChainNodeAgreeContractTxReq',
        'jsBody': JSON.stringify(jsBody)
      }).then(res => {
        return {
          hexTxBody: res.hexTxBody,
          txId: res.txId
        }
      }).catch(err => {
        this.$Message.error(err.retMsg)
        return false
      })
      if (data) {
        this.$qrCodeAuthDialog.show(
          {
            url: 'bs/pbdtx.do',
            data,
            // 这里要写一个闭包函数 返回 需要的 api
            setIntervalFunc: () => cApi.pbgts({ txId: data.txId }),
            func: 'send_trans'
          },
          (resPromise) => {
            // resPromise 轮询的结果 在此处处理业务逻辑
            return resPromise.then(res => {
              // 1待提交；2执行中；3执行完成；4执行失败；5提交失败；6未知状态
              if (res.status === 4 || res.status === 5 || res.status === 6) {
                this.$Message.error(res.remark)
                return true
              }
              if (res.status === 3) {
                this.$Message.success('修改成功')
                this.addModal = false
                return true
              } else {
                return false
              }
            }).catch(() => {
              return false
            })
          })
      }
    },
    async refuse (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'AdminDisagreeContractTxReq',
        'jsBody': JSON.stringify(jsBody)
      }).then(res => {
        return {
          hexTxBody: res.hexTxBody,
          txId: res.txId
        }
      }).catch(err => {
        this.$Message.error(err.retMsg)
        return false
      })
      if (data) {
        this.$qrCodeAuthDialog.show(
          {
            url: 'bs/pbdtx.do',
            data,
            // 这里要写一个闭包函数 返回 需要的 api
            setIntervalFunc: () => cApi.pbgts({ txId: data.txId }),
            func: 'send_trans'
          },
          (resPromise) => {
            // resPromise 轮询的结果 在此处处理业务逻辑
            return resPromise.then(res => {
              // 1待提交；2执行中；3执行完成；4执行失败；5提交失败；6未知状态
              if (res.status === 4 || res.status === 5 || res.status === 6) {
                this.$Message.error(res.remark)
                return true
              }
              if (res.status === 3) {
                this.$Message.success('修改成功')
                this.addModal = false
                return true
              } else {
                return false
              }
            }).catch(() => {
              return false
            })
          })
      }
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
