<template>
  <div class="audit">
    <div class="audit-inner">
      <h2 class="audit-title clear">
        待审核事项
      </h2>
      <div class="tab-wrapper" style="width: 70%;">
        <div class="tab-item" v-for="(item, index) in tabs" :key="index" :class="{active: active === index}"
             @click="changeTab(index)"
        >
          <Badge :dot="item.num > 0">
            <button>{{item.name}}</button>
          </Badge>
        </div>
      </div>
      <div class="audit-content">
        <component :review-type="tabs[active].review_type" v-if="active" :is="tabs[active].nodeName"></component>
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
let tabs = [
  // { text: '业务系统准入', name: 'business-permission', count: 3 },
  { text: '文件操作规则', name: 'business-rule', count: 2 },
  // { text: '域内文件治理', name: 'business-file' },
  { text: '域内合约治理', name: 'business-contract', count: 22 },
  { text: '域管理员', name: 'business-manager', count: 23 }
]
export default {
  components: {
    permission, rule, file, contract, manager
  },
  data () {
    return {
      tabs: {
        // 'business-permission': {
        //   name: '业务系统准入',
        //   num: 0,
        //   nodeName: 'permission'
        // },
        'business-permission': {
          name: '文件操作规则',
          num: 0,
          nodeName: 'rule',
          review_type: 'storage'
        },
        // 'business-file': {
        //   name: '域内文件治理',
        //   num: 0,
        //   nodeName: 'file',
        //   review_type: 'storage'
        // },
        'business-contract': {
          name: '域内合约治理',
          num: 0,
          nodeName: 'contract',
          review_type: 'storage'
        },
        'business-manager': {
          name: '域管理员',
          num: 0,
          nodeName: 'manager',
          review_type: 'storage'
        }
      },
      active: 'business-manager'
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
      let query = this.$route.query
      let tab = query.tab || tabs[0].name
      this.active = tab
    },
    changeTab (name) {
      console.log(name)
      this.active = name
    }
  }
}
</script>

<style lang="less" scoped>
  .audit-content {
    padding-top: 20px;
  }
</style>
