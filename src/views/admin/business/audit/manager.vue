<template>
  <div class="alliance">
    <h2 class="content-title clear">
      业务域管理员管理
    </h2>
    <div>
      <div class="bg-white padding" v-if="rule" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>业务域管理员决议审批规则：</span>
        </div>
        <RadioGroup class="approval" v-model="rule">
          <Row>
            <Col span="6">
            <Radio :label="0">任意一个业务域管理员签批</Radio>
            </Col>
            <Col span="6">
            <Radio :label="100">1/3业务域管理员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio :label="200">2/3业务域管理员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio :label="300">所有业务域管理员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>业务域管理员决议审批规则：{{ruleJson[old_rule]}}</div>
            <div>申请人： {{applicant_name}}<span>审核通过人： <a @click="showRule">查看</a></span></div>
          </div>
          <div class="audit-item-btns">
            <div class="btn-inner">
              <button class="refuse-btn" @click="refuseRule">拒绝</button>
              <button class="agree-btn" @click="agreeRule">同意</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>业务域管理员列表</span>
        </div>
        <!--        <div>-->
        <!--          <Row>-->
        <!--            <Col span="6">-->
        <!--            <div class="condition-item">-->
        <!--              <span class="condition-label">管理员名称：</span>-->
        <!--              <Input type="text" v-model="form.name" placeholder="管理员名称"></Input>-->
        <!--            </div>-->
        <!--            </Col>-->
        <!--            <Col span="6">-->
        <!--            <div class="condition-item">-->
        <!--              <span class="condition-label">管理员身份标识：</span>-->
        <!--              <Input type="text" v-model="form.address" placeholder="管理员身份标识"></Input>-->
        <!--            </div>-->
        <!--            </Col>-->
        <!--            &lt;!&ndash;            <Col span="6">&ndash;&gt;-->
        <!--            &lt;!&ndash;            <div class="condition-item">&ndash;&gt;-->
        <!--            &lt;!&ndash;              <span class="condition-label">状态：</span>&ndash;&gt;-->
        <!--            &lt;!&ndash;              <Select v-model="form.status">&ndash;&gt;-->
        <!--            &lt;!&ndash;                <Option value="0">全部</Option>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <Option value="1">已添加</Option>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <Option value="2">已删除</Option>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <Option value="3">添加审核中</Option>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <Option value="4">删除审核中</Option>&ndash;&gt;-->
        <!--            &lt;!&ndash;              </Select>&ndash;&gt;-->
        <!--            &lt;!&ndash;            </div>&ndash;&gt;-->
        <!--            &lt;!&ndash;            </Col>&ndash;&gt;-->
        <!--            <Col span="6">-->
        <!--            <div class="condition-item">-->
        <!--              <Button style="width: 80px;" type="primary">查询</Button>-->
        <!--            </div>-->
        <!--            </Col>-->
        <!--          </Row>-->
        <!--        </div>-->
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
          <div><Input placeholder="请输入管理员名称" v-model="form.name" /></div>
          <div><Input placeholder="请输入管理员身份标志地址" v-model="form.address" /></div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import * as api from '../api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '管理员名称',
        key: 'name'
      },
      {
        title: '管理员身份标志地址',
        key: 'address'
      },
      {
        title: '添加时间',
        key: 'time',
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
        title: '状态',
        key: 'status',
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.status) {
          case '1':
            label = '待审批'
            break
          case '2':
            label = '已同意'
            break
          case '3':
            label = '审核拒绝'
            break
          }
          return h('span', label)
        }
      },
      {
        title: '申请人',
        key: 'applicant_name'
      },
      {
        title: '审核通过人',
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.$QueryApprovedDialog.show(row)
              }
            }
          }, '查看')
        }
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row
          if (row.status !== '1' || row.user_status !== '1') {
            return h('span', '--')
          }
          let agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
                that.agree(row)
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                that.refuse(row)
                // let index = p.index
              }
            }
          }, '拒绝')
          return h('div', {
            'class': 'opt-btns'
          }, [
            agree, refuse
          ])
        }
      }
    ]
    let ruleJson = {
      0: '任意一个业务域管理员签批',
      100: '1/3业务域管理员同时签批',
      200: '2/3业务域管理员同时签批',
      300: '所有业务域管理员同时签批'
    }
    return {
      addModal: false,
      ruleJson,
      rule: '',
      old_rule: '',
      applicant_name: '',
      listLoading: false,
      columns,
      oldList: [
        // {
        //   'member_id': 1,
        //   'member_address': '1',
        //   'main_committeegroup_group_id': '1',
        //   'join_time': 1598345923000,
        //   'member_name': '名称'
        // }
      ],
      review_rule: '',
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
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
    showRule () {
      let row = {
        review_id: this.review_rule
      }
      this.$QueryApprovedDialog.show(row)
    },
    init () {
      api.pbqrc({
        reviewType: 'biz_manage_rule',
        'menu': 'biz', // 身份角色：审批人员类型[chaincommittee 联盟委员会,chaingroup 链管理员,storage 数据存管域,biz 业务域]
        'address': sessionStorage.getItem('fbs_address')
      }).then(res => {
        if (res.rows) {
          let data = res.rows[0]
          console.log(data)
          this.rule = data.rule || ''
          this.old_rule = data.old_rule || ''
          this.review_rule = data.review_id
        } else {
          this.rule = false
        }
      })
      this.listLoading = true
      api.pbqrc({
        reviewType: 'biz_manage',
        'menu': 'biz',
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        if (res.rows) {
          this.oldList = res.rows
          this.page.total = this.oldList.length
          this.getList()
        }
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    async agree (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'),
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainMemberAgreeContractTxReq',
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
    async refuse (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 存管域ID
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainDisagreeContractTxReq',
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
    async agreeRule () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 存管域ID
        reqId: this.review_rule
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainRuleAgreeContractTxReq',
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
    },
    async refuseRule () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 存管域ID
        reqId: this.review_rule
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainDisagreeContractTxReq',
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
    },
    ok () {

    },
    cancel () {

    },
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
    .fr {
      color: #6094FF;
      background: #fff;
      border: 1px solid #6094FF;
      padding: 0 8px;
      border-radius: 12px;
      box-shadow: none;
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
