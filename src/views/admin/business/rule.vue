<template>
  <div class="business-detail">
    <data-header title="业务域内文件操作规则设置" :btn="true"/>
    <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>信息监管：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
      >
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;margin-top: -5px; ">修改</Button>
    </div>
    <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <div style="margin-bottom: 20px;">
        <span>文件删除权限控制：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <RadioGroup style="margin: 0 20px;" v-model="switch2">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
      </div>
      <div>
        <span>允许任何人域内保存文件：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <RadioGroup style="margin: 0 20px;" v-model="switch3">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
      </div>
    </div>
    <!-- <div class="bg-white padding">
      <div style="margin-bottom: 25px;color: #273D52;">
        <span>
          <b>业务域调用访问</b>
          <b>【白名单】</b>：
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button type="primary" style="float: right;">添加</Button>
      </div>
      <Row>
        <Col span="5">
          <div class="condition-item">
            <span class="condition-label">用户姓名：</span>
            <Input type="text" placeholder="用户姓名"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">用户身份标识：</span>
            <Input type="text" placeholder="用户身份标识"></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">状态：</span>
            <Select value="0">
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
            <Button style="width: 80px;" type="primary">查询</Button>
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
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    // let that = this
    // let columns1 = [
    //   {
    //     title: "用户姓名",
    //     key: "name"
    //   },
    //   {
    //     title: "用户身份标识",
    //     key: "address"
    //   },
    //   {
    //     title: '添加时间',
    //     key: 'time'
    //   },
    //   {
    //     title: '状态',
    //     key: 'statuslabel'
    //   },
    //   {
    //     title:'操作',
    //     render(h,p) {
    //       let row = p.row || {}
    //       let label = '--'
    //       let status = row.status
    //       if (status == '2') {
    //         label = '删除'
    //       }
    //       if (status == '3') {
    //         label = '撤销'
    //       }
    //       return h('a', {
    //         on: {
    //           click() {
    //             let index = p.index
    //             if (status == '2') {
    //               that.data1.splice(index,1)
    //             }
    //           }
    //         }
    //       }, label)
    //     }
    //   }
    // ]
    // let data1 = [
    //   {name: '张力', address: '008b0f...acfe5',  time: '2020-1-5 10:46:18', statuslabel: '已添加', status: '2' },
    //   {name: '李志伟', address: '008b0f...abbc3',  time: '--', statuslabel: '添加审核中', status: '1' },
    //   {name: '郭志', address: '008b0f...edb28',  time: '--', statuslabel: '添加审核中', status: '1' },
    //   {name: '吴载舟', address: '008b0f...aeafc', time: '2020-1-5 10:50:11', statuslabel: '删除审核中', status: '2' },
    // ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0'

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
    pageChange (val) {

    }
  }
}
</script>

<style>

</style>
