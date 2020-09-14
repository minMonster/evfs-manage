<template>
  <div class="node-admission">
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;"> <Icon type="md-arrow-back" style="margin-right:5px;" /> 退出</div>
      <div style="margin-bottom: 10px;color: #273D52;" class="set-body">
        <h3 style="color: #273D52;font-weight: 600;font-size:18px;">前置节点服务器准入申请</h3>
      </div>
      <div class="clear chain-baseinfo">
        <div style="margin-bottom:5px;">
          <span style="color: #273D52;font-weight: 600;font-size:18px;">链实例基本信息</span>
        </div>
        <Row>
          <Col span="8">
          <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
          </Col>
          <Col>
          <div>链实例创建时间：2020-1-5 12:00:00</div>
          </Col>
        </Row>
      </div>
      <div class="split-line"></div>
      <div class="set-from">
        <Row>
          <Col>
          <div class="condition-item" label-position="top">
            <p class="condition-label">前置节点服务器名称：</p>
            <input class="condition-int" type="text" v-model="form.name"  placeholder="请输入要申请链实例准入的前置节点服务器名称"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item" label-position="top">
            <span class="condition-label">前置节点服务器身份标识：</span>
            <input class="condition-int" type="text" v-model="form.address" placeholder="请输入要申请链实例准入的前置节点身份标识"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item" label-position="top">
            <p class="condition-label">隶属企业名称：</p>
            <input class="condition-int" type="text" v-model="form.nameAddr" placeholder="请输入节点隶属的企业名称"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item" label-position="top">
            <p class="condition-label">隶属企业身份标识：</p>
            <input class="condition-int" type="text" v-model="form.addressAddr" placeholder="请输入节点隶属的企业身份标识"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="set-from-item" style="text-align:center">
            <Button style="width: 80px;" @click="serachBtn" type="primary">申请</Button>
          </div>
          </Col>
        </Row>
        <div  v-show="popup">
          <!-- <div class="qrcode"  ref="qrCodeUrl"></div> -->
          <div id="qrcode"></div>
          <div class="over"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {
      form: {
        address: '',
        name: '',
        addressAddr: '',
        nameAddr: ''
      },
      popup: 0
    }
  },
  mounted () {
    this.init()
    this.creatQrCode()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {

    },

    serachBtn () {
      this.popup = 1
      // var self = this
      let params = {
        name: this.form.name,
        address: this.form.address,
        nameAddr: this.form.nameAddr,
        addressAddr: this.form.addressAddr
      }
      this.$http.post('', params).then(res => {
        console.log(res)
        res = res.data
        if (res.retCode === '1') {
          this.$router.push('/chain-frontnodelicence')
        } else {

        }
      }).catch(() => {

      })
    },
    back () {
      window.history.go(-1)
    },
    // 二维码
    creatQrCode () {
      // const _this = this
      let linkData = {
        //     url:this.apiUrl +"/clt/pblin.do",
        //     func:"Login",
        //     data:{
        //     }
      }
      var qrcode = new QRCode('qrcode', {
        text: JSON.stringify(linkData), // 需要转换为二维码的内容
        width: 260,
        height: 260,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: 3// 容错率，L/M/H
      })
      console.log(qrcode)
    }
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
.set-body{
  h3 {
    text-align: center;
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
      width:200px;
    }
   .condition-int{
          width: 350px;
          padding-left: 13px;
          outline: none;
}
    .ivu-input-wrapper {
      width: 50%;
    }
    .ivu-select {
      width: 60%;
    }
  }
   .set-from{
    width:500px;
    margin:0 auto;
  }
</style>
