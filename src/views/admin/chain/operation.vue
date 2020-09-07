<template>
  <div class="node-admission">
    <chain-header title="链运行许可证管理" :btn="true" />
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">链内存储容量许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>100</p>
              <div>存储许可总容量</div>
            </Col>
            <Col span="8">
              <p>50</p>
              <div>已发放存储许可容量</div>
            </Col>
            <Col span="8">
              <p>50</p>
              <div>未发存储许可数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">链内文件存储容量许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>50.00<span>TB</span></p>
              <div>文件存储最大许可容量</div>
            </Col>
            <Col span="8">
              <p>5.00<span>TB</span></p>
              <div>已发放文件存储许可容量</div>
            </Col>
            <Col span="8">
              <p>45.00<span>TB</span></p>
              <div>未发文件存储许可容量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div> -->
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px; color: #273D52;" class="clear">
        链内存储容量许可证分布信息：
        <!-- <Button class="fr float-right" type="primary">添加</Button> -->
      </div>
      <div>
        <Row>
          <Col span="8">
            <div class="condition-item">
              <span class="condition-label">数据存管域名称：</span>
              <Input type="text" v-model="form.name" placeholder="数据存管域名称"></Input>
            </div>
          </Col>
          <Col span="8">
            <div class="condition-item">
              <span class="condition-label">数据存管域唯一标识：</span>
              <Input type="text" v-model="form.address" placeholder="数据存管域唯一标识"></Input>
            </div>
          </Col>
          <Col span="4">
            <div class="condition-item">
              <Button style="width: 80px;" @click="search" type="primary">查询</Button>
            </div>
          </Col>
        </Row>
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
     <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">链内节点运行许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>100</p>
              <div>节点运行许可总容量</div>
            </Col>
            <Col span="8">
              <p>50</p>
              <div>已发放节点许可数量</div>
            </Col>
            <Col span="8">
              <p>50</p>
              <div>未发放节点存储许可数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
     <div class="padding bg-white clear" style="margin-bottom: 20px;">
        <div style="margin-bottom: 10px;color: #273D52;" class="clear">
       链内运行许可证分布信息:
        </div>
        <div>
           <Row>
        <Col span="8">
          <div class="condition-item">
            <span class="condition-label">数据存管域名称：</span>
            <Input type="text" placeholder="数据存管域名称"></Input>
          </div>
        </Col>
        <Col span="8">
          <div class="condition-item">
            <span class="condition-label">数据存管域唯一标识：</span>
            <Input type="text" placeholder="数据存管域唯一标识"></Input>
          </div>
        </Col>
        <Col span="8">
          <div class="condition-item">
            <Button style="width: 80px;" type="primary">查询</Button>
          </div>
        </Col>
      </Row>
       <div>
            <Table :columns="columns2" :data="data2"></Table>
          </div>
          <div class="page">
            <div class="page-inner">
              <Page :total="total" @on-change="pageChange"/>
             </div>
         </div>
        </div>
     </div>
      <div v-show="popup">
          <div id="qrcode"></div>
          <div class="over"></div>
     </div>
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;font-weight: 600;">
        新增节点运行许可授权证：
      </div>
      <div class="opt-input">
        <Input type="textarea" :rows="4" placeholder="请输入从泛融科技获得的链实例运行许可证" />
        <div class="tip">*获得泛融公司颁发的商业许可证，此许可决定链实例的节点网络中能够运行节点服务器的最大数量。</div>
      </div>
      <div style="margin-bottom: 10px;color: #273D52;font-weight: 600;">
        新增存储容量许可授权证：
      </div>
      <div class="opt-input">
        <Input type="textarea" :rows="4" placeholder="请输入从泛融科技获得的链实例整体最大能够存储文件的总容量的许可证" />
        <div class="tip">*获得泛融公司颁发的商业许可证，此许可决定链实例可存储文件最大容量。</div>
      </div>
      <div class="clear">
        <div class="fr float-right">
          <Button type="primary" @click="expansionBind">扩容绑定</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
export default {
  data() {
    var that = this;
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
        title: "现有许可存储容量",
        key: "storage"
      },
      {
        title: "申请新增存储容量",
        key: "newstorage"
      },
      // {
      //   title: '现有节点许可证',
      //   key: 'nodepermissin',
      //   width: 150
      // },
      // {
      //   title: '申请新增节点许可证',
      //   key: 'newnodepermissin'
      // },
      {
        title: '申请状态',
        key: 'status',
        width: 120
      }
    ];
    var data1 = [
      { name: '蜂巢链存证域', id: '00740f...aeea2', storage: '0.00TB', newstorage: '5.00 TB', nodepermissin: '0', newnodepermissin: '10', status: '申请审核中'},
      { name: '从法存管域', id: '00740f...facb7', storage: '5.00TB', newstorage: '--', nodepermissin: '50', newnodepermissin: '--', status: '--'}
    ];
    var columns2 = [
      {
        title: "数据存管域名称",
        key: "name"
      },
      {
        title: "数据存管域唯一标识",
        key: "address"
      },
      {
        title: '节点许可证',
        key: 'time'
      },
     
    ]
    var data2 = [
      {name: '从法科技', address: '00740f...ccbb1', time: '2020-1-5 10:05:51' },
      {name: '金桥信息', address: '00740f...feac3', time: '' },
      {name: '泛融科技', address: '00740f...bdae4', time: '2020-1-5 10:15:31' },
    ]
    return {
      acceptLimit: "1/3",
      name: "",
      address: "",
      addModal: false,
      columns1,
      columns2,
      data1,
      data2,
      total: 100,popups:0,
      form: {
        name: "",
        address: "",
        
      },
      switch1: "0",
      popup:0
    };
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {},
  methods: {
    init() {},
    ok() {},
    cancel() {},
    search(){

    },
    //扩容绑定
    expansionBind(){
          console.log(111)
          this.popup = 1
          this.creatQrCode();
    },
    pageChange(page) {
      console.log(page);
    },
     //二维码
    creatQrCode() {
      let linkData = {
          // url:this.apiUrl + "/clt/pbsst.do",
          // func:"margIn",
          // data:{
          //     "tempPubKey":this.pubstem,  //公钥
          //     "encmsg":''
          // }
      };
      var qrcode = new QRCode('qrcode', {
          text: JSON.stringify(linkData), // 需要转换为二维码的内容
          width: 260,
          height: 260,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H,//容错率，L/M/H
      })
    },
  }
};
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
.approval {
  display: block;
  & > div {
    padding: 6px 0;
  }
}
.info-item {
  .ivu-col {
    span {
      color:rgba(24, 68, 176, 1);
      font-weight: 500;
    }
  }
  margin-bottom: 30px;
}
.tip {
  margin: 4px 0 20px 0;
  color: rgba(162, 162, 162, 1);
  font-size: 12px;
}
.league-mem {
  padding: 14px 0;
  span {
    color: #273D52;
  }
  .fr {
    color: #6094ff;
    background: #fff;
    border: 1px solid #6094ff;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: 0;
    outline: none;
    cursor: pointer;
  }
}
.add-modal-body {
  & > div:nth-child(1) {
    margin-bottom: 20px;
  }
}
.condition-item {
  display: flex;
  padding: 10px 10px 20px 0;
  position: relative;
  .condition-label {
    float: left;
    vertical-align: middle;
    line-height: 32px;
  }
  .ivu-input-wrapper {
    width: 50%;
  }
  .ivu-select {
    width: 60%;
  }
}
</style>