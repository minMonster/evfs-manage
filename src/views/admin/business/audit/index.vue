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
        <permission v-if="active == 'business-permission'"></permission>
        <rule v-if="active == 'business-rule'"></rule>
        <file v-if="active == 'business-file'"></file>
        <contract v-if="active == 'business-contract'"></contract>
        <manager v-if="active == 'business-manager'"></manager>
      </div>
    </div>
  </div>
</template>

<script>
import permission from './permission'
import rule from './rule'
import file from './file'
import contract from './contract'
import manager from './manager'
var tabs = [
  { text: '业务系统准入', name: 'business-permission', count: 3 },
  { text: '文件操作规则', name: 'business-rule', count: 2 },
  { text: '域内文件治理', name: 'business-file' },
  { text: '域内合约治理', name: 'business-contract', count: 22 },
  { text: '域管理员', name: 'business-manager', count: 23 }
]
export default {
  components: {
    permission, rule, file, contract, manager
  },
  data () {
    return {
      tabs: [],
      active: 'alliance'
    }
  },
  watch: {
    $route (n) {
      this.initTab()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.tabs = tabs
      this.initTab()
    },
    initTab () {
      var query = this.$route.query
      var tab = query.tab || tabs[0].name
      this.active = tab
    },
    changeTab (name) {
      var query = this.$route.query
      this.$router.push({
        name: 'business-audit',
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
