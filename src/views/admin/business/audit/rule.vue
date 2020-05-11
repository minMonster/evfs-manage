<template>
  <div class="business-detail">
    <div class="content-title"><span>业务域内文件操作规则设置</span></div>
    <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>信息监管：</span>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>允许信息监管：允许</div>
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
    <div class="bg-white padding" style="margin-bottom: 20px;color: #373737;">
      <div style="margin-bottom: 20px;">
        <span>文件删除权限控制：</span>
        <RadioGroup style="margin: 0 20px;" v-model="switch2">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>文件删除权限控制：允许</div>
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
    </div>
    <div class="padding bg-white mb20">
      <div>
        <span>允许任何人域内保存文件：</span>
        <RadioGroup style="margin: 0 20px;" v-model="switch3">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>允许任何人域内保存文件：允许</div>
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
    </div>
    <div class="bg-white padding mb20">
      <div style="margin-bottom: 25px;color: #273D52;">
        <span>
          <b>业务域调用访问</b>
          <b>【黑名单】</b>：
        </span>
      </div>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page">
        <div class="page-inner">
          <Page :total="total" @on-change="pageChange" />
        </div>
      </div>
    </div>
    <div class="bg-white padding mb20">
      <div style="margin-bottom: 25px;color: #273D52;">
        <span>
          <b>业务域调用访问</b>
          <b>【白名单】</b>：
        </span>
      </div>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
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
  data() {
    var that = this
    var columns1 = [
      {
        title: "用户姓名",
        key: "name"
      },
      {
        title: "用户身份标识",
        key: "address"
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
        width: 120,
        title: '申请人',
        key: 'applicant'
      },
      {
        width: 130,
        title: '审核通过人',
        render(h,p) {
          return h('a',{},'查看')
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
      {name: '张力', address: '008b0f...acfe5',applicant: '张力',  time: '2020-1-5 10:46:18', statuslabel: '删除审核中', status: '2' },
      {name: '李志伟', address: '008b0f...abbc3',applicant: '张力',  time: '--', statuslabel: '添加审核中', status: '1' },
      {name: '郭志', address: '008b0f...edb28',  applicant: '张力',time: '--', statuslabel: '添加审核中', status: '1' },
      {name: '吴载舟', address: '008b0f...aeafc',applicant: '张力', time: '2020-1-5 10:50:11', statuslabel: '删除审核中', status: '2' },
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90,
      columns1, data1
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {

    },
    pageChange(val) {
      
    }
  }
}
</script>

<style>

</style>