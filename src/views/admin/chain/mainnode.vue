<template>
  <div class="node-admission">
    <chain-header title="链内主节点授权管理" :btn="true" />
    <!-- <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <span>主节点授权审批：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup
        style="margin: 0 20px;"
        v-model="switch1">
        <Radio label="1">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;">修改</Button>
    </div> -->
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">主节点服务器列表</span>
        <Button type="primary"  @click="confirmAdd" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>

      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">隶属企业名称：</span>
          <Input type="text" v-model="form.name" placeholder="隶属企业名称" />
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
        <!--          <Select v-model="form.status" value="0">-->
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
  </div>
</template>

<script>
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
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
    //   'node_type': 'accountnode' // 节点类型 accountnode:主节点-记账节点；syncnode:主节点-同步节点
    // }
    let columns = [
      {
        title: '隶属企业名称',
        key: 'main_company_company_name'
      },
      {
        title: '服务器身份标识',
        key: 'chainnode_id'
      },
      {
        title: '节点类型',
        key: 'node_type',
        width: 120,
        render (h, p) {
          let row = p.row
          if (!row.node_type) {
            return h('span', '--')
          } else {
            return h('span', row.node_type)
          }
        }
      },
      {
        title: '数据存管域名称',
        key: 'main_storage_storage_name',
        render (h, p) {
          let row = p.row
          if (!row.main_storage_storage_name) {
            return h('span', '--')
          } else {
            return h('span', row.main_storage_storage_name)
          }
        }
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
      //   key: 'statuslabel'
      // },
      {
        title: '操作',
        'width': 120,
        render (h, p) {
          let row = p.row
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
                that.del(row)
              }
            }
          }, '删除')
          return h('div', {
            'class': 'opt-btns'
          }, [
            agree
          ])
        }
      }
    ]
    return {
      listLoading: false,
      columns,
      oldList: [
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
        //   'node_type': 'accountnode' // 节点类型 accountnode:主节点-记账节点；syncnode:主节点-同步节点
        // }
      ],
      list: [],
      addLoading: false,
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      form: {
        name: '',
        address: '',
        status: ''
      },
      switch1: '0'
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
      api.pbqmn().then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': row.main_company_company_id, // 节点归属组织地址
        'orgName': row.main_company_company_name, // 节点归属组织名称
        'nodeAddr': row.chainnode_id, // 节点地址
        'nodeInfo': { // 节点信息
          'name': '司法部', // 节点名称
          'cpu': '2', // CPU数量
          'memory': '64G', // 内存大小
          'disk': '1000G', // 磁盘大小
          'bandwidth': '1000M' // 带宽大小
        },
        'amount': '1', // 许可证容量
        'nodeType': 1, // 1主节点;2节点网络准入;3前置节点
        'op': 2 // 1添加 2移除
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
                this.$Message.success('删除成功')
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
    search () {

    },
    confirmAdd () {
      this.$router.push('/chain-manage')
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
