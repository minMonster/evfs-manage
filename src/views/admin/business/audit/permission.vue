<template>
  <div class="node-admission">
    <div class="content-title"><span>业务系统访问许可管理</span></div>
    <!-- <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>业务域匿名调用访问：</span>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>业务域匿名调用访问：允许</div>
          <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
        </div>
        <div class="audit-item-btns">
          <div class="btn-inner">
            <button class="refuse-btn">拒绝</button>
            <button class="agree-btn">同意</button>
          </div>
        </div>
      </div>
    </div> -->
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
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '业务系统名称',
        key: 'name'
      },
      {
        title: '业务域身份标识',
        key: 'address'
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
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.adds(row)
              }
            }
          }, '查看')
        }
      },
      {
        title: '操作',
        render (h, p) {
          let agree = h('a', {
            style: {
              marginRight: '8px'
            },
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                // let index = p.index
              }
            }
          }, '拒绝')
          return h('div', {
            'class': 'opt-btns'
          }, [
            agree, refuse
          ])
        }
      }
    ]
    let data1 = [
      { name: '上海公证系统', address: '00740f...aaba8', applicant: '张力', time: '2020-1-5 10:45:25', statuslabel: '删除审核中', status: '2' },
      { name: '四川公证系统', address: '00da0c...cfbe5', applicant: '张力', time: '--', statuslabel: '添加审核中', status: '1' },
      { name: '四川公证系统', address: '00da0c...cfbe5', applicant: '张力', time: '--', statuslabel: '添加审核中', status: '1' }
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
        address: ''
      },
      switch1: '0'
    }
  },
  mounted () {
    this.init()
  },
  watch: {},
  computed: {},
  methods: {
    init () {},
    // 查看
    adds (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + ' <br>time：' + obj.time + '',
        oktext: '关闭'
      })
    },
    ok () {},
    cancel () {},
    pageChange (page) {
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
    color: #6094ff;
    background: #fff;
    border: 1px solid #6094ff;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: none;
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
