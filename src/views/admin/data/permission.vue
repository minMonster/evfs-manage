<template>
  <div class="data-permission">
    <data-header title="数据存管域运行许可证管理" :btn="true"/>
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">域内存储容量信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
            <p>5.00<span>TB</span></p>
            <div>文件存储总容量</div>
            </Col>
            <Col span="8">
            <p>1.22<span>TB</span></p>
            <div>可用文件存储容量</div>
            </Col>
            <Col span="8">
            <p>3.78 <span>TB</span></p>
            <div>已用文件存储容量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">域内节点运行许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
            <p>50</p>
            <div>节点运行许可总量</div>
            </Col>
            <Col span="8">
            <p>5</p>
            <div>已发放节点许可数量</div>
            </Col>
            <Col span="8">
            <p>45</p>
            <div>未发放节点许可数量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="padding bg-white" style="margin-bottom:20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">服务器许可证分布信息</span>
        <!-- <Button type="primary" @click="addModal = true" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">隶属企业名称：</span>
          <Input type="text" v-model="form.name" placeholder="隶属企业名称"></Input>
        </div>
        </Col>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">服务器身份标识：</span>
          <Input type="text" v-model="form.address" placeholder="节点服务器身份标识"></Input>
        </div>
        </Col>
        <Col span="6">
        <div class="condition-item">
          <Button style="width: 80px;" @click="search" type="primary">查询</Button>
        </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;">
      <div class="section-title"><span>域内容量许可操作</span></div>
      <div>
        <Input v-model="input1" style="display: inline-block; width: 200px;"/>
        <Select v-model="select1" style="display: inline-block; width: 200px;margin: 0 20px;">
          <Option value="MB">MB</Option>
          <Option value="GB">GB</Option>
          <Option value="TB">TB</Option>
          <Option value="PB">PB</Option>
        </Select>
        <Button type="primary" @click="application">扩容申请</Button>
        <div class="data-tips">
          * 从链实例的文件存储总容量中申请本数据存管域可保存文件总容量。即链实例的文件存储总容量中可用容量会因分配给数据存管域而随之变少。
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="bg-white padding">
      <div class="section-title"><span>域内节点运行许可操作</span></div>
      <div>
        <Input v-model="input2" style="display: inline-block; width: 200px;"/>
        <span style="margin: 0 20px;">个</span>
        <Button type="primary">扩容申请</Button>
        <div class="data-tips">
          * 从链实例的节点运行许可证总量中申请本数据存管域可独占的节点运行许可证总量。即链实例的节点运行许可证总量中可用数量会因分配给数据存管域而随之变少。
        </div>
      </div>
    </div> -->

</template>

<script>
export default {
  data () {
    var columns1 = [
      {
        title: '隶属企业名称',
        key: 'name'
      },
      {
        title: '服务器身份标识',
        key: 'address'
      },
      {
        title: '现有许可存储容量',
        key: 'nodetype'
      },
      {
        title: '申请新增存储容量',
        key: 'databasename'
      },
      {
        title: '申请状态',
        key: 'statuslabel'
      }
    ]
    var data1 = [
      { name: '从法科技', address: '00630e...cabc3', nodetype: '10TB', databasename: '——', statuslabel: '——' },
      { name: '从法科技', address: '00630e...cacc2', nodetype: '10TB', databasename: '10TB', statuslabel: '申请审核中' },
      { name: '从法科技', address: '00630e...fafc1', nodetype: '2TB', databasename: '——', statuslabel: '——' },
      { name: '泛融科技', address: '00630e...fafc7', nodetype: '5TB', databasename: '5TB', statuslabel: '申请审核中' }
      // 泛融科技
    ]
    return {
      input1: '10000',
      input2: '10',
      select1: 'MB',
      columns1,
      data1,
      total: 100,
      form: {
        name: '',
        address: '',
        status: ''
      }
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
    search () {

    },
    application () {

    },
    pageChange (value) {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
