<template>
  <div class="node-admission">
    <chain-header title="前置节点访问许可管理" :btn="true" />
    <!-- <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>前置节点匿名调用访问：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
        content="选项说明：* 如果允许匿名调用访问，则任何前置节点无需任何授权，均可与链建立访问通道，向链上提交或访问链上数据，除了黑名单中的前置节点；* 如果禁止匿名调用访问，则只有白名单中的前置节点才可与链建立访问通道，向链上提交或访问链上数据。"
      >
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;margin-top: -5px; ">修改</Button>
    </div> -->
    <div class="bg-white padding">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>前置节点调用访问：</b>
          <!-- <b>【白名单】</b>： -->
        </span>
        <Button type="primary" @click="confirmAdd" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
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
          <span class="condition-label">前置节点身份标识：</span>
          <Input type="text" v-model="form.address" placeholder="前置节点身份标识"></Input>
        </div>
        </Col>
        <!--        <Col span="6">-->
        <!--        <div class="condition-item">-->
        <!--          <span class="condition-label">状态：</span>-->
        <!--          <Select v-model="form.status" >-->
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
      <div v-show="popup">
        <div id="qrcode"></div>
        <div class="over"></div>
      </div>
    </div>
    <!-- <div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          全链调用访问
          <b>【黑名单】</b>：
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“禁止”时，允许特定的前置节点与链建立访问通道，只有被允许的前置节点才可以向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <div>
        <Row>
          <Col span="5">
            <div class="condition-item">
              <span class="condition-label">前置节点名称：</span>
              <Input type="text" placeholder="隶属企业名称"></Input>
            </div>
          </Col>
          <Col span="7">
            <div class="condition-item">
              <span class="condition-label">前置节点身份标识：</span>
              <Input type="text" placeholder="节点服务器身份标识"></Input>
            </div>
          </Col>
          <Col span="6">
            <div class="condition-item">
              <span class="condition-label">状态：</span>
              <Select value="0">
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
        <Page :total="total" @on-change="pageChange" />
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
      // {
      //   'clientnode_id': '1', // 前置节点身份标识
      //   'main_system_system_id': '1',
      //   'chainnode_name': '前置节点名称',
      //   'main_system_system_name': '组织名称',
      //   'main_company_company_id': '1', // 隶属企业名称id
      //   'main_company_company_name': '企业名称', // 隶属企业名称
      //   'node_server_id': 'nodeserver1',
      //   'node_license_amount': 0,
      //   'join_time': 1599704154000
      // },
      {
        title: '隶属企业名称',
        key: 'main_company_company_name'
      },
      {
        title: '前置节点身份标识',
        key: 'clientnode_id'
      },
      {
        title: '添加时间',
        key: 'join_time'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          // let label = row.status == '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click () {
                // let index = p.index
                // that.data1.splice(index,1)
                that.del(row)
              }
            }
          }, '删除')
        }
      }
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns,
      oldList: [
        {
          'clientnode_id': '1', // 前置节点身份标识
          'main_system_system_id': '1',
          'chainnode_name': '前置节点名称',
          'main_system_system_name': '组织名称',
          'main_company_company_id': '1', // 隶属企业名称id
          'main_company_company_name': '企业名称', // 隶属企业名称
          'node_server_id': 'nodeserver1',
          'node_license_amount': 0,
          'join_time': 1599704154000
        }
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
      },
      switch1: '0',
      popup: 0,
      listLoading: false
    }
  },
  mounted () {
    this.init()
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      this.listLoading = true
      api.pbqcn().then(res => {
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
    // 添加列表
    confirmAdd () {
      // this.$Message.warning('待确认需求')
      this.$router.push('/chain-frontNodeAdd')
    },
    ok () {},
    // 删除信息
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'orgAddress': row.main_company_company_id, // 节点归属组织地址
        'orgName': row.main_company_company_name, // 节点归属组织名称
        'nodeAddr': row.clientnode_id, // 节点地址
        'nodeInfo': { // 节点信息
          'name': '', // 节点名称
          'cpu': '', // CPU数量
          'memory': '', // 内存大小
          'disk': '', // 磁盘大小
          'bandwidth': '' // 带宽大小
        },
        'amount': row.node_license_amount, // 许可证容量
        'nodeType': 3, // 1主节点;2节点网络准入;3前置节点
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
    cancel () {},
    search () {},
    // 分页
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
    getList () {
      this.list = this.oldList.slice((this.page.current - 1) * this.page.size, this.page.size * this.page.current)
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
  padding: 14px 0;
  span {
    color: #273D52;
  }
  .fr {
    color: #6094ff;
    background: #fff;
    border: 1px solid #6094ff;
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
