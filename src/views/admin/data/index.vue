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
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
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
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "数据存管域名称",
        key: "name",
        width: 140,
      },
      {
        title: "数据存管域唯一标识",
        key: "id"
      },
      {
        title: "创建时间",
        key: "time"
      },
      {
        title: "最大许可存储容量",
        key: "maxstorage"
      },
      {
        title: '状态',
        key: 'status',
        width: 120
      },
      {
        title:'操作',
        render(h,p) {
          var index = p.index
          var row = p.row || {}
          var type = row.type
          var opt1 = h('a', {
            on: {
              click() {
                // that.data1.splice(index,1)
              }
            }
          }, '断开连接')
          var opt2 = h('a', {
            on: {
              click() {
                var index = p.index
                let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                that.$router.push({
                  name: 'data-detail',
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
          var opt3 = h('a', {
            on: {
              click() {
                var index = p.index
                
              }
            }
          }, '删除')
          var opts = [opt1]
          switch (type) {
            case '1':
              opts.push(opt2)
              break;
            case '2':
              opts.push(opt2)
              opts.push(opt3)
              break;
            default:
              break;
          }
          return h('div',{
            'class': 'opt-btns'
          },opts)
        }
        
      }
    ];
    var data1 = [
      { name: '泛融存管域', id: '00740f...bdca2', time: '2020-1-5 15:34:57', maxstorage: '5.0TB',status: '删除审核中', type: '0'},
      { name: '从法存管域', id: '00740f...facb7', time: '2020-1-5 10:21:32', maxstorage: '5.0TB',status: '运行', type: '1'},
      { name: '金融共享域', id: '00740f...ccbb3', time: '2020-1-5 12:34:04', maxstorage: '5.0TB',status: '停运', type: '2'},
    ];
    return {
      columns1, 
      data1,
      total: 103,
      addLoading:false,
      addModal: false,
      name:'',
      address:''

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
    destoryed(){
         this.closeTimer()
    },
    closeTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        var signResult = document.getElementById('signResult')
        signResult = ''
      }
    },
    confirmAdd(){

    },
    ok() {
          var timestamp = Date.now()
          let signStr = this.timestamp + ''
          sign(signStr)
          this.timer = setInterval(() => {
              var signResult = document.getElementById('signResult')
              var signature = signResult.value
              if (signature && !signature.match(/^(doing)|(fail)|(refuse)$/)) {
                this.closeTimer()
                console.log(signature)
                this._add()
              }
              if (signature == 'fail') {
                console.log('签名失败')
                this.closeTimer()
                // this.$toast('签名失败')
              }
              if (signature == 'refuse') {
                console.log('拒绝签名')
                this.closeTimer()
                // this.$toast('签名失败')
              }
          },100)
          let name = this.name.trim()
          this.addLoading = true
          var data = {
            name
          }
          this.$http.post('',data).then(res => {
            res = res.data
          }).catch(() => {

          }).then(res => {
            this.cancel()
          })
    },
    cancel() {
            this.name = ''
            this.address = ''
            this.addModal = false
            this.addLoading = false
    },
    pageChange(value) {
      
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