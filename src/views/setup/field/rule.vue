<template>
  <div class="create-field field-rule">
    <div class="field-rule-inner">
      <h3>创建新的文件存储域</h3>
      <h4>文件存储域固化存储规则设置</h4>
      <div>
        <p style="padding: 20px 0;">文件高可用</p>
      </div>
      <div style="padding-bottom: 20px;">
        <span>文件碎片化数量：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='上链文件将会被系统碎片化随机分散保存。碎片化数量越多，文件将越安全，文件从网络上获取的速度也越快，但文件合并速度将会相应下降。'>
          <Icon type="ios-information-circle-outline" />
        </Tooltip>
        <Select v-model="debris" style="width:200px;margin-left: 20px;">
          <Option v-for="item in 10" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </div>
      <div style="padding-bottom: 20px;">
        <span>文件碎片化数量：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='  上链文件在链中的备份副本数量。数量越多高可用性越强，但是消耗的存储空间也就越多。'>
          <Icon type="ios-information-circle-outline" />
        </Tooltip>
        <Select v-model="copy" style="width:200px;margin-left: 20px;">
          <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </div>
      <div class="next-step">
        <Button size="large" long type="primary" @click="next">下一步</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      debris: 5,
      copy: 3
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    next () {
      this.$emit('next', 'step6.3')
    }
  }
}
</script>

<style lang="less" socped>
  .field-rule-inner {
    font-weight: 500;
  }
</style>
