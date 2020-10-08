<template>
  <div class="clear chain-baseinfo">
    <h2 class="content-title">{{title}}
      <Button v-if="btn" @click="route" type="primary">待审核事项</Button>
    </h2>
    <Row class="chain-header-content">
      <Col span="8">
      <div>链实例唯一标识：{{abridge}}</div>
      </Col>
      <Col span="8">
      <div>链实例创建时间：{{formatCreatetime}}</div>
      </Col>
    </Row>
    <Row class="chain-header-content" v-if="storageSession">
      <Col span="8">
      <div>数据存管域名称：{{storageSession.storage_name || '--'}}</div>
      </Col>
      <Col span="8">
      <div>数据存管域唯一标识：{{storageSession.storage_id_format}}</div>
      </Col>
      <Col span="8">
      <div>创建时间：{{storageSession.join_time_format}}</div>
      </Col>
    </Row>
    <Row class="chain-header-content" v-if="bizSession">
      <Col span="8">
      <div>业务域名称：{{bizSession.biz_name || '--'}}</div>
      </Col>
      <Col span="8">
      <div>业务域唯一标识：{{bizSession.biz_id_format}}</div>
      </Col>
      <Col span="8">
      <div>创建时间：{{bizSession.join_time_format}}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
import * as api from '../api'
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
  created () {
    this.bizSession = JSON.parse(sessionStorage.getItem('fbs_biz'))
    this.storageSession = JSON.parse(sessionStorage.getItem('fbs_storage'))
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
  data () {
    return {
      bizSession: null,
      storageSession: null,
      id: '00740f...aaba8',
      name: '从法存管域',
      dataid: '00740f...facb7',
      createtime: '2020-1-5 12:00:00',
      datatime: '2020-1-5 10:21:32'
    }
  },
  methods: {
    route () {
      let name = this.$route.name
      let query = this.$route.query
      this.$router.push({
        name: 'business-audit',
        query: {
          ...query,
          mainActive: 'business',
          subActive: 'business-audit',
          activeIndex: '2',
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
    height: 21px;
    overflow: hidden;
    margin-bottom: 2px;
  }
  .chain-baseinfo {
    position: relative;
    .ivu-btn {
      position: absolute;
      bottom: -3px;
      right: 24px;
      z-index: 2;
    }
  }
</style>
