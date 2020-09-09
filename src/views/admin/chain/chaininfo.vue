<template>
  <div class="chain-info">
    <chain-header title="链实例详情"/>
    <div class="clear">
      <div class="chain-info-right clear">
        <div class="chain-content">
          <div class="sub-content-title">链上联盟成员信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="24">
              <p>{{chianCommitteeGroupNum}}</p>
              <div>联盟委员数量</div>
              </Col>
              <!-- <Col span="12">
                              <p>2</p>
                              <div>加盟企业成员数量</div>
                            </Col> -->
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内接入前置节点信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="12">
              <p>{{clientNum}}</p>
              <div>接入前置节点数量</div>
              </Col>
              <Col span="12">
              <p>{{clientCompanyNum}}</p>
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
              <p>{{storageNum}}</p>
              <div>数据存管域数量</div>
              </Col>
              <Col span="8">
              <p>{{runStorageNum}}</p>
              <div>运行数据存管域数量</div>
              </Col>
              <Col span="8">
              <p>{{outStorageNum}}</p>
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
              <p>{{bizNum}}</p>
              <div>业务域数量</div>
              </Col>
              <Col span="8">
              <p>{{runBizNum}}</p>
              <div>运行业务域数量</div>
              </Col>
              <Col span="8">
              <p>{{outBizNum}}</p>
              <div>停运业务域数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内主节点服务器信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="6">
              <p>{{accountNum}}</p>
              <div>主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{usedAccountNum}}</p>
              <div>在线主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>0</p>
              <div>离线主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>10</p>
              <div>主节点隶属企业数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内资源节点服务器信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="6">
              <p>{{resourceNum}}</p>
              <div>资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{usedResourceNum}}</p>
              <div>在线资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>1</p>
              <div>离线资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>10</p>
              <div>资源节点隶属企业数量</div>
              </Col>
            </Row>
          </div>
        </div>
        <div class="chain-content">
          <div class="sub-content-title">链内接入业务系统信息</div>
          <div class="chain-content-item">
            <Row>
              <Col span="12">
              <p>10</p>
              <div>接入业务系统数量</div>
              </Col>
              <Col span="12">
              <p>50</p>
              <div>业务系统隶属企业数量</div>
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
  data () {
    return {
      chianCommitteeGroupNum: '',
      clientNum: '',
      clientCompanyNum: '',
      storageNum: '',
      runStorageNum: '',
      outStorageNum: '',
      bizNum: '',
      runBizNum: '',
      outBizNum: '',
      accountNum: '', // 主节点
      usedAccountNum: '', // 在线主节点
      resourceNum: '',
      usedResourceNum: '', // 在线资源节点
      syncNum: '', // 只读节点
      usedSyncNum: ''// 在线只读节点
    }
  },
  mounted () {
    this.init()
  },
  created () {
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      this.initList()
    },
    // 链统计
    initList () {
      this.loading = true
      var self = this
      setTimeout(() => {
        this.$http.post('/cmw/pbqct.do').then(res => {
          console.log(res)
          if (res.retCode === '1') {
            self.chianCommitteeGroupNum = res.data.chianCommitteeGroupNum
            self.clientNum = res.data.clientNum
            self.clientCompanyNum = res.data.clientCompanyNum
            self.storageNum = res.data.storageNum
            self.runStorageNum = res.data.runStorageNum
            self.outStorageNum = res.data.outStorageNum
            self.bizNum = res.data.bizNum
            self.runBizNum = res.data.runBizNum
            self.outBizNum = res.data.outBizNum
            self.accountNum = res.data.accountNum
            self.usedAccountNum = res.data.usedAccountNum // 在线主节点
            self.resourceNum = res.data.resourceNum
            self.usedResourceNum = res.data.usedResourceNum // 在线资源节点
            self.syncNum = res.data.syncNum // 只读节点
            self.usedSyncNum = res.data.usedSyncNum
          }
        }).catch(() => {

        })
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
