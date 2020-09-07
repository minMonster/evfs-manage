<template>
  <div class="data-permission">
     <div class="content-title"><span>数据存管域运行许可证管理</span></div>
    <!-- <data-header title="数据存管域运行许可证管理" :btn="true"/> -->
    <div class="bg-white" style="margin-bottom: 20px;">
      <div class="chain-content">
        <div class="sub-content-title">存管域内存储存量许可信息</div>
        <div class="chain-content-item">
          <Row>
            <Col span="8">
              <p>5.00<span>TB</span></p>
              <div>存储许可总容量</div>
            </Col>
            <Col span="8">
              <p>1.22<span>TB</span></p>
              <div>已发放存储许可容量</div>
            </Col>
            <Col span="8">
              <p>3.78 <span>TB</span></p>
              <div>未发存储许可容量</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
      <div class="padding bg-white mb20">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span style="color: #273D52;font-weight: 600; margin-bottom: 30px;display: block;">存管域内存储容量许可分布信息</span>
      </div>
       <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange"/>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white" style="margin-bottom: 20px;">
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
        <Button type="primary">扩容申请</Button>
        <div class="data-tips">
          * 从链实例的文件存储总容量中申请本数据存管域可保存文件总容量。即链实例的文件存储总容量中可用容量会因分配给数据存管域而随之变少。
        </div>
      </div>
    </div>
    <div class="bg-white padding">
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
      {name: '从法科技', address: '00630e...cabc3', nodetype:'主节点', time: '--',applicant: '张力', statuslabel: '添加审核中', status: '2' },
      {name: '泛融科技', address: '00740f...dafc7', nodetype:'资源节点', time: '2020-1-5 10:05:13',applicant: '张力', statuslabel: '删除审核中', status: '2' },
    ]
    return {
      input1: '10000',
      input2: '10',
      select1: 'MB',
      columns1,data1,
      total:100
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
    pageChange(){
      
    }
  }
}
</script>

<style lang="less" scoped>

</style>