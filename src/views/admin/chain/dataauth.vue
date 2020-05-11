<template>
  <div class="node-admission">
    <chain-header title="数据存管域授权管理" :btn="true" />
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
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
    </div>
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">数据存管域列表</span>
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
            <Input type="text" placeholder="数据存管域名称"></Input>
          </div>
        </Col>
        <Col span="8">
          <div class="condition-item">
            <span class="condition-label">数据存管域唯一标识：</span>
            <Input type="text" placeholder="数据存管域唯一标识"></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <Button style="width: 100px;" type="primary">查询</Button>
          </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <div class="padding bg-white clear">
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
            <Button style="width: 100px;" type="primary">查询</Button>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "数据存管域名称",
        key: "name"
      },
      {
        title: "数据存管域唯一标识",
        key: "address"
      },
      {
        title: '创建时间',
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
          var label = row.status == '2' ? '删除' : '撤销'
          label = row.status == '0' ? '--' : label
          return h('a', {
            on: {
              click() {
                var index = p.index
                that.data1.splice(index,1)
              }
            }
          }, label)
        }
      }
    ]
    var data1 = [
      {name: '蜂巢存管域', address: '00740f...cbfda', time: '--', statuslabel: '创建审核中', status: '0' },
      {name: '泛融存管域', address: '00740f...bdca2', time: '2020-1-5 15:34:57', statuslabel: '删除审核中', status: '1' },
      {name: '从法存管域', address: '00740f...facb7', time: '2020-1-5 10:21:32', statuslabel: '已创建', status: '2' },
    ]
    var columns2 = [
      {
        title: "企业名称",
        key: "name"
      },
      {
        title: "企业身份标识",
        key: "address"
      },
      {
        title: '添加时间',
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
          var label = row.status == '2' ? '删除' : '撤销'
          label = row.status == '0' ? '--' : label
          return h('a', {
            on: {
              click() {
                var index = p.index
                that.data1.splice(index,1)
              }
            }
          }, label)
        }
      }
    ]
    var data2 = [
      {name: '从法科技', address: '00740f...ccbb1', time: '2020-1-5 10:05:51', statuslabel: '已添加', status: '2' },
      {name: '金桥信息', address: '00740f...feac3', time: '', statuslabel: '添加审核中', status: '2' },
      {name: '泛融科技', address: '00740f...bdae4', time: '2020-1-5 10:15:31', statuslabel: '删除审核中', status: '1' },
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      columns2,
      data1,
      data2,
      total: 100,
      form: {
        name: '',
        address: ''
      },
      switch1: '0'
    }
  },
  mounted() {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init() {

    },
    ok() {

    },
    cancel() {

    },
    pageChange(page) {
      console.log(page)
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
      box-shadow: 0;
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