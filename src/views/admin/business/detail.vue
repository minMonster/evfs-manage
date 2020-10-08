<template>
  <div class="business-detail">
    <data-header title="业务域详情"/>
    <div class="business-detail-item">
      <div class="section-title" style="margin-bottom: 4px;"><span>业务域信息</span></div>
      <div>
        <Row>
          <Col :span="8">
          <div>业务域名称：{{bizSession.biz_name || '--'}}</div>
          </Col>
          <Col :span="8">
          <div>业务域唯一标识：{{bizSession.biz_id_format}}</div>
          </Col>
          <Col :span="8">
          <div>创建时间：{{bizSession.join_time_format}}</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>创建企业名称：{{bizSession.main_storage_storage_name || '--'}}</div>
          </Col>
          <Col :span="8">
          <div>创建企业身份标识：{{bizSession.main_storage_storage_id_format}}</div>
          </Col>
        </Row>
        <Row>
          <Col :span="8">
          <div>备注：{{bizSession.information || '--'}}</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="business-detail-item padding bg-white mb20" style="margin-top: 20px;">
      <div class="section-title"><span>域内文件操作规则信息</span></div>
      <div>
        <Row style="color: #000;">
          <Col :span="8">
          <div>允许信息监管：<a href="javascript:;">{{biz.information === '1'?'允许':'不允许'}}</a></div>
          </Col>
          <Col :span="8">
          <div>允许文件删除：<a href="javascript:;">{{biz.filePermission === '1'?'允许':'不允许'}}</a></div>
          </Col>
          <!--          <Col :span="8">-->
          <!--          <div>允许任何人域内保存文件：<a href="javascript:;">{{biz.information?'允许':'不允许'}}</a></div>-->
          <!--          </Col>-->
        </Row>
      </div>
    </div>
    <!--    <div class="business-detail-item">-->
    <!--      <div class="chain-content-item">-->
    <!--        <div class="section-title bg-white" style="margin-bottom: 0; padding-bottom: 10px;text-align: left;padding-top: 24px;padding-left: 24px;"><span>业务域运营信息</span></div>-->
    <!--        <div>-->
    <!--          <Row class="bg-white" style="margin-bottom: 10px; padding: 20px 0;">-->
    <!--            <Col :span="8">-->
    <!--            <p><span>{{biz.occupyCapacity}}TB</span></p>-->
    <!--            <div>占用存储容量</div>-->
    <!--            </Col>-->
    <!--            <Col :span="8">-->
    <!--            <p><span>{{biz.bizContractNum}}</span></p>-->
    <!--            <div>域内合约数量</div>-->
    <!--            </Col>-->
    <!--            <Col :span="8">-->
    <!--            <p><span>{{biz.bizSysNum}}</span></p>-->
    <!--            <div>业务系统数量</div>-->
    <!--            </Col>-->
    <!--          </Row>-->
    <!--          <Row class="bg-white" style="padding: 20px 0;">-->
    <!--            <Col :span="8">-->
    <!--            <p><span>{{biz.companyNum}}</span></p>-->
    <!--            <div>接入企业数量</div>-->
    <!--            </Col>-->
    <!--            <Col :span="8">-->
    <!--            <p><span>{{biz.userNum}}</span></p>-->
    <!--            <div>接入用户数量</div>-->
    <!--            </Col>-->
    <!--          </Row>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    return {
      bizSession: null,
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
    this.bizSession = JSON.parse(sessionStorage.getItem('fbs_biz'))
  },
  methods: {
    init () {
      api.pbqbd({
        biz_id: sessionStorage.getItem('fbs_biz_id')
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
