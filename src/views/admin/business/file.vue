<template>
  <div class="business-detail">
    <business-header title="业务域内文件治理" :btn="true"/>
    <div class="bg-white padding">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>文件监管</b>
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">文件名称：</span>
          <Input type="text" v-model="form.name" placeholder="文件名称"></Input>
        </div>
        </Col>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">文件链上唯一标识：</span>
          <Input type="text" v-model="form.address" placeholder="文件链上唯一标识："></Input>
        </div>
        </Col>
        <!-- <Col span="6">
          <div class="condition-item">
            <span class="condition-label">状态：</span>
            <Select value="0">
              <Option value="0">全部</Option>
              <Option value="1">冻结</Option>
              <Option value="2">正常</Option>
              <Option value="2">冻结审核中</Option>
              <Option value="2">解冻审核中</Option>
            </Select>
          </div>
        </Col> -->
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
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
    <div class="bg-white padding clear" style="margin-top:20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>结构数据监管</b>
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <Row>
        <Col span="8">
        <div class="condition-item">
          <span class="condition-label">数据链上唯一标识：</span>
          <Input type="text" placeholder="数据链上唯一标识："></Input>
        </div>
        </Col>

        <Col span="6">
        <div class="condition-item">
          <Button style="width: 80px;" type="primary">查询</Button>
        </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns2" :data="data2"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let columns1 = [
      {
        title: '文件名称',
        key: 'name'
      },
      {
        title: '文件链上唯一标识',
        key: 'id'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          let label = '--'
          let status = row.status
          if (status === '1') {
            label = '冻结'
          }
          if (status === '2') {
            label = '解冻'
          }
          if (status > 2) {
            label = '撤销'
          }
          return h('a', {
            on: {
              click () {
                if (status === '2') {

                }
              }
            }
          }, label)
        }
      }
    ]
    let data1 = [
      { name: '测试.doc', id: '00fb0a...ef34a', statuslabel: '正常', status: '1' },
      { name: '照片.jpg', id: '00fb0a...eda4e', statuslabel: '冻结', status: '2' },
      { name: '视频.MP4', id: '00fb0a...eac4f', statuslabel: '解冻审核中', status: '4' },
      { name: '音频.MP3', id: '00fb0a...a43fe', statuslabel: '冻结审核中', status: '3' }
    ]
    let columns2 = [
      {
        title: '数据链上唯一标识',
        key: 'id'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          let label = '--'
          let status = row.status
          if (status === '1') {
            label = '冻结'
          }
          if (status === '2') {
            label = '解冻'
          }
          if (status > 2) {
            label = '撤销'
          }
          return h('a', {
            on: {
              click () {
                if (status === '2') {

                }
              }
            }
          }, label)
        }
      }
    ]
    let data2 = [
      { id: '00fb0a...ef34a', statuslabel: '正常', status: '1' },
      { id: '00fb0a...eda4e', statuslabel: '冻结', status: '2' },
      { id: '00fb0a...eac4f', statuslabel: '解冻审核中', status: '4' },
      { id: '00fb0a...a43fe', statuslabel: '冻结审核中', status: '3' }
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1,
      data1,
      columns2,
      data2,
      form: {
        name: '',
        address: ''
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

    },
    search () {},
    pageChange (val) {

    }
  }
}
</script>

<style>

</style>
