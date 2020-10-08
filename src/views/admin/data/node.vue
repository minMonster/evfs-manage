<template>
  <div>
    <data-header title="数据存管域节点准入许可管理" :btn="true" />
    <!-- <div class="padding bg-white" style="margin-bottom: 20px;">
     <div class="section-title">
        <span>数据存管域节点准入审批</span>
      </div>
      <div>
        <Row>
          <Col :span="6">
            数据存管域节点准入审批
            <Icon type="ios-help-circle-outline" />-->
    <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
    <!-- </Col> -->
    <!-- 文件保存副本数量 -->
    <!-- <Col :span="10">
            <RadioGroup class="approval" v-model="myswitch" style="width: 50%;">
              <Row style="margin-right: 20px;">
                <Col span="12">
                  <Radio label="1">开启</Radio>
                </Col>
                <Col span="12">
                  <Radio label="0">关闭</Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
          <Col :span="8">
            <div class="clear">
              <Button class="fr" style="width: 80px;" type="primary">修改</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div> -->
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">准入节点服务器列表</span>
        <Button type="primary" @click="confirmAdd" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
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
          <span class="condition-label">服务器身份标识：</span>
          <Input type="text"  v-model="form.address" placeholder="节点服务器身份标识"></Input>
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
    let columns = [
      {
        title: '隶属企业名称',
        key: 'main_company_company_name'
      },
      {
        title: '服务器身份标识',
        key: 'node_server_id'
      },
      {
        title: '节点类型',
        key: 'node_type'
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
        render (h, p) {
          let row = p.row || {}
          let label = '删除'
          // let status = row.status
          // if (status === '1') {
          //   label = '--'
          // } else if (status === '2') {
          //   label = '删除'
          // } else if (status === '3') {
          //   label = '撤销'
          // }
          return h('a', {
            on: {
              click () {
                that.remove(row)
              }
            }
          }, label)
        }
      }
    ]
    return {
      myswitch: '1',
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
    init () {
      this.listLoading = true
      let storage_id = sessionStorage.getItem('fbs_storage_id')
      api.pbqan({
        storage_id,
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
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
    async remove (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_storage_id'), // 存管域ID
        'nodeAddress': row.chainnode_id, // 节点地址
        'nodeInfo': {
          'nodeName': '', // 节点名称
          'orgName': '', // 节点归属组织名称
          'orgAddress': '', // 节点归属组织地址
          'dSName': '' // 存管域名称
        },
        'url': '', // 提供给该存管域文件上传下载的url,如：http://124.70.164.10:8000/fbs
        'amount': '1', // 许可证数量，固定传 1
        'op': 2 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'DSDomainDSNodeApplyContractTxReq',
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
                this.$Message.success('删除成功')
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
    // 分页
    pageChange (page) {
      this.page.current = page
      this.getList()
    },
    confirmAdd () {
      this.$router.push('/data-nodeAddAdmin')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
