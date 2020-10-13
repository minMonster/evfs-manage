<template>
  <div class="chain-adminstrator">
    <div class="chain-adminstrator-in" v-if="step == '1'">
      <h3>创建新的链实例</h3>
      <h4>链管理员设置</h4>
      <div>
        <div style="margin-bottom: 20px;">
          <span>链管理员决议审批规则：</span>
          <Tooltip placement="top" max-width="600" transfer
                   content='选项说明:所有需要链管理员审批的事务，通过决议的签批规则。* “任意一个成员签批”：链管理员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3成员同时签批”：只有链管理员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3成员同时签批”：只有链管理员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有成员同时签批”： 只有链管理员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-information-circle-outline" />
          </Tooltip>
        </div>
        <div>
          <RadioGroup class="approval" v-model="acceptLimit">
            <Radio label="0">任意一个成员签批</Radio>
            <Radio label="100">1/3成员同时签批</Radio>
            <Radio label="200">2/3成员同时签批</Radio>
            <Radio label="300">所有成员同时签批</Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <div class="adminstrator-mem clear">
          <span>链管理员成员：</span>
          <div class="fr">
            <button @click="addModal = true" class="add-mem">
              <Icon type="md-add-circle" />添加</button>
          </div>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="next-step">
        <Button size="large" long type="primary" @click="create">确认创建</Button>
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
      <!-- <Modal v-model="addModal" title="添加链管理员" @on-ok="ok" @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入链管理员名称" v-model="name" /></div>
          <div><Input placeholder="请输入链管理员身份标识" v-model="address" /></div>
        </div>
      </Modal> -->
    </div>
    <Modal v-model="addModal" title="添加链管理员" @on-ok="ok" @on-cancel="cancel">
      <div class="add-modal-body">
        <div><Input placeholder="请输入链管理员名称" v-model="name" /></div>
        <div><Input placeholder="请输入链管理员身份标识" v-model="address" /></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as sApi from '../setupapi'
export default {
  data () {
    let that = this
    let columns1 = [{
      title: '管理员名称',
      key: 'name'
    },
    {
      title: '管理员身份标识公钥',
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
    let data1 = [

    ]
    return {
      step: '1',
      acceptLimit: '0',
      columns1,
      data1,
      addModal: false,
      name: '',
      address: '',
      timer: null, // 定时器
      end: false, // 链创建是否结束
      startdate: '', // 链创建开始时间
      enddate: '', // 链创建结束时间
      duration: '', // 创建耗时
      hash: '' // 链实例唯一标识
    }
  },
  mounted () {
    this.init()
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
  watch: {
    step (n, o) {
      console.log(n, o)
      if (n === 2) {
        this.creating()
      }
    }
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
    // next() {
    //   this.confirm()
    //   // this.$emit('next', 'step4.3')
    // },
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
      console.log('这里没有查询第0块hash的接口诶～')
      // this.$http.post('/fbs/man/pbrun.do').then(res => {
      //   res = res.data
      //   if (res.retCode === 1) {
      //     clearInterval(this.timer)
      //     let enddate = moment().format('YYYY-MM-DD HH:mm:ss')
      //     localStorage.setItem('enddate', enddate)
      //     this.enddate = enddate
      //     this.end = true
      //     this.step = 3
      //   }
      // }).catch(err => {
      //   console.log(err)
      // }).then(() => {

      // })
      // sApi.pb
    },
    create () {
      let acceptLimit = this.acceptLimit
      let data = this.data1
      let name = []
      let address = []
      if (data.length) {
        data.forEach((item, index) => {
          name.push(item.name)
          address.push(item.address)
        })
      }
      let param = {
        name,
        address,
        acceptLimit
      }
      sApi.pbsai(param).then(res => {
        if (res && res.retCode === 1) {
          // 调用方法，并且开始计时
          // 调用接口
          // 确认创建新链
          sApi.pbsnc({
            ip: sessionStorage.getItem('setup_ip'),
            memory: sessionStorage.getItem('setup_memory')
          }).then(() => {
            let startdate = this.$moment().format('YYYY-MM-DD HH:mm:ss')
            localStorage.setItem('startdate', startdate)
            this.startdate = startdate
            this.duration = 0
            this.next('2')
          })
          // this.$emit('next', 'step4.4')
        }
      }).catch(err => {
        this.$Message.error('操作失败')
      }).then(() => {

      })
      // this.$http.post('/fbs/man/pbsai.do', param).then(res => {
      //   res = res.data
      //   if (res.retCode == '1') {
      //     this.$emit('next', 'step4.4')
      //   }
      // }).catch(err => {
      //   // this.$Message.error('')
      // }).then(() => {

      // })
    },
    ok () {
      let name = this.name.trim()
      let address = this.address.trim()
      if (!name) {
        this.$Message.error('请输入委员名称')
        return
      }
      if (!address) {
        this.$Message.error('请输入委员身份地址')
        return
      }
      let data = {
        name,
        address
      }
      this.data1.push(data)
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

<style lang="less">
  .chain-adminstrator-in {
    h3 {
      font-size: 24px;
    }

    h4 {
      color: #16CEF1;
      padding: 18px 0;
    }
  }

  .adminstrator-mem {
    padding: 30px 0;
  }

  .next-step {
    width: 500px;
    margin: 30px 0;
  }

  .add-mem {
    background: transparent;
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
</style>
