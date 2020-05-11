<template>
  <div class="clear chain-baseinfo">
    <h2 class="content-title">{{title}}
      <Button @click="route" v-if="btn" type="primary" style="float: right;margin-top: 10px;">待审核事项</Button>
    </h2>
    <Row class="chain-header-content">
      <Col span="8">
        <div>链实例唯一标识：{{id}}</div>
      </Col>
      <Col span="10">
        <div>链实例创建时间：{{createtime}}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String]
    },
    btn: {
      type: [String, Boolean]
    }
  },
  data() {
    return {
      id: '00740f...aaba8',
      createtime: '2020-1-5 12:00:00'
    }
  },
  methods: {
    route() {
      var name = this.$route.name
      this.$router.push({
        name: 'chain-audit',
        query: {
          mainActive: 'chain',
          subActive: 'chain-audit',
          activeIndex: '0',
          tab: name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .chain-header-content{
    color: #7D8B97;
    margin-bottom: 4px;
  }
</style>