<template>
  <div>
    <data-header title="数据存管域节点准入许可管理" :btn="true" />
    <!-- <div class="padding bg-white" style="margin-bottom: 20px;">
     <div class="section-title">
        <span>数据存管域节点准入审批</span>
      </div>
      <div>
        <Row>
          <Col :span="6">
            数据存管域节点准入审批
            <Icon type="ios-help-circle-outline" />-->
    <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
    <!-- </Col> -->
    <!-- 文件保存副本数量 -->
    <!-- <Col :span="10">
            <RadioGroup class="approval" v-model="myswitch" style="width: 50%;">
              <Row style="margin-right: 20px;">
                <Col span="12">
                  <Radio label="1">开启</Radio>
                </Col>
                <Col span="12">
                  <Radio label="0">关闭</Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
          <Col :span="8">
            <div class="clear">
              <Button class="fr" style="width: 80px;" type="primary">修改</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div> -->
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">准入节点服务器列表</span>
        <Button type="primary" @click="confirmAdd" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
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
          <Input type="text"  v-model="form.address" placeholder="节点服务器身份标识"></Input>
        </div>
        </Col>
        <Col span="6">
        <div class="condition-item">
          <span class="condition-label">状态：</span>
          <Select v-model="form.status" value="0">
            <Option value="0">全部</Option>
            <Option value="1">已添加</Option>
            <Option value="2">已删除</Option>
            <Option value="3">添加审核中</Option>
            <Option value="4">删除审核中</Option>
          </Select>
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
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '隶属企业名称',
        key: 'name'
      },
      {
        title: '服务器身份标识',
        key: 'address'
      },
      {
        title: '节点类型',
        key: 'nodetype'
      },
      {
        title: '添加时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          let label = ''
          let status = row.status
          if (status == '1') {
            label = '--'
          } else if (status == '2') {
            label = '删除'
          } else if (status == '3') {
            label = '撤销'
          }
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
      { name: '从法科技', address: '00630e...cabc3', nodetype: '主节点', databasename: '——', time: '2020-1-1 12:00:00', statuslabel: '已添加', status: '2' },
      { name: '从法科技', address: '00630e...cacc2', nodetype: '资源节点', databasename: '从法存管域', time: '2020-1-1 12:00:00', statuslabel: '添加审核中', status: '1' },
      { name: '从法科技', address: '00630e...fafc1', nodetype: '主节点', databasename: '从法存管域', time: '2020-1-1 12:00:00', statuslabel: '添加审核中', status: '1' },
      { name: '泛融科技', address: '00630e...fafc7', nodetype: '资源节点', databasename: '从法存管域', time: '2020-1-1 12:00:00', statuslabel: '删除审核中', status: '3' }
      // 泛融科技
    ]
    return {
      myswitch: '1',
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
    // 查询
    search () {
      let that = this
      let storageId = that.$router.params && that.$router.params.storageId
      const url = `/cmw/pbqml.do/${storageId}`
      this.$http.post(url).then(res => {
        res = res.data
        console.log(res)
        if (res.retCode == '1') {
          that.$Message.success('查询成功')
        } else {
          if (res.retMsg) {
            that.$Message.error(res.retMsg)
          }
        }
      }).catch(err => {})
    },
    confirmAdd () {
      this.$router.push('/data-nodeAddAdmin')
    },
    pageChange (value) {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
