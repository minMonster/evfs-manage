<template>
  <div>
     <div class="content-title"><span>数据存管域节点准入许可管理</span></div>
    <!-- <data-header title="数据存管域节点准入许可管理" :btn="true" />
    <div class="content-title clear"><span></span></div> -->
    <!-- <div class="padding bg-white" style="margin-bottom: 20px;">
      <div class="section-title">
        <span>数据存管域节点准入审批</span>
      </div>
      <div>
        <Row>
          <Col :span="5">
            数据存管域节点准入审批
            <!-- <Icon type="ios-help-circle-outline" /> -->
            <!-- <Tooltip
              placement="top"
              max-width="600"
              transfer
            >
              <Icon type="ios-help-circle-outline" />
            </Tooltip> 
          </Col>-->
          <!-- 文件保存副本数量 -->
          <!--<Col :span="10">
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
            <div>数据存管域节点准入审批：开启</div>
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
    </div> -->
    <div class="padding bg-white mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600; margin-bottom: 30px;display: block;">准入节点服务器列表</span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。'>
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
      </div>
      <!-- <Row>
        <Col span="5">
          <div class="condition-item">
            <span class="condition-label">隶属企业名称：</span>
            <Input type="text" placeholder="隶属企业名称"></Input>
          </div>
        </Col>
        <Col span="7">
          <div class="condition-item">
            <span class="condition-label">服务器身份标识：</span>
            <Input type="text" placeholder="节点服务器身份标识"></Input>
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
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <!-- <div class="padding bg-white mb20">
      <div class="section-title"><span>数据存管域节点准入企业名单</span></div>
      <div>
        <Table :columns="columns2" :data="data2"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div class="section-title"><span>准入节点服务器列表【黑名单】</span></div>
      <div>
        <Table :columns="columns3" :data="data3"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div> -->
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
        key: 'nodetype'
      },
      {
        title: '节点类型',
        key: 'type'
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
      {name: '从法科技', address: '00630e...cabc3', nodetype:'主节点', time: '--',type: '主节点',applicant: '张力', statuslabel: '添加审核中', status: '2' },
      {name: '泛融科技', address: '00740f...dafc7', nodetype:'资源节点', time: '2020-1-5 10:05:13',type: '资源节点',applicant: '张力', statuslabel: '删除审核中', status: '2' },
    ]
    return {
      myswitch: '1',
      columns1,
      data1,
      total: 100,
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
    pageChange(value) {
      
    }
  }
}
</script>

<style lang="less" scoped>

</style>