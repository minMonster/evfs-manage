<template>
  <div class="create-field field-licence">
    <div class="field-licence-inner" v-if="step == '1'">
      <h3>创建新的文件存储域</h3>
      <h4>文件存储域运行许可证绑定</h4>
      <div class="licence-wrapper">
        <span>域内最大文件存储容量：</span>
        <Input placeholder="" style="width: 200px;" v-model="capacity"/>
        <Select v-model="unit" style="width: 200px;margin: 0 10px;">
          <Option v-for="item in units" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div class="licence-note">
          * 从链实例的文件存储总容量中申请本文件存储域可保存文件总容量。即链实例文件存储总容量可分配给其它新建文件存储域的可用容量将会变少。
        </div>
        <div class="next-step">
          <Button long type="primary" size="large" @click="next">创建文件存储域</Button>
        </div>
      </div>
    </div>
    <div class="join-chain-in join-success field-waitting" v-if="step == '2'">
      <div class="success-img">
        <img src="~@/assets/setup/waitting.png" alt="">
      </div>
      <h3>文件存储域创建中，请耐心等候...</h3>
      <div class="hash-info">
        <div>文件存储域名称：银行联盟文件存储域</div>
        <div>文件存储域ID：AHSH172SAHSH172SAHSH172SAHSH172SAHSH172S<button @click="copy" class="copy-hash">复制</button></div>
      </div>
      <div class="time-info">
        <div class="start-time">开始时间：2020-1-1 12:00:00</div>
        <div class="approval-time">创建耗时：22分钟15秒</div>
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '3'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>节点域创建成功！</h3>
      <div class="hash-info" style="padding: 20px;">
        <div>链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd <button @click="copy2" class="copy-hash">复制</button></div>
        <div>文件存储域名称：银行联盟文件存储域</div>
        <div>域内最大文件存储容量： 10.00 GB</div>
      </div>
      <div class="time-info">
        <div class="start-time">开始时间：2020-1-1 12:00:00</div>
        <div class="approval-time">结束时间：2020-1-1 12:00:00</div>
      </div>
      <div class="join-bottom-btns">
        <Button long class="create-file" @click="admin" type="primary">进入管理页面</Button>
      </div>
    </div>
  </div>
</template>

<script>
let units = [
  { value: '1', label: 'MB' },
  { value: '2', label: 'GB' },
  { value: '3', label: 'TB' },
  { value: '4', label: 'PB' }
]
export default {
  data () {
    return {
      hash: 'dd',
      step: '3',
      capacity: '100.00',
      unit: '1',
      units
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    next () {
      this.step = '2'
    },
    copy () {
      let hash = this.hash
      let that = this
      this.$copyText(hash).then(function (e) {
        that.$Message.success('复制成功')
      }, function (e) {
        that.$Message.error('复制失败')
      })
    },
    copy2 () {
      let hash = this.hash
      let that = this
      this.$copyText(hash).then(function (e) {
        that.$Message.success('复制成功')
      }, function (e) {
        that.$Message.error('复制失败')
      })
    },
    admin () {
      this.$router.push({
        name: 'admin'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .licence-wrapper {
    padding: 20px 0;
  }
  .field-waitting {
    .hash-info {
      text-align: left;
      padding: 10px 50px;
    }
  }
  .licence-note {
    margin: 30px 0;
    width: 700px;
    padding: 10px;
    line-height: 1.5;
    background:rgba(23,190,222,0.04);
    border-radius:4px;
    border:1px solid rgba(23,190,222,1);
  }
  .copy-hash{
    margin-left: 10px;
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
</style>
