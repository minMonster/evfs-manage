<template>
  <div class="business-detail">
    <chain-header title="数据存管域详情"/>
    <div class="business-detail-item">
      <div class="section-title"><span>数据存管域信息</span></div>
      <div v-if="storage_session">
        <Row>
          <Col :span="8">
          <div>数据存管域名称：{{storage_session.storage_name || '--'}}</div>
          </Col>
          <Col :span="8">
          <div>数据存管域唯一标识：{{storage_session.storage_id_format}}</div>
          </Col>
          <Col :span="8">
          <div>创建时间：{{storage_session.join_time_format}}</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>创建企业名称：{{storage_session.create_org_name || '--'}}</div>
          </Col>
          <Col :span="8">
          <div>创建企业身份标识：{{storage_session.create_org_address_format}}</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="section-title" style="margin-top: 25px;margin-bottom: 2px;"><span>域内节点信息</span></div>
      <div style="color: #1E1E1E;">联合构建企业成员数量：<b>{{node.unitedCompanyMember}}</b></div>
      <div class="mb20">
        <div class="chain-content-item">
          <Row class="bg-white padding" style="margin-bottom: 10px;">
            <Col :span="8">
            <p><span>{{node.accountNum}}</span></p>
            <div>域内主节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.usedAccountNum}}</span></p>
            <div>在线主节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.outAccountNum}}</span></p>
            <div>离线主节点数量</div>
            </Col>
          </Row>
          <Row class="bg-white padding">
            <Col :span="8">
            <p><span>{{node.resourceNum}}</span></p>
            <div>域内资源节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.usedResourceNum}}</span></p>
            <div>在线资源节点数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.outResourceNum}}</span></p>
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
          <p><span>{{biz.bizNum}}</span></p>
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
          <div>文件碎片化数量：<span>未确认</span></div>
          </Col>
          <Col :span="8">
          <div>文件保存副本数量：<span>未确认</span></div>
          </Col>
          <Col :span="8">
          <div>文件副本在不同site分散保存：<span>未确认</span></div>
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
            <p><span>{{node.capacityLicense}}TB</span></p>
            <div>最大存储容量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.outCapacityLicense}} TB</span></p>
            <div>可用存储容量</div>
            </Col>
            <Col :span="8">
            <p><span>{{node.usedCapacityLicense}} TB</span></p>
            <div>已用存储容量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../chain/api'
export default {
  data () {
    return {
      storage_session: null,
      storage: {},
      biz: {
        bizNum: '--', // 业务域数量
        runBizNum: '--', // 运行业务域数量
        outBizNum: '--'// 停运业务域数量
      },
      node: {
        accountNum: '--', // 主节点服务器数量
        usedAccountNum: '--', // 在线主节点服务器数量
        outAccountNum: '--', // 离线主节点服务器数量
        resourceNum: '--', // 资源节点服务器数量
        usedResourceNum: '--', // 在线资源节点服务器数量
        outResourceNum: '--', // 离线资源节点服务器数量
        usedSyncNum: '--', // 在线只读节点
        clientNum: '--', // 接入前置节点数量
        clientCompanyNum: '--', // 前置隶属企业数量
        usedSystemNum: '--', // 接入业务系统数量
        systemCompanyNum: '--', // 业务系统隶属企业数量
        accountCompanyNum: '--', // 主节点隶属企业数量
        resourceCompanyNum: '--', // 资源节点隶属企业数量
        nodeLicenseNum: '--', // 节点运行许可总数量
        usedLicenseNum: '--', // 已发放节点许可数量
        outLicenseNum: '--', // 未发放节点许可数量
        capacityLicense: '--', // 存储许可总容量
        usedCapacityLicense: '--', // 已发放存储许可容量
        outCapacityLicense: '--', // 未发存储许可容量
        unitedCompanyMember: '--' // 联合构建企业成员数量
      }
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
    this.storage_session = JSON.parse(sessionStorage.getItem('fbs_storage'))
  },
  methods: {
    init () {
      this.initList()
    },
    initList () {
      let storage_id = sessionStorage.getItem('fbs_storage_id')
      let params = {}
      if (storage_id) {
        params = { storage_id }
      }
      // 查询数据存管域详情
      api.pbqsd(params).then(res => {
        if (res.retCode === 1) {
          this.$Message.success('查询成功')
          if (res.storage) {
            this.storage = {
              ...this.storage,
              ...res.storage
            }
          }
          if (res.biz) {
            this.biz = {
              ...this.biz,
              ...res.biz
            }
          }
          if (res.node) {
            this.node = {
              ...this.node,
              ...res.node
            }
          }
        } else {
          if (res.retMsg) {
            this.$Message.error(res.retMsg)
          }
        }
      }).catch(err => {
        this.$Message.error(err.retMsg)
      })
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
