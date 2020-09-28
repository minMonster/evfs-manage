<template>
  <div class="node-admission">
    <chain-header title="节点准入许可管理" :btn="true"/>
    <!-- <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
              <span>节点网络准入审批</span>
              <Tooltip
                placement="top"
                max-width="600"
                transfer
                content='选项说明：* 开启节点服务器网络准入审批，任何节点服务器都需要节点网络审批人审批通过后才能加入当前链实例的节点网络。* 关闭节点服务器网络准入审批，则凡是在节点网络准入企业名单中企业的节点服务器将会自动批准加入节点网络。'>
                <Icon type="ios-help-circle-outline" />
              </Tooltip>
              <RadioGroup
                style="margin: 0 20px;"
                v-model="switch1">
                <Radio label="1">开启</Radio>
                <Radio label="0">关闭</Radio>
              </RadioGroup>
              <Button type="primary" style="float: right;">修改</Button>
            </div> -->
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">准入节点服务器列表</span>
        <Button type="primary" @click="confirmAdd" class="fr">添加</Button>
        <!-- <router-link to="/chain-nodeManage"><button type="primary">标签跳转</button></router-link> -->
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline"/>
        </Tooltip>
      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">隶属企业名称：</span>
          <Input type="text" v-model="form.name" placeholder="隶属企业名称"></Input>
        </div>
        </Col>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">服务器身份标识：</span>
          <Input type="text" v-model="form.address" placeholder="节点服务器身份标识"></Input>
        </div>
        </Col>
        <!--        <Col span="6">-->
        <!--        <div class="condition-item">-->
        <!--          <span class="condition-label">状态：</span>-->
        <!--          <Select  v-model="form.status">-->
        <!--            <Option value="0">全部</Option>-->
        <!--            <Option value="1">已添加</Option>-->
        <!--            <Option value="2">已删除</Option>-->
        <!--            <Option value="3">添加审核中</Option>-->
        <!--            <Option value="4">删除审核中</Option>-->
        <!--          </Select>-->
        <!--        </div>-->
        <!--        </Col>-->
        <Col span="6">
        <div class="condition-item">
          <Button style="width: 80px;" @click="search" type="primary">查询</Button>
        </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
      </div>
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
    <!-- <Modal
                v-model="addModal"
                title="添加联盟委员会成员"
                @on-ok="ok"
                @on-cancel="cancel">
                <div class="add-modal-body">
                  <div><Input placeholder="请输入委员名称" v-model="name" /></div>
                  <div><Input placeholder="请输入委员身份标志地址" v-model="address" /></div>
                </div>
              </Modal> -->
    <!-- <div>
              <div>
                <div class="league-mem">
                  <span>节点网络准入企业名单：</span>
                  <Tooltip
                    placement="top"
                    max-width="600"
                    transfer
                    content='功效说明：在“节点网络准入审批”选择“关闭”时，凡是隶属于节点网络准入企业名单中的节点服务器均可自动加入链的节点网络。'>
                    <Icon type="ios-help-circle-outline" />
                  </Tooltip>
                  <button class="fr" @click="addModal = true"><Icon type="md-add-circle" />添加</button>
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
                        <Button style="width: 80px;" type="primary">查询</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Table :columns="columns1" :data="data1"></Table>
              </div>
              <div class="page">
                <div class="page-inner">
                  <Page :total="total" @on-change="pageChange"/>
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
              </Modal>
            </div>
            <div>
              <div>
                <div class="league-mem">
                  <span>准入节点服务器列表【黑名单】：</span>
                  <Tooltip
                    placement="top"
                    max-width="600"
                    transfer
                    content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
                    <Icon type="ios-help-circle-outline" />
                  </Tooltip>
                  <button class="fr" @click="addModal = true"><Icon type="md-add-circle" />添加</button>
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
                        <Button style="width: 80px;" type="primary">查询</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Table :columns="columns1" :data="data1"></Table>
              </div>
              <div class="page">
                <div class="page-inner">
                  <Page :total="total" @on-change="pageChange"/>
                </div>
              </div>
            </div> -->
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
        title: '隶属企业名称',
        key: 'main_company_company_name'
      },
      {
        title: '服务器身份标识',
        key: 'node_server_id'
      },
      //   'node_type': 'accountnode' // 节点类型 accountnode:主节点-记账节点；syncnode:主节点-同步节点；resourcenode：资源节点
      {
        title: '节点类型',
        key: 'node_type'
      },
      {
        title: '数据存管域名称',
        key: 'main_storage_storage_name'
      },
      {
        title: '添加时间',
        key: 'join_time'
      },
      // {
      //   title: '状态',
      //   key: 'online_status'
      // },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          // let label = row.status == '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click () {
                // let index = p.index
                // that.data1.splice(index,1)]
                that.del(row)
              }
            }
          }, '删除')
        }
      }
    ]
    return {
      name: '',
      listLoading: false,
      address: '',
      addModal: false,
      columns,
      oldList: [],
      list: [
        // {
        //   'chainnode_id': '1', // 节点id——节点身份标识
        //   'main_system_system_id': '1',
        //   'chainnode_name': '打块节点名称',
        //   'main_system_system_name': '系统-组织名称',
        //   'online_status': '',
        //   'main_company_company_id': '1', // 隶属企业id
        //   'main_company_company_name': '企业名称', // 隶属企业名称
        //   'join_time': 1598345923000, // 添加时间
        //   'main_storage_storage_id': '1', // 数据存管域id
        //   'main_storage_storage_name': '数据存管域名称', // 数据存管域名称
        //   'node_license_amount': 0,
        //   'node_server_id': '1', // 服务器身份标识
        //   'node_type': 'accountnode' // 节点类型 accountnode:主节点-记账节点；syncnode:主节点-同步节点；resourcenode：资源节点
        // }
      ],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      form: {
        name: '',
        address: ''
        // status: ''
      }
      // switch1: '0',
      // popup: 0
    }
  },
  mounted () {
    this.init()
  },
  watch: {},
  computed: {},
  methods: {
    getList () {
      this.list = this.oldList.slice((this.page.current - 1) * this.page.size, this.page.size * this.page.current)
    },
    init () {
      let params = {}
      let storage_id = sessionStorage.getItem('fbs_storageId')
      if (storage_id) {
        params = { storage_id }
      }
      this.listLoading = true
      api.pbqan(params).then(res => {
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
        this.listLoading = false
      }).catch(err => {
        this.$Message.error(err.retMsg)
        this.listLoading = false
      })
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
    },
    // 删除管理页面
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': row.main_company_company_id || '00', // 节点归属组织地址
        'orgName': row.main_company_company_name || '00', // 节点归属组织名称
        'nodeAddr': row.chainnode_id, // 节点地址
        'amount': row.node_license_amount, // 许可证容量
        'nodeType': 2, // 1主节点;2节点网络准入;3前置节点
        'op': 2 // 1添加；2移除
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
                this.$Message.success('修改成功')
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
    confirmAdd () {
      this.$router.push('/chain-nodeManage')
    },
    ok () {
    },
    cancel () {
    },
    // 查询
    search () {
    }
  }
}
</script>

<style lang="less" scoped>
    #qrcode {
        position: fixed;
        border: 10px solid white;
        margin: 12px;
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
        opacity: 0.3; //透明度为70%
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
        padding: 14px 0;

        span {
            color: #273D52;
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
</style>
