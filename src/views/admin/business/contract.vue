<template>
  <div class="business-detail">
    <business-header title="业务域内合约治理" :btn="true" />
    <div class="bg-white padding">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>合约列表</b>
        </span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
        <Button type="primary" style="float: right;">添加合约</Button>
      </div>
      <Row>
        <Col span="5">
          <div class="condition-item">
            <span class="condition-label">合约名称：</span>
            <Input type="text" placeholder="合约名称"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">合约链上唯一标识：</span>
            <Input type="text" placeholder="合约链上唯一标识："></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">状态：</span>
            <Select value="0">
              <Option value="0">全部</Option>
              <Option value="1">冻结</Option>
              <Option value="2">正常</Option>
              <Option value="2">冻结审核中</Option>
              <Option value="2">解冻审核中</Option>
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
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "合约名称",
        key: "name"
      },
      {
        title: "合约链上唯一标识",
        key: "id"
      },
      {
        title: '发布时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        title:'操作',
        render(h,p) {
          var row = p.row || {}
          var label = '--'
          var status = row.status
          if (status == '1') {
            label = '冻结'
          } 
          if(status == '2') {
            label = '解冻'
          }
          if (status > 2) {
            label = '撤销'
          }
          return h('a', {
            on: {
              click() {
                var index = p.index
                if (status == '2') {
                  
                }
              }
            }
          }, label)
        }
      }
    ]
    var data1 = [
      {name: '电子卷宗管理', id: '00fb0a...eac32', time: '--',statuslabel: '发布审核中', status: '0' },
      {name: '银行贷款信息', id: '00fb0a...dfa86', time: '2020-4-20 13:10:09',  statuslabel: '正常', status: '1' },
      {name: '公证书管理', id: '00fb0a...adee2', time: '2020-4-20 15:22:24', statuslabel: '冻结', status: '2' },
      {name: '执行管理', id: '00fb0a...ffe76', time: '2020-4-20 15:22:24', statuslabel: '解冻审核中', status: '4' },
      {name: '仲裁管理', id: '00fb0a...efcca', time: '2020-4-20 14:21:05',statuslabel: '冻结审核中',status: '3'}
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1, data1
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {

    },
    pageChange(val) {
      
    }
  }
}
</script>

<style>

</style>