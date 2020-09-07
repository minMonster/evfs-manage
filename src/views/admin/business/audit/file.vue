<template>
  <div class="business-detail">
    <div class="content-title"><span>域内数据治理</span></div>
    <div class="bg-white padding mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
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
          <b>数据结构监管</b>
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
  data() {
    var that = this
    var columns1 = [
      {
        title: "文件名称",
        key: "name"
      },
      {
        title: "文件链上唯一标识",
        key: "address"
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
          var row = p.row
          return h('a',{
            on:{
              click() {
                that.adds(row)
              }
            }
          },'查看')
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
      {name: '测试.doc', address: '00fb0a...ef34a',applicant: '张力', statuslabel: '解冻审核中', status: '1' },
      {name: '照片.jpg', address: '00fb0a...eda4e',  applicant: '张力', statuslabel: '冻结审核中', status: '2' },
      {name: '视频.MP4', address: '00fb0a...eac4f',applicant: '张力',statuslabel: '解冻审核中', status: '4' },
      {name: '音频.MP3', address: '00fb0a...a43fe', applicant: '张力',statuslabel: '冻结审核中', status: '3' },
    ]
    var columns2 = [
      {
        title: "数据链上唯一标识",
        key: "address"
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
          var row = p.row
          return h('a',{
             on:{
              click() {
                that.addlook(row)
              }
            }
          },'查看')
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
      },
      {
        title:'审核结果',
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
      var data2 = [
      {address: '00fb0a...ef34a',applicant: '张力', statuslabel: '解冻审核中', status: '1' },
      {address: '00fb0a...eda4e',  applicant: '张力', statuslabel: '冻结审核中', status: '2' },
      {address: '00fb0a...eac4f',applicant: '张力',statuslabel: '解冻审核中', status: '4' },
      {address: '00fb0a...a43fe', applicant: '张力',statuslabel: '冻结审核中', status: '3' },
    ]
    var columns3 = [
      {
        title: "文件名称",
        key: "name"
      },
      {
        title: "文件链上唯一标识",
        key: "address"
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
        render(h,p) {
          var row = p.row
          return h('a',{
             on:{
              click() {
                that.addLook(row)
              }
            }
          },'查看')
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
    var data3 = [
      {
        name: '测试122.doc', 
        address: '00fb0a...ef34a',
        oldname: '张力',
        oldid: '00cc0b...ae7ca',
        newname: '赵宇',
        newid: '00cc0b...af2c4'
      },
    ]

    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1, data1,
      columns2, data2,
      columns3, data3
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
     //查看
    adds(obj){
          this.$Modal.confirm({
             title: '已审核人列表',
             content:'name：'+obj.name +'<br> address：'+obj.address+'',
             oktext:"关闭"
         })
    },
    addLook(obj){
      this.$Modal.confirm({
          title: '已审核人列表',
          content:'name：'+obj.name +'<br> address：'+obj.address+'',
          oktext:"关闭"
      })
    },
    addlook(obj){
      this.$Modal.confirm({
          title: '已审核人列表',
          content:'name：'+obj.applicant +'<br> address：'+obj.address+'',
          oktext:"关闭"
      })
    },
    pageChange(val) {
      
    }
  }
}
</script>

<style>

</style>