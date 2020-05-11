<template>
  <div class="abs guide">
    <div class="guide-inner">
      <div class="guide-header">
        <img src="@/assets/logo_text_white.png" alt="">
      </div>
      <div class="guide-body">
        <Row>
          <Col :span="24" :lg="12">
            <div class="guide-left">
              <h3 class="guide-title">节点服务器安装向导</h3>
              <div class="guide-steps">
                <p>节点服务器安装流程主要分为如下几步：</p>
                <ul>
                  <li>1.设置服务器名称</li>
                  <li>2.绑定首位服务器管理员</li>
                  <li>3.为服务器签署企业隶属关系</li>
                  <li>4.创建新的链，或加入现有的链</li>
                  <li>5.链实例运行许可证绑定</li>
                  <li>6.创建新的文件存储域，或加入现有的文件存储域</li>
                </ul>
                <div class="init-btn" @click="setup">
                  <i></i><span>开始安装</span>
                </div>
              </div>
            </div>
          </Col>
          <Col :span="24" :lg="12">
            <div class="body-right">

            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { 
    
  },
  data: function () {
    return {
      extension: false
    }
  },
  methods: {
    setup() {
      this.$router.push({
        name: 'setup'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .guide {
    background-color: #265ABF;
    background-image: url(~@/assets/guide/bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    min-height: 600px;
    overflow: auto;
  }
  .guide-inner {
    padding: 0 6%;
  }
  .guide-header {
    padding: 60px 0 100px 0;
    img {
      width: 150px;
    }
  }
  .guide-left {
    h3 {
      font-size: 30px;
      font-weight:600;
      color:rgba(255,255,255,1);
    }
  }
  .guide-steps {
    font-size: 16px;
    p {
      color: #16CEF1;
      padding-top: 40px;
      line-height: 3em;
      font-weight: 500;
    }
    ul {
      li {
        color: #fff;
        line-height: 2.5em;
      }
    }
    .init-btn {
      background: lighten(#16CDF4, .5);
      cursor: pointer;
      color: #fff;
      transition: .3s;
      line-height: 34px;
      text-align: center;
      border-radius: 4px;
      width: 200px;
      margin-top: 30px;
      box-shadow: 0 1px 6px 0 rgba(129, 217, 236, 0.3);
      &:hover {
        background: #16CDF4;
      }
      i {
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: middle;
        background: url(~@/assets/guide/hand.png) no-repeat center;
        background-size: 100%;
        margin-top: -2px;
        margin-right: 4px;
      }
    }
  }
  .body-right {
    width: 90%;
    height: 460px;
    background: url(~@/assets/guide/icon1.png) no-repeat center;
    background-size: 100%;
  }
</style>