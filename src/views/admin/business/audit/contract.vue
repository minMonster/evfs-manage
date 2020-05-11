<template>
  <div class="business-detail">
    <div class="content-title"><span>业务域内合约治理</span></div>
    <div class="bg-white padding">
      <div class="section-title">
        <span>
          <b>合约列表</b>
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
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "合约名称",
        key: "name"
      },
      {
        title: "合约链上唯一标识",
        key: "id"
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
        render(h,p) {
          return h('a',{},'查看')
        }
      },
      {
        title:'操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click() {
                var index = p.index
                
              }
            }
          },'同意')
          var refuse =  h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click() {
                var index = p.index
              }
            }
          },'拒绝')
          return h('div',{
            'class': 'opt-btns'
          },[
            agree, refuse
          ])
        }
      }
    ]
    var data1 = [
      {name: '电子卷宗管理', id: '00fb0a...eac32',applicant: '张力', time: '--',statuslabel: '发布审核中', status: '0' },
      {name: '银行贷款信息', id: '00fb0a...dfa86',applicant: '张力', time: '2020-4-20 13:10:09',  statuslabel: '解冻审核中', status: '1' },
      {name: '公证书管理', id: '00fb0a...adee2', applicant: '张力',time: '2020-4-20 15:22:24', statuslabel: '冻结审核中', status: '2' },
      {name: '执行管理', id: '00fb0a...ffe76',applicant: '张力', time: '2020-4-20 15:22:24', statuslabel: '解冻审核中', status: '4' },
      {name: '仲裁管理', id: '00fb0a...efcca',applicant: '张力', time: '2020-4-20 14:21:05',statuslabel: '冻结审核中',status: '3'}
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1, data1
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {

    },
    pageChange(val) {
      
    }
  }
}
</script>

<style>

</style>