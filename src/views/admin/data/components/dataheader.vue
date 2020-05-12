<template>
  <div class="clear chain-baseinfo">
    <h2 class="content-title">{{title}}
      <Button v-if="btn" @click="route" type="primary">待审核事项</Button>
    </h2>
    <Row class="chain-header-content">
      <Col span="8">
        <div>链实例唯一标识：{{id}}</div>
      </Col>
      <Col span="8">
        <div>链实例创建时间：{{createtime}}</div>
      </Col>
    </Row>
    <Row class="chain-header-content">
      <Col span="8">
        <div>数据存管域名称：{{name}}</div>
      </Col>
      <Col span="8">
        <div>数据存管域唯一标识：{{dataid}}</div>
      </Col>
      <Col span="8">
        <div>创建时间：{{datatime}}</div>
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
      name: '从法存管域',
      dataid: '00740f...facb7',
      createtime: '2020-1-5 12:00:00',
      datatime: '2020-1-5 10:21:32'
    }
  },
  methods: {
    route() {
      var name = this.$route.name
      console.log(name)
      this.$router.push({
        name: 'data-audit',
        query: {
          mainActive: 'data',
          subActive: 'data-audit',
          activeIndex: '1',
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
  }
  .chain-baseinfo {
    position: relative;
    .ivu-btn {
      position: absolute;
      right: 10px;
      bottom: -3px;
      z-index: 2;
    }
  }
</style>