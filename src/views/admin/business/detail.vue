<template>
  <div class="business-detail">
    <data-header title="业务域详情"/>
    <div class="business-detail-item">
      <div class="section-title" style="margin-bottom: 4px;"><span>业务域信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>业务域名称：司法业务域</div>
          </Col>
          <Col :span="8">
          <div>业务域唯一标识：00740f...ffbc3</div>
          </Col>
          <Col :span="8">
          <div>创建时间：2020-1-5 10:21:32</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>创建企业名称：从法科技</div>
          </Col>
          <Col :span="8">
          <div>创建企业身份标识：00740f...ccbb1</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>备注：创建是描述业务域的作用。</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item padding bg-white mb20" style="margin-top: 20px;">
      <div class="section-title"><span>域内文件操作规则信息</span></div>
      <div>
        <Row style="color: #000;">
          <Col :span="8">
          <div>允许信息监管：<a href="javascript:;">{{biz.information?'允许':'不允许'}}</a></div>
          </Col>
          <Col :span="8">
          <div>允许文件删除：<a href="javascript:;">{{biz.filePermission?'允许':'不允许'}}</a></div>
          </Col>
          <!--          <Col :span="8">-->
          <!--          <div>允许任何人域内保存文件：<a href="javascript:;">{{biz.information?'允许':'不允许'}}</a></div>-->
          <!--          </Col>-->
        </Row>
      </div>
    </div>
    <div class="business-detail-item">
      <div class="chain-content-item">
        <div class="section-title bg-white" style="margin-bottom: 0; padding-bottom: 10px;text-align: left;padding-top: 24px;padding-left: 24px;"><span>业务域运营信息</span></div>
        <div>
          <Row class="bg-white" style="margin-bottom: 10px; padding: 20px 0;">
            <Col :span="8">
            <p><span>{{biz.occupyCapacity}}TB</span></p>
            <div>占用存储容量</div>
            </Col>
            <Col :span="8">
            <p><span>{{biz.bizContractNum}}</span></p>
            <div>域内合约数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{biz.bizSysNum}}</span></p>
            <div>业务系统数量</div>
            </Col>
          </Row>
          <Row class="bg-white" style="padding: 20px 0;">
            <Col :span="8">
            <p><span>{{biz.companyNum}}</span></p>
            <div>接入企业数量</div>
            </Col>
            <Col :span="8">
            <p><span>{{biz.userNum}}</span></p>
            <div>接入用户数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    return {
      biz: {
        // 占用存储容量
        occupyCapacity: '--',
        // 域内合约数量
        bizContractNum: '--',
        // 业务系统数量
        bizSysNum: '--',
        // 接入企业数量
        companyNum: '--',
        // 接入用户数量
        userNum: '--',
        // 域内文件操作规则信息-允许信息监管
        information: '--',
        // 域内文件操作规则信息-允许文件删除
        filePermission: '--'
      }
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init () {
      api.pbqbd({
        biz_id: sessionStorage.getItem('active_biz_id')
      }).then(res => {
        this.biz = {
          ...this.biz,
          ...res
        }
      }).catch(err => {
        this.$Message.error(err.retMsg)
      })
    }
  }
}
</script>

<style lang="less" >
  .business-detail-item {
    color: #7D8B97;
  }
</style>
