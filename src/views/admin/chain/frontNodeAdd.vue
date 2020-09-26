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
            <Button style="width: 80px;" @click="submit" type="primary">申请</Button>
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
// import * as api from './api'
import * as cApi from '@/http/api'

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
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {

    },

    async submit () {
      if (this.form.address === '' || this.form.nameAddr === '' || this.form.addressAddr === '' || this.form.name === '') {
        this.$Message.warning('请完成表单！')
        return
      }
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': this.form.address, // 节点归属组织地址
        'orgName': this.form.nameAddr, // 节点归属组织名称
        'nodeAddr': this.form.addressAddr, // 节点地址
        'nodeInfo': { // 节点信息
          'name': '', // 节点名称
          'cpu': '', // CPU数量
          'memory': '', // 内存大小
          'disk': '', // 磁盘大小
          'bandwidth': '' // 带宽大小
        },
        'amount': '1', // 许可证容量
        'nodeType': 3, // 1主节点;2节点网络准入;3前置节点
        'op': 1 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'ChainNodeApplyContractTxReq',
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
                this.$router.go(-1)
                this.$Message.success('保存成功！')
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
    back () {
      this.$router.go(-1)
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
