<template>
  <div class="audit">
    <div class="audit-inner">
      <h2 class="audit-title clear">
        待审核事项
      </h2>
      <div class="tab-wrapper">
        <div class="tab-item" v-for="(item, index) in tabs" :key="index" :class="{active: active === index}"
             @click="changeTab(index)"
        >
          <Badge :dot="item.num > 0">
            <button>{{item.name}}</button>
          </Badge>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="audit-content">
        <component :review-type="active" v-if="tabs[active].nodeName" :is="tabs[active].nodeName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import alliance from './alliance'
import configure from './configure'
import nodeadmission from './nodeAdmission'
import frontnodelicence from './frontNodeLicence'
import operation from './operation'
import dataauth from './dataauth'
import mainnode from './mainnode'
import chainadmin from './chainadmin'
import * as api from '../api'
// import * as cApi from '@/http/api'
// import node from './node'
// import frontnode from './frontNode'
// import filestroage from './fileStorage'
let tabsJson = {
  chain_committee: {
    name: '联盟委员会',
    num: 0,
    nodeName: 'alliance'
  },
  chain_node: {
    name: '节点准入',
    num: 0,
    nodeName: 'nodeadmission'
  },
  chain_httpclient: {
    name: '前置节点准入',
    num: 0,
    nodeName: 'frontnodelicence'
  },
  chain_license: {
    name: '运行许可证',
    num: 0,
    nodeName: 'operation'
  },
  chain_storage: {
    name: '数据存管域授权',
    num: 0,
    nodeName: 'dataauth'
  },
  chain_mainnode: {
    name: '主节点授权',
    num: 0,
    nodeName: 'mainnode'
  },
  chain_manager: {
    name: '链管理员',
    num: 0,
    nodeName: 'chainadmin'
  }
}
export default {
  components: {
    alliance,
    configure,
    nodeadmission,
    frontnodelicence,
    chainadmin,
    // node,
    // frontnode,
    // filestroage,
    operation,
    dataauth,
    mainnode
  },
  data () {
    return {
      tabs: {
        chain_committee: {
          name: '联盟委员会',
          num: 0,
          nodeName: 'alliance'
        }
      },
      active: 'chain_committee'
    }
  },
  mounted () {
    this.init()
    // let query = this.$route.query
    // console.log(query)
  },
  methods: {
    init () {
      api.pbqrm({
        menu: 'chaingroup', // 身份角色：审批人员类型[chaincommittee 联盟委员会,chaingroup 链管理员,storage 数据存管域,biz 业务域]
        'address': sessionStorage.getItem('fbs_address') // 登陆人的地址
      }).then(res => {
        if (res.rows) {
          res.rows.map(r => {
            tabsJson[r.review_type].num = r.num
          })
          this.tabs = tabsJson
        }
      })
      this.initTab()
    },
    initTab () {
    },
    changeTab (type) {
      this.active = type
    }
  }
}
</script>

<style lang="less" scoped>
  .audit-content {
    padding-top: 20px;
  }
</style>
