<template>
  <div class="node-admission">
    <h2 class="content-title clear">
      运行证许可管理
    </h2>
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 0px;color: #273D52;">
        <b>链内节点运行许可信息</b>
      </div>
      <div class="info-item">
        <Row>
          <Col span="8">
            节点运行许可最大数量：<span>50</span>
          </Col>
          <Col span="8">
            已发放节点许可数量：<span>50</span>
          </Col>
          <Col span="8">
            未发放节点许可数量：<span>50</span>
          </Col>
        </Row>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div class="section-title"><span>链内文件存储容量许可分布信息</span></div>
      <div>
        <Table :columns="columns1" :data="data1" />
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="100" />
        </div>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
        <b>链内文件存储容量许可信息</b>
      </div>
      <div class="info-item">
        <Row>
          <Col span="8">
            文件存储最大许可容量：<span>100TB</span>
          </Col>
          <Col span="8">
            已发放文件存储许可容量：<span>50TB</span>
          </Col>
          <Col span="8">
            未发文件存储许可容量：<span>50TB</span>
          </Col>
        </Row>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div class="section-title"><span>运行许可证分布信息</span></div>
      <div>
        <Table :columns="columns2" :data="data2" />
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
        title: "数据存管域名称",
        key: "name"
      },
      {
        title: "数据存管域唯一标识",
        key: "id"
      },
      {
        title: "节点运行许可数量",
        key: "time"
      },
      {
        title: "现有许可存储容量",
        key: "capacity"
      },
      {
        title: '申请新增存储容量',
        key: 'applycapacity'
      },
      {
        title: '申请状态',
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
        name: '蜂巢链存证域',
        id: '00740f...aeea2',
        capacity: '0.00 TB',
        applycapacity: '5.00 TB',
        status: '申请审核中',
        apply: '张力'
      }
    ]
    var columns2 = [
      {
        title: "数据存管域名称",
        key: "name"
      },
      {
        title: "数据存管域唯一标识",
        key: "id"
      },
      {
        title: "现有许可证数量",
        key: "num"
      },
      {
        title: '申请新增许可证数量',
        key: 'applynum'
      },
      {
        title: '申请状态',
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
    var data2 = [
      {
        name: '蜂巢链存证域',
        id: '00740f...aeea2',
        num: '0',
        applynum: '10',
        status: '申请审核中',
        apply: '王安'
      }
    ]
    return {
      acceptLimit: "1/3",
      name: "",
      address: "",
      addModal: false,
      columns1,
      columns2,
      data1,
      data2,
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