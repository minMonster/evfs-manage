<template>
  <div class="node-admission">
    <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;">< 退出</div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;font-size:18px;">业务域基础信息设置</span>
      </div>
      <div class="split-line"></div>
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;font-size:15px;">基本信息</span>
      </div>
      <div class="split-line"></div>
      <Row>
        <Col span="12">
        <div class="condition-item">
          <span class="condition-label">业务域名称：</span>
          <Input type="text" placeholder="请输入全链唯一的业务域名称"></Input>
        </div>
        </Col>
        <Col span="6">
        <div class="condition-item">
          <Button style="width: 100px;" type="primary">唯一性检测</Button>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div class="condition-item">业务域ID{{BusinessDomain}}</div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div class="condition-item">
          <span class="condition-label">备注：</span>
          <Input type="textarea" placeholder="概述业务域的作用，文字不能超过100字"></Input>
        </div>
        </Col>
      </Row>
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>数据存管域管理员决议审批规则</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup class="approval" v-model="acceptLimit">
        <Row>
          <Col span="6">
          <Radio label="0">任意一个成员签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="1/3">1/3成员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="2/3">2/3成员同时签批</Radio>
          </Col>
          <Col span="6">
          <Radio label="3/3">所有成员同时签批</Radio>
          </Col>
        </Row>
      </RadioGroup>
    </div>
    <div class="bg-white padding" style="margin-bottom:20px">
      <div class="league-mem">
        <span>数据存管域管理</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button @click="addModal = true" type="primary" class="fr">添加</Button>
      </div>
      <Table :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom:20px;">
      <div class="league-mem">
        <span>信息监管</span>
        <div class="split-line"></div>
      </div>
      <div style="margin-bottom: 20px;">
        <span>允许信息监管：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <RadioGroup style="margin: 0 20px;" v-model="switch1">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止(默认)</Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom:20px;">
      <div class="league-mem">
        <span>文件权限控制</span>
        <div class="split-line"></div>
      </div>
      <div style="margin-bottom: 20px;">
        <span>允许文件删除：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <RadioGroup style="margin: 0 20px;" v-model="switch2">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止(默认)</Radio>
        </RadioGroup>
      </div>
    </div>
    <div style="text-align:center;">
      <Button @click="establish" type="primary" class="fcenter">创建</Button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '管理员名称',
        key: 'name'
      },
      {
        title: '管理员身份标志地址',
        key: 'address'
      },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          let row = p.row
          let label = '删除'
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, label)
        }
      }
    ]
    let data1 = [
      { name: '张建国', address: '008b0f...effbc', type: '删除' },
      { name: '李志伟', address: '008b0f...abbc3', type: '删除' },
      { name: '张力', address: '008b0f...acfe5', type: '删除' }
    ]
    return {
      acceptLimit: '1/3',
      BusinessDomain: '',
      data1,
      columns1,
      total: 100,
      addModal: false,
      switch1: '0',
      switch2: '0'
    }
  },
  mounted () {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init () {

    },
    seraachBtn () {

    },
    pageChange (val) {

    },
    establish () {

    },
    back () {
      window.history.go(-1)
    }
  }

}
</script>
<style lang="less" scoped>
.league-mem {
    padding: 12px 0 20px 0;
    span {
      color: #273D52;
      font-weight: 600;
    }

  }
</style>
