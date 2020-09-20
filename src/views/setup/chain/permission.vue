<template>
  <div class="permission">
    <div class="permission-in" v-if="step == '1'">
      <h3>创建新的链实例</h3>
      <div class="create-form">
        <div class="clear current-node">
          <div class="fl">全链前置节点访问许可管理配置</div>
        </div>
      </div>
      <div class="anonymous">
        <div class="anonymous-title">
          <span>全链匿名调用访问：</span>
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content="* 如果允许匿名调用访问，则任何前置节点无需授权，均可与链建立访问通道，向链上提交或访问链上数据，除了在黑名单中的前置节点。 * 如果禁止匿名调用访问，则只有白名单中的前置节点才可与链建立访问通道，向链上提交或访问链上数据。"
          >
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
          <RadioGroup class="approval" v-model="anonymousAccess">
            <Radio label="1">允许</Radio>
            <Radio label="2">禁止</Radio>
          </RadioGroup>
        </div>
        <div class="list">
          <div class="clear">
            <span>全链调用访问【黑名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
            <div class="fr">
              <button @click="addBlack" class="add-ent"><Icon type="md-add-circle" />添加</button>
            </div>
          </div>
          <div class="list-table">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </div>
        <div class="list">
          <div class="clear">
            <span>全链调用访问【白名单】：</span>
            <Tooltip
              placement="top"
              max-width="600"
              transfer
              content='在“匿名调用访问”选择“禁止”时，允许特定的前置节点与链建立访问通道，只有被允许的前置节点才可以向链上提交或访问链上数据。'>
              <Icon type="ios-information-circle-outline" />
            </Tooltip>
            <div class="fr">
              <button @click="addWhite" class="add-ent"><Icon type="md-add-circle" />添加</button>
            </div>
          </div>
          <div class="list-table">
            <Table :columns="columns2" :data="data2"></Table>
          </div>
          <div class="next-step">
            <Button long type="primary" size="large" @click="create">确认创建</Button>
          </div>
          <div class="confirm-note">*请通过身份签名安全插件，用服务器所属企业身份标识完成签名确认。</div>
        </div>
      </div>
    </div>
    <div class="join-chain-in approval" v-if="step == '2'">
      <div class="wait-img">
        <img src="~@/assets/setup/waitting.png" alt="">
      </div>
      <h3>链实例创建中，请耐心等待...</h3>
      <div class="time-info">
        <div class="start-time">开始时间：{{startdate}}</div>
        <div class="approval-time">创建耗时：{{formatDuration}}</div>
      </div>
      <div class="join-bottom-btns">
        <!-- <Button long class="create-file" type="primary">绑定链实例运行许可证</Button> -->
      </div>
    </div>
    <div class="join-chain-in join-success" v-if="step == '3'">
      <div class="success-img">
        <img src="~@/assets/setup/success.png" alt="">
      </div>
      <h3>链实例创建成功！</h3>
      <div class="hash-info">链实例唯一标识：{{hash}} <button @click="copy" class="copy-hash">复制</button></div>
      <div class="time-info">
        <div class="start-time">开始时间：{{startdate}}</div>
        <div class="approval-time">结束时间：{{enddate}}</div>
      </div>
      <div class="join-bottom-btns">
        <!-- <Button long class="create-file" @click="bind" type="primary">绑定链实例运行许可证</Button> -->
      </div>
    </div>
    <Modal
      v-model="addModal"
      :title="title"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input :placeholder="placeholder1" v-model="name" /></div>
        <div><Input :placeholder="placeholder2" v-model="address" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    let that = this
    let columns1 = [
      {
        title: '前置节点名称',
        key: 'name'
      },
      {
        title: '前置节点身份标识地址',
        key: 'address'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, '删除')
        }
      }
    ]
    let columns2 = [
      {
        title: '前置节点名称',
        key: 'name'
      },
      {
        title: '前置节点身份标识地址',
        key: 'address'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data2.splice(index, 1)
              }
            }
          }, '删除')
        }
      }
    ]
    let data1 = []

    let data2 = []
    return {
      anonymousAccess: '2',
      columns1,
      columns2,
      data1,
      data2,
      step: '1',
      whiteList: [],
      blackList: [],
      type: '1', // 1黑名单 2白名单
      addModal: false,
      name: '',
      address: '',
      hash: 'klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd',
      title: '添加全链调用访问黑名单',
      placeholder1: '请输入前置节点名称',
      placeholder2: '请输入前置节点身份标识地址',
      timer: null, // 定时器
      end: false, // 链创建是否结束
      startdate: '', // 链创建开始时间
      enddate: '', // 链创建结束时间
      duration: '' // 创建耗时
    }
  },
  watch: {
    step (n, o) {
      console.log(n, o)
      if (n === 2) {
        this.creating()
      }
    },
    type (n) {
      if (n === 1) {
        this.title = '添加全链调用访问黑名单'
      } else if (n === 2) {
        this.title = '添加全链调用访问白名单'
      }
      this.name = ''
      this.address = ''
    }
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  computed: {
    formatDuration () {
      let time = this.duration
      let h = Math.floor(time / (60 * 60))
      let m = Math.floor(time % (60 * 60) / 60)
      let s = time % 60
      if (h) {
        return h + '小时' + m + '分钟' + s + '秒'
      } else if (m) {
        return m + '分钟' + s + '秒'
      } else {
        return s + '秒'
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initStartDate()
    },
    initStartDate () {
      let startdate = localStorage.getItem('startdate')
      let enddate = localStorage.getItem('enddate')
      if (startdate && enddate) {
        this.startdate = startdate
        this.enddate = enddate
        this.step = 3
      } else if (startdate) {
        this.step = 2
        this.startdate = startdate
        this.timer = setInterval(() => {
          this.creating()
        }, 1000)
      }
    },
    next (num) {
      this.step = num
      this.timer = setInterval(() => {
        this.creating()
      }, 1000)
    },
    creating () {
      let enddate = Date.now()
      let startdate = localStorage.getItem('startdate')
      console.log(startdate, enddate)
      startdate = new Date(startdate).getTime()
      this.duration = Math.floor((enddate - startdate) / 1000)
      this.$http.post('/fbs/man/pbrun.do').then(res => {
        res = res.data
        if (res.retCode === 1) {
          clearInterval(this.timer)
          let enddate = moment().format('YYYY-MM-DD HH:mm:ss')
          localStorage.setItem('enddate', enddate)
          this.enddate = enddate
          this.end = true
          this.step = 3
        }
      }).catch(err => {
        console.log(err)
      }).then(() => {

      })
    },
    getId () {
      let data = {
        key: 'evfs.manage.chain.id'
      }
      this.$http.post('/fbs/man/pbgpo.do', data).then(res => {
        res = res.data
        console.log(res)
        if (res.data === 1) {

        } else {

        }
      }).catch(err => {
        console.log(err)
      }).then(() => {

      })
    },
    copy () {
      let txt = this.hash
      let that = this
      this.$copyText(txt).then(function (e) {
        that.$Message.success('复制成功')
      }, function (e) {
        that.$Message.error('复制失败')
      })
    },
    create () {
      let whiteListName = []
      let whiteListAddress = []
      let blackListName = []
      let blackListAddress = []
      this.data1.forEach((item, index) => {
        blackListName.push(item.name)
        blackListAddress.push(item.address)
      })
      this.data2.forEach((item, index) => {
        whiteListName.push(item.name)
        whiteListAddress.push(item.address)
      })
      let anonymousAccess = this.anonymousAccess === '1'
      let data = {
        anonymousAccess, whiteListName, whiteListAddress, blackListName, blackListAddress
      }
      this.$http.post('/fbs/man/pbsnw.do', data).then(res => {
        res = res.data
        if (res.retCode === 1) {
          let startdate = moment().format('YYYY-MM-DD HH:mm:ss')
          localStorage.setItem('startdate', startdate)
          this.startdate = startdate
          this.duration = 0
          this.next('2')
        }
      }).catch(() => {

      }).then(() => {

      })
    },
    bind () {
      this.$emit('next', 'step5')
    },
    addBlack () {
      this.type = 1
      this.addModal = true
    },
    addWhite () {
      this.type = 2
      this.addModal = true
    },
    ok () {
      let type = this.type
      let name = this.name.trim()
      let address = this.address.trim()
      if (!name || !address) {
        this.$Message.error('请输入前置节点名称或者前置节点身份标识地址')
        return
      }
      let data = {
        name, address
      }
      if (type === 1) {
        this.data1.push(data)
      } else if (type === 2) {
        this.data2.push(data)
      }
      this.addModal = false
      this.name = ''
      this.address = ''
    },
    cancel () {
      this.name = ''
      this.address = ''
    }
  }
}
</script>

<style lang="less" scoped>
.approval {
  text-align: left;
  margin-left: 20px;
  padding: 10px 0;
  h3 {
    text-align: center;
  }
  .time-info {
    width: 250px;
    margin: 30px auto;
  }
}
.permission-in {
  & > h3 {
    font-size: 24px;
  }
}
.anonymous-title {
  padding-bottom: 20px;
  .ivu-tooltip {
    margin-right: 10px;
  }
}
.create-form {
  width: 400px;
  .current-node {
    padding: 18px 0 30px 0;
    .fl {
      color: #16cef1;
      font-weight: 500;
    }
    .fr {
      color: #6094ff;
      padding: 0 10px;
      border: 1px solid #6094ff;
      line-height: 20px;
      border-radius: 10px;
    }
  }
}
.node-network {
  padding-top: 35px;
  .node-network-title {
    color: #16cef1;
    font-size: 18px;
    font-weight: 500;
  }
}
.list {
  .add-ent {
    height: 26px;
    padding: 0 10px;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    text-align: center;
    color: #6094FF;
    border-radius: 12px;
    border: 1px solid #6094FF;
  }
}
.list-table {
  padding-top: 20px;
  padding-bottom: 20px;
}
.next-step {
  width: 400px;
  padding: 40px 0 0 0;
  margin-bottom: 10px;
}
.confirm-note {
  color:rgba(162,162,162,1);
  line-height: 1.5em;
}
.copy-hash{
  border-color: #AFB3B6;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 10px;
  height:20px;
  line-height: 20px;
  font-size:12px;
  outline: none;
  box-shadow: none;
  color:rgba(158,158,158,1);
}
</style>
