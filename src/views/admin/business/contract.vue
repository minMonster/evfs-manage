<template>
  <div class="business-detail">
    <business-header title="业务域内合约治理" :btn="true" />
    <div class="bg-white padding">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>合约列表</b>
        </span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
        <Button type="primary"  @click="addModal = true"  style="float: right;">添加合约</Button>
      </div>
      <Row>
        <Col span="5">
          <div class="condition-item">
            <span class="condition-label">合约名称：</span>
            <Input type="text" v-model="form.name" placeholder="合约名称"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">合约链上唯一标识：</span>
            <Input type="text" v-model="form.address" placeholder="合约链上唯一标识："></Input>
          </div>
        </Col>
        <!-- <Col span="6">
          <div class="condition-item">
            <span class="condition-label">状态：</span>
            <Select value="0">
              <Option value="0">全部</Option>
              <Option value="1">冻结</Option>
              <Option value="2">正常</Option>
              <Option value="2">冻结审核中</Option>
              <Option value="2">解冻审核中</Option>
            </Select>
          </div>
        </Col> -->
        <Col span="6">
          <div class="condition-item">
            <Button style="width: 80px;" @click="search" type="primary">查询</Button>
          </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div  v-show="popup">
               <div id="qrcode"></div>
               <div class="over"></div>
            </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
       <Modal
        v-model="addModal"
        title="合约发布"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <span>选择编译好的合约文件，申请上链发布！</span>
          <div><span Style="margin-bottom:10px;">合约名称：</span><Input placeholder="请输入合约名称" v-model="conName" /></div>
          <div><span Style="margin-bottom:10px;">备注：</span>  <i-input type="textarea" v-model="remarks" placeholder="请输入..."></i-input></div>
          <div><span Style="margin-bottom:10px;">合约内容</span><i-input type="textarea" v-model="conCent" :rows="4" placeholder="请输入..."></i-input></div>
        </div>
        <div slot ="footer">
             <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >申请发布</Button>
             <Button  style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
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
        title:'操作',
        render(h,p) {
          var row = p.row || {}
          var label = '--'
          var status = row.status
          if (status == '1') {
            label = '冻结'
          } 
          if(status == '2') {
            label = '解冻'
          }
          if (status > 2) {
            label = '撤销'
          }
          return h('a', {
            on: {
              click() {
                var index = p.index
                if (status == '2') {
                  
                }
              }
            }
          }, label)
        }
      }
    ]
    var data1 = [
      {name: '电子卷宗管理', id: '00fb0a...eac32', time: '--',statuslabel: '发布审核中', status: '0' },
      {name: '银行贷款信息', id: '00fb0a...dfa86', time: '2020-4-20 13:10:09',  statuslabel: '正常', status: '1' },
      {name: '公证书管理', id: '00fb0a...adee2', time: '2020-4-20 15:22:24', statuslabel: '冻结', status: '2' },
      {name: '执行管理', id: '00fb0a...ffe76', time: '2020-4-20 15:22:24', statuslabel: '解冻审核中', status: '4' },
      {name: '仲裁管理', id: '00fb0a...efcca', time: '2020-4-20 14:21:05',statuslabel: '冻结审核中',status: '3'}
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1, data1,
      addModal:false,
      conName:'',remarks:'',conCent:'',
      addLoading:false,
      form:{
        name:"",
        address:""
      },
      popup:0

    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.init()
    this.creatQrCode()
  },
  methods: {
    init() {
         this.initList()
    },
    initList(){
         this.loading = true
         let biz_id = this.form.name
         let params = {
            biz_id	
         }
         setTimeout(() =>{
           this.$http.post('/cmw/pbqbc.do',params).then(res =>{
            console.log(res)
            if(res.retCode == '1'){
              this.$Message.success('查询成功')
            }else{
              if (res.retMsg) {
               this.$Message.error(res.retMsg)
              }
            }
           }).catch(err => {

           })
         },100)
    },
    ok() {
       this.popup = 1
       this.add()
    },
    add(){
        this.cancel()
    },
    search(){},
    cancel() {
            this.conName = ''
            this.remarks = ''
            this.conCent = ''
            this.addModal = false
            this.addLoading = false
    },
    pageChange(val) {
      
    },
    //生成二维码
     creatQrCode() {
            let linkData = {
                // url:"http://47.116.17.247:9000/api/clt/pblin.do",
                // func:"Login",
                // data:{
                // }
            };
            var qrcode = new QRCode('qrcode', {
                text: JSON.stringify(linkData), // 需要转换为二维码的内容
                width: 260,
                height: 260,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: 3,//容错率，L/M/H
            })
            console.log(qrcode)
        },
  }
}
</script>

<style lang="less" scoped>
#qrcode {
   position: fixed;
   border:10px solid  white;
   margin:12px;
   border-radius: 0.25rem;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 1000;
 }
  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.3;//透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
  }
</style>