<template>
  <div class="business-detail">
    <chain-header title="数据存管域详情"/>
    <div class="business-detail-item">
      <div class="section-title"><span>数据存管域信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>数据存管域名称：司法业务域</div>
          </Col>
          <Col :span="8">
          <div>数据存管域唯一标识：00740f...ffbc3</div>
          </Col>
          <Col :span="8">
          <div>创建时间：2020-1-5 10:21:32</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>创建企业名称：从法科技</div>
          </Col>
          <Col :span="8">
          <div>创建企业身份标识：00740f...ccbb1</div>
          </Col>
        </Row>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>域内存储容量信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>最大存储容量：5.00 TB</div>
          </Col>
          <Col :span="8">
          <div>可用存储容量：2.00 TB</div>
          </Col>
          <Col :span="8">
          <div>已用存储容量：3.00 TB</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>域内节点信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>联合构建企业成员数量：3</div>
          </Col>
          <Col :span="8">
          <div>域内主节点数量：3</div>
          </Col>
          <Col :span="8">
          <div>在线主节点数量：3</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>离线主节点数量：0</div>
          </Col>
          <Col :span="8">
          <div>域内资源节点数量：1</div>
          </Col>
          <Col :span="8">
          <div>在线资源节点数量：0</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>离线资源主节点数量：1</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="tips">
      * 数据存管域联合构建企业分别将各自隶属的节点服务器硬件资源联合在一起，共同维护一个数据和文件上链固化存储空间，便于企业间的数据和文件共享。
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>域内业务域信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>业务域数量：2</div>
          </Col>
          <Col :span="8">
          <div>隶属企业数量：2</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>域内固存规则信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>文件碎片化数量：5</div>
          </Col>
          <Col :span="8">
          <div>文件保存副本数量：3</div>
          </Col>
          <Col :span="8">
          <div>文件副本在不同site分散保存：生效</div>
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

    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init () {

    }
  }
}
</script>

<style lang="less" scoped>
  .business-detail-item {
    color: #7D8B97;
    line-height: 2em;
    .section-title {
      margin: 30px 0 10px 0;
    }
  }
  .tips {
    color: #B5C7D7;
    font-size: 13px;
    padding: 10px;
    border-radius: 4px;
    border:1px dashed rgba(125,138,152,1);
    margin-top: 20px;
  }
</style>
