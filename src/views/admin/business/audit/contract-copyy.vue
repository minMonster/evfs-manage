<template>
  <div class="business-detail">
    <div class="content-title"><span>业务域内合约治理</span></div>
    <div class="bg-white padding">
      <div class="section-title">
        <span>
          <b>文件监管</b>
        </span>
      </div>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
    <div class="bg-white padding mb20" style="margin-bottom:20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>结构数据监管</b>
        </span>
      </div>
      <div>
        <Table :columns="columns2" :data="data2"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
    <div class="bg-white padding mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>文件拥有者转移待审列表</b>
        </span>
      </div>
      <div style="overflow: auto;">
        <Table style="min-width: 1300px;" :columns="columns3" :data="data3"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '合约名称',
        key: 'name'
      },
      {
        title: '合约链上唯一标识',
        key: 'address'
      },
      {
        title: '发布时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        width: 120,
        title: '申请人',
        key: 'applicant'
      },
      {
        width: 130,
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
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
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
      }
    ]
    let data1 = [
      { name: '电子卷宗管理', address: '00fb0a...eac32', applicant: '张力', time: '--', statuslabel: '发布审核中', status: '0' },
      { name: '银行贷款信息', address: '00fb0a...dfa86', applicant: '张力', time: '2020-4-20 13:10:09', statuslabel: '解冻审核中', status: '1' },
      { name: '公证书管理', address: '00fb0a...adee2', applicant: '张力', time: '2020-4-20 15:22:24', statuslabel: '冻结审核中', status: '2' },
      { name: '执行管理', address: '00fb0a...ffe76', applicant: '张力', time: '2020-4-20 15:22:24', statuslabel: '解冻审核中', status: '4' },
      { name: '仲裁管理', address: '00fb0a...efcca', applicant: '张力', time: '2020-4-20 14:21:05', statuslabel: '冻结审核中', status: '3' }
    ]
    let columns2 = [
      {
        title: '数据链上唯一标识',
        key: 'address'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        width: 120,
        title: '申请人',
        key: 'applicant'
      },
      {
        width: 130,
        title: '审核通过人',
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.addlook(row)
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
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
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
    let data2 = [
      { address: '00fb0a...ef34a', applicant: '张力', statuslabel: '解冻审核中', status: '1' },
      { address: '00fb0a...eda4e', applicant: '张力', statuslabel: '冻结审核中', status: '2' },
      { address: '00fb0a...eac4f', applicant: '张力', statuslabel: '解冻审核中', status: '4' },
      { address: '00fb0a...a43fe', applicant: '张力', statuslabel: '冻结审核中', status: '3' }
    ]
    let columns3 = [
      {
        title: '文件名称',
        key: 'name'
      },
      {
        title: '文件链上唯一标识',
        key: 'address'
      },
      {
        title: '原始拥有者姓名',
        key: 'oldname'
      },
      {
        title: '原始拥有者身份标识',
        key: 'oldid'
      },
      {
        title: '新拥有者姓名',
        key: 'newname'
      },
      {
        title: '新拥有者身份标识',
        key: 'newid'
      },
      {
        width: 130,
        title: '审核通过人',
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.addLook(row)
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
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
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
      }
    ]
    let data3 = [
      {
        name: '测试122.doc',
        address: '00fb0a...ef34a',
        oldname: '张力',
        oldid: '00cc0b...ae7ca',
        newname: '赵宇',
        newid: '00cc0b...af2c4'
      }
    ]
    return {
      total: 90,
      columns1,
      data1,
      columns2,
      data2,
      columns3,
      data3
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    // 查看
    adds (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + ' <br>time：' + obj.time + '',
        oktext: '关闭'
      })
    },
    addLook (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + '',
        oktext: '关闭'
      })
    },
    addlook (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.applicant + '<br> address：' + obj.address + '',
        oktext: '关闭'
      })
    },
    pageChange (val) {

    }
  }
}
</script>

<style>

</style>
