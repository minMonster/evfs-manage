<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div id='queryApprovedDialog'>
    <Modal
      class="queryApprovedDialog-class"
      width="800"
      height="500"
      title="已审核人列表"
      v-model="dialogVisible"
      :loading="loading"
      footer-hide
    >
      <Table :columns="columns" :loading="listLoading" :data="list"></Table>
      <div class="footer">
        <Button type="primary" @click="hide">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>

export default {
  name: 'queryApprovedDialog',
  components: {
  },
  data: function () {
    let that = this
    let columns = [
      {
        title: '委员名称',
        key: 'name'
      },
      {
        title: '管理员身份标示',
        key: 'address'
      },
      {
        title: '通过时间',
        key: 'approved_time',
        render (h, p) {
          let row = p.row
          if (!row.approved_time) {
            return h('span', '--')
          } else {
            return h('span', that.$moment.unix(row.approved_time / 1000).format('YYYY-MM-DD HH:mm:ss'))
          }
        }
      },
      {
        title: '审核结果',
        key: 'status',
        render (h, p) {
          let row = p.row
          let label = '--'
          switch (row.status) {
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
      }
    ]
    return {
      listLoading: false,
      columns,
      list: [
        {
          'name': 1
        },
        {
          'name': 2
        }
      ],
      dialogVisible: false,
      loading: true
    }
  },
  dialogVisible (e) {
    if (e) {
      this.init()
    }
  },
  methods: {
    init () {
      console.log('init')
    }
  },
  created () {
  }
}
</script>

<style lang='less' type='text/less'>
    .queryApprovedDialog {
      width: 500px;
      height: 600px;
    }
    .queryApprovedDialog-class {
      .ivu-modal-content {
        padding-top: 20px;
      }
      .footer {
        display: flex;
        padding-top: 20px;
        justify-content: center;
      }
    }
</style>
