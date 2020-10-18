<template>
  <div class="alliance">
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
        <RadioGroup :loading="listLoading" class="approval" v-model="rule" @on-change="accrptFun">
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
          <span>联盟委员会成员</span>
          <Button type="primary" @click="addModal = true" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <!--            <Col span="6">-->
            <!--            <div class="condition-item">-->
            <!--              <span class="condition-label">委员名称：</span>-->
            <!--              <Input type="text" v-model="form.name" placeholder="委员名称"></Input>-->
            <!--            </div>-->
            <!--            </Col>-->
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">委员身份标识：</span>
              <Input type="text" v-model="form.address" placeholder="委员身份标识"></Input>
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
        <div class="page" style="position: relative">
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
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '委员名称',
        key: 'member_name'
      },
      {
        title: '委员身份标志地址',
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
      // {
      //   title: '状态',
      //   key: 'status'
      // },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          // let row = p.row
          // let label = row.type == '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click () {
                // let index = p.index
                // that.data1.splice(index,1)
                that.del(p.row)
              }
            }
          }, '删除')
        }
      }
    ]

    return {
      rule: null,
      name: '',
      address: '',
      addModal: false,
      addLoading: false,
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
      list: [],
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
  },
  watch: {
  },
  computed: {
  },
  methods: {
    async init () {
      this.listLoading = true
      let dataId = await api.pbqgi({
        rule: 'chaincommittee'
      }).then(res => {
        return res.dataId
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
      api.pbqml({
        'groupId': '1', // 组织类型 枚举 "1": 联盟委员会,"2": 链管理员,"3": 数据存管域,"4": 业务域
        'address': sessionStorage.getItem('fbs_address'), // 登陆人的地址
        'dataId': dataId // /fbs/cmw/pbqgi.do 查询出来的结果 dataId 的值
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
        this.rule = res.rule
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    // 添加功能
    ok () {
      // let name = this.name.trim()
      let address = this.address.trim()
      // if (!name) {
      //   this.$Message.error('请输入管理员名称')
      //   return
      // }
      if (!address) {
        this.$Message.error('请输入管理员身份标识密钥')
        return
      }
      this.add()
    },
    async add () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'member': this.address.trim(), // 变更账户钱包地址
        'op': 1, // 1增加；2移除
        'opType': 1 // 1委员会变更操作；2链管理员变更操作
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeMemberApplyContractTxReq',
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
      this.name = ''
      this.address = ''
      this.addModal = false
      this.addLoading = false
    },
    // 删除管理页面
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        member: row.member_address,
        op: 2,
        opType: 1
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeMemberApplyContractTxReq',
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
              if (res.status === 3) {
                this.$Message.success('修改成功')
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
    // 修改
    async modify () {
      console.log('modify')
      if (!this.rule) {
        this.$Message.warning('请选择联盟委员决议审批规则')
        return
      }
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        rule: this.rule
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeRuleApplyContractTxReq',
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
              if (res.status === 3) {
                this.$Message.success('修改成功')
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
    accrptFun () {

    },
    // 查询
    search () {
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
