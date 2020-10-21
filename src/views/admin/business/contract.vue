<template>
  <div class="business-detail">
    <business-header title="业务域内合约治理" :btn="true" />
    <div class="bg-white padding">
      <div style="margin-bottom: 10px;color: #273D52;">
        <span>
          <b>合约列表</b>
        </span>
        <!-- <Tooltip
          placement="top"
          max-width="600"
          transfer
        >
          <Icon type="ios-help-circle-outline" />
        </Tooltip> -->
        <Button type="primary"  @click="add"  style="float: right;">添加合约</Button>
      </div>
      <Row>
        <Col span="5">
        <div class="condition-item">
          <span class="condition-label">合约名称：</span>
          <Input type="text" v-model="form.name" placeholder="合约名称"></Input>
        </div>
        </Col>
        <Col span="7">
        <div class="condition-item">
          <span class="condition-label">合约链上唯一标识：</span>
          <Input type="text" v-model="form.address" placeholder="合约链上唯一标识："></Input>
        </div>
        </Col>
        <!-- <Col span="6">
          <div class="condition-item">
            <span class="condition-label">状态：</span>
            <Select value="0">
              <Option value="0">全部</Option>
              <Option value="1">冻结</Option>
              <Option value="2">正常</Option>
              <Option value="2">冻结审核中</Option>
              <Option value="2">解冻审核中</Option>
            </Select>
          </div>
        </Col> -->
        <Col span="6">
        <div class="condition-item">
          <Button style="width: 80px;" @click="search" type="primary">查询</Button>
        </div>
        </Col>
      </Row>
      <div>
        <Table :columns="columns" :loading="listLoading" :data="list"></Table>
      </div>
      <div  v-show="popup">
        <div id="qrcode"></div>
        <div class="over"></div>
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
      <Modal
        v-model="addModal"
        title="合约发布"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="add-modal-body">
          <span>选择编译好的合约文件，申请上链发布！</span>
          <div><span Style="margin-bottom:10px;">合约名称：</span><Input placeholder="请输入合约名称" v-model="conName" /></div>
          <div><span Style="margin-bottom:10px;">备注：</span>  <i-input type="textarea" v-model="remarks" placeholder="请输入..."></i-input></div>
          <div><span Style="margin-bottom:10px;">合约内容</span><i-input type="textarea" v-model="conCent" :rows="4" placeholder="请输入..."></i-input></div>
        </div>
        <div slot ="footer">
          <Button :loading="addLoading" type="primary" class='clearBtn' @click="ok" >申请发布</Button>
          <Button  style="width:80px;" class='clearBtn' @click="cancel" >取消</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import * as api from './api'
import * as cApi from '@/http/api'
export default {
  data () {
    // {
    //   "contract_id": "1",  //合约id（合约唯一标识）
    //   "contract_name": "合约名称", //合约名称
    //   "join_time": 1599704154000, //加入时间
    //   "status": "1", //状态
    //   "main_biz_biz_id": "1" //所属业务域id
    // },
    let that = this
    let columns = [
      {
        title: '合约名称',
        key: 'contract_name'
      },
      {
        title: '合约链上唯一标识',
        key: 'contract_id'
      },
      {
        title: '加入时间',
        key: 'join_time'
      },
      {
        title: '所属业务域id',
        key: 'main_biz_biz_id'
      },
      {
        title: '状态',
        key: 'status',
        render (h, p) {
          let row = p.row || {}
          let label = ''
          let status = row.status
          if (status === '1') {
            label = '冻结'
          }
          if (status === '2') {
            label = '解冻'
          }
          return h('span', label)
        }
      },
      {
        title: '操作',
        render (h, p) {
          let row = p.row || {}
          let label = ''
          let status = row.status
          let params = 1
          if (status === '1') {
            label = '解冻'
            params = 2
          }
          if (status === '2') {
            label = '冻结'
            params = 1
          }
          return h('a', {
            on: {
              click () {
                that.del(row, params)
              }
            }
          }, label)
        }
      }
    ]
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
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
      addModal: false,
      conName: '',
      remarks: '',
      conCent: '',
      addLoading: false,
      form: {
        name: '',
        address: ''
      },
      popup: 0

    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.listLoading = true
      api.pbqbc({
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
    },
    async ok () {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 业务域ID
        'code': this.conCent, // 合约bin码
        'info': {
          'name': this.conName, // 合约名称
          'remark': this.remarks // 合约备注
        }
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainCreateContractApplyContractTxReq',
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
                this.$Message.success('添加成功')
                this.init()
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
    async del (row, status) {
      let jsBody = {
        from: sessionStorage.getItem('fbs_address'),
        'domainId': sessionStorage.getItem('fbs_biz_id'), // 业务域ID
        'contractAddress': row.contract_id, // 合约地址
        'op': status // 1添加；2移除
      }
      let data = await cApi.pbgen({
        'method': 'BizDomainContractEnableApplyContractTxReq',
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
                this.init()
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
    add () {
      this.addModal = true
    },
    search () {},
    cancel () {
      this.conName = ''
      this.remarks = ''
      this.conCent = ''
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
</style>
