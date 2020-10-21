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
import * as api from '../api'
export default {
  components: {
    permission, rule, file, contract, manager
  },
  data () {
    return {
      tabs: {
        'business-permission': {
          name: '业务系统准入',
          num: 0,
          nodeName: 'permission'
        },
        'biz_file': {
          name: '文件操作规则',
          num: 0,
          nodeName: 'rule',
          review_type: 'biz_file'
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
          review_type: 'biz_contract'
        },
        'business-manager': {
          name: '域管理员',
          num: 0,
          nodeName: 'manager',
          review_type: 'biz_manage'
        }
      },
      active: 'business-manager'
    }
  },
  watch: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      api.pbqrm({
        menu: 'biz', // 身份角色：审批人员类型[chaincommittee 联盟委员会,chaingroup 链管理员,storage 数据存管域,biz 业务域]
        'address': sessionStorage.getItem('fbs_address') // 登陆人的地址
      }).then(res => {
        if (res.rows) {
          res.rows.forEach(r => {
            for (let i in this.tabs) {
              if (this.tabs[i].review_type === r.review_type) {
                this.tabs[i].num = r.num
                console.log(i)
              }
            }
          })
        }
      })
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
