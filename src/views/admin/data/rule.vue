<template>
  <div class="rule">
    <data-header title="数据存管域固化存储规则管理" btn="true"/>
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div class="section-title">
        <span>文件高可用</span>
      </div>
      <div>
        <Row>
          <Col :span="8">
            文件碎片化数量：
            <Icon type="ios-help-circle-outline" />
            <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
            <Select style="display: inline-block; width: 100px;margin-left: 20px;vertical-align: middle;" v-model="select1">
              <Option v-for="item in 10" :value="item" :key="item">{{item}}</Option>
            </Select>
          </Col>
          <!-- 文件保存副本数量 -->
          <Col :span="8">
            文件保存副本数量：
            <Icon type="ios-help-circle-outline" />
            <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
            <Select style="display: inline-block; width: 100px;margin-left: 20px;vertical-align: middle;" v-model="select2">
              <Option v-for="item in 5" :value="item" :key="item">{{item}}</Option>
            </Select>
          </Col>
          <Col :span="8">
            <div class="clear">
              <Button class="fr" style="width: 100px;" type="primary">修改</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="padding bg-white">
      <div class="section-title">
        <span>文件灾备</span>
      </div>
      <div>
        <Row>
          <Col :span="7">
            文件副本在不同site分散保存：
            <Icon type="ios-help-circle-outline" />
            <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
          </Col>
          <!-- 文件保存副本数量 -->
          <Col :span="9">
            <RadioGroup class="approval" v-model="myswitch" style="width: 50%;">
              <Row style="margin-right: 20px;">
                <Col span="12">
                  <Radio label="1">开启</Radio>
                </Col>
                <Col span="12">
                  <Radio label="0">关闭</Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
          <Col :span="8">
            <div class="clear">
              <Button class="fr" style="width: 100px;" type="primary">修改</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select1: 5,
      select2: 3,
      myswitch: '0'
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

</style>