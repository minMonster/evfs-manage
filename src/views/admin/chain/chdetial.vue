<template>
  <div class="alliance">
    <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;">&lt; 退出</div>
    <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
      <span>基本信息</span>
      <div>
        <Row>
          <Col span="12">
          <div class="condition-item">
            <span class="condition-label">数据存管域名称：</span>
            <Input type="text" v-model="name" placeholder="请输入全链唯一的数据存管域名称"></Input>
          </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>数据存管域管理员决议审批规则：</span>
        <!-- <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要联盟委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip> -->
        <!-- <Button type="primary" style="float: right;">修改</Button> -->
      </div>
      <RadioGroup class="approval" v-model="rule">
        <Row>
          <Col span="6">
          <Radio label="0">任意一个联盟委员签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="100">1/3联盟委员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="200">2/3联盟委员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="300">所有联盟委员同时签批</Radio>
          </Col>
        </Row>
      </RadioGroup>
    </div>
    <div class="bg-white padding">
      <div class="league-mem">
        <span>数据存管域管理列表</span>
        <Button type="primary" @click="add" class="fr">添加</Button>
      </div>
      <!-- <div>
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
                <Button style="width: 80px;" type="primary">查询</Button>
              </div>
            </Col>
          </Row>
        </div>-->
      <Table :columns="columns1" :data="data1"></Table>
      <div class="set-from-item" style="margin-top:20px;text-align:center;">
        <Button size="large" type="primary" :loading="loading" @click="next">下一步</Button>
      </div>
    </div>
    <Modal
      v-model="addModal"
      title="添加联盟委员会成员"
      @on-ok="ok"
      :loading="submitLoading"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input placeholder="请输入委员名称" v-model="form.name" /></div>
        <div><Input placeholder="请输入委员身份标志地址" v-model="form.address" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
// import * as api from './api'
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
        title: '管理员身份标识',
        key: 'address'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.del(row)
              }
            }
          }, '删除')
        }
      }
    ]
    return {
      rule: '0',
      name: '',
      address: '',
      submitLoading: true,
      addModal: false,
      columns1,
      data1: [],
      total: 100,
      loading: false,
      form: {
        name: '',
        address: ''
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
    add () {
      this.addModal = true
    },
    init () {
    },
    ok () {
      setTimeout(() => {
        this.submitLoading = false
        this.$nextTick(() => {
          this.submitLoading = true
        })
      }, 100)
      console.log(this.form)
      if (this.form.name === '' || this.form.address === '') {
        this.$Message.warning('请先完成表单！')
      } else {
        this.data1.push({ ...this.form })
        this.form.name = ''
        this.form.address = ''
        this.addModal = false
      }
    },
    cancel () {},
    back () {
      window.history.go(-1)
    },
    async next () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': '', // 节点归属组织地址
        'orgName': '', // 节点归属组织名称
        'name': this.name, // 存管域名称
        'members': this.data1.map(i => i.address), // 存管域管理员钱包地址列表
        'amount': '1', // 许可证数量，固定传 1
        'rule': this.rule // 审批规则，下同
      }
      let data = await cApi.pbgen({
        'method': 'DSDomainApplyContractTxReq',
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
                this.$Message.success('添加成功')
                this.$router.go(-1)
                this.addModal = false
                this.init()
                return true
              } else {
                return false
              }
            }).catch(() => {
              return false
            })
          })
      }
      // this.$router.push('/chain-nextChdetial')
    },
    pageChange (page) {
      console.log(page)
    }
  }
}
</script>

<style lang="less" scoped>
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
      // box-shadow: none;
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
