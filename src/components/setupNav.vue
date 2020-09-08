<template>
  <div class="setup-nav">
    <div class="setup-nav-inner" @click="nav">
      <Icon type="md-arrow-back" /><span>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    nav () {
      let name = this.$props.step
      this.$emit('on-click', name)
    }
  }
}
</script>

<style lang="less">
  .setup-nav {
    color: #635E5E;
    padding-bottom: 60px;
    .setup-nav-inner {
      display: inline-block;
      cursor: pointer;
    }
    span {
      margin-left: 6px;
    }
  }
</style>
