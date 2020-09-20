<template>
  <div class="bind-licence">
    <div class="licence-inner" v-if="step == '1'">
      <h3>链实例运行许可证绑定</h3>
      <p>全链节点最大数量许可证：</p>
      <div>
        <Input v-model="licence1" type="textarea" :rows="4" placeholder="请输入从泛融科技获得的链实例运行许可证" />
      </div>
      <p>全链最大文件存储容量许可证：</p>
      <div>
        <Input v-model="licence2" type="textarea" :rows="4" placeholder="请输入从泛融科技获得的链实例整体最大能够存储文件的总容量的许可证" />
      </div>
      <div>
        <Button size="large" long type="primary" @click="bind" class="bind-lic-btn">绑定</Button>
      </div>
      <div class="bind-lic-note">
        * 获得泛融公司颁发的商业许可证，此许可决定本次创建的链实例的节点网络中能够同时在线运行节点服务器的最大数量。
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '2'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>链实例运行许可证绑定成功！</h3>
      <div class="hash-info">
        <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd <button @click="copy" class="copy-hash">复制</button></div>
        <div>全链节点最大数量（个）：500</div>
        <div>全链最大文件存储容量（PB）：10.00</div>
      </div>
      <div class="join-bottom-btns">
        <Button long size="large" class="create-file" @click="create" type="primary">创建新的文件存储域</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: '1',
      licence1: '',
      licence2: '',
      hash: 'fdfdsfds'
    }
  },
  methods: {
    bind () {
      this.step = '2'
    },
    create () {
      this.$emit('next', 'step6.1')
    },
    copy () {
      let hash = this.hash
      let that = this
      this.$copyText(hash).then(function (e) {
        that.$Message.success('复制成功')
      }, function (e) {
        that.$Message.error('复制失败')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .bind-licence {
    .hash-info {
     text-align: left;
     padding: 10px 20px;
    }
    .copy-hash{
      border-color: #AFB3B6;
      cursor: pointer;
      border-radius: 3px;
      padding: 0 10px;
      height:20px;
      line-height: 20px;
      font-size:12px;
      outline: none;
      box-shadow: none;
      color: #9E9E9E;
    }
  }
  .licence-inner {
    width: 520px;
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      margin: 10px 0;
    }
  }
  .bind-lic-btn {
    margin-top: 40px;
  }
  .bind-lic-note {
    color: #A2A2A2;
    line-height: 1.5;
    padding: 5px 0;
  }
</style>
