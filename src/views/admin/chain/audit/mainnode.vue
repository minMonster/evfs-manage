<template>
  <div class="node-admission">
    <h2 class="content-title clear">
      链内主节点授权管理
    </h2>
    <!-- <div class="padding bg-white mb20">
      <Row>
        <Col :span="6">
          <div>主节点授权审批：</div>
        </Col>
        <Col :span="10">
          <RadioGroup class="approval" v-model="switch1">
            <Radio label="on" style="margin-right: 30px;">开启</Radio>
            <Radio label="off">关闭</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>主节点授权审批：关闭</div>
          <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
        </div>
        <div class="audit-item-btns">
          <div class="btn-inner">
            <button class="refuse-btn">拒绝</button>
            <button class="agree-btn">同意</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 0px;color: #273D52;">
        <b>主节点服务器列表</b>
      </div>
      <div>
        <Table :columns="columns1" :data="data1" />
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="100" />
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
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '节点类型',
        key: 'nodeType'
      },
      {
        title: '数据存管域名称',
        key: 'storagename'
      },
      {
        title: "创建时间",
        key: "time"
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
               click(){
                  that.adds(row)
               }
             }
          }, '查看')
        }
      },
      {
        title: '操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              'margin-right': '10px'
            }
          }, '同意')
          var disagree = h('a', {}, '拒绝')
          var opts = [agree, disagree]
          return h('div', {}, opts)
        }
      }
    ];
    var data1 = [
      {
        name: '从法科技',
        address: '00740f...aeea2',
        nodeType: '主节点',
        time: '--',
        storagename: '从法存管域',
        status: '申请审核中',
        apply: '张力'
      },
      // 收回授权审核中
      {
        name: '从法科技',
        address: '00740f...acbea3',
        nodeType: '主节点',
        storagename: '从法存管域',
        time: '2020-1-5 13:12:40',
        status: '收回授权审核中',
        apply: '张力'
      }
    ]
    return {
      switch1: 'on',
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
    };
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {},
  methods: {
    init() {},
    adds(obj){
          this.$Modal.confirm({
             title: '已审核人列表',
             content:'name：'+obj.name +'<br> address：'+obj.address+' <br>time：'+obj.time+'',
             oktext:"关闭"
         })
    },
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
.info-item {
  margin-top: 30px;
  .ivu-col {
    span {
      color:rgba(24, 68, 176, 1);
      font-weight: 500;
    }
  }
}
.tip {
  margin: 4px 0 20px 0;
  color: rgba(162, 162, 162, 1);
  font-size: 12px;
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