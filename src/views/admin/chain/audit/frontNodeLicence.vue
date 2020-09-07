<template>
  <div class="node-admission">
    <h2 class="content-title clear">
      <span>前置节点访问许可管理</span>
    </h2>
    <!-- <div class="padding bg-white mb20">
      <div style="margin-bottom: 0;color: #273D52;">
        <div class="section-title"><span>前置节点匿名调用访问：</span></div>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="选项说明：* 如果允许匿名调用访问，则任何前置节点无需任何授权，均可与链建立访问通道，向链上提交或访问链上数据，除了黑名单中的前置节点；* 如果禁止匿名调用访问，则只有白名单中的前置节点才可与链建立访问通道，向链上提交或访问链上数据。"
          <Icon type="ios-help-circle-outline" />
        </Tooltip> 
        <RadioGroup style="margin: 0 20px;" v-model="switch1">
          <Radio label="1">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>前置节点匿名调用访问：开启</div>
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
    </div>-->
   <div class="padding bg-white mb20">
      <div style="margin-bottom: 20px;color: #273D52;">
        <span>
          前置节点调用访问
          <b>【黑名单】</b>：
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <!-- <div>
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
      </div>  -->
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
    <!-- <div class="bg-white padding mb20">
      <div style="margin-bottom: 20px;color: #273D52;">
        <span>
          前置节点调用访问
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
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    var that = this;
    var columns1 = [
      {
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "前置节点身份标识",
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
          var row = p.row
          return h('a', {
              on:{
              click() {
                that.adds(row)
              }
            }
          }, '查看')
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
    return {
      acceptLimit: "1/3",
      name: "",
      address: "",
      addModal: false,
      columns1,
      data1,
      // data2,
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
    //查看
    adds(obj){
          this.$Modal.confirm({
             title: '已审核人列表',
             content:'name：'+obj.name +'<br> address：'+obj.address+' <br>time：'+obj.time+'',
             oktext:"关闭"
         })
    },
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