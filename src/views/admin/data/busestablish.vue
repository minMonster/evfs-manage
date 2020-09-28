<template>
  <div class="node-admission">
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;">< 退出</div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;font-size:18px;">业务域基础信息设置</span>
      </div>
      <div class="split-line"></div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;font-size:15px;">基本信息</span>
      </div>
      <div class="split-line"></div>
      <Row>
        <Col span="12">
        <div class="condition-item">
          <span class="condition-label">业务域名称：</span>
          <Input v-model="name" type="text" placeholder="请输入全链唯一的业务域名称"></Input>
        </div>
        </Col>
        <!--        <Col span="6">-->
        <!--        <div class="condition-item">-->
        <!--          <Button style="width: 100px;" type="primary">唯一性检测</Button>-->
        <!--        </div>-->
        <!--        </Col>-->
      </Row>
      <!--      <Row>-->
      <!--        <Col>-->
      <!--        <div class="condition-item">业务域ID{{BusinessDomain}}</div>-->
      <!--        </Col>-->
      <!--      </Row>-->
      <!--      <Row>-->
      <!--        <Col>-->
      <!--        <div class="condition-item">-->
      <!--          <span class="condition-label">备注：</span>-->
      <!--          <Input type="textarea" placeholder="概述业务域的作用，文字不能超过100字"></Input>-->
      <!--        </div>-->
      <!--        </Col>-->
      <!--      </Row>-->
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>数据存管域管理员决议审批规则</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup class="approval" v-model="rule">
        <Row>
          <Col span="6">
          <Radio label="0">任意一个成员签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="100">1/3成员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="200">2/3成员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="300">所有成员同时签批</Radio>
          </Col>
        </Row>
      </RadioGroup>
    </div>
    <div class="bg-white padding" style="margin-bottom:20px">
      <div class="league-mem">
        <span>数据存管域管理</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button type="primary" @click="add" class="fr">添加</Button>
      </div>
      <Table :columns="columns1" :data="data1"></Table>
      <!--      <div class="page">-->
      <!--        <div class="page-inner">-->
      <!--          <Page :total="total" @on-change="pageChange"/>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <!--    <div class="bg-white padding" style="margin-bottom:20px;">-->
    <!--      <div class="league-mem">-->
    <!--        <span>信息监管</span>-->
    <!--        <div class="split-line"></div>-->
    <!--      </div>-->
    <!--      <div style="margin-bottom: 20px;">-->
    <!--        <span>允许信息监管：</span>-->
    <!--        <Tooltip-->
    <!--          placement="top"-->
    <!--          max-width="600"-->
    <!--          transfer-->
    <!--        >-->
    <!--          <Icon type="ios-help-circle-outline" />-->
    <!--        </Tooltip>-->
    <!--        <RadioGroup style="margin: 0 20px;" v-model="switch1">-->
    <!--          <Radio label="1" style="margin-right: 40px;">允许</Radio>-->
    <!--          <Radio label="0">禁止(默认)</Radio>-->
    <!--        </RadioGroup>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="bg-white padding" style="margin-bottom:20px;">-->
    <!--      <div class="league-mem">-->
    <!--        <span>文件权限控制</span>-->
    <!--        <div class="split-line"></div>-->
    <!--      </div>-->
    <!--      <div style="margin-bottom: 20px;">-->
    <!--        <span>允许文件删除：</span>-->
    <!--        <Tooltip-->
    <!--          placement="top"-->
    <!--          max-width="600"-->
    <!--          transfer-->
    <!--        >-->
    <!--          <Icon type="ios-help-circle-outline" />-->
    <!--        </Tooltip>-->
    <!--        <RadioGroup style="margin: 0 20px;" v-model="switch2">-->
    <!--          <Radio label="1" style="margin-right: 40px;">允许</Radio>-->
    <!--          <Radio label="0">禁止(默认)</Radio>-->
    <!--        </RadioGroup>-->
    <!--      </div>-->
    <!--    </div>-->
    <Modal
      v-model="addModal"
      title="添加业务域管理员"
      @on-ok="ok"
      :loading="submitLoading"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input placeholder="请输入管理员姓名" v-model="form.name" /></div>
        <div><Input placeholder="请输入管理员身份标志地址" v-model="form.address" /></div>
      </div>
    </Modal>
    <div style="text-align:center;">
      <Button @click="establish" type="primary" class="fcenter">创建</Button>
    </div>
  </div>
</template>
<script>
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '管理员名称',
        key: 'name'
      },
      {
        title: '管理员身份标志地址',
        key: 'address'
      },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          // let row = p.row
          let label = '删除'
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, label)
        }
      }
    ]
    return {
      form: {
        name: '',
        address: ''
      },
      rule: '0',
      BusinessDomain: '',
      data1: [],
      name: '',
      submitLoading: false,
      columns1,
      total: 100,
      addModal: false,
      switch1: '0',
      switch2: '0'
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
    seraachBtn () {

    },
    add () {
      this.addModal = true
    },
    cancel () {},
    ok () {
      setTimeout(() => {
        this.submitLoading = false
        this.$nextTick(() => {
          this.submitLoading = true
        })
      }, 100)
      if (this.form.name === '' || this.form.address === '') {
        this.$Message.warning('请先完成表单！')
      } else {
        this.data1.push({ ...this.form })
        this.form.name = ''
        this.form.address = ''
        this.addModal = false
      }
    },
    async establish () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': '00', // 节点归属组织地址
        'orgName': '00', // 节点归属组织名称
        'domainId': sessionStorage.getItem('fbs_storage_id'), // 存管域ID
        'bizDomainInfo': {
          'name': this.name // 业务域名称
        },
        'members': this.data1.map(i => i.address), // 业务域管理员地址列表
        'op': 1, // 1添加；2移除
        'rule': this.rule // 业务域决议审批规则
      }
      let data = await cApi.pbgen({
        'method': 'DSDomainBizDomainApplyContractTxReq',
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
      window.history.go(-1)
    }
  }

}
</script>
<style lang="less" scoped>
.league-mem {
    padding: 12px 0 20px 0;
    span {
      color: #273D52;
      font-weight: 600;
    }

  }
</style>
