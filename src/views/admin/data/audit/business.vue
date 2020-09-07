<template>
  <div class="data-business">
    <div class="content-title"><span>数据存管域内业务域授权管理</span></div>
    <!--<div class="padding bg-white" style="margin-bottom: 20px;">
      <div class="section-title">
        <span>业务域创建审批</span>
      </div>
      <div>
        <Row>
          <Col :span="6">
            业务域创建审批：
            <Icon type="ios-help-circle-outline" />
            <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> -->
         <!-- </Col>-->
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
        </Row>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>业务域创建审批：关闭</div>
            <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
          </div>
          <div class="audit-item-btns">
            <div class="btn-inner">
              <button class="refuse-btn">拒绝</button>
              <button class="agree-btn">同意</button>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- <div class="bg-white padding" style="margin-bottom: 20px;color: #373737;">
      <span>数据存管域创建审批：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup 
        style="margin: 0 20px;"
        v-model="switch1">
        <Radio label="1">开启</Radio>
        <Radio label="0">关闭</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;">修改</Button>
    </div> -->
    <div class="padding bg-white" style="margin-bottom: 20px;">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600;display: block; margin-bottom: 30px;">业务域列表</span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
      </div>
      <!-- <Row>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">业务域名称：</span>
            <Input type="text" placeholder="请填写"></Input>
          </div>
        </Col>
        <Col span="8">
          <div class="condition-item">
            <span class="condition-label">业务域唯一标识：</span>
            <Input type="text" placeholder="请填写"></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <Button style="width: 80px;" type="primary">查询</Button>
          </div>
        </Col>
      </Row> -->
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
   <!-- <div class="padding bg-white clear">
      <div style="margin-bottom: 20px;color: #273D52;" class="clear">
        <span style="color: #273D52;font-weight: 600; display: block;margin-bottom: 30px;">创建许可企业列表</span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
        <!-- <Button type="primary" style="float: right;">添加</Button> -->
     <!-- </div>-->
      <!-- <Row>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">企业名称：</span>
            <Input type="text" placeholder="企业名称"></Input>
          </div>
        </Col>
        <Col span="6">
          <div class="condition-item">
            <span class="condition-label">企业身份标识：</span>
            <Input type="text" placeholder="企业身份标识"></Input>
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
      </Row> -->
      <!-- <div>
        <Table :columns="columns2" :data="data2"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var that = this
    var columns1 = [
      {
        title: "业务域名称",
        key: "name"
      },
      {
        title: "业务域唯一标识",
        key: "address"
      },
      {
        title: '创建时间',
        key: 'time'
      },
      {
        title: '状态',
        key: 'statuslabel'
      },
      {
        title: '申请人',
        key: 'applicant'
      },
      {
        title: '审核通过人',
        render(h,p) {
          var row = p.row
          return h('a',{
            on:{
              click() {
                that.adds(row)
              }
            }
          },'查看')
        }
      },
      {
        title:'操作',
        render(h,p) {
          var agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click() {
                var index = p.index
                
              }
            }
          },'同意')
          var refuse =  h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click() {
                var index = p.index
              }
            }
          },'拒绝')
          return h('div',{
            'class': 'opt-btns'
          },[
            agree, refuse
          ])
        }
      }
    ]
    var data1 = [
      {name: '泛融存证业务', address: '00740f...aaba8',applicant: '张力', time: '2020-1-1 12:00:00', statuslabel: '创建审核中', status: '0' },
      {name: '司法业务域', address: '00da0c...cfbe5', applicant: '张力',time: '2020-1-1 12:00:00', statuslabel: '已创建', status: '2' },
    ]
    return {
      acceptLimit: '1/3',
      myswitch: '1',
      name: '',
      address: '',
      addModal: false,
      columns1,
      data1,
      total: 100,
      form: {
        name: '',
        address: ''
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

    },
    //查看
    adds(obj){
          this.$Modal.confirm({
             title: '已审核人列表',
             content:'name：'+obj.name +'<br> address：'+obj.address+' <br>time：'+obj.time+'',
             oktext:"关闭"
         })
    },
    ok() {

    },
    cancel() {

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