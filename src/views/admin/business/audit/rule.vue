<template>
  <div class="business-detail">
    <div class="content-title"><span>业务域内文件操作规则设置</span></div>
    <div class="bg-white padding" style="margin-bottom: 30px;color: #373737;">
      <span>信息监管：</span>
      <RadioGroup style="margin: 0 20px;" v-model="switch1">
        <Radio label="1" style="margin-right: 40px;">允许</Radio>
        <Radio label="0">禁止</Radio>
      </RadioGroup>
      <div class="audit-item">
        <div class="audit-item-content">
          <P>变更前：</P>
          <div>允许信息监管：允许</div>
          <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
        </div>
        <div class="audit-item-btns">
          <div class="btn-inner">
            <button class="refuse-btn">拒绝</button>
            <button class="agree-btn">同意</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white padding" style="margin-bottom: 20px;color: #373737;">
      <div style="margin-bottom: 20px;">
        <span>文件权限控制：</span>
        <RadioGroup style="margin: 0 20px;" v-model="switch2">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>允许文件删除：允许</div>
            <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
          </div>
          <div class="audit-item-btns">
            <div class="btn-inner">
              <button class="refuse-btn">拒绝</button>
              <button class="agree-btn">同意</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="padding bg-white mb20">
      <div>
        <span>允许任何人域内保存文件：</span>
        <RadioGroup style="margin: 0 20px;" v-model="switch3">
          <Radio label="1" style="margin-right: 40px;">允许</Radio>
          <Radio label="0">禁止</Radio>
        </RadioGroup>
        <div class="audit-item">
          <div class="audit-item-content">
            <P>变更前：</P>
            <div>允许任何人域内保存文件：允许</div>
            <div>申请人： 张丽<span>审核通过人： <a href="javascript:;">查看</a></span></div>
          </div>
          <div class="audit-item-btns">
            <div class="btn-inner">
              <button class="refuse-btn">拒绝</button>
              <button class="agree-btn">同意</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var that = this
    return {
      switch1: '0',
      switch2: '0',
      switch3: '0',
      total: 90
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    pageChange (val) {

    }
  }
}
</script>

<style>

</style>
