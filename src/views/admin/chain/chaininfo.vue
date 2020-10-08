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
              <p>{{node.clientNum}}</p>
              <div>接入前置节点数量</div>
              </Col>
              <Col span="12">
              <p>{{node.clientCompanyNum}}</p>
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
              <p>{{storage.storageNum}}</p>
              <div>数据存管域数量</div>
              </Col>
              <Col span="8">
              <p>{{storage.runStorageNum}}</p>
              <div>运行数据存管域数量</div>
              </Col>
              <Col span="8">
              <p>{{storage.outStorageNum}}</p>
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
              <p>{{biz.bizNum}}</p>
              <div>业务域数量</div>
              </Col>
              <Col span="8">
              <p>{{biz.runBizNum}}</p>
              <div>运行业务域数量</div>
              </Col>
              <Col span="8">
              <p>{{biz.outBizNum}}</p>
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
              <p>{{node.accountNum}}</p>
              <div>主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.usedAccountNum}}</p>
              <div>在线主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.outAccountNum}}</p>
              <div>离线主节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.accountCompanyNum}}</p>
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
              <p>{{node.resourceNum}}</p>
              <div>资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.usedResourceNum}}</p>
              <div>在线资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.outResourceNum}}</p>
              <div>离线资源节点服务器数量</div>
              </Col>
              <Col span="6">
              <p>{{node.resourceCompanyNum}}</p>
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
              <p>{{node.usedSystemNum}}</p>
              <div>接入业务系统数量</div>
              </Col>
              <Col span="12">
              <p>{{node.systemCompanyNum}}</p>
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
              <p>{{node.nodeLicenseNum}}</p>
              <div>节点运行许可总数量</div>
              </Col>
              <Col span="8">
              <p>{{node.usedLicenseNum}}</p>
              <div>已发放节点许可数量</div>
              </Col>
              <Col span="8">
              <p>{{node.outLicenseNum}}</p>
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
                {{node.capacityLicense}}
                <span>TB</span>
              </p>
              <div>文件存储许可总容量</div>
              </Col>
              <Col span="8">
              <p>
                {{node.usedCapacityLicense}}
                <span>TB</span>
              </p>
              <div>已发放文件存储许可容量</div>
              </Col>
              <Col span="8">
              <p>
                {{node.outCapacityLicense}}
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
import * as api from './api.js'

export default {
  data () {
    return {
      chianCommitteeGroupNum: '--', // 联盟委员会数量
      storage: {
        storageId: '--', // 数据存管域id
        storageNum: '--', // 数据存管域总数量
        runStorageNum: '--', // 可用数据存管域数量
        outStorageNum: '--'// 停用数据存管域数量
      },
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
        outCapacityLicense: '--' // 未发存储许可容量
      }
    }
  },
  mounted () {
  },
  created () {
    this.init()
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      api.pbqct().then(res => {
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
        this.chianCommitteeGroupNum = res.chianCommitteeGroupNum
        if (res.node) {
          this.node = {
            ...this.node,
            ...res.node
          }
        }
      })
      // this.initList()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
