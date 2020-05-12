<template>
  <div class="node-admission">
    <chain-header title="节点准入许可管理" :btn="true"/>
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
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
    </div>
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">准入节点服务器列表</span>
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
            <Input type="text" placeholder="隶属企业名称"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">服务器身份标识：</span>
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
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
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
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '节点类型',
        key: 'nodetype'
      },
      {
        title: '数据存管域名称',
        key: 'databasename'
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
      {name: '从法科技', address: '00630e...fafc1', nodetype:'主节点', databasename: '——', time: '2020-1-1 12:00:00', statuslabel: '授权审核中', status: '1' },
      {name: '从法科技', address: '00630e...cacc2', nodetype:'资源节点', databasename: '从法存管域', time: '2020-1-1 12:00:00', statuslabel: '删除审核中', status: '1' },
      {name: '从法科技', address: '00630e...cabc3', nodetype:'主节点', databasename: '从法存管域', time: '2020-1-1 12:00:00', statuslabel: '已授权', status: '2' },
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      data1,
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
</style>