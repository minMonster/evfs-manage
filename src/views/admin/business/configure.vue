<template>
  <div class="business-detail">
    <business-header title="行为审计信息管理" :btn="true" />
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
        <span>文件操作行为：</span>
        <RadioGroup
          style="margin: 0 20px;"
          v-model="switch1">
          <Radio label="1">全部文件操作行为(默认)</Radio>
          <Radio label="0">自定义</Radio>
          <Radio label="2">无</Radio>
        </RadioGroup>
      </div>
      <div class="audit-item" style="margin:0 80px;line-height:30px;">
        <CheckboxGroup class="approval" v-model="detailData">
          <Row>
            <Col span ="6">
            <Checkbox label="0">文件保存</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="1">文件获取权限</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="2">文件删除</Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </div>
    </div>
    <div class="encryption-wrapper bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>结构化数据操作行为：</span>
        <RadioGroup
          style="margin: 0 20px;"
          v-model="switch2">
          <Radio label="1">全部结构化数据操作行为(默认)</Radio>
          <Radio label="0">自定义</Radio>
          <Radio label="2">无</Radio>
        </RadioGroup>
      </div>
      <div class="audit-item" style="margin:0 80px;line-height:30px;">
        <CheckboxGroup class="approval" v-model="detailData1">
          <Row>
            <Col span ="6">
            <Checkbox label="0">数据上链保存</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="1">数据获取权限</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="2">数据废除</Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </div>
    </div>
    <div class="encryption-wrapper bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>业务域管理行为：</span>
        <RadioGroup
          style="margin: 0 20px;"
          v-model="switch3">
          <Radio label="1">全部管理行为(默认)</Radio>
          <Radio label="0">自定义</Radio>
          <Radio label="2">无</Radio>
        </RadioGroup>
      </div>
      <div class="audit-item" style="margin:0 80px;line-height:30px;">
        <CheckboxGroup class="approval" v-model="detailData2">
          <Row>
            <Col span ="6">
            <Checkbox label="0">合约治理</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="1">域管理员</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="2">业务系统准入</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="3">文件监管</Checkbox>
            </Col>
          </Row>
          <Row>
            <Col span ="6">
            <Checkbox label="4">文件拥有者转移仲裁</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="5">业务域决议审批规则</Checkbox>
            </Col>
            <Col span ="6">
            <Checkbox label="6">文件操作规则</Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </div>
    </div>
    <div class="encryption-wrapper bg-white padding" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
        <span>审查信息查询状态：查询中</span>
        <Button @click="addModal = true" type="primary" class="fr">查询结果下载</Button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    var that = this
    return {
      encryption1: '0',
      encryption2: '0',
      startTime: '',
      endTime: '',
      startTimeOption: {},
      endTimeOption: {},
      switch1: '1',
      switch2: '1',
      switch3: '1',
      detailData: ['1', '0'],
      detailData1: ['0', '2'],
      detailData2: ['0', '2', '5']
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.init()
    this.startTime = '2018-08-08 00:00:00'
    this.endTime = '2018-08-11 23:59:59'
    this.onStartTimeChange(this.startTime)
    this.onEndTimeChange(this.endTime)
  },
  methods: {
    init () {

    },
    /**
         * 开始时间发生变化时触发,设置结束时间不可选择的日期
         * 结束时间应大于等于开始时间,且小于等于当前时间
         * @param {string} startTime 格式化后的日期
         * @param {string} type 当前的日期类型
         */
    onStartTimeChange (startTime, type) {
      this.endTimeOption = {
        disabledDate (endTime) {
          return endTime < new Date(startTime) || endTime > Date.now()
        }
      }
    },
    onEndTimeChange (endTime, type) {
      this.startTimeOption = {
        disabledDate (startTime) {
          return startTime > new Date(endTime) || startTime > Date.now()
        }
      }
    }

  }
}
</script>

<style>

</style>
