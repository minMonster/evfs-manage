<template>
  <div class="data-manager">
    <business-header title="业务域管理员管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>业务域管理员决议审批规则</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <Button type="primary" style="float: right;" @click="edit">修改</Button>
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
      <div class="bg-white padding">
        <div class="league-mem">
          <span>业务域管理员列表</span>
          <Button @click="add" type="primary" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员姓名：</span>
              <Input type="text" v-model="name" placeholder="管理员姓名"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员身份标识：</span>
              <Input type="text" v-model="address" placeholder="管理员身份标识"></Input>
            </div>
            </Col>
            <!--            <Col span="6">-->
            <!--            <div class="condition-item">-->
            <!--              <span class="condition-label">状态：</span>-->
            <!--              <Select v-model="form.status">-->
            <!--                <Option value="0">全部</Option>-->
            <!--                <Option value="1">已添加</Option>-->
            <!--                <Option value="2">已删除</Option>-->
            <!--                <Option value="3">添加审核中</Option>-->
            <!--                <Option value="4">删除审核中</Option>-->
            <!--              </Select>-->
            <!--            </div>-->
            <!--            </Col>-->
            <Col span="6">
            <div class="condition-item">
              <Button style="width: 80px;" @click="search" type="primary">查询</Button>
            </div>
            </Col>
          </Row>
        </div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
        <div class="page">
          <div class="page-inner">
            <Page
              show-sizer
              :total="page.total"
              :current="page.current"
              @on-change="pageChange"
              @on-page-size-change="sizeChange"/>
          </div>
        </div>
      </div>
      <Modal
        v-model="addModal"
        title="添加管理"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入管理员姓名" v-model="form.name" /></div>
          <div><Input placeholder="请输入管理员身份标志地址" v-model="form.address" /></div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '管理员姓名',
        key: 'member_name'
      },
      {
        title: '管理员身份标志地址',
        key: 'member_address'
      },
      {
        title: '添加时间',
        key: 'join_time',
        render (h, p) {
          let row = p.row
          if (!row.join_time) {
            return h('span', '--')
          } else {
            return h('span', that.$moment.unix(row.join_time / 1000).format('YYYY-MM-DD HH:mm:ss'))
          }
        }
      },
      {
        title: '操作',
        'width': 120,
        render (h, p) {
          let row = p.row
          let del = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
                that.del(row)
              }
            }
          }, '删除')
          return h('div', {
            'class': 'opt-btns'
          }, [
            del
          ])
        }
      }
    ]
    return {
      rule: '0',
      addModal: false,
      listLoading: false,
      columns,
      oldList: [],
      list: [],
      name: '',
      address: '',
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      form: {
        name: '',
        address: '',
        status: ''
      }
    }
  },
  mounted () {
    this.init()
    // 审批规则
    this.approvalRules()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {
      this.listLoading = true
      api.pbqml({
        groupId: '4',
        dataId: sessionStorage.getItem('fbs_biz_id'),
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        if (res.rows) {
          this.oldList = res.rows
          this.page.total = this.oldList.length
          this.rule = res.rule
          this.getList()
        }
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    approvalRules () {
    },
    add () {
      this.addModal = true
    },
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 业务域ID
        'member': row.member_address, // 变更成员地址
        'op': 2 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainMemberApplyContractTxReq',
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
    async edit () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 业务域ID
        'rule': this.rule // 业务域决议审批规则
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainRuleApplyContractTxReq',
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
    async ok () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 业务域ID
        'member': this.form.address, // 变更成员地址
        'op': 1 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainMemberApplyContractTxReq',
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
    cancel () {
      this.form.address = ''
      this.form.name = ''
    },
    search () {},
    getList () {
      this.list = this.oldList.slice((this.page.current - 1) * this.page.size, this.page.size * this.page.current)
    },
    sizeChange (size) {
      this.page.current = 1
      this.page.size = size
      this.getList()
    },
    // 分页
    pageChange (page) {
      this.page.current = page
      this.getList()
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
    // .fr {
    //   color: #6094FF;
    //   background: #fff;
    //   border: 1px solid #6094FF;
    //   padding: 0 8px;
    //   border-radius: 12px;
    //   box-shadow: none;
    //   outline: none;
    //   cursor: pointer;
    // }
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
