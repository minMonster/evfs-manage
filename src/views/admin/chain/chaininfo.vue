<template>
  <div class="chain-info">
    <chain-header title="链实例详情" />
    <div class="clear">
      <div class="chain-info-right clear">
        <div class="chain-content">
          <div class="sub-content-title">链上联盟成员信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="12">
                <p>2</p>
                <div>联盟委员数量</div>
              </Col>
              <Col span="12">
                <p>2</p>
                <div>加盟企业成员数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内接入前置节点信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="12">
                <p>2</p>
                <div>接入前置节点数量</div>
              </Col>
              <Col span="12">
                <p>2</p>
                <div>前置隶属企业数量</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div class="chain-info-left">
        <div class="chain-content">
          <div class="sub-content-title">链内数据存管域信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>3</p>
                <div>数据存管域数量</div>
              </Col>
              <Col span="8">
                <p>1</p>
                <div>运行数据存管域数量</div>
              </Col>
              <Col span="8">
                <p>2</p>
                <div>停运数据存管域数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内业务域信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>3</p>
                <div>业务域数量</div>
              </Col>
              <Col span="8">
                <p>1</p>
                <div>运行业务域数量</div>
              </Col>
              <Col span="8">
                <p>2</p>
                <div>停运业务域数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内主节点服务器信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>3</p>
                <div>主节点服务器数量</div>
              </Col>
              <Col span="8">
                <p>3</p>
                <div>在线主节点服务器数量</div>
              </Col>
              <Col span="8">
                <p>0</p>
                <div>离线主节点服务器数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内资源节点服务器信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>1</p>
                <div>资源节点服务器数量</div>
              </Col>
              <Col span="8">
                <p>0</p>
                <div>在线资源节点服务器数量</div>
              </Col>
              <Col span="8">
                <p>1</p>
                <div>离线资源节点服务器数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内节点运行许可信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>100</p>
                <div>节点运行许可总数量</div>
              </Col>
              <Col span="8">
                <p>50</p>
                <div>已发放节点许可数量</div>
              </Col>
              <Col span="8">
                <p>50</p>
                <div>未发放节点许可数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内文件存储容量许可信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="8">
                <p>
                  50.00
                  <span>TB</span>
                </p>
                <div>文件存储许可总容量</div>
              </Col>
              <Col span="8">
                <p>
                  5.00
                  <span>TB</span>
                </p>
                <div>已发放文件存储许可容量</div>
              </Col>
              <Col span="8">
                <p>
                  45.00
                  <span>TB</span>
                </p>
                <div>未发文件存储许可容量</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {},
  methods: {
    init() {}
  }
};
</script>

<style lang="less" scoped>
</style>