<template>
  <div class="chain-configure">
    <data-header title="行为审计" :btn="true"/>
    <div class="encryption-wrapper bg-white padding " style="margin-bottom:20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
       <span>行为审计信息查询条件：</span>
         <Button @click="addModal = true" type="primary" class="fr">查询</Button>
      </div>
       <Row>
          <Col span="8"> 开始时间:
          <date-picker type="datetime" v-model="startTime" placeholder="请选择开始时间" :options="startTimeOption" @on-change="onStartTimeChange"></date-picker>
          </Col>
          <Col span="8"> 结束时间:
          <date-picker type="datetime" v-model="endTime" placeholder="请选择结束时间" :options="endTimeOption" @on-change="onEndTimeChange"></date-picker>
          </Col>
       </Row>
   </div>
  <div class="encryption-wrapper bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>链管理行为：</span>
         <RadioGroup 
        style="margin: 0 20px;"
        v-model="switch1">
        <Radio label="1">全部管理员行为(默认)</Radio>
        <Radio label="0">自定义</Radio>
      </RadioGroup>
          </div>
         <div class="audit-item" style="margin:0 80px;line-height:30px;">
          <CheckboxGroup class="approval" v-model="detailData">
            <Row>
              <Col span ="6">
                 <Checkbox label="0">节点准入</Checkbox>
              </Col>
                <Col span ="6">
                 <Checkbox label="1">域管理员</Checkbox>
              </Col>
                <Col span ="6">
                 <Checkbox label="2">运行许可</Checkbox>
              </Col>
                <Col span ="6">
                 <Checkbox label="3">业务域授权</Checkbox>
              </Col>
              </Row>
                  <Row>
              <Col span ="6">
                 <Checkbox label="4">数据存管域决议审批规则</Checkbox>
              </Col>
                <Col span ="6">
                 <Checkbox label="5">域内固存规则</Checkbox>
              </Col>
              </Row>
          </CheckboxGroup>
        </div>
    </div>
    <div class="encryption-wrapper bg-white padding" style="margin-bottom: 20px;">
        <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
          <span>审查信息查询状态：</span>
            <Button @click="addModal = true" type="primary" class="fr">查询结果下载</Button>
        </div>
       
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      encryption1: '0',
      encryption2: '0',
      startTime: '',
      endTime: '',
      startTimeOption: {},
      endTimeOption: {},
      switch1: '1',
      detailData:['1','5']
    }
  },
  mounted() {
    this.init()
    this.startTime = ''
    this.endTime = ''
    this.onStartTimeChange(this.startTime)
    this.onEndTimeChange(this.endTime)
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init() {

    },
     /**
         * 开始时间发生变化时触发,设置结束时间不可选择的日期
         * 结束时间应大于等于开始时间,且小于等于当前时间
         * @param {string} startTime 格式化后的日期
         * @param {string} type 当前的日期类型
         */
    onStartTimeChange(startTime, type) {
      this.endTimeOption = {
          disabledDate(endTime) {
          return endTime < new Date(startTime) || endTime > Date.now()
          }
      }
    },
    onEndTimeChange(endTime, type) {
      this.startTimeOption = {
          disabledDate(startTime) {
              return startTime > new Date(endTime) || startTime > Date.now()
          }
      }
    },
  }
}
</script>

<style lang="less" scoped>
  .encryption-item {
    display: inline-block;
    padding: 10px 0 0 0;
    margin-right: 40px;
  }
</style>