<template>
  <div class="node-admission">
    <div class="chain-adminstrator-in">
      <h2 class="content-title clear">
        文件存储域管理
        <Button type="primary" style="float: right;">待审核事项</Button>
      </h2>
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
      <div class="split-line"></div>
      <div>
        <div style="margin-bottom: 10px;">
          <span style="color: rgba(95, 145, 177, 1);">链内存储容量许可信息</span>
        </div>
        <div class="info-item" style="margin-bottom: 30px;">
          <Row>
            <Col span="8">
              文件存储最大许可容量：<span>50</span>
            </Col>
            <Col span="8">
              已发放文件存储许可容量：<span>45</span>
            </Col>
            <Col span="8">
              未发文件存储许可容量：<span>10</span>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div style="margin-bottom: 10px;">
          <span style="color: rgba(95, 145, 177, 1);">存储容量许可分布信息：</span>
        </div>
        
        <!-- <div class="adminstrator-mem clear">
          <span>链管理员列表：</span>
          <div class="fr">
            <button @click="addModal = true" class="add-mem"><Icon type="md-add-circle" />添加</button>
          </div>
        </div>-->
        <div>
          <Row>
            <Col span="6">
              <div class="condition-item">
                <span class="condition-label">文件存储域名称：</span>
                <Input type="text" placeholder="文件存储域名称"></Input>
              </div>
            </Col>
            <Col span="8">
              <div class="condition-item">
                <span class="condition-label">文件存储域唯一标识：</span>
                <Input type="text" placeholder="文件存储域唯一标识"></Input>
              </div>
            </Col>
            <Col span="4">
              <div class="condition-item">
                <Button style="width: 100px;" type="primary">查询</Button>
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
      </div>
    </div>
    <Modal v-model="addModal" title="添加链管理员" @on-ok="ok" @on-cancel="cancel">
      <div class="add-modal-body">
        <div>
          <Input placeholder="请输入链管理员名称" v-model="name" />
        </div>
        <div>
          <Input placeholder="请输入链管理员身份标识公钥" v-model="address" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    var that = this;
    var columns1 = [
      {
        title: "文件存储域名称",
        key: "name"
      },
      {
        title: "文件存储域唯一标识",
        key: "hash"
      },
      {
        title: "现有许可存储容量",
        key: "storage"
      },
      {
        title: '申请新增存储容量',
        key: 'new'
      },
      {
        title: "申请状态",
        key: "optstatus"
      }
    ];
    var data1 = [];
    return {
      acceptLimit: "0",
      columns1,
      data1,
      addModal: false,
      name: "",
      address: "",
      pageno: 1,
      total: 100
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    next() {
      this.confirm();
      // this.$emit('next', 'step4.3')
    },
    confirm() {
      var acceptLimit = this.acceptLimit;
      var data = this.data1;
      var name = [];
      var address = [];
      if (data.length) {
        data.forEach((item, index) => {
          name.push(item.name);
          address.push(item.address);
        });
      }
      var param = {
        name,
        address,
        acceptLimit
      };
      this.$http
        .post("/fbs/man/pbsai.do", param)
        .then(res => {
          res = res.data;
          if (res.retCode == "1") {
            this.$emit("next", "step4.4");
          }
        })
        .catch(err => {
          // this.$Message.error('')
        })
        .then(() => {});
    },
    ok() {
      var name = this.name.trim();
      var address = this.address.trim();
      if (!name) {
        this.$Message.error("请输入委员名称");
        return;
      }
      if (!address) {
        this.$Message.error("请输入委员身份地址");
        return;
      }
      var data = {
        name,
        address
      };
      this.data1.push(data);
      this.name = "";
      this.address = "";
    },
    cancel() {
      this.name = "";
      this.address = "";
    },
    pageChange(num) {
      this.pageno = num;
    }
  }
};
</script>

<style lang="less">
.chain-adminstrator-in {
  h3 {
    font-size: 24px;
  }
  h4 {
    color: #16cef1;
    padding: 18px 0;
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
.adminstrator-mem {
  padding: 30px 0 0 0;
  color: #273D52;
}
.next-step {
  width: 500px;
  margin: 30px 0;
}
.add-mem {
  background: transparent;
  height: 26px;
  padding: 0 10px;
  outline: none;
  box-shadow: 0;
  cursor: pointer;
  text-align: center;
  color: #6094ff;
  border-radius: 12px;
  border: 1px solid #6094ff;
}
</style>