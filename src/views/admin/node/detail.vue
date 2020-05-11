
<template>
  <div>
    <div class="node-detail-header">
      <div class="clear chain-baseinfo">
        <h2 class="content-title">{{title}}
        </h2>
        <Row class="chain-header-content">
          <Col span="8">
            <div>服务器名称：从法存管域-节点4</div>
          </Col>
          <Col span="8">
            <div>服务器身份标识：00630e...bbac5</div>
          </Col>
        </Row>
        <Row class="chain-header-content">
          <Col span="8">
            <div>企业名称：从法科技</div>
          </Col>
          <Col span="8">
            <div>企业身份标识：00740f...ccbb1</div>
          </Col>
          <Col span="8">
            <div>创建时间： 2020-1-5 8:21:32</div>
          </Col>
        </Row>
        <Row class="chain-header-content" v-if="status > 2">
          <Col span="8">
            <div>隶属链ID：lskdjflkjsl…dfjsldkjfsd</div>
          </Col>
          <Col span="8">
            <div>隶属数据存管域名称：：00740f...ccbb1</div>
          </Col>
          <Col span="8">
            <div>隶属数据存管域ID： 200740f...ccbb9</div>
          </Col>
        </Row>
        <Row class="chain-header-content" v-else>
          <Col span="8" v-if="status == 1">
            <div>隶属链ID：--</div>
          </Col>
          <Col span="8" v-else>
            <div>隶属链ID：00740f...aaba8</div>
          </Col>
          <Col span="8">
            <div>隶属数据存管域名称：：--</div>
          </Col>
          <Col span="8">
            <div>隶属数据存管域ID： --</div>
          </Col>
        </Row>
      </div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <Row>
          <Col :span="3">
            <div>节点类型：</div>
          </Col>
          <Col :span="10">
            <RadioGroup class="supervision" v-model="nodeType">
              <Radio style="margin-right: 30px;" label="1">主节点</Radio>
              <Radio label="2">资源节点</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <div class="section-title"><span>链内隶属关系管理</span></div>
        <div class="node-detail-btn">
          <Button type="primary" v-if="status == '1'">加入链</Button>
          <Button type="primary" v-if="status >= 2">退出当前链</Button>
        </div>
        <div class="node-detail-tips" v-if="status == '1'">
          * 当前服务器将加入现有链的主节点网络。（主节点网络由不属于任何数据存管域的主节点自然形成。)
        </div>
        <div class="node-detail-tips" v-if="status > 1">
          * 从当前链实例中彻底退出。
        </div>
        <div class="node-detail-btn" v-if="status >= 3">
          <Button type="primary">数据存管域变更</Button>
        </div>
        <div class="node-detail-tips" v-if="status >= 3">
          * 申请加入当前链实例中的另一个数据存管域，一旦被批准，则节点服务器将从当前数据存管域准入列表中删除，且缓存的变更前的数据存管域中的文件碎片将会被清空。
        </div>
        <div class="node-detail-btn" v-if="status == 3">
          <Button type="primary">退出当前数据存管域</Button>
        </div>
        <div class="node-detail-tips" v-if="status == 3">
          * 申请退出当前数据存管域，一旦被批准，则节点服务器将从当前数据存管域准入列表中删除，且缓存的变更前的数据存管域中的文件碎片将会被清空。随后节点只作为专属主节点进行记账服务。
        </div>
        <div class="node-detail-btn" v-if="status <= 2">
          <Button type="primary">加入数据存管域</Button>
        </div>
        <div class="node-detail-tips" v-if="status <= 2">
          *当前服务器将不仅成为现有链的主节点，提供记账功能，同时也会参与特定数据存管域的数据存管服务。
        </div>
      </div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <div class="section-title"><span>服务器存储许可容量信息</span></div>
        <div class="node-detail-storage-info">
          <Row>
            <Col :span="8">
              <div class="value">{{all}} <span>TB</span></div>
              <p>文件存储总容量</p>
            </Col>
            <Col :span="8">
              <div class="value">{{available}} <span>TB</span></div>
              <p>可用文件存储容量</p>
            </Col>
            <Col :span="8">
              <div class="value">{{used}} <span>TB</span></div>
              <p>已用文件存储容量</p>
            </Col>
          </Row>
        </div>
      </div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <span style="display: inline-block;height: 32px;line-height: 32px;vertical-align: middle;">容量许可操作：</span>
        <Input :disabled="disabled" v-model="storage" style="width: 200px;margin: 0 20px;" />
        <div style="display: inline-block;position: relative;">
          <Select :disabled="disabled" v-model="unit" style="width: 100px;margin-right: 20px;">
            <Option value="1">MB</Option>
            <Option value="2">GB</Option>
            <Option value="3">TB</Option>
            <Option value="4">PB</Option>
          </Select>
        </div>
        <Button type="primary" style="width: 120px;">扩容申请</Button>
      </div>
      <div class="padding bg-white" style="margin-bottom: 20px;">
        <div class="section-title">
          <span>服务器管理员列表</span>
          <Button type="primary" style="float: right;"  @click="addModal = true">添加</Button>
        </div>
        <div>
          <Table :columns="columns1" :data="data1" />
        </div>
        <div class="page">
          <div class="page-inner">
            <Page :total="total" @on-change="pageChange"/>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="addModal"
      title="添加服务器管理员"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div style="margin-bottom: 20px;"><Input placeholder="请输入链管理员姓名" v-model="name" /></div>
        <div><Input placeholder="请输入链管理员身份标识" v-model="id" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: '管理员姓名',
        key: 'name'
      }, 
      {
        title: '管理员身份标识', 
        key: 'id'
      },
      {
        title: '操作',
        render(h,p) {
          var index = p.index
          return h('a', {
            on: {
              click() {
                that.data1.splice(index,1)
              }
            }
          }, '删除')
        }
      }
    ]
    var data1 = [
      { name: '张力', id: '008b0f...acfe5' },
      { name: '李志伟', id: '008b0f...abbc3' },
    ]
    return {
      title: '节点服务器管理',
      status: '',
      nodeType: '1',
      storage: '10000',
      unit: 'MB',
      total: 120,
      columns1,
      data1,
      disabled: true,
      addModal: false,
      name: '',
      id: '',
      // 服务器存储许可容量信息
      all: '0.00',
      available: '0.00',
      used: '0.00'
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
      this.initStatus()
    },
    initStatus() {
      var status = this.$route.query.status || ''
      this.status = status
      if (status == 4) {
        this.nodeType = '2'
      }
      if (status > 2) {
        this.disabled = false
      }
      if (status >=3 ) {
        this.all = '5.00'
        this.available = '1.21'
        this.used = '3.79'
      }
    },
    ok() {
      let name = this.name
      let id = this.id
      if (name && id) {
        this.data1.push({
          name, id
        })
      }
      this.addModal = false
    },
    cancel() {

    },
    pageChange(val) {

    }
  }
}
</script>

<style lang="less" scoped>
  .chain-header-content{
    color: #7D8B97;
    margin-bottom: 4px;
  }
  .node-detail-btn {
    padding: 10px 0;
    .ivu-btn {
      width: 150px;
    }
  }
  .node-detail-tips {
    color: #B1B0B0;
    padding: 10px;
  }
  .node-detail-storage-info {
    .value {
      color: #759BFA;
      font-size: 28px;
      span {
        margin-left: 8px;
      }
      padding: 4px 0;
    }
    p {
      color: #273D52;
      font-size: 13px;
    }
    .ivu-col {
      text-align: center;
    }
    & .ivu-col:not(:last-child) {
      border-right: 1px solid #EEEFF1;
    }
  }
</style>