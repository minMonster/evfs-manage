<template>
  <div class="data-business">
    <data-header title="数据存管域内业务域授权管理" :btn="true" />
    <!-- <div class="padding bg-white" style="margin-bottom: 20px;">
      <div class="section-title">
        <span>业务域创建审批</span>
      </div>
      <div>
        <Row>
          <Col :span="6">
            业务域创建审批：
            <Icon type="ios-help-circle-outline" />-->
    <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
    <!--  </Col>-->
    <!-- 文件保存副本数量 -->
    <!--  <Col :span="10">
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
    <!-- <div class="bg-white padding" style="margin-bottom: 20px;color: #373737;">
      <span>数据存管域创建审批：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup
        style="margin: 0 20px;"
        v-model="switch1">
        <Radio label="1">开启</Radio>
        <Radio label="0">关闭</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;">修改</Button>
    </div>-->
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">业务域列表</span>
        <Button type="primary" @click="addEstablish" class="fr">创建业务域</Button>
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
          <span class="condition-label">业务域名称：</span>
          <Input type="text" v-model="form.name" placeholder="请填写"></Input>
        </div>
        </Col>
        <Col span="8">
        <div class="condition-item">
          <span class="condition-label">业务域唯一标识：</span>
          <Input type="text" v-model="form.address" placeholder="请填写"></Input>
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
    </div>-->
  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '业务域名称',
        key: 'biz_name'
      },
      {
        title: '业务域唯一标识',
        key: 'biz_id'
      },
      {
        title: '创建时间',
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
        width: 120,
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          // let status = row.status || ''
          // let opt = h('a', {
          //
          // })
          let opt2 = h('a', {
            on: {
              click () {
                // let index = p.index
                // let { mainActive, showDataSubmenu, showBusinessSubmenu } = that.$route.query
                let { showBusinessSubmenu } = that.$route.query
                sessionStorage.setItem('fbs_biz_id', row.biz_id)
                let formatBiz = {
                  ...row,
                  biz_id_format: that.formatId(row.biz_id),
                  main_storage_storage_id_format: that.formatId(row.main_storage_storage_id),
                  join_time_format: row.join_time ? that.$moment.unix(row.join_time / 1000).format('YYYY-MM-DD HH:mm:ss') : '--'
                }
                sessionStorage.setItem('fbs_biz', JSON.stringify(formatBiz))
                that.$router.push({
                  name: 'business-detail',
                  query: {
                    showDataSubmenu: '1',
                    showBusinessSubmenu,
                    mainActive: 'business',
                    activeIndex: '2',
                    subActive: 'business-detail'
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
    // let columns2 = [
    //   {
    //     title: '企业名称',
    //     key: 'name'
    //   },
    //   {
    //     title: '企业身份标识',
    //     key: 'address'
    //   },
    //   {
    //     title: '添加时间',
    //     key: 'time'
    //   },
    //   {
    //     title: '状态',
    //     key: 'statuslabel'
    //   },
    //   {
    //     title: '操作',
    //     width: 120,
    //     render (h, p) {
    //       let row = p.row || {}
    //       let label = row.status === '1' ? '删除' : '撤销'
    //       label = row.status === '0' ? '--' : label
    //       return h('a', {
    //         on: {
    //           click () {
    //             let index = p.index
    //             that.data1.splice(index, 1)
    //           }
    //         }
    //       }, label)
    //     }
    //   }
    // ]
    return {
      acceptLimit: '1/3',
      myswitch: '1',
      addModal: false,
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
        address: ''
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
    formatId (id) {
      if (!id) {
        return '--'
      }
      let stringlength = id.length
      let fistStr = id.substring(0, 6)
      let lastStr = id.substring(stringlength - 6, stringlength)
      return fistStr + '.....' + lastStr
    },
    init () {
      this.listLoading = true
      api.pbqsb({}).then(res => {
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
    ok () {

    },
    cancel () {

    },
    search () {},
    addEstablish () {
      this.$router.push('/data-busestablish')
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
