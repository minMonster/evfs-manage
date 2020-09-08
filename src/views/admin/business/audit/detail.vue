<template>
  <div class="business-detail">
    <data-header title="业务域详情"/>
    <div class="business-detail-item">
      <div class="section-title"><span>业务域信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>业务域名称：司法业务域</div>
          </Col>
          <Col :span="8">
          <div>业务域唯一标识：00740f...ffbc3</div>
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
        <Row>
          <Col :span="8">
          <div>备注：创建是描述业务域的作用。</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>业务域运营信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>占用存储容量：5.00 TB</div>
          </Col>
          <Col :span="8">
          <div>域内合约数量：5</div>
          </Col>
          <Col :span="8">
          <div>业务系统数量：3</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>接入企业数量：3</div>
          </Col>
          <Col :span="8">
          <div>接入用户数量：100</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title"><span>域内文件操作规则信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>占用存储容量：5.00 TB</div>
          </Col>
          <Col :span="8">
          <div>域内合约数量：5</div>
          </Col>
          <Col :span="8">
          <div>业务系统数量：3</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>接入企业数量：3</div>
          </Col>
          <Col :span="8">
          <div>接入用户数量：100</div>
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

<style lang="less" >
  .business-detail-item {
    color: #7D8B97;
    line-height: 2em;
    .section-title {
      margin: 30px 0 10px 0;
    }
  }
</style>
