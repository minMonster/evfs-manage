<template>
  <div class="chain-configure">
    <chain-header title="链全局参数" :btn="true"/>
    <div class="encryption-wrapper padding bg-white">
      <Row>
        <Col span="24">
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
          <Button type="primary" style="width: 100px; float: right;margin-top: 4px;">修改</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      encryption1: '0',
      encryption2: '0'
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

    }
  }
}
</script>

<style lang="less" scoped>
  .encryption-item {
    display: inline-block;
    padding: 10px 0 0 0;
    margin-right: 40px;
  }
  .encryption-wrapper {
    
  }
</style>