<template>
  <div class="node-admission">
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;"><Icon type="md-arrow-back" style="margin-right:5px;" />退出</div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <h3 style="color: #273D52;font-weight: 600;font-size:18px;text-align:center;">业务系统准入申请</h3>
      </div>
      <div class="clear chain-baseinfo">
        <input type="hidden" id="signResult">
        <Row>
          <Col span="8">
          <div>链实例唯一标识：{{abridge}}</div>
          </Col>
          <Col>
          <div>链实例创建时间：{{formatCreatetime}}</div>
          </Col>
        </Row>
        <div style="margin-top:10px;">
          <Row>
            <Col span="8">
            <div>数据存管域名称：{{storageSession.storage_name || '--'}}</div>
            </Col>
            <Col span="8">
            <div>数据存管域唯一标识：{{storageSession.storage_id_format}}</div>
            </Col>
            <Col span="8">
            <div>创建时间：{{storageSession.join_time_format}}</div>
            </Col>
          </Row>
        </div>
        <div style="margin-top:10px;">
          <Row>
            <Col span="8">
            <div>业务域名称：{{bizSession.biz_name || '--'}}</div>
            </Col>
            <Col span="8">
            <div>业务域唯一标识：{{bizSession.biz_id_format}}</div>
            </Col>
            <Col span="8">
            <div>创建时间：{{bizSession.join_time_format}}</div>
            </Col>
          </Row>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="set-from">
        <Row>
          <Col>
          <div class="condition-item">
            <p class="condition-label">节点服务器名称：</p>
            <input class="condition-int" type="text" v-model="form.name"  placeholder="请输入要申请链实例准入的节点服务器名称"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item">
            <p class="condition-label">节点服务器身份标识：</p>
            <input class="condition-int" type="text" v-model="form.address" placeholder="请输入要申请链实例准入的节点身份标识"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item">
            <p class="condition-label">隶属企业名称：</p>
            <input class="condition-int" type="text" v-model="form.nameAddr" placeholder="请输入节点隶属的企业名称"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="condition-item">
            <p class="condition-label">隶属企业身份标识：</p>
            <input class="condition-int" type="text" v-model="form.addressAddr" placeholder="请输入节点隶属的企业身份标识"></input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="set-from-item" style="text-align:center;">
            <Button style="width: 80px;" @click="add" type="primary">申请</Button>
          </div>
          </Col>
        </Row>
        <div  v-show="popup">
          <div id="qrcode"></div>
          <div class="over"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from './api'
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
      bizSession: '',
      storageSession: '',
      createtime: '',
      id: '',
      popup: 0
    }
  },
  mounted () {
  },
  created () {
    this.bizSession = JSON.parse(sessionStorage.getItem('fbs_biz'))
    this.storageSession = JSON.parse(sessionStorage.getItem('fbs_storage'))
    let pbqci_address = sessionStorage.getItem('pbqci_address')
    let pbqci_joinTime = sessionStorage.getItem('pbqci_joinTime')
    if (pbqci_address && pbqci_joinTime) {
      this.id = pbqci_address
      this.createtime = pbqci_joinTime
      return
    }
    api.pbqci().then(res => {
      sessionStorage.setItem('pbqci_address', res.address)
      sessionStorage.setItem('pbqci_joinTime', res.joinTime)
      this.id = res.address
      this.createtime = res.joinTime
    }).catch(err => {
      console.log(err)
    })
  },
  watch: {

  },
  computed: {
    formatCreatetime () {
      if (!this.createtime) {
        return '--'
      }
      return this.$moment.unix(this.createtime / 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    abridge () {
      if (!this.id) {
        return '--'
      }
      let stringlength = this.id.length
      let fistStr = this.id.substring(0, 6)
      let lastStr = this.id.substring(stringlength - 6, stringlength)
      return fistStr + '.....' + lastStr
    }
  },
  methods: {
    async add () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'),
        'orgAddress': this.form.address, // 节点归属组织地址
        'orgName': this.form.name, // 节点归属组织名称
        'bizSystem': this.form.addressAddr, // 业务系统地址(身份标识)
        'name': this.form.nameAddr, // 业务系统名称
        'op': 1 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainBizSysApplyContractTxReq',
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
                this.$router.go(-1)
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
      window.history.go(-1)
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
.condition-item {
    display: flex;
    padding: 10px 10px 20px 0;
    position: relative;
    .condition-label {
      float: left;
      vertical-align: middle;
      line-height: 32px;
      width:150px;
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
