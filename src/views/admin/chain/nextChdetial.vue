<template>
     <div class="alliance">
             <div class="nodeback" @click="back" style="cursor: pointer;margin-bottom:10px;">< 退出</div>
               <div style="margin-bottom: 15px;color: #273D52;font-weight: 600;">
                     <span>数据存管域运行许可证绑定</span>
                   </div>
        <div class="bg-white padding" style="margin-bottom: 20px;">
      <div class="section-title"><span>域内存储总容量</span></div>
      <div>
        <Input v-model="input1" style="display: inline-block; width: 200px;"/>
        <Select v-model="select1" style="display: inline-block; width: 200px;margin: 0 20px;">
          <Option value="MB">MB</Option>
          <Option value="GB">GB</Option>
          <Option value="TB">TB</Option>
          <Option value="PB">PB</Option>
        </Select>
        <div class="data-tips">
          * 从链实例的文件存储总容量中申请本数据存管域可保存文件总容量。即链实例的文件存储总容量中可用容量会因分配给数据存管域而随之变少。
        </div>
         <Button type="primary" @click="application">创建数据存管域</Button>
      </div>
    </div>
     </div>
</template>
<script>
export default {
    data() {
    var that = this
    return {
      input1: '10000',
      input2: '10',
      select1: 'MB',
      loading: false,
    }
  },
  mounted() {
    this.init()
  },
  watch: {

  },
  computed: {

  },
  methods: {
    init() {

    },
    ok() {

    },
    cancel() {

    },
    next(){

    },
    application(){

    },
    back(){
       window.history.go(-1)
    }

  }
}
</script>
<style lang="less" scoped>

</style>