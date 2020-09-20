<template>
  <div class="clear chain-baseinfo">
    <h2 class="content-title">{{title}}
      <Button @click="route" v-if="btn" type="primary">待审核事项</Button>
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
  data () {
    return {
      id: '00740f...aaba8',
      createtime: '2020-1-5 12:00:00'
    }
  },
  methods: {
    route () {
      let address = localStorage.getItem('money-address')
      let params = {
        address
      }
      this.$http.post('/cmw/pbqpr.do', params).then(res => {
        res = res.data
        if (res.resCode == '1') {
          this.$Message.success('查询成功')
        } else {
          if (data.retMsg) {
            that.$Message.warning(data.retMsg)
          }
        }
      }).catch(err => {

      }).then(res => {

      })

      let name = this.$route.name
      let query = this.$route.query
      this.$router.push({
        name: 'chain-audit',
        query: {
          ...query,
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
  .chain-baseinfo {
    position: relative;
    .ivu-btn {
      position: absolute;
      bottom: -2px;
      right: 10px;
      z-index: 3;
    }
  }
</style>
