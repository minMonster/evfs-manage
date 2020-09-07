<template>
  <div class="node-admission">
    <chain-header title="链内主节点授权管理" :btn="true" />
    <!-- <div class="bg-white padding" style="margin-bottom: 10px;color: #373737;">
      <span>主节点授权审批：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup 
        style="margin: 0 20px;"
        v-model="switch1">
        <Radio label="1">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;">修改</Button>
    </div> -->
    <div class="padding bg-white">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;">主节点服务器列表</span>
         <Button type="primary"  @click="confirmAdd" class="fr">添加</Button>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。'>
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
            <Input type="text" v-model="form.address" placeholder="节点服务器身份标识"></Input>
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
  data() {
    var that = this
    var columns1 = [
      {
        title: "隶属企业名称",
        key: "name"
      },
      {
        title: "服务器身份标识",
        key: "address"
      },
      {
        title: '节点类型',
        key: 'nodetype',
        width: 120,
      },
      {
        title: '数据存管域名称',
        key: 'databasename'
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
        title:'操作',
        width: 120,
        render(h,p) {
          var row = p.row || {}
          var label = row.status == '2' ? '收回授权' : '撤销'
          return h('a', {
            on: {
              click() {
                var index = p.index
                that.data1.splice(index,1)
              }
            }
          }, label)
        }
      }
    ]
    var data1 = [
      {name: '从法科技', address: '00630e...cabc3', nodetype:'主节点', databasename: '从法存管域', time: '2020-1-5 9:15:20', statuslabel: '已授权', status: '2' },
      {name: '从法科技', address: '00740f...abcde', nodetype:'主节点', databasename: '从法存管域', time: '--', statuslabel: '申请审核中', status: '1' },
      {name: '从法科技', address: '00740f...fbeda', nodetype:'主节点', databasename: '从法存管域', time: '2020-1-5 13:12:40', statuslabel: '收回授权审核中', status: '1' },
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      columns1,
      data1,
      total: 100,
      form: {
        name: '',
        address: '',
        status:''
      },
      switch1: '0'
    }
  },
  mounted() {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init() {
        this.initList()
    },
    initList(){
         setTimeout(() => {
           this.$http.post('/cmw/pbqmn.do').then(res =>{
             console.log(res)
             if(res.retCode == '1'){
               this.$Message.success('查询成功')
             }else{
               if (res.retMsg) {
                this.$Message.error(res.retMsg)
               }
             }
           }).catch(err => {

           })
         },100)
    },
    ok() {

    },
    cancel() {

    },
    search(){

    },
    confirmAdd(){
           this.$router.push('/chain-nodeManage')
    },
    pageChange(page) {
      console.log(page)
    }
  }
}
</script>

<style lang="less" scoped>
  .approval {
    display: block;
    & > div {
      padding: 6px 0;
    }
  }
  .league-mem {
    padding: 14px 0;
    span {
      color: #273D52;
    }
    .fr {
      color: #6094FF;
      background: #fff;
      border: 1px solid #6094FF;
      padding: 0 8px;
      border-radius: 12px;
      box-shadow: 0;
      outline: none;
      cursor: pointer;
    }
  }
  .add-modal-body {
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
  .condition-item {
    display: flex;
    padding: 10px 10px 20px 0;
    position: relative;
    .condition-label {
      float: left;
      vertical-align: middle;
      line-height: 32px;
    }
    .ivu-input-wrapper {
      width: 50%;
    }
    .ivu-select {
      width: 60%;
    }
  }
</style>