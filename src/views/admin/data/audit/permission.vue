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
import * as api from '../api'
import * as cApi from '@/http/api'
export default {
  data () {
    let that = this
    let columns = [
      {
        title: '隶属企业名称',
        key: 'name'
      },
      {
        title: '服务器身份标识',
        key: 'address'
      },
      {
        title: '现有许可存储容量',
        key: 'capacity_license'
      },
      {
        title: '申请新增存储容量',
        key: 'applay_capacity_license'
      },
      {
        title: '申请状态',
        key: 'user_status',
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.user_status) {
          case '1':
            label = '待审批'
            break
          case '2':
            label = '已同意'
            break
          case '3':
            label = '审核拒绝'
            break
          }
          return h('span', label)
        }
      },
      {
        title: '申请人',
        key: 'applicant_name'
      },
      {
        title: '审核通过人',
        render (h, p) {
          let row = p.row
          return h('a', {
            on: {
              click () {
                that.$QueryApprovedDialog.show(row)
              }
            }
          }, '查看')
        }
      },
      {
        title: '操作',
        width: 120,
        render (h, p) {
          let row = p.row
          if (row.status !== '1') {
            return h('span', '--')
          }
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
                that.agree(row)
              }
            }
          }, '同意')
          let refuse = h('a', {
            domProps: {
              href: 'javascript:;'
            },
            on: {
              click () {
                that.refuse(row)
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
    return {
      input1: '10000',
      input2: '10',
      select1: 'MB',
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
      total: 100
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
      api.pbqrc({
        'menu': 'storage',
        reviewType: 'storage_license',
        address: sessionStorage.getItem('fbs_address')
      }).then(res => {
        this.listLoading = false
        this.oldList = res.rows
        this.page.total = this.oldList.length
        this.getList()
      }).catch(err => {
        this.listLoading = false
        this.$Message.error(err.retMsg)
      })
    },
    async agree (row) {
      return this.$Message.error('没有接口')
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeMemberAgreeContractTxReq',
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
                this.$Message.success('修改成功')
                this.addModal = false
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
    async refuse (row) {
      return this.$Message.error('没有接口')
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        reqId: row.review_id
      }
      let data = await cApi.pbgen({
        'method': 'CommitteeDisagreeContractTxReq',
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
                this.$Message.success('修改成功')
                this.addModal = false
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
    // 查看
    adds (obj) {
      this.$Modal.confirm({
        title: '已审核人列表',
        content: 'name：' + obj.name + '<br> address：' + obj.address + ' <br>time：' + obj.time + '',
        oktext: '关闭'
      })
    },
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

</style>
