<template>
  <div class="chain-configure">
    <h2 class="content-title clear">链全局参数</h2>
    <div class="clear chain-baseinfo">
      <Row>
        <Col span="12">
        <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd</div>
        </Col>
        <Col span="8">
        <div>链实例创建时间：2020-1-5 12:00:00</div>
        </Col>
      </Row>
    </div>
    <div class="split-line"></div>
    <div class="encryption-wrapper padding bg-white" style="margin-bottom: 20px;">
      <Row>
        <Col span="16">
        <div class="encryption-item">
          <span>前置节点数据传输加密：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明：外部系统调用的前置节点和任何一个链的节点服务器间使用加密传输，从而进一步加强网络传输过程中的数据安全性。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <RadioGroup v-model="encryption1" style="margin-left: 20px;">
            <Radio label="1">加密</Radio><Radio label="0">明文</Radio>
          </RadioGroup>
        </div>
        <div class="encryption-item">
          <span>节点间数据传输加密：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明：节点网络中的节点服务器之间使用加密传输，使得节点间的系统内数据交换安全性得到进一步加强。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <RadioGroup style="margin-left: 20px;" v-model="encryption2">
            <Radio label="1">加密</Radio><Radio label="0">明文</Radio>
          </RadioGroup>
        </div>
        </Col>
        <Col span="8">
        </Col>
      </Row>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>前置节点数据传输加密：加密</div>
          <div>节点服务器间数据传输加密：加密</div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      encryption1: '0',
      encryption2: '0'
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

    }
  }
}
</script>

<style lang="less" scoped>
  .encryption-item {
    padding-top: 10px;
  }
  .encryption-wrapper {

  }
</style>
