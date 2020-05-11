<template>
  <div class="audit">
    <div class="audit-inner">
      <h2 class="audit-title clear">
        待审核事项
      </h2>
      <div class="tab-wrapper">
        <div class="tab-item" v-for="item in tabs" :key="item.name" :class="{active: active == item.name}"
          @click="changeTab(item.name)"
        >
          <Badge :count="item.count">
              <button>{{item.text}}</button>
          </Badge>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="audit-content">
        <alliance v-if="active == 'chain-alliance'"></alliance>
        <configure v-if="active == 'chain-configure'"></configure>
        <nodeadmission v-if="active == 'chain-nodeadmission'"></nodeadmission>
        <frontnodelicence v-if="active == 'chain-frontnodelicence'"></frontnodelicence>
        <operation v-if="active == 'chain-operation'" />
        <dataauth v-if="active == 'dataauth'" />
        <mainnode v-if="active == 'mainnode'" />
        <chainadmin v-if="active == 'chainmanager'"></chainadmin>
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
import node from './node'
import frontnode from './frontNode'
import filestroage from './fileStorage'
var tabs = [
  {text: '联盟委员会',name: 'chain-alliance', count: 0},
  {text: '链全局参数',name: 'chain-configure', count: 3},
  {text: '节点准入',name: 'chain-nodeadmission', count: 8},
  {text: '前置节点准入',name: 'chain-frontnodelicence', count: 6},
  {text: '运行许可证',name: 'chain-operation', count: 0},
  {text: '数据存管域授权',name: 'dataauth', count: 22},
  {text: '主节点授权',name: 'mainnode', count: 99},
  {text: '链管理员',name: 'chainmanager',count: 4},
]
export default {
  components: {
    alliance, configure, nodeadmission, frontnodelicence, chainadmin, node, frontnode, filestroage,
    operation, dataauth,mainnode,
  },
  data() {
    return {
      tabs: [],
      active: 'alliance'
    }
  },
  watch:{
    $route(n) {
      this.initTab()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.tabs = tabs
      this.initTab()
    },
    initTab() {
      var query = this.$route.query
      var tab = query.tab || tabs[0].name
      this.active = tab
    },
    changeTab(name) {
      var query = this.$route.query
      this.$router.push({
        name: 'chain-audit',
        query: {
          ...query,
          tab: name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .audit-content {
    padding-top: 20px;
  }
</style>