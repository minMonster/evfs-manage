<template>
  <div class="join-field">
    <div class="join-field-in input-form" v-if="step == '1'">
      <h3>加入现有的文件存储域</h3>
      <div class="join-form" style="margin-top: 30px;">
        <div class="form-item">
          <div class="label">链的访问地址</div>
          <Input placeholder="请输入要加入链实例的任意节点服务器访问地址" />
        </div>
        <div class="form-item">
          <div class="label">文件存储域名称：</div>
          <Input placeholder="请输入要加入链实例中的文件存储域的名称" />
        </div>
        <div class="form-item">
          <div class="label">文件存储域唯一标识：</div>
          <Input placeholder="请输入要加入链实例中的文件存储域的唯一标识" />
        </div>
        <div class="form-item">
          <div class="label">存储site名称：</div>
          <Input placeholder="请输入要加入的存储site名称" />
        </div>
        <div class="form-item">
          <div class="label">存储site ID：</div>
          <Input placeholder="请输入要加入的存储site唯一标识" />
        </div>
        <div class="get-server-info">
          <Button type="primary">获取当前服务器信息</Button>
        </div>
        <div class="form-item">
          <div class="label">服务器名称</div>
          <Input placeholder="请输入当前节点服务器名称" />
        </div>
        <div class="form-item">
          <div class="label">服务器身份标识</div>
          <Input placeholder="请输入当前节点服务器的身份标识公钥" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业名称</div>
          <Input placeholder="请输入当前节点服务器的所属企业名称" />
        </div>
        <div class="form-item">
          <div class="label">隶属企业身份标识</div>
          <Input placeholder="请输入当前节点服务器的所属企业身份标识公钥" />
        </div>
        <Button class="join-btn" style="margin-bottom: 20px;" long type="primary" @click="apply">申请加入</Button>
      </div>
    </div>
    <div class="join-chain-in approval" v-if="step == '2'">
      <div class="wait-img">
        <img src="~@/assets/setup/waitting.png" alt="">
      </div>
      <h3>已经成功提交加入申请，等待审批通过！</h3>
      <div class="hash-info" style="padding: 10px;">
        <div>文件存储域名称：银行联盟文件存储域</div>
        <div>文件存储域ID：sdkjfhliLijsdlkjflkj210932</div>
      </div>
      <div class="time-info">
        <div class="start-time">提交时间：2020-1-1 12:00:00</div>
        <div class="approval-time">审批等待时间：22分钟15秒</div>
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '3'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>恭喜你，链实例已经加入成功！</h3>
      <div class="hash-info" style="padding: 10px;">
        <div>文件存储域名称：银行联盟文件存储域</div>
        <div>文件存储域ID：sdkjfhliLijsdlkjflkj210932</div>
      </div>
      <div class="time-info">
        <div class="start-time">加入申请提交时间：2020-1-1 12:00:00</div>
        <div class="approval-time">加入申请通过时间：2020-1-1 13:00:00</div>
      </div>
      <div class="join-bottom-btns">
        <Button long class="create-file" @click="admin" type="primary">进入管理页面</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: '3'
    }
  },
  watch: {
    step(n,o) {
      console.log(n,o)
      let that = this
      if (n == 2) {
        setTimeout(() => {
          that.step = '3'
        }, 30300);
      }
    }
  },
  methods: {
    apply() {
      this.step = '2'
    },
    admin() {
      this.$router.push({
        name: 'admin'
      })
    }

  }
}
</script>

<style lang="less" scoped>
  .get-server-info {
    padding: 30px 0;
  }
  .join-field-in {
    h3 {
      color: #262626;
      font-size: 24px;
    }
    &.input-form {
      width: 520px;
    }
    .sub-title {
      padding: 20px 0;
      .fl {
        color: #16CEF1;
        font-weight: 500;
      }
      .fr {
        line-height: 24px;
        font-size: 12px;
        cursor: pointer;
        padding: 0 10px;
        color: #6094FF;
        border: 1px solid #6094FF;
        border-radius: 20px;
      }
    }
    .join-form {
      .form-item {
        .label {
          line-height: 1.8;
        }
        padding-bottom: 16px;
      }
    }
    .join-btn {
      margin-top: 24px;
    }
  }
  .approval {
    text-align: center;
    .wait-img {
      img {
        display: block;
        width: 60px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .hash-info {
      font-weight: 500;
      background: #F5FFFC;
      border-radius: 4px;
      border: 1px dashed #17BEDE;
      color: #224284;
      line-height: 24px;
      padding: 0 10px;
      margin: 35px auto;
    }
    .time-info {
      color: #777777;
      line-height: 22px;
    }
  }
  .join-success {
    text-align: center;
    .success-img {
      img {
        display: block;
        width: 60px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .hash-info {
      font-weight: 500;
      background: #F5FFFC;
      border-radius: 4px;
      border: 1px dashed #17BEDE;
      color: #224284;
      line-height: 24px;
      padding: 10px 10px;
      margin: 35px auto;
    }
    .time-info {
      color: #777777;
      line-height: 22px;
    }
    .join-bottom-btns {
      width: 240px;
      margin: 30px auto;
      button {
        margin-bottom: 20px;
      }
    }
  }
</style>