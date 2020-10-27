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
        <!--        <rule v-if="active == 'data-rule'"></rule>-->
        <!--        <node v-if="active == 'data-node'"></node>-->
        <!--        <permission v-if="active == 'data-permission'"></permission>-->
        <!--        <business v-if="active == 'data-business'"></business>-->
        <!--        <manager v-if="active == 'data-manager'" />-->
        <!--        <alliance v-if="active == 'data-alliance'" />-->
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
import * as api from '../api'

export default {
  components: {
    rule, node, permission, business, manager, alliance
  },
  data () {
    return {
      tabs: {
        // 'data-rule': {
        //   name: '域内固存规则',
        //   num: 0,
        //   nodeName: 'rule'
        // },
        'storage': {
          name: '节点准入',
          num: 0,
          nodeName: 'node',
          review_type: 'storage'
        },
        'storage_license': {
          name: '运营许可证',
          num: 0,
          nodeName: 'permission',
          review_type: 'storage_license'
        },
        'storage_biz': {
          name: '业务域',
          num: 0,
          nodeName: 'business',
          review_type: 'storage_biz'
        },
        'storage_manage': {
          name: '域管理员',
          num: 0,
          nodeName: 'manager',
          review_type: 'storage_manage'
        }
        // 'data-alliance': {
        //   name: '联盟委员会',
        //   num: 0,
        //   nodeName: 'alliance'
        // }
      },
      routeMap: {
        'data-node': 'storage',
        'storage_license': 'storage_license',
        'data-business': 'storage_biz',
        'data-manager': 'storage_manage'
      },
      active: 'storage_manage'
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
      let that = this
      api.pbqrm({
        menu: 'storage', // 身份角色：审批人员类型[chaincommittee 联盟委员会,chaingroup 链管理员,storage 数据存管域,biz 业务域]
        'address': sessionStorage.getItem('fbs_address') // 登陆人的地址
      }).then(res => {
        if (res.rows) {
          res.rows.forEach(r => {
            for (let i in that.tabs) {
              if (i === r.review_type) {
                that.tabs[i].num += r.num
              }
              if (r.review_type === 'biz_manage_rule') {
                that.tabs['biz_manage'].num += r.num
              }
            }
          })
        }
      })
      this.initTab()
    },
    initTab () {
      let query = this.$route.query
      let tab = query.tab
      if (this.routeMap[tab]) {
        this.active = this.routeMap[tab]
      } else {
        this.active = 'storage_manage'
      }
    },
    changeTab (name) {
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
