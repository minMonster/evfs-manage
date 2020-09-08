<template>
  <div class="chain-configure">
    <div class="configure-in">
      <h3>创建新的链实例</h3>
      <h4>行为审计</h4>
      <div class="configure-body">
        <div>
          <span>前端数据传输加密：</span>
          <RadioGroup class="encryption" v-model="client">
            <Radio label="1">加密</Radio>
            <Radio label="0">明文</Radio>
          </RadioGroup>
        </div>
        <div class="encryption-note">* 外部系统调用的验证节点和任何一个节点服务器间使用加密传输，从而进一步加强网络传输过程中的数据安全性。</div>
        <div>
          <span>节点间数据传输加密：</span>
          <RadioGroup class="encryption" v-model="node">
            <Radio label="1">加密</Radio>
            <Radio label="0">明文</Radio>
          </RadioGroup>
        </div>
        <div class="encryption-note">* 节点网络中的节点服务器之间使用加密传输，使得节点间的系统内数据交换安全性得到进一步加强。</div>
        <div class="next-step">
          <Button long type="primary" size="large" @click="next">下一步</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      client: '1',
      node: '1'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    next () {
      var client = this.client
      var node = this.node
      // 前端数据传输加密
      var key1 = 'org.brewchain.client.transfer.encryption'
      // 节点间数据传输加密
      var key2 = 'org.brewchain.node.transfer.encryption'
      var keys = [key1, key2]
      var values = [client, node]
      var data = {
        keys, values
      }
      this.$http.post('/fbs/man/pbsgo.do', data).then(res => {
        res = res.data
        if (res.retCode == 1) {
          this.$Message.success('参数设置成功')
          this.$emit('next', 'step4.5')
        } else if (res.msg) {
          this.$Message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .configure-in {
    h3 {
      font-size: 24px;
    }
    h4 {
      color: #16CEF1;
      padding: 18px 0;
    }
    .next-step {
      width: 60%;
      margin: 30px 0;
    }
  }
  .encryption-note {
    background:rgba(23,190,222,0.04);
    border-radius:4px;
    border:1px dashed rgba(23,190,222,1);
    color: #B1B0B0;
    line-height: 2em;
    margin: 10px 0;
    padding: 0 10px;
  }
</style>
