<template>
  <div class="node-admission">
    <business-header title="业务系统访问许可管理" :btn="true"/>
    <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>业务域匿名调用访问：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
      >
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;margin-top: -5px; ">修改</Button>
    </div>
    <div class="bg-white padding">
      <div style="margin-bottom: 25px;color: #273D52;">
        <span>
          <b>业务域调用访问</b>
          <b>【白名单】</b>：
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button type="primary" style="float: right;">添加</Button>
      </div>
      <Row>
        <Col span="5">
          <div class="condition-item">
            <span class="condition-label">业务系统名称：</span>
            <Input type="text" placeholder="业务系统名称"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">业务系统身份标识：</span>
            <Input type="text" placeholder="业务系统身份标识"></Input>
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
    var that = this;
    var columns1 = [
      {
        title: "业务系统名称",
        key: "name"
      },
      {
        title: "业务系统身份标识",
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
          var label = '--'
          var status = row.status
          if (status == '2') {
            label = '删除'
          } 
          if (status == '3') {
            label = '撤销'
          }
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
      {name: '上海公证系统', address: '00740f...aaba8',  time: '2020-1-5 10:45:25', statuslabel: '已添加', status: '2' },
      {name: '四川公证系统', address: '00da0c...cfbe5',  time: '--', statuslabel: '删除审核中', status: '1' },
      {name: '四川公证系统', address: '00da0c...cfbe5',  time: '--', statuslabel: '添加审核中', status: '1' },
      {name: '北京公证系统', address: '00740f...dadaf', time: '2020-1-1 12:00:00', statuslabel: '已授权', status: '3' },
    ]
    return {
      acceptLimit: "1/3",
      name: "",
      address: "",
      addModal: false,
      columns1,
      data1,
      total: 100,
      form: {
        name: "",
        address: ""
      },
      switch1: "0"
    };
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {},
  methods: {
    init() {},
    ok() {},
    cancel() {},
    pageChange(page) {
      console.log(page);
    }
  }
};
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
    color: #6094ff;
    background: #fff;
    border: 1px solid #6094ff;
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