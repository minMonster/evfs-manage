<template>
  <div class="audit">
    <div class="audit-inner">
      <h2 class="audit-title clear">
        待审核事项
      </h2>
      <div class="tab-wrapper" style="width: 70%;">
        <div class="tab-item" v-for="item in tabs" :key="item.name" :class="{active: active == item.name}"
          @click="changeTab(item.name)"
        >
          <Badge :dot="item.count > 0">
              <button>{{item.text}}</button>
          </Badge>
        </div>
      </div>
      <div class="audit-content">
        <rule v-if="active == 'data-rule'"></rule>
        <node v-if="active == 'data-node'"></node>
        <permission v-if="active == 'data-permission'"></permission>
        <business v-if="active == 'data-business'"></business>
        <manager v-if="active == 'data-manager'" />
        <alliance v-if="active == 'data-alliance'" />
      </div>
    </div>
  </div>
</template>

<script>
import rule from './rule'
import node from './node'
import permission from './permission'
import business from './business'
import manager from './manager'
import alliance from './alliance'
var tabs = [
  {text: '域内固存规则',name: 'data-rule', count: 0},
  {text: '节点准入',name: 'data-node', count: 3},
  // {text: '运行许可证',name: 'data-permission', count: 8},
  {text: '业务域授权',name: 'data-business', count: 6},
  {text: '域管理员',name: 'data-manager', count: 0},
  {text: '联盟委员会',name: 'data-alliance', count: 22},
]
export default {
  components: {
    rule, node, permission, business, manager, alliance
  },
  data() {
    return {
      tabs: [],
      active: 'rule'
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
        name: 'data-audit',
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