<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
          <button @click="loadResult()">debug</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <pre><code v-bind:key="item.key"
  v-for="item in dics.config">{{ item.key }} = {{ item.value }}<br/></code></pre>
        <hr class="my-4">
        <json-viewer :value="dics.genesis" :expand-depth=5 copyable boxed sort></json-viewer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  message: 'xxxx',
  props: ['message'],
  data() {
    return {
      dics: {
        genesis: '',
        config: [],
      }
    }
  },
  methods: {
    loadResult() {
      this.$http.post('/fbs/man/pbgac.do', {'key': 'local.coinbase.address'}).then(res=> {
          if (res.data.retCode === 1) {
            this.dics.genesis = JSON.parse(res.data.genesis);
            this.dics.config = [];
            for (let i = 0; i < res.data.configKeys.length; i += 1) {
              var configKey = res.data.configKeys[i];
              if(configKey.length<50){
                  var length = configKey.length;
                    for(var k=0;k<50-length;k++){
                        configKey = " "+ configKey;
                    }
                }
              const configValue = res.data.configValues[i];
              this.dics.config.push({ key: configKey, value: configValue });
            }
          }
      })
    }
  },
  created: function() {
      this.loadResult()
  }
};
</script>
