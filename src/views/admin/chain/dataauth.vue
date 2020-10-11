<template>
  <div class="node-admission">
    <chain-header title="数据存管域授权管理" :btn="true" />
    <!--    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">-->
    <!--      <span>数据存管域创建审批：</span>-->
    <!--      <Tooltip-->
    <!--        placement="top"-->
    <!--        max-width="600"-->
    <!--        transfer>-->
    <!--        <Icon type="ios-help-circle-outline" />-->
    <!--      </Tooltip>-->
    <!--      <RadioGroup-->
    <!--        style="margin: 0 20px;"-->
    <!--        v-model="switch1">-->
    <!--        <Radio label="1">开启</Radio>-->
    <!--        <Radio label="0">关闭</Radio>-->
    <!--      </RadioGroup>-->
    <!--      <Button type="primary" style="float: right;">修改</Button>-->
    <!--    </div>-->
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">数据存管域列表</span>
        <Button type="primary" @click="addSee" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <Row>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">数据存管域名称：</span>
          <Input type="text" v-model="form.name" placeholder="数据存管域名称"></Input>
        </div>
        </Col>
        <Col span="8">
        <div class="condition-item">
          <span class="condition-label">数据存管域唯一标识：</span>
          <Input type="text" v-model="form.address" placeholder="数据存管域唯一标识"></Input>
        </div>
        </Col>
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

    <!-- <div class="padding bg-white clear">
      <div style="margin-bottom: 10px;color: #273D52;" class="clear">
        <span style="color: #273D52;font-weight: 600;">创建许可企业列表</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button type="primary" style="float: right;">添加</Button>
      </div>
      <Row>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">企业名称：</span>
            <Input type="text" placeholder="企业名称"></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">企业身份标识：</span>
            <Input type="text" placeholder="企业身份标识"></Input>
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
      <div>
        <Table :columns="columns2" :data="data2"></Table>
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
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    // {
    //   'storage_id': '1', // 数据存管域id--唯一标识
    //   'storage_name': '数据存管域1', // 数据存管域名称
    //   'rule': 100, // 规则
    //   'node_operating_licenses': '10', // 节点运行许可总量
    //   'capacity_license': '', // 存储容量许可总量
    //   'create_org_address': '1', // 创建者归属组织地址
    //   'create_org_name': '1', // 创建者归属组织名称
    //   'join_time': '' // 加入时间
    // }
    let columns = [
      {
        title: '数据存管域名称',
        key: 'storage_name'
      },
      {
        title: '数据存管域唯一标识',
        key: 'storage_id'
      },
      {
        title: '创建时间',
        key: 'join_time'
      },
      // {
      //   title: '状态',
      //   key: 'statuslabel'
      // },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          // let status = row.status || ''
          // let label = row.status == '2' ? '删除' : '撤销'
          // label = row.status == '0' ? '--' : label
          // let opt = h('a', {
          // })
          let opt2 = h('a', {
            on: {
              click () {
                // let index = p.index
                // let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                // let { showBusinessSubmenu } = that.$route.query
                sessionStorage.setItem('fbs_storage_id', row.storage_id)
                that.$router.push({
                  name: 'data-detail',
                  query: {
                    storage_id: row.storage_id
                  }
                })
              }
            }
          }, '详情')
          let opts = [opt2]
          return h('div', {}, opts)
        }
      }
    ]

    return {
      form: {
        name: '',
        address: '',
        status: ''
      },
      listLoading: false,
      columns,
      oldList: [
        // {
        //   'storage_id': '1', // 数据存管域id--唯一标识
        //   'storage_name': '数据存管域1', // 数据存管域名称
        //   'rule': 100, // 规则
        //   'node_operating_licenses': '10', // 节点运行许可总量
        //   'capacity_license': '', // 存储容量许可总量
        //   'create_org_address': '1', // 创建者归属组织地址
        //   'create_org_name': '1', // 创建者归属组织名称
        //   'join_time': '' // 加入时间
        // }
      ],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      }
      // switch1: '0'
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
      api.pbqsl().then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    ok () {

    },
    cancel () {

    },
    search () {

    },
    addSee () {
      this.$router.push('/chain-chdetial')
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
