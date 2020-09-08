<template>
  <div class="admin">
    <div class="admin-inner abs">
      <a-header></a-header>
      <div class="admin-main">
        <div class="side-bar">
          <side-menu></side-menu>
          <img class="side-bar-img" src="~@/assets/logo_white_big.png" alt="">
        </div>
        <div class="admin-content">
          <div class="admin-content-inner">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './header'
import sidemenu from './sidemenu'
import chainheader from './chain/chainheader'
import dataheader from './data/components/dataheader'
import businessheader from './business/components/businessheader'
Vue.component('chain-header', chainheader)
Vue.component('data-header', dataheader)
Vue.component('business-header', businessheader)
export default {
  components: {
    'a-header': Header,
    'side-menu': sidemenu
  },
  watch: {
    $route () {
      var d = document.getElementsByClassName('admin-content')
      if (d.length) {
        d = d[0]
        d.scrollTop = 0
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
  @import './index.less';
</style>
