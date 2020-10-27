<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div>
    <Modal
      width="300"
      height="300"
      v-model="dialogVisible"
      :loading="loading"
      footer-hide
      class="qrCodeAuthDialog"
    >
      <h2>身份签名</h2>
      <p>请使用"数字身份管理"APP扫描二维码，进行数字身份签名</p>
      <!--            <p>{{qrCodeUrl}}</p>-->
      <vue-qr-code v-if="qrCodeUrl" class="qrCodeAuthDialog-picture" id="picture" :margin="2"
                   :value="qrCodeUrl"></vue-qr-code>
      <div class="cancel-box" style="margin-top: 30px">
        <Button class="ce" style="width: 120px;height: 40px" @click="dialogVisible = false" type="primary">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import VueQrCode from 'vue-qrcode'

export default {
  name: 'qrCodeAuthDialog',
  components: {
    VueQrCode
  },
  data: function () {
    return {
      qrCodeUrl: '',
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
    },
    asyncOK () {
      setTimeout(() => {
        this.dialogVisible = false
      }, 2000)
    }
  },
  created () {
  }
}
</script>

<style lang='less' type='text/less'>
    .qrCodeAuthDialog {
      .ivu-modal-content {
        padding-top: 40px;
        text-align: center;
        height: 450px;
        h2 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .qrCodeAuthDialog-picture {
          width: 180px;
          height: 180px;
        }
      }
    }
</style>
