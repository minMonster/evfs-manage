<template>
  <div class="admin-header">
    <div class="header-inner clear">
      <div class="header-left" @click="route('admin')">
        <img src="~@/assets/logo_white.png">
        <span>从法链运维管理平台</span>
      </div>
      <!-- <div class="header-right">
        <div><i class="icon-message"></i><span>消息</span></div>
        <div><i class="icon-user"></i><span>{{user}}</span></div>
      </div> -->
      <div class="header-center">
        <!-- <Input search placeholder="搜索" clearable /> -->
      </div>
      <div class="header-right">
        <div class="badge">
          <a href="#" class="demo-badge">
            <img src="~@/assets/alarm.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '0x8fada****d2ab3e'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {

    },
    route(name='admin') {
      var {showBusinessSubmenu, showDataSubmenu} = this.$route.query
      this.$router.push({
        path: '/chain?mainActive=chain&subActive=&activeIndex=0&showDataSubmenu=1'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .admin-header {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    height: 100px;
    overflow: hidden;
    height: 70px;
  }
  .header-inner {
    // border: 1px solid #F6F6F6;
  }
  .header-left {
    height: 70px;
    overflow: hidden;
    padding: 17px 0;
    float: left;
    width: 250px;
    // border-right: 1px solid #F5F6F9;
    background: #2C77EF;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 20px;
      width: 100%;
      width: 210px;
      // height: 1px;
      border: 1px solid;
      border-image: linear-gradient(270deg, rgba(255,255,255,0), #ffffff 53%, rgba(255,255,255,0)) 1 1;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      width: 46px;
      margin: 2px auto;
      margin-right: 4px;
    }
    span {
      display: inline-block;
      font-size: 17px;
      vertical-align: middle;
      color: #fff;
      font-weight: 500;
    }
  }
  .header-center {
    float: left;
    width: 35%;
    padding: 20px;
    .ivu-input {
    }
  }
  // .header-right {
  //   float: right;
  //   & > div {
  //     line-height: 42px;
  //     display: inline-block;
  //     font-weight: 500;
  //     margin-left: 40px;
  //     vertical-align: middle;
  //     cursor: pointer;
  //     &:hover {
  //       color: #356BDB;
  //     }
  //     i {
  //       display: inline-block;
  //       vertical-align: middle;
  //       width: 24px;
  //       height: 24px;
  //       background-size: 100% 100%;
  //       background-position: center;
  //       margin-right: 6px;
  //     }
  //     .icon-message {
  //       background-image: url(~@/assets/icon/note.png);
  //     }
  //     .icon-user {
  //       background-image: url(~@/assets/icon/user.png);
  //     }
  //   }
  // }
  .header-right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 0 32px;
    border-left: 1px solid #F5F6F9;
    .badge {
      img {
        margin-top: 22px;
        width: 24px;
      }
    }
  }
</style>