<template>
  <div class="create-field set-base-info">
    <div class="base-info-in">
      <h3>创建新的文件存储域</h3>
      <h4>基本信息</h4>
      <div class="field-name-wrapper">
        <div class="field-name-title">文件存储域名称：</div>
        <div class="clear">
          <div class="fl">
            <Input style="width: 340px; margin-right: 40px;" placeholder="请输入全链唯一的文件存储域名称" long v-model="name" />
          </div>
          <div class="fl check-btn">
            <button>唯一性检测</button>
          </div>
        </div>
      </div>
      <div class="field-id">
        <span>文件存储域ID：</span><span>fjldsjfldjfejfiu23084039ufjejf</span>
      </div>
      <div style="margin-bottom: 20px;">
        <span>文件存储域管理员决议审批规则：</span>
        <Tooltip
          placement="top"
          max-width="600"
          transfer
          content='选项说明:所有需要链管理员审批的事务，通过决议的签批规则。* “任意一个成员签批”：链管理员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3成员同时签批”：只有链管理员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3成员同时签批”：只有链管理员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有成员同时签批”： 只有链管理员列表中的所有成员签批同意，相应的决议方可通过。'>
          <Icon type="ios-information-circle-outline" />
        </Tooltip>
        <div style="padding: 10px 0;">
          <RadioGroup class="approval" v-model="sign">
            <Radio label="1">任意一个联盟委员签批</Radio>
            <Radio label="2">1/3联盟委员同时签批</Radio>
            <Radio label="3">2/3联盟委员同时签批</Radio>
            <Radio label="4">所有联盟委员同时签批</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="field-list-wrapper">
        <div class="field-list-title">文件存储域管理员列表：</div>
      </div>
      <div>
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="next-step">
        <Button size="large" long type="primary" @click="next">下一步</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let columns1 = [
      {
        title: '管理员名称',
        key: 'name'
      },
      {
        title: '管理员身份标识公钥',
        key: 'prikey'
      },
      {
        title: '操作',
        render (h, p) {
          return h('a', '删除')
        }
      }
    ]
    let data1 = [
      { name: '张三', prikey: 'lksjljkfsljdflsjlfjsljflksjdflks…', nodeprikey: 'lksjljkfsljdflsjlfjsljflksjdflks…' }
    ]
    return {
      name: '',
      sign: '1',
      columns1,
      data1
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    next () {
      this.$emit('next', 'step6.2')
    }
  }
}
</script>

<style lang="less">
  .create-field {
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    h4 {
      color: #16CEF1;
      font-size: 16px;
    }
  }
  .set-base-info {
    max-width: 680px;
    .check-btn {
      button {
        height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        border: 1px solid #6094FF;
        color: #6094FF;
        outline: 0;
        cursor: pointer;
      }
    }
    .field-name-wrapper {
      margin: 24px 0;
      .field-name-title {
        line-height: 1.8;
      }
    }
    .field-id {
      padding: 10px 0;
    }
    .field-list-title {
      padding: 10px 0 10px 0;
    }
  }
</style>
