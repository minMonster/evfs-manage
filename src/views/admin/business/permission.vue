<template>
  <div class="node-admission">
    <business-header title="业务系统访问许可管理" :btn="true"/>
    <!-- <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>业务域匿名调用访问：</span>
      <Tooltip
        placement="top"
        max-width="600"
        transfer
      >
        <Icon type="ios-help-circle-outline" />
      </Tooltip>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <Button type="primary" style="float: right;margin-top: -5px; ">修改</Button>
    </div> -->
    <div class="bg-white padding">
      <div style="margin-bottom: 25px;color: #273D52;">
        <span>
          <b>业务域调用访问</b>
          <b>【白名单】</b>：
        </span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content="功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip>
        <Button type="primary"  @click="confirmAdd" style="float: right;">添加</Button>
      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">业务系统名称：</span>
          <Input type="text" v-model="form.name" placeholder="业务系统名称"></Input>
        </div>
        </Col>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">业务系统身份标识：</span>
          <Input type="text" v-model="form.address" placeholder="业务系统身份标识"></Input>
        </div>
        </Col>
        <!--        <Col span="6">-->
        <!--        <div class="condition-item">-->
        <!--          <span class="condition-label">状态：</span>-->
        <!--          <Select v-model="form.status" value="0">-->
        <!--            <Option value="0">全部</Option>-->
        <!--            <Option value="1">已添加</Option>-->
        <!--            <Option value="2">已删除</Option>-->
        <!--            <Option value="3">添加审核中</Option>-->
        <!--            <Option value="4">删除审核中</Option>-->
        <!--          </Select>-->
        <!--        </div>-->
        <!--        </Col>-->
        <Col span="6">
        <div class="condition-item">
          <Button style="width: 80px;" @click="search" type="primary">查询</Button>
        </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
      </div>
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
  </div>
</template>

<script>
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '业务系统名称',
        key: 'system_name'
      },
      {
        title: '业务系统身份标识',
        key: 'system_id'
      },
      {
        title: '添加时间',
        key: 'join_time',
        render (h, p) {
          let row = p.row
          if (!row.join_time) {
            return h('span', '--')
          } else {
            return h('span', that.$moment.unix(row.join_time / 1000).format('YYYY-MM-DD HH:mm:ss'))
          }
        }
      },
      {
        title: '操作',
        'width': 120,
        render (h, p) {
          let row = p.row
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
                that.del(row)
              }
            }
          }, '删除')
          return h('div', {
            'class': 'opt-btns'
          }, [
            agree
          ])
        }
      }
    ]
    return {
      acceptLimit: '1/3',
      name: '',
      address: '',
      addModal: false,
      listLoading: false,
      columns,
      oldList: [
        {
          'system_id': '1', // 业务系统唯一标识
          'system_name': 'xitong1', // 业务系统名称
          'main_org_org_id': '', // 组织（公司唯一标识）
          'main_storage_storage_id': '', // 所属数据存管域唯一标识
          'main_biz_biz_id': 'f5f5979d7f9d573d7320af14137f41a3b4fd8230', // 业务域唯一标识
          'join_time': 1602320951670 // 加入时间
        }
      ],
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
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      this.listLoading = true
      api.pbqbs({
        'bizId': sessionStorage.getItem('fbs_biz_id'), // 业务域id（业务域唯一标识
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        if (res.rows) {
          this.oldList = res.rows
          this.page.total = this.oldList.length
          this.getList()
        }
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    async del (row) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'),
        'orgAddress': row.main_storage_storage_id, // 节点归属组织地址
        'orgName': row.main_storage_storage_id, // 节点归属组织名称
        'bizSystem': row.system_id, // 业务系统地址(身份标识)
        'name': row.system_name, // 业务系统名称
        'op': 2 // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeMemberApplyContractTxReq',
        'jsBody': JSON.stringify(jsBody)
      }).then(res => {
        return {
          hexTxBody: res.hexTxBody,
          txId: res.txId
        }
      }).catch(err => {
        this.$Message.error(err.retMsg)
        return false
      })
      if (data) {
        this.$qrCodeAuthDialog.show(
          {
            url: 'bs/pbdtx.do',
            data,
            // 这里要写一个闭包函数 返回 需要的 api
            setIntervalFunc: () => cApi.pbgts({ txId: data.txId }),
            func: 'send_trans'
          },
          (resPromise) => {
            // resPromise 轮询的结果 在此处处理业务逻辑
            return resPromise.then(res => {
              // 1待提交；2执行中；3执行完成；4执行失败；5提交失败；6未知状态
              if (res.status === 4 || res.status === 5 || res.status === 6) {
                this.$Message.error(res.remark)
                return true
              }
              if (res.status === 3) {
                this.$Message.success('删除成功')
                this.init()
                return true
              } else {
                return false
              }
            }).catch(() => {
              return false
            })
          })
      }
    },
    confirmAdd () {
      this.$router.push('/business-addpermission')
    },
    ok () {},
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
