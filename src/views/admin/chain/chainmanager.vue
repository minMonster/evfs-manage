<template>
  <div class="alliance">
    <chain-header title="链管理员管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>链管理员决议审批规则：</span>
          <input type="hidden" id="signResult">
          <Tooltip
            placement="top"
            max-width="600"
            transfer
            content='选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。'>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
          <Button type="primary" style="float: right;">修改</Button>
        </div>
        <RadioGroup class="approval" v-model="rule">
          <Row>
            <Col span="6">
            <Radio label="0">任意一个联盟委员签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="100">1/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="200">2/3联盟委员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="300">所有联盟委员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>链管理员列表</span>
          <Button @click="addModal = true" type="primary" class="fr">添加</Button>
        </div>
        <div>
          <Row>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员名称：</span>
              <Input type="text" v-model="form.name" placeholder="管理员名称"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">管理员身份标识：</span>
              <Input type="text" v-model="form.address" placeholder="管理员身份标识"></Input>
            </div>
            </Col>
            <Col span="6">
            <div class="condition-item">
              <span class="condition-label">状态：</span>
              <Select v-model="form.status">
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
        </div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
        <div class="page">
          <div class="page-inner">
            <Page
              show-sizer
              :total="page.total"
              :current="page.current"
              @on-change="pageChange"
              @on-page-size-change="sizeChange"/>
          </div>
        </div>
      </div>
      <div v-show="popup">
        <div id="qrcode"></div>
        <div class="over"></div>
      </div>
      <Modal
        v-model="addModal"
        title="添加管理"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <div><Input placeholder="请输入管理员名称" v-model="form.name" /></div>
          <div><Input placeholder="请输入管理员身份标志地址" v-model="form.address" /></div>
        </div>
        <div slot="footer">
          <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >添加</Button>
          <Button style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import * as api from './api'
// import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '管理员名称',
        key: 'member_name'
      },
      {
        title: '管理员身份标志地址',
        key: 'member_address'
      },
      {
        title: '添加时间',
        key: 'join_time'
      },
      // {
      //   title: '状态',
      //   key: 'status'
      // },
      {
        title: '操作',
        width: 100,
        render (h, p) {
          let row = p.row
          let label = row.type === '2' ? '删除' : '撤销'
          return h('a', {
            on: {
              click () {
                let index = p.index
                that.data1.splice(index, 1)
              }
            }
          }, label)
        }
      }
    ]
    return {
      acceptLimit: '1/3',
      addModal: false,
      columns,
      listLoading: false,
      addLoading: false,
      rule: 100,
      oldList: [],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      form: {
        name: '',
        address: '',
        status: ''
      },
      popup: 0
    }
  },
  mounted () {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    async init () {
      this.listLoading = true
      let dataId = await api.pbqgi({
        rule: 'chaingroup' // chaincommittee:链-联盟委员会，chaingroup：链-链管理员
      }).then(res => {
        return res.dataId
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
      api.pbqml({
        'groupId': '2', // 组织类型 枚举 "1": 联盟委员会,"2": 链管理员,"3": 数据存管域,"4": 业务域
        'address': sessionStorage.getItem('fbs_address'), // 登陆人的地址
        'dataId': dataId // /fbs/cmw/pbqgi.do 查询出来的结果 dataId 的值
      }).then(res => {
        this.listLoading = false
        if (res.rows) {
          this.oldList = res.rows
          this.page.total = this.oldList.length
        }
        this.getList()
        if (this.rule) {
          this.rule = res.rule
        }
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    // 添加列表功能
    ok () {
      // let name = this.name.trim()
      // let address = this.address.trim()
      // if (!name) {
      //   this.$Message.error('请输入管理员名称')
      //   return
      // }
      // if (!address) {
      //   this.$Message.error('请输入管理员身份标识密钥')
      // }
      // this.add()
    },
    add () {
    },
    cancel () {
      // this.name = ''
      // this.address = ''
      // this.addModal = false
      // this.addLoading = false
    },
    del (obj) {
      // var index = p.index
      // that.data1.splice(index,1)
    },
    search () {},
    getList () {
      this.list = this.oldList.slice((this.page.current - 1) * this.page.size, this.page.size * this.page.current)
    },
    sizeChange (size) {
      this.page.current = 1
      this.page.size = size
      this.getList()
    },
    // 分页
    pageChange (page) {
      this.page.current = page
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
#qrcode {
   position: fixed;
   border:10px solid  white;
   margin:12px;
   border-radius: 0.25rem;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 1000;
 }
  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.3;//透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
  }
  .approval {
    display: block;
    & > div {
      padding: 6px 0;
    }
  }
  .league-mem {
    padding: 16px 0 20px 0;
    span {
      color: #273D52;
      font-weight: 600;
    }
    // .fr {
    //   color: #6094FF;
    //   background: #fff;
    //   border: 1px solid #6094FF;
    //   padding: 0 8px;
    //   border-radius: 12px;
    //   box-shadow: none;
    //   outline: none;
    //   cursor: pointer;
    // }
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
