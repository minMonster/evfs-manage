<template>
  <div class="data-manager">
    <data-header title="数据存管域管理员管理" :btn="true"/>
    <div>
      <div class="bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>数据存管域管理员决议审批规则</span>
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
            <Radio label="0">任意一个成员签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="100">1/3成员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="200">2/3成员同时签批</Radio>
            </Col>
            <Col span="6">
            <Radio label="300">所有成员同时签批</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </div>
      <div class="bg-white padding">
        <div class="league-mem">
          <span>数据存管域管理</span>
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
            <!--            <Col span="6">-->
            <!--            <div class="condition-item">-->
            <!--              <span class="condition-label">状态：</span>-->
            <!--              <Select v-model="form.status">-->
            <!--                <Option value="0">全部</Option>-->
            <!--                <Option value="1">已添加</Option>-->
            <!--                <Option value="2">已删除</Option>-->
            <!--                <Option value="3">添加审核中</Option>-->
            <!--                <Option value="4">删除审核中</Option>-->
            <!--              </Select>-->
            <!--            </div>-->
            <!--            </Col>-->
            <Col span="6">
            <div class="condition-item">
              <Button style="width: 80px;" @click="search" type="primary">查询</Button>
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
      {
        title: '操作',
        width: 100,
        render (h, p) {
          let row = p.row
          console.log(row)
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
      rule: '',
      addModal: false,
      listLoading: false,
      columns,
      oldList: [
        // {
        //   'member_id': 1,
        //   'member_address': '1',
        //   'main_committeegroup_group_id': '1',
        //   'join_time': 1598345923000,
        //   'member_name': '名称'
        // }
      ],
      list: [],
      page: {
        total: 1,
        current: 1,
        size: 10
      },
      addLoading: false,
      form: {
        name: '',
        address: '',
        status: ''
      }
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
    init () {
      this.listLoading = true
      api.pbqml({
        'groupId': '4', // 组织类型 枚举 "1": 联盟委员会,"2": 链管理员,"3": 数据存管域,"4": 业务域
        'dataId': sessionStorage.getItem('fbs_storage_id'),
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        if (res.rule) {
          this.rule = res.rule
        }
        this.getList()
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
      //   return
      // }
      // this.add()
    },
    add () {
      // let address = this.address.trim()
      // let name = this.name.trim()
      // this.addLoading = true
      // let data = {
      //   address, name
      // }
      // this.$http.post('', data).then(res => {
      //   res = res.data
      // }).catch(() => {
      //
      // }).then(res => {
      //   this.cancel()
      // })
    },
    cancel () {
      // this.name = ''
      // this.address = ''
      // this.addModal = false
      // this.addLoading = false
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
  .approval {
    display: block;
    & > div {
      padding: 6px 0;
    }
  }
  .league-mem {
    padding: 12px 0 20px 0;
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
