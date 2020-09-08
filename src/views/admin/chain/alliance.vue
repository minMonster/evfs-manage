<template>
  <div class="alliance">
    <chain-header title="链联盟委员会管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <input type="hidden" id="signResult">
          <span>联盟委员决议审批规则：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要联盟委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <Button type="primary" @click="modify" style="float: right;">修改</Button>
        </div>
        <RadioGroup class="approval" v-model="acceptLimit" @on-change="accrptFun">
          <Row>
            <Col span="6">
            <Radio label="0">任意一个联盟委员签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="1/3">1/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="2/3">2/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="3/3">所有联盟委员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>联盟委员会成员</span>
          <Button type="primary" @click="addModal = true" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">委员名称：</span>
              <Input type="text" v-model="form.name" placeholder="委员名称"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">委员身份标识：</span>
              <Input type="text" v-model="form.address" placeholder="委员身份标识"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">状态：</span>
              <Select v-model="form.status">
                <Option value="0">全部</Option>
                <Option value="1">已添加</Option>
                <Option value="2">已删除</Option>
                <Option value="3">添加审核中</Option>
                <Option value="4">删除审核中</Option>
              </Select>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <Button style="width: 80px;" @click="search" type="primary">查询</Button>
            </div>
            </Col>
          </Row>
        </div>
        <div  v-show="popup">
          <div id="qrcode"></div>
          <div class="over"></div>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
        <div class="page">
          <div class="page-inner">
            <Page :total="total" @on-change="pageChange"/>
          </div>
        </div>
      </div>
      <Modal
        v-model="addModal"
        title="添加联盟委员会成员"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入委员名称" v-model="name" /></div>
          <div><Input placeholder="请输入委员身份标志地址" v-model="address" /></div>
        </div>
        <div slot="footer">
          <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >添加</Button>
          <Button style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    var that = this
    var columns1 = [
      {
        title: '委员名称',
        key: 'name'
      },
      {
        title: '委员身份标志地址',
        key: 'address'
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          var row = p.row
          console.log(row)
          // var label = row.type == '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click () {
                // var index = p.index
                // that.data1.splice(index,1)
                that.del(row)
              }
            }
          }, '删除')
        }
      }
    ]
    var data1 = [
      { name: '金桥信息', address: '00630eslj9876sljflk...fafc1', time: '2020-1-1 12:00:00', status: '添加审核中' },
      { name: '泛融信息', address: '00630eslj9876sljflk...afea5', time: '2020-1-1 12:00:00', status: '删除审核中' },
      { name: '从法科技', address: '00630eslj9876sljflk...fafc1', time: '2020-1-1 12:00:00', status: '已添加', type: '1' }
    ]
    return {
      popup: 0,
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      data1,
      addLoading: false,
      total: 100,
      form: {
        name: '',
        address: '',
        status: ''
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
      var that = this
      let params = {

      }
      this.$http.post('/cmw/pbqml.do', params).then(res => {
        var data = res.data
        if (data.resCode == '1') {
          that.$Message.success('查询成功')
        } else {
          if (data.retMsg) {
            that.$Message.warning(data.retMsg)
          }
        }
      }).catch(err => {

      }).then(res => {

      })
    },
    // 添加功能
    ok () {
      let name = this.name.trim()
      let address = this.address.trim(t)
      if (!name) {
        this.$Message.error('请输入管理员名称')
        return
      }
      if (!address) {
        this.$Message.error('请输入管理员身份标识密钥')
        return
      }
      this.add()
    },
    add () {
      let address = this.address.trim()
      let name = this.name.trim()
      this.addLoading = true
      var data = {
        address, name
      }
      this.$http.post('', data).then(res => {
        res = res.data
      }).catch(err => {

      }).then(res => {
        this.popup = 1
        this.creatQrCode()
        this.cancel()
      })
    },
    cancel () {
      this.name = ''
      this.address = ''
      this.addModal = false
      this.addLoading = false
    },
    // 删除管理页面
    del (obj) {
      var that = this
      this.popup = 1,
      this.creatQrCode()
      // setTimeout(() => {
      //         // var index = p.index
      //         // that.data1.splice(index,1)
      // },100)
    },
    // 修改
    modify () {
      this.popup = 1,
      this.creatQrCode()
    },
    accrptFun () {

    },
    // 查询
    search () {
      var that = this
      let data = {
        address: this.form.address,
        status: this.form.status
      }
      this.$http.post('/cmw/pbqml.do', data).then(res => {
        res = res.data
        console.log(res)
        if (res.retCode == '1') {
          this.$Message.success('查询成功')
        } else {
          if (res.retMsg) {
            this.$Message.error(res.retMsg)
          }
        }
      }).catch(err => {
      })
    },
    // 分页
    pageChange (page) {
      console.log(page)
    },
    // 生成二维码
    creatQrCode () {
      let linkData = {
        // url:"http://47.116.17.247:9000/api/clt/pblin.do",
        // func:"Login",
        // data:{
        // }
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
  .approval {
    display: block;
    & > div {
      padding: 6px 0;
    }
  }
  .league-mem {
    padding: 16px 0 20px 0;
    span {
      color: #273D52;
      font-weight: 600;
    }
    .fr {
      // color: #6094FF;
      // background: #fff;
      // border: 1px solid #6094FF;
      // padding: 0 8px;
      // border-radius: 12px;
      // box-shadow: 0;
      // outline: none;
      // cursor: pointer;
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
