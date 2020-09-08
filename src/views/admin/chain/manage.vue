<template>
  <div class="node-admission">
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;">< 退出</div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;font-size:18px;">主节点服务器授权申请</span>
      </div>
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
        <Row>
          <Col span="14">
          <div class="condition-item">
            <span class="condition-label">节点服务器名称：</span>
            <Input type="text" v-model="name"  placeholder="请输入要申请链实例准入的节点服务器名称"></Input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col span="14">
          <div class="condition-item">
            <span class="condition-label">节点服务器身份标识：</span>
            <Input type="text" v-model="address" placeholder="请输入要申请链实例准入的节点身份标识"></Input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col span="14">
          <div class="condition-item">
            <span class="condition-label">隶属企业名称：</span>
            <Input type="text" v-model="nameAddr" placeholder="请输入节点隶属的企业名称"></Input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col span="14">
          <div class="condition-item">
            <span class="condition-label">隶属企业身份标识：</span>
            <Input type="text" v-model="addressAddr" placeholder="请输入节点隶属的企业身份标识"></Input>
          </div>
          </Col>
        </Row>
        <Row>
          <Col span="4">
          <div class="condition-item">
            <Button style="width: 80px;" @clcik="seraachBtn" type="primary">申请</Button>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: '',
      name: '',
      addressAddr: '',
      nameAddr: ''
    }
  },
  mounted () {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {

    },
    seraachBtn () {

    },
    back () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
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
