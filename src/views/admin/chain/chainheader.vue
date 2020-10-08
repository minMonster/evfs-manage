<template>
  <div class="clear chain-baseinfo">
    <h2 class="content-title">{{title}}
      <Button @click="route" v-if="btn" type="primary">待审核事项</Button>
    </h2>
    <Row class="chain-header-content">
      <Col span="8">
      <div>链实例唯一标识：{{abridge}}</div>
      </Col>
      <Col span="10">
      <div>链实例创建时间：{{formatCreatetime}}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  props: {
    title: {
      type: [String]
    },
    btn: {
      type: [String, Boolean]
    }
  },
  computed: {
    formatCreatetime () {
      if (!this.createtime) {
        return '--'
      }
      return this.$moment.unix(this.createtime / 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    abridge () {
      if (!this.id) {
        return '--'
      }
      let stringlength = this.id.length
      let fistStr = this.id.substring(0, 6)
      let lastStr = this.id.substring(stringlength - 6, stringlength)
      return fistStr + '.....' + lastStr
    }
  },
  data () {
    return {
      id: '',
      createtime: ''
    }
  },
  created () {
    let pbqci_address = sessionStorage.getItem('pbqci_address')
    let pbqci_joinTime = sessionStorage.getItem('pbqci_joinTime')
    if (pbqci_address && pbqci_joinTime) {
      this.id = pbqci_address
      this.createtime = pbqci_joinTime
      return
    }
    api.pbqci().then(res => {
      sessionStorage.setItem('pbqci_address', res.address)
      sessionStorage.setItem('pbqci_joinTime', res.joinTime)
      this.id = res.address
      this.createtime = res.joinTime
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    route () {
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
