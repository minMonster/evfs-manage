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
      <div class="section-title" style="margin-top: 25px;margin-bottom: 2px;"><span>域内节点信息</span></div>
      <div style="color: #1E1E1E;">联合构建企业成员数量：<b>3</b></div>
      <div class="mb20">
        <div class="chain-content-item">
          <Row class="bg-white padding" style="margin-bottom: 10px;">
            <Col :span="8">
            <p><span>3</span></p>
            <div>域内主节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>3</span></p>
            <div>在线主节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>0</span></p>
            <div>离线主节点数量</div>
            </Col>
          </Row>
          <Row class="bg-white padding">
            <Col :span="8">
            <p><span>1</span></p>
            <div>域内资源节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>0</span></p>
            <div>在线资源节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>1</span></p>
            <div>离线资源主节点数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="tips">
      * 数据存管域联合构建企业分别将各自隶属的节点服务器硬件资源联合在一起，共同维护一个数据和文件上链固化存储空间，便于企业间的数据和文件共享。
    </div>
    <div class="business-detail-item padding bg-white mb20">
      <div class="section-title"><span>域内业务域信息</span></div>
      <div class="chain-content-item">
        <Row>
          <Col :span="24">
          <p><span>2</span></p>
          <div>业务域数量</div>
          </Col>
          <!-- <Col :span="8">
            <p><span>2</span></p>
            <div>隶属企业数量</div>
          </Col> -->
        </Row>
      </div>
    </div>
    <div class="business-detail-item bg-white padding mb20">
      <div class="section-title"><span>域内固存规则信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>文件碎片化数量：<span>5</span></div>
          </Col>
          <Col :span="8">
          <div>文件保存副本数量：<span>3</span></div>
          </Col>
          <Col :span="8">
          <div>文件副本在不同site分散保存：<span>生效</span></div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item bg-white mb20 padding">
      <div class="section-title"><span>域内存储容量信息</span></div>
      <div>
        <div class="chain-content-item">
          <Row>
            <Col :span="8">
            <p><span>5.00 TB</span></p>
            <div>最大存储容量</div>
            </Col>
            <Col :span="8">
            <p><span>2.00 TB</span></p>
            <div>可用存储容量</div>
            </Col>
            <Col :span="8">
            <p><span>3.00 TB</span></p>
            <div>已用存储容量</div>
            </Col>
          </Row>
        </div>
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
      this.initList()
    },
    initList () {
      let params = {
        storage_id: storage_id
      }
      // 查询数据存管域详情
      setTimeout(() => {
        this.$http.poat('/cmw/pbqsd.do', params).then(res => {
          console.log(res)
          if (res.retCode == '1') {
            this.$Message.success('查询成功')
          } else {
            if (res.retMsg) {
              this.$Message.error(res.retMsg)
            }
          }
        }).catch(err => {

        })
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .business-detail-item {
    color: #7D8B97;
    line-height: 2em;
    .section-title {

    }
    .ivu-col {
      div {
        color: #333;
        span {
          color: #759BFA;
          font-size: 16px;
        }
      }
    }
  }
  .tips {
    color: #759BFA;
    font-size: 13px;
    padding: 10px;
    border-radius: 4px;
    border:1px dashed #759BFA;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
