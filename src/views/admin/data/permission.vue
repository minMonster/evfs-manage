<template>
  <div class="data-permission">
    <data-header title="数据存管域运行许可证管理" :btn="true"/>
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">域内存储容量信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>5.00<span>TB</span></p>
              <div>文件存储总容量</div>
            </Col>
            <Col span="8">
              <p>1.22<span>TB</span></p>
              <div>可用文件存储容量</div>
            </Col>
            <Col span="8">
              <p>3.78 <span>TB</span></p>
              <div>已用文件存储容量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">域内节点运行许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>50</p>
              <div>节点运行许可总量</div>
            </Col>
            <Col span="8">
              <p>5</p>
              <div>已发放节点许可数量</div>
            </Col>
            <Col span="8">
              <p>45</p>
              <div>未发放节点许可数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;">
      <div class="section-title"><span>域内容量许可操作</span></div>
      <div>
        <Input v-model="input1" style="display: inline-block; width: 200px;"/>
        <Select v-model="select1" style="display: inline-block; width: 200px;margin: 0 20px;">
          <Option value="MB">MB</Option>
          <Option value="GB">GB</Option>
          <Option value="TB">TB</Option>
          <Option value="PB">PB</Option>
        </Select>
        <Button type="primary">扩容申请</Button>
        <div class="data-tips">
          * 从链实例的文件存储总容量中申请本数据存管域可保存文件总容量。即链实例的文件存储总容量中可用容量会因分配给数据存管域而随之变少。
        </div>
      </div>
    </div>
    <div class="bg-white padding">
      <div class="section-title"><span>域内节点运行许可操作</span></div>
      <div>
        <Input v-model="input2" style="display: inline-block; width: 200px;"/>
        <span style="margin: 0 20px;">个</span>
        <Button type="primary">扩容申请</Button>
        <div class="data-tips">
          * 从链实例的节点运行许可证总量中申请本数据存管域可独占的节点运行许可证总量。即链实例的节点运行许可证总量中可用数量会因分配给数据存管域而随之变少。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '10000',
      input2: '10',
      select1: 'MB'
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