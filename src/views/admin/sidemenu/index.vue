<template>
  <div class="admin-side-menu-inner">
    <ul>
      <li v-for="(item,index) in menu" :key="item.name" class="menu-item" :class="{active: mainActive == item.name}">
        <div class="main-menu-content" :class="{active: mainActive == item.name}" @click="mainMenu(item, index)">
          <i :class="[item.icon,{active: mainActive == item.name}]"></i><span>{{item.text}}</span>
        </div>
        <div v-show="showSubmenu" class="sub-menu" :class="{active: activeIndex == index && menu[activeIndex] && menu[activeIndex].children}">
          <div class="sub-menu-item" 
            v-for="(subitem, i) in item.children" 
            :key="subitem.name"
            :class="{active: subActive == subitem.name}"
            @click="subMenu(subitem, i)">
            <span>{{subitem.text}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const menu = [
  { icon: 'icon-chain', text: '链',name: 'chain', children: [
    {text: '链联盟委员会', name: 'chain-alliance'},
    { text: '节点准入', name: 'chain-nodeadmission'},
    { text: '前置节点准入', name: 'chain-frontnodelicence'},
    { text: '运行证许可', name: 'chain-operation'},
    { text: '主节点授权', name: 'mainnode' },
    { text: '数据存管域授权', name: 'dataauth' },
    { text: '链管理员', name: 'chainmanager' },
    { text: '行为审计', name: 'chain-configure'},
    { text: '待审核事项', name: 'chain-audit'},
  ]},
  { icon: 'icon-file',name: 'data', text: '数据存管域', children: [
    // { text: '域内固存规则', name: 'data-rule'},
    { text: '节点准入', name: 'data-node'},
    { text: '运行许可证', name: 'data-permission'},
    { text: '业务域授权', name: 'data-business'},
    { text: '域管理员', name: 'data-manager'},
    { text: '行为审计', name: 'data-alliance'},
    { text: '待审核事项', name: 'data-audit'},
  ]},
  { icon: 'icon-business', name: 'business', text: '业务域', children: [
    {text: '业务系统准入', name: 'business-permission'},
    { text: '数据操作规则', name: 'business-rule'},
    { text: '域内数据治理', name: 'business-file'},
    { text: '合约治理', name: 'business-contract'},
    { text: '域管理员', name: 'business-manager'},
    { text: '行为审计', name: 'business-configure'},
    { text: '待审核事项', name: 'business-audit'},
  ]},
  { icon: 'icon-node',name: 'node', text: '节点服务器'}
]
export default {
  data() {
    return {
      menu,
      mainActive: 'chain',
      subActive: '',
      activeIndex: '0',
      showDataSubmenu: true,
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    $route() {
      this.initActive()
    }
  },
  computed:{
    showSubmenu() {
      let { mainActive, showDataSubmenu, showBusinessSubmenu } = this.$route.query
      if ((mainActive == 'data' && showDataSubmenu == '1') ||
        mainActive == 'chain' ||
        !mainActive ||
       (mainActive == 'business' && showBusinessSubmenu == '1')) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    init() {
      this.initActive()
    },
    initActive() {
      var query = this.$route.query
      let mainActive = query.mainActive
      let subActive = query.subActive
      let activeIndex = query.activeIndex
      let showDataSubmenu = query.showDataSubmenu
      let showBusinessSubmenu = query.showBusinessSubmenu
      this.showDataSubmenu = showDataSubmenu
      this.showBusinessSubmenu = showBusinessSubmenu
      if (mainActive) {
        this.mainActive = mainActive
      }
      if (subActive) {
        this.subActive = subActive
      }
      if (activeIndex) {
        this.activeIndex = activeIndex
      }
    },
    mainMenu(item,index) {
      if (this.mainActive == item.name) {
        if (!this.activeIndex) {
          this.activeIndex = index + ''
          // this.subActive = ''
        } else {
          this.activeIndex = ''
          this.subActive = ''
        }
      } else {
        this.mainActive = item.name
        this.activeIndex = index + ''
        this.subActive = ''
      }
      this.route(item.name)
    },
    subMenu(item) {
      this.subActive = item.name
      this.route(item.name)
    },
    route(name) {
      let mainActive = this.mainActive
      let subActive = this.subActive
      let activeIndex = this.activeIndex
      let showDataSubmenu = this.$route.query.showDataSubmenu
      let showBusinessSubmenu = this.$route.query.showBusinessSubmenu
      this.$router.push({
        name,
        query: {
          mainActive, subActive, activeIndex, showDataSubmenu, showBusinessSubmenu
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .admin-side-menu-inner {
    margin-top: 20px;
    position: relative;
    z-index: 2;
  }
  .menu-item {
    cursor: default;
    font-size: 15px;
    font-weight: 500;
    .main-menu-content {
      padding: 16px 0 16px 30px;
      position: relative;
      transition: .2s;
      color: #fff;
      &::before {
        transition: .2s;
        content: '';
        display: block;
        height: 100%;
        width: 5px;
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
      }
      &:hover{
        background: #1955B7;
        color: #fff;
        &::before {
          background:transparent;
        }
      }
      &.active {
        background: #1955B7;
        font-weight: 500;
      }
      &:hover {
        opacity: .8;
      }
      i {
        display: inline-block;
        width: 30px;
        height: 20px;
        vertical-align: middle;
        background-repeat: no-repeat;
        // margin-right: 2px;
        background-size: 24px;
      }
      .icon-chain {
        background-image: url(~@/assets/icon/chain.png);
        &.active {
          // background-image: url(~@/assets/icon/chain-active.png) 
        }
      }
      .icon-file {
        background-image: url(~@/assets/icon/file.png);
        background-size: 20px;
        &.active {
          // background-image: url(~@/assets/icon/file-active.png) 
        }
      }
      .icon-business {
        background-image: url(~@/assets/icon/business.png);
        background-size: 20px;
        &.active {
          // background-image: url(~@/assets/icon/business-active.png) 
        }
      }
      .icon-node {
        background-image: url(~@/assets/icon/node.png);
        background-size: 20px;
        &.active {
          // background-image: url(~@/assets/icon/node-active.png) 
        }
      }
    }
  }
  .sub-menu {
    height: 0;
    overflow: hidden;
    &.active {
      height: auto;
    }
    .sub-menu-item {
      height: 50px;
      padding: 14px 0 14px 60px;
      font-size: 14px;
      font-weight: 400;
      color: #CEDEF7;
      position: relative;
      transition: .3s;
      &:hover, &.active {
        background: transparent;
        color: #fff;
        font-weight: 700;
        &::before {
          content: '';
          display: block;
          height: 100%;
          width: 5px;
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
        }
      }
    }
  }
</style>