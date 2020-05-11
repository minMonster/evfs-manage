<template>
  <div class="node-admission">
    <div class="padding bg-white mb20">
      <h2 class="content-title clear">节点准入许可管理 <Button type="primary" style="float: right;">待审核事项</Button></h2>
      <div class="clear chain-baseinfo">
        <Row>
          <Col span="8">
            <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
          </Col>
          <Col>
            <div>链实例创建时间：2020-1-5 12:00:00</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="bg-white padding mb20" style="color: #273D52;">
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
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>节点网络准入审批：开启</div>
          <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
        </div>
        <div class="audit-item-btns">
          <div class="btn-inner">
            <button class="refuse-btn">拒绝</button>
            <button class="agree-btn">同意</button>
          </div>
        </div>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div style="color: #273D52;">
        <div class="section-title"><span><span>准入节点服务器列表</span></span></div>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
      </div>
      <div>
        <!-- <Row>
          <Col span="5">
            <div class="condition-item">
              <span class="condition-label">隶属企业名称：</span>
              <Input type="text" placeholder="隶属企业名称"></Input>
            </div>
          </Col>
          <Col span="7">
            <div class="condition-item">
              <span class="condition-label">节点服务器身份标识：</span>
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
              <Button style="width: 100px;" type="primary">查询</Button>
            </div>
          </Col>
        </Row> -->
      </div>
      <div style="overflow: auto;">
        <div style="width: 1200px;">
          <Table :columns="columns1" :data="data1"></Table>
        </div>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <div class="bg-white padding mb20">
      <div>
        <div class="league-mem">
          <div class="section-title"><span>节点网络准入企业名单：</span></div>
          <!-- <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='功效说明：在“节点网络准入审批”选择“关闭”时，凡是隶属于节点网络准入企业名单中的节点服务器均可自动加入链的节点网络。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip> -->
          <button class="fr" @click="addModal = true"><Icon type="md-add-circle" />添加</button>
        </div>
        <div>
          <!-- <Row>
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
                <Button style="width: 100px;" type="primary">查询</Button>
              </div>
            </Col>
          </Row> -->
        </div>
        <Table :columns="columns2" :data="data2"></Table>
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
    <div class="bg-white padding mb20">
      <div>
        <div class="league-mem">
          <div class="section-title"><span>准入节点服务器列表【黑名单】：</span></div>
          <!-- <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip> -->
          <button class="fr" @click="addModal = true"><Icon type="md-add-circle" />添加</button>
        </div>
        <div>
          <!-- <Row>
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
                <Button style="width: 100px;" type="primary">查询</Button>
              </div>
            </Col>
          </Row> -->
        </div>
        <Table :columns="columns3" :data="data3"></Table>
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
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '节点类型',
        key: 'type'
      },
      {
        title: '数据存管域名称',
        key: 'storagename'
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '申请人',
        key: 'apply'
      },
      {
        title: '审核通过人',
        render(h,p) {
          return h('a', {}, '查看')
        }
      },
      {
        title:'操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              'margin-right': '10px'
            }
          },'同意')
          var disagree = h('a', {

          },'拒绝')
          var opts = [agree, disagree]
          return h('div', {
            on: {
              click() {
                var index = p.index
              }
            }
          },[opts])
        }
      }
    ]
    var columns2 = [
      {
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '申请人',
        key: 'apply'
      },
      {
        title: '审核通过人',
        render(h,p) {
          return h('a', {}, '查看')
        }
      },
      {
        title:'操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              'margin-right': '10px'
            }
          },'同意')
          var disagree = h('a', {

          },'拒绝')
          var opts = [agree, disagree]
          return h('div', {
            on: {
              click() {
                var index = p.index
              }
            }
          },[opts])
        }
      }
    ]
    var columns3 = [
      {
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'status'
      },
      {
        title: '申请人',
        key: 'apply'
      },
      {
        title: '审核通过人',
        render(h,p) {
          return h('a', {}, '查看')
        }
      },
      {
        title:'操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              'margin-right': '10px'
            }
          },'同意')
          var disagree = h('a', {

          },'拒绝')
          var opts = [agree, disagree]
          return h('div', {
            on: {
              click() {
                var index = p.index
              }
            }
          },[opts])
        }
      }
    ]
    var data1 = [
      {
        name: '从法科技',
        address: '00740f...aecf6',
        type: '资源节点',
        storagename: '从法存管域',
        time: '--',
        status: '添加审批中',
        apply: '王蓉',
      },
      {
        name: '从法科技',
        address: '00630e...cabc3',
        type: '主节点',
        storagename: '从法存管域',
        time: '2020-1-5 13:05:10',
        status: '删除审批中',
        apply: '张力',
      }
    ]
    var data2 = [
      {
        name: '从法科技',
        address: '00740f...aecf6',
        type: '资源节点',
        storagename: '从法存管域',
        time: '--',
        status: '添加审批中',
        apply: '黑子',
      },
      {
        name: '泛融科技',
        address: '00630e...cabc3',
        type: '主节点',
        storagename: '从法存管域',
        time: '2020-1-5 13:05:10',
        status: '删除审批中',
        apply: '王丽',
      }
    ]
    var data3 = [
      {
        name: '从法科技',
        address: '00740f...aecf6',
        type: '资源节点',
        storagename: '从法存管域',
        time: '--',
        status: '添加审批中',
        apply: '里斯',
      },
      {
        name: '从法科技',
        address: '00630e...cabc3',
        type: '主节点',
        storagename: '从法存管域',
        time: '2020-1-5 13:05:10',
        status: '删除审批中',
        apply: '张强',
      }
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      columns2,
      columns3,
      data1,
      data2,
      data3,
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